import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Box, Typography, Container, Select, MenuItem, 
         InputLabel, FormControl, Alert, Snackbar
} from '@mui/material';

import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import { checkConstraints } from '../methods/index';
import { initialFormValues } from '../constants/index';

export default function Form() {
   const [isSnackbar, setSnackbar] = useState(false);
   const [formData, setFormData] = useState(initialFormValues);

   const handleClose = () => {
      setSnackbar(false);
   }

   const handleSubmit = async (event) => {
      event.preventDefault();

      try {
         await checkConstraints(formData);
      }
      catch(err) {
         let error = await JSON.parse(err.message);
         setFormData(prevFormData => {
            return {
               ...prevFormData, 
               ...error
            }});
         return;
      }
      
      const response = await fetch('/api/contacts', {
         method: 'POST',
         body: JSON.stringify({
            email: formData['email'],
            name: formData['name'],
            age: +formData['age'],
            batchTiming: formData['batchTiming']
         })
      });

      if(!response.ok) throw new Error(response.statusText);
      
      setFormData(initialFormValues);
      setSnackbar(true);

      return await response.json();
   };

   function handleChange(event) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
   };

   return (
      <Container component="main" maxWidth="xs">
         <CssBaseline />
         <Box
            sx={{
               marginTop: 8,
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
            }}
         >            
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
               <SelfImprovementIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
               Yoga Class Enroll
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
               <TextField
                  error={formData['isEmailContainsError']}
                  helperText={formData['emailErrorText']}
                  color="secondary"
                  margin="normal"
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  type='email'
                  autoFocus
                  value={formData['email']} 
                  onChange={handleChange}
               />
               <TextField
                  color="secondary"
                  required
                  fullWidth
                  name="name"
                  label="Name"
                  type="text"
                  value={formData['name']}
                  onChange={handleChange}
               />
               <TextField
                  error={formData['isAgeContainsError']}
                  helperText={formData['ageErrorText']}
                  color="secondary"
                  margin="normal"
                  required
                  fullWidth
                  name="age"
                  label="Age"
                  type="number"
                  value={formData['age']}
                  onChange={handleChange}
               />
               <FormControl fullWidth>
               <InputLabel id="batch-timing">Batch Timing</InputLabel>
                  <Select
                     labelId="batch-timing"
                     label="BatchTiming"
                     name="batchTiming"
                     value={formData['batchTiming']}
                     onChange={handleChange}
                     fullWidth
                  >
                     <MenuItem value={1}>6-7 am</MenuItem>
                     <MenuItem value={2}>7-8 am</MenuItem>
                     <MenuItem value={3}>8-9 am</MenuItem>
                     <MenuItem value={4}>5-6 pm</MenuItem>
                  </Select>
               </FormControl>
               <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  color='secondary'
               >
                  Submit
               </Button>
            </Box>
         </Box>
         <Snackbar open={isSnackbar} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
               Payment has been completed, now you are enrolled to Yoga classes.
            </Alert>
         </Snackbar>
      </Container>
   );
}