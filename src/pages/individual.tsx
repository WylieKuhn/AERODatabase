import React from 'react';
import logo from './images/logo.jpg';
import '../App.css';
import ResponsiveAppBar from '../components/Bar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Picker from '../components/Picker';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid } from '@mui/material';


function Individual() {
  return (
    <div className="App">
      <br/>
        <h2>Become An AERO Member</h2>
        <Grid container spacing={2}sx={{width: "100%"}} alignItems={"center"} justifyContent={"center"}>

          <Grid item xs={7}>
            <Grid container spacing={2} rowGap={1}>

              <Grid item md={6} xs={12}>
              <TextField id="standard-basic" label="First Name" variant="standard" fullWidth/><br></br>
              </Grid>

              <Grid item md={6} xs={12}>
              <TextField id="standard-basic" label="Last Name" variant="standard" fullWidth/><br></br>
              </Grid>

              <Grid item md={4} xs={12}>
              <TextField id="standard-basic" label="City" variant="standard" fullWidth/> 
              </Grid>

              <Grid item md={4} xs={12}>
              <TextField id="standard-basic" label="State" variant="standard" fullWidth/>
              </Grid>

              <Grid item md={4} xs={12}>
                <TextField id="ZIP" label="ZIP/Postal Code" variant='standard' fullWidth/>
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField id="standard-basic" label="Phone Number" variant="standard" type='number' fullWidth/>  
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField id="standard-basic" label="Email" variant="standard" fullWidth/>
              </Grid>

              <Grid item md={12} xs={12}>
                <h4>
                  I Am A:
                </h4>
              </Grid>

              <Grid item md={3} xs={6}>
                <FormControlLabel control={<Checkbox />} label="Parent"/>
              </Grid>

              <Grid item md={3} xs={6}>
                <FormControlLabel control={<Checkbox />} label="Principal/Dean"/>
              </Grid>

              <Grid item md={3} xs={6}>
                <FormControlLabel control={<Checkbox />} label="Teacher"/>
              </Grid>

              <Grid item md={3} xs={6}>
                <FormControlLabel control={<Checkbox />} label="Student"/>
              </Grid>

              <Grid item md={3} xs={6}>
                <FormControlLabel control={<Checkbox />} label="Researcher"/>
              </Grid>

              <Grid item md={3} xs={6}>
                <FormControlLabel control={<Checkbox />} label="Philanthropist"/>
              </Grid>

              <Grid item md={3} xs={6}>
                <FormControlLabel control={<Checkbox />} label="Journalist"/>
              </Grid>

              <Grid item md={3} xs={6}>
                <FormControlLabel control={<Checkbox />} label="Other"/>
              </Grid>

              <Grid xs={12}>
                <p>
                  I understand that by joining the AERO resource database as a member that my information 
                  will be used internally for various purposes such as adding my email address to the AERO 
                  newsletter mailing list to recieve newsletters and updates, sending me information about
                  AERO events, using my location anonymously for tracking and research purposes about the 
                  demographics, size, and statistical breakdown of our network. Personally identifiable information
                  such as your full address, any part of your name, phone number, or email will never be 
                  provided to any third parties. However, general location information such as ZIP/Postal 
                  code, city, state, and the demographic of category (Parent, Teacher, Principal etc) may 
                  be provided to researchers who are cunducting studies in the educational field.
                </p>
              </Grid>

              <Grid item md={2} xs={12}>
                <FormControlLabel required control={<Checkbox />} label="Confirm" />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained">Add School</Button>
              </Grid>


            </Grid>
          </Grid>
        </Grid>
        
        
        
              
    </div>
  );
}

export default Individual;
