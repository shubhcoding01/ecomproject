package com.ecomproject.controller;

import com.ecomproject.config.JwtProvider;
import com.ecomproject.domain.AccountStatus;
import com.ecomproject.exceptions.SellerException;
import com.ecomproject.model.Seller;
import com.ecomproject.model.SellerReport;
import com.ecomproject.model.VerificationCode;
import com.ecomproject.repository.VerificationCodeRepository;
import com.ecomproject.request.LoginRequest;
import com.ecomproject.response.ApiResponse;
import com.ecomproject.response.AuthResponse;
import com.ecomproject.service.AuthService;
import com.ecomproject.service.EmailService;
import com.ecomproject.service.SellerReportService;
import com.ecomproject.service.SellerService;
import com.ecomproject.util.OtpUtil;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/sellers")
public class SellerController {

    private final SellerService sellerService;
    private final VerificationCodeRepository verificationCodeRepository;
    private final AuthService authService;
    private final EmailService emailService;
    private final JwtProvider jwtProvider;
    private final SellerReportService sellerReportService;

//    @PostMapping("/sent/loginotp")
//    public ResponseEntity<ApiResponse> sentOtpHandler(
//            @RequestBody VerificationCode req) throws Exception {
//
//        authService.sentLoginOtp(req.getEmail());
//
//        ApiResponse res=new ApiResponse();
//
//        res.setMessage("Otp Sent successfully");
//
//
//        return ResponseEntity.ok(res);
//    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> loginSeller(
            @RequestBody LoginRequest req
    ) throws Exception {

        String otp = req.getOtp();
        String email = req.getEmail();

//        VerificationCode verificationCode = verificationCodeRepository.findByEmail(email);
//        if (verificationCode == null || !verificationCode.getOtp().equals(req.getOtp())) {
//            throw new Exception("Wrong Otp...!!!");
//        }

        req.setEmail("Seller"+email );
        AuthResponse authResponse = authService.signing(req);

        return ResponseEntity.ok(authResponse);
    }

    @PatchMapping("/verify/{otp}")
    public ResponseEntity<Seller> verifySellerEmail(
            @PathVariable String otp) throws Exception {

        VerificationCode verificationCode = verificationCodeRepository.findByOtp(otp);

        if (verificationCode == null || !verificationCode.getOtp().equals(otp)) {
            throw new Exception("Wrong otp...!!!");
        }

        Seller seller = sellerService.verifySeller(verificationCode.getEmail(),otp);
        return new ResponseEntity<>(seller, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Seller> createSeller(
           @RequestBody Seller seller) throws Exception, MessagingException {
        Seller savedSeller = sellerService.createSeller(seller);

        String otp = OtpUtil.generateOtp();

        VerificationCode verificationCode = new VerificationCode();
        verificationCode.setEmail(seller.getEmail());
        verificationCode.setOtp(otp);
        verificationCodeRepository.save(verificationCode);

        String subject = "Ecommerce Seller Email Verification Code.";
        String text = "Welcome to Ecommerce Seller, Verify Your Account Using This Link ";
        String frontend_url = "http://localhost:5454/verify-seller/";
        emailService.sendVerificationOtpEmail(seller.getEmail(), verificationCode.getOtp(), subject, text + frontend_url);
        return new ResponseEntity<>(savedSeller, HttpStatus.CREATED);

    }

    @GetMapping("{id}")
    public ResponseEntity<Seller> getSellerById(
            @PathVariable Long id) throws SellerException {
        Seller seller = sellerService.getSellerById(id);
        return new ResponseEntity<>(seller, HttpStatus.OK);
    }

    @GetMapping("/profile")
    public ResponseEntity<Seller> getSellerByJwt(
            @RequestHeader("Authorization") String jwt) throws Exception {
        Seller seller = sellerService.getSellerProfile(jwt);
        return new ResponseEntity<>(seller, HttpStatus.OK);
    }

//    @GetMapping("/profile")
//    public ResponseEntity<Seller> getSellerByJwt(
//            @RequestHeader(value = "Authorization", required = false) String jwt) throws Exception {
//
//        if (jwt == null || !jwt.startsWith("Bearer ")) {
//            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
//        }
//
//        String token = jwt.substring(7); // remove "Bearer "
//
//        Seller seller = sellerService.getSellerProfile(token);
//
//        if (seller == null) {
//            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
//        }
//
//        return new ResponseEntity<>(seller, HttpStatus.OK);
//    }


    @GetMapping("/report")
    public ResponseEntity<SellerReport> getSellerReport(
            @RequestHeader("Authorization") String jwt) throws Exception {
//        String email = jwtProvider.getEmailFromToken(jwt);
        Seller seller = sellerService.getSellerProfile(jwt);
        SellerReport sellerReport = sellerReportService.getSellerReport(seller);
        return new ResponseEntity<>(sellerReport, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Seller>> getAllSeller(
            @RequestParam(required = false)AccountStatus status) {
        List<Seller> sellers = sellerService.getAllSellers(status);
        return ResponseEntity.ok(sellers);
    }

    @PatchMapping()
    public ResponseEntity<Seller> updateSeller(
            @RequestHeader("Authorization") String jwt,
            @RequestBody Seller seller) throws Exception {

        Seller profile = sellerService.getSellerProfile(jwt);
        Seller updatedSeller = sellerService.updateSeller(profile.getId(), seller);
        return ResponseEntity.ok(updatedSeller);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSeller(
            @PathVariable Long id) throws Exception {
        sellerService.deleteSeller(id);
        return ResponseEntity.noContent().build();
    }
}
