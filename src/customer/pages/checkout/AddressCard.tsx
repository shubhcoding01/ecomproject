import React from 'react';
import { Box, Button, Radio, Stack, Typography, Paper } from '@mui/material';

const AddressCard = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 2, display: 'flex', alignItems: 'flex-start', gap: 2 }}>
      <Radio
        checked={true}
        onChange={handleChange}
        value="address1"
        name="address-selection"
        sx={{ mt: 1 }}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Stack spacing={0.5}>
          <Typography variant="h6" fontWeight={600}>Shubh</Typography>
          <Typography variant="body2" color="text.secondary">
            123, Street Name, City, State, 123456
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Mobile: +91 9876543210
          </Typography>
        </Stack>
        <Box sx={{ mt: 1 }}>
          <Button variant="outlined" size="small">Edit</Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default AddressCard;
