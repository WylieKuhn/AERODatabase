import React, { useState } from 'react';
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
import { FormControl, Grid, FormLabel } from '@mui/material';
import FormControlContext from '@mui/material/FormControl/FormControlContext';






export function AddSchool() {
  const [textInput, setTextInput] = useState("")
  
  const handleTextInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
    console.log(textInput);
  }
  

  const [demVal, setDem] = React.useState(true);
  const handleDem = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDem(!event.target.checked);
    console.log(demVal)
  };

  const [sudVal, setSud] = React.useState(true);
  const handleSud = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSud(!event.target.checked);
    console.log(sudVal)
  };

  const [homeVal, setHome] = React.useState(true);
  const handleHome = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHome(!event.target.checked);
    console.log(homeVal)
  };

  const [montVal, setmont] = React.useState(true);
  const handlemont = (event: React.ChangeEvent<HTMLInputElement>) => {
    setmont(!event.target.checked);
    console.log(montVal)
  };

  const [memberVal, setMember] = React.useState(true);
  const handleMember = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMember(!event.target.checked);
    console.log(memberVal)
  };

  const [onlineVal, setOnline] = React.useState(true);
  const handleOnline = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOnline(!event.target.checked);
    console.log(onlineVal)
  };

  const [inPersonVal, setInPerson] = React.useState(true);
  const handleInPerson = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInPerson(!event.target.checked);
    console.log(inPersonVal)
  };

  const [SasVal, setSAS] = React.useState(true);
  const handleSAS = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSAS(!event.target.checked);
    console.log(SasVal)
  };




  


  return (
      <div>
          <Grid container spacing={2}sx={{width: "100%"}} alignItems={"center"} justifyContent={"center"}>
            <Grid item xs={7}>
                <Grid container spacing={2} rowGap={1}>

                  <Grid item xs={12}>
                  <TextField id="orgName" value={textInput} name="orgName" label="Name Of School/Org" variant="standard" onChange={handleTextInputChange} fullWidth/>
                  </Grid>

                  <Grid item xs={12}>
                  <TextField id="address" name='address' label="Street Address" variant="standard" fullWidth/><br></br>
                  </Grid>

                  <Grid item md={4} xs={12}>
                  <TextField id="city" name='city' label="City" variant="standard" fullWidth/> 
                  </Grid>

                  <Grid item md={4} xs={12}>
                  <TextField id="state" name='state' label="State" variant="standard" fullWidth/>
                  </Grid>

                  <Grid item md={4} xs={12}>
                    <TextField id="postalCode" name='postalCode' label="ZIP/Postal Code" variant='standard' fullWidth/>
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField id="phone" name='phone' label="Phone Number" variant="standard" type='number' fullWidth/>  
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField id="email" name='email' label="Email" variant="standard" fullWidth/>
                  </Grid>

                  <Grid item md={12}>
                    <h4>
                      School/Organization Categories
                    </h4>
                  </Grid>

                  <Grid item md={3} xs={12}>
                    <FormControlLabel id="democratic" control={<Checkbox value={true} onChange={handleDem}/>} label="Democratic" />
                  </Grid>

                  <Grid item md={3} xs={12}>
                    <FormControlLabel id='sudbury' control={<Checkbox value={true} onChange={handleSud}/>} label="Sudbury"/>
                  </Grid>

                  <Grid item md={3} xs={12}>
                    <FormControlLabel id='homeSchoolCO' control={<Checkbox value={true} onChange={handleHome} />} label="Homeschool Co-Op"/>
                  </Grid>

                  <Grid item md={3} xs={12}>
                    <FormControlLabel id='montessori' control={<Checkbox onChange={handlemont} value={true}/>} label="Montessori"/>
                  </Grid>

                  <Grid item md={3} xs={12}>
                    <FormControlLabel is='memberOrg' control={<Checkbox onChange={handleMember} value={true} />} label="AERO Member"/>
                  </Grid>

                  <Grid item md={3} xs={12}>
                    <FormControlLabel id='online' control={<Checkbox onChange={handleOnline} value={true} />} label="Online"/>
                  </Grid>

                  <Grid item md={3} xs={12}>
                    <FormControlLabel id='inPerson' control={<Checkbox onChange={handleInPerson} value={true} />} label="In Person"/>
                  </Grid>

                  <Grid item md={3} xs={12}>
                    <FormControlLabel id='sas' control={<Checkbox onChange={handleSAS} value={true}/>} label="Founded By A School Starter"/>
                  </Grid>

                  <Grid item xs={12}>
                    <h4>
                      Tuition Information
                    </h4>
                  </Grid>

                  <Grid item md={6} xs={12}> 
                    <TextField id="tuitionMin" label="Minimum Tuition" variant="standard" type='number' fullWidth/>
                  </Grid>

                  <Grid item md={6} xs={12}> 
                    <TextField id="tuitionMax" label="Maximum Tuition" variant="standard" type='number' fullWidth/>
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
                    <FormControlLabel id='consent' required control={<Checkbox name='consent' value='true' />} label="Confirm" />
                  </Grid>

                  <Grid item xs={12}>
                    <Button variant="contained">Add School</Button>
                  </Grid>
                  
                </Grid>
            </Grid>
          </Grid>
        
          
          
          
          
                
      <br></br>
      </div>
        
  
     
  );
}

export default AddSchool;
