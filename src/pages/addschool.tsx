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





function AddSchool() {
  return (
    <div className="App">
      <br/>
        <h2>Add A School or Organization</h2>
        <Grid container spacing={2}sx={{width: "100%"}} alignItems={"center"} justifyContent={"center"}>

          <Grid item xs={7}>
            <Grid container spacing={2} rowGap={1}>
              <Grid item xs={12}>
              <TextField id="standard-basic" label="Name Of School/Org" variant="standard" fullWidth/>
              </Grid>

              <Grid item xs={12}>
              <TextField id="standard-basic" label="Street Address" variant="standard" fullWidth/><br></br>
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

              <Grid md={4} xs={12}>
                <Picker />
              </Grid>

              <Grid item md={12}>
                <h4>
                  School/Organization Categories
                </h4>
              </Grid>

              <Grid item md={3} xs={12}>
                <FormControlLabel control={<Checkbox />} label="Democratic"/>
              </Grid>

              <Grid item md={3} xs={12}>
                <FormControlLabel control={<Checkbox />} label="Sudbury"/>
              </Grid>

              <Grid item md={3} xs={12}>
                <FormControlLabel control={<Checkbox />} label="Homeschool Co-Op"/>
              </Grid>

              <Grid item md={3} xs={12}>
                <FormControlLabel control={<Checkbox />} label="Montessori"/>
              </Grid>

              <Grid item md={3} xs={12}>
                <FormControlLabel control={<Checkbox />} label="AERO Member"/>
              </Grid>

              <Grid item md={3} xs={12}>
                <FormControlLabel control={<Checkbox />} label="Online"/>
              </Grid>

              <Grid item md={3} xs={12}>
                <FormControlLabel control={<Checkbox />} label="In Person"/>
              </Grid>

              <Grid item md={3} xs={12}>
                <FormControlLabel control={<Checkbox />} label="Founded By A School Starter"/>
              </Grid>

              <Grid item xs={12}>
                <h4>
                  Tuition Information
                </h4>
              </Grid>

              <Grid item md={6} xs={12}> 
                <TextField id="standard-basic" label="Minimum Tuition" variant="standard" type='number' fullWidth/>
              </Grid>

              <Grid item md={6} xs={12}> 
                <TextField id="standard-basic" label="Maximum Tuition" variant="standard" type='number' fullWidth/>
              </Grid>

              <Grid xs={12}>
                <p>
                  I have permission from the owner of this school or organization, or am the owner of, or have permission
                  as part of a condition of employment or contract, to add this school to AERO's resource database,
                  and manage it's listing. I understand that adding a school or organization to AERO's database without 
                  their permission will result in my account being terminated and my permission to use this platform 
                  will be revoked permanently.
                </p>
              </Grid>

              <Grid item md={2}>
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

export default AddSchool;
