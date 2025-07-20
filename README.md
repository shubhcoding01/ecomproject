# 🛒 Ecommerce Management System – A Full-Stack Multi-Vendor E-Commerce Platform

A full-featured multi-vendor ecommerce platform built with **💻 Spring Boot (Java)** and **⚛️ React (TypeScript)**. This platform supports multiple roles – **buyers**, **sellers**, and **admins**, and includes secure **🔐 JWT-based authentication**, dynamic product listing, order tracking, and more.

---

## 🚀 Tech Stack

### 🖥️ Frontend
- ⚛️ React.js (TypeScript)
- 🧠 Redux Toolkit
- 🎨 Tailwind CSS + Material UI
- 🔁 React Router
- 📦 Axios
- ✍️ Formik + Yup

### 🛠 Backend
- ☕ Spring Boot (Java)
- 🔐 Spring Security + JWT
- 📚 Spring Data JPA
- 🐬 MySQL
- ⚙️ Maven

---

## 📚 Features Overview

### 👤 Buyer
- 🔐 Register/Login
- 🛍️ Browse & search products by category
- 🖼️ Product detail view with image slideshow
- 🛒 Add to cart, checkout, and track orders
- 🧾 Manage profile, addresses & saved cards

### 🛍️ Seller
- 🔑 OTP-based registration (multi-step form)
- 🛠️ Add/manage products (image, stock, category)
- 📦 View & update incoming orders
- 📊 Seller dashboard with product stats

### 🛡️ Admin
- 🔐 Secure admin login
- 👥 Manage users & sellers
- 🚫 Block or verify sellers
- 🗂️ Category management
- 📈 Monitor activity and reports

---

## 📦 Installation & Setup

### ✅ Prerequisites
- ✅ Node.js & npm
- ✅ Java 17+
- ✅ MySQL
- ✅ Maven

---

## 🔧 Backend Setup (`Spring Boot`)

### 1. 🔽 Clone the Repository
```bash
git clone https://github.com/shubhcoding01/ecommerce-management-system.git
cd ecommerce-management-system

CREATE DATABASE ecomprojectdb;

In backend/src/main/resources/application.properties:

server.port=5454
spring.application.name=ecommerce-seller

spring.datasource.url=jdbc:mysql://localhost:3306/ecomprojectdb
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

spring.mail.username=your_email@gmail.com
spring.mail.password=your_email_app_password

cd backend
./mvnw spring-boot:run

###🌐 Frontend Setup (React + TypeScript)

npm install

npm start
