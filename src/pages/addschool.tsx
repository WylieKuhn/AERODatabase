import React, { useState, useEffect } from 'react';
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
import { text } from 'node:stream/consumers';
import { wait } from '@testing-library/user-event/dist/utils';
import {
  MuiTelInput,
  MuiTelInputCountry,
  MuiTelInputInfo,
  MuiTelInputContinent
} from 'mui-tel-input'
import { METHODS } from 'http';





export function AddSchool() {

  const [orgName, setOrgName] = useState("")
  const handleTextInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrgName(event.target.value);
    console.log(orgName);
  }

  const [address, setAddress] = useState("")
  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
    console.log(address);
  }

  const [city, setCity] = useState("")
  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
    console.log(city);
  }

  const [stateprovince, setState] = useState("")
  const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
    console.log(stateprovince);
  }

  const [postalCode, setPostalCode] = useState("")
  const handlePostalCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostalCode(event.target.value);
    console.log(postalCode);
  }

  const [phoneNumber, setPhoneNumber] = React.useState<string>('')
  const handlePhoneNumberChange = (newValue: string, info: MuiTelInputInfo) => {
    setPhoneNumber(newValue)
  }

  const [email, setEmail] = useState("")
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    console.log(email);
  }

  const [tMin, setTmin] = useState("0")
  const handleTminChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTmin(event.target.value);
    console.log(tMin);
  }

  const [tMax, setTmax] = useState("0")
  const handleTmaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTmax(event.target.value);
    console.log(tMax);
  }



  //handle checkbox selection values
  const [demVal, setDem] = React.useState(false);
  const handleDem = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDem(event.target.checked);
  };



  const [sudVal, setSud] = React.useState(false);
  const handleSud = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSud(event.target.checked);
    console.log(sudVal)
  };

  const [homeVal, setHome] = React.useState(false);
  const handleHome = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHome(event.target.checked);
    console.log(homeVal)
  };

  const [montVal, setmont] = React.useState(false);
  const handlemont = (event: React.ChangeEvent<HTMLInputElement>) => {
    setmont(event.target.checked);
    console.log(montVal)
  };

  const [memberVal, setMember] = React.useState(false);
  const handleMember = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMember(event.target.checked);
    console.log(memberVal)
  };

  const [onlineVal, setOnline] = React.useState(false);
  const handleOnline = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOnline(event.target.checked);
    console.log(onlineVal)
  };

  const [inPersonVal, setInPerson] = React.useState(false);
  const handleInPerson = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInPerson(event.target.checked);
    console.log(inPersonVal)
  };

  const [SasVal, setSAS] = React.useState(false);
  const handleSAS = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSAS(event.target.checked);
    console.log(SasVal)
  };

  const [consent, setConsent] = React.useState(false);
  const handleConsent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConsent(event.target.checked);
    console.log(consent)
  };

  //API Connection

  var sendoptions = JSON.stringify({
    name: orgName,
    address: address,
    city: city,
    state: stateprovince,
    postCode: postalCode,
    phone: phoneNumber,
    email: email,
    democratic: demVal,
    sudbury: sudVal,
    hsCoOp: homeVal,
    AEROMember: memberVal,
    online: onlineVal,
    inPerson: inPersonVal,
    sas: SasVal,
    tMin: tMin,
    tMax: tMax,
    consent: consent
  })

  function postData() {
    fetch("http://127.0.0.1:8000/api/v1/addschool", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: sendoptions
    })
  }

  function testData() {
    fetch("http://127.0.0.1:8000/", {method: "GET", mode: "cors"}).then(res => res.json()).then(data => console.log(data))
  
  }

  return (
    <div>
      <Grid container spacing={2} sx={{ width: "100%" }} alignItems={"center"} justifyContent={"center"}>
        <Grid item xs={7}>
          <Grid container spacing={2} rowGap={1}>

            <Grid item xs={12}>
              <TextField id="orgName" value={orgName} name="orgName" label="Name Of School/Org" variant="standard" onChange={handleTextInputChange} fullWidth />
            </Grid>

            <Grid item xs={12}>
              <TextField id="address" name='address' label="Street Address" variant="standard" onChange={handleAddressChange} fullWidth /><br></br>
            </Grid>

            <Grid item md={4} xs={12}>
              <TextField id="city" name='city' label="City" variant="standard" onChange={handleCityChange} fullWidth />
            </Grid>

            <Grid item md={4} xs={12}>
              <TextField id="state" name='state' label="State/Province" variant="standard" onChange={handleStateChange} fullWidth />
            </Grid>

            <Grid item md={4} xs={12}>
              <TextField id="postalCode" name='postalCode' label="ZIP/Postal Code" onChange={handlePostalCodeChange} variant='standard' fullWidth />
            </Grid>

            <Grid item md={6} xs={12}>
              <MuiTelInput value={phoneNumber} onChange={handlePhoneNumberChange} fullWidth variant='standard' label='Phone Number' forceCallingCode={true} />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField id="email" name='email' label="Email" variant="standard" onChange={handleEmailChange} fullWidth />
            </Grid>

            <Grid item md={12}>
              <h4>
                School/Organization Categories
              </h4>
            </Grid>

            <Grid item md={3} xs={12}>
              <FormControlLabel id="democratic" control={<Checkbox value={demVal} onChange={handleDem} />} label="Democratic" />
            </Grid>

            <Grid item md={3} xs={12}>
              <FormControlLabel id='sudbury' control={<Checkbox value={sudVal} onChange={handleSud} />} label="Sudbury" />
            </Grid>

            <Grid item md={3} xs={12}>
              <FormControlLabel id='homeSchoolCO' control={<Checkbox value={true} onChange={handleHome} />} label="Homeschool Co-Op" />
            </Grid>

            <Grid item md={3} xs={12}>
              <FormControlLabel id='montessori' control={<Checkbox onChange={handlemont} value={true} />} label="Montessori" />
            </Grid>

            <Grid item md={3} xs={12}>
              <FormControlLabel is='memberOrg' control={<Checkbox onChange={handleMember} value={true} />} label="AERO Member" />
            </Grid>

            <Grid item md={3} xs={12}>
              <FormControlLabel id='online' control={<Checkbox onChange={handleOnline} value={true} />} label="Online" />
            </Grid>

            <Grid item md={3} xs={12}>
              <FormControlLabel id='inPerson' control={<Checkbox onChange={handleInPerson} value={true} />} label="In Person" />
            </Grid>

            <Grid item md={3} xs={12}>
              <FormControlLabel id='sas' control={<Checkbox onChange={handleSAS} value={true} />} label="Founded By A School Starter" />
            </Grid>

            <Grid item xs={12}>
              <h4>
                Tuition Information
              </h4>
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField id="tuitionMin" label="Minimum Tuition" variant="standard" type='number' onChange={handleTminChange} fullWidth />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField id="tuitionMax" label="Maximum Tuition" variant="standard" type='number' onChange={handleTmaxChange} fullWidth />
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
              <FormControlLabel id='consent' required control={<Checkbox name='consent' value={consent} onChange={handleConsent} />} label="Confirm" />
            </Grid>



            <Grid item xs={12}>
              <Button variant="contained" onClick={postData}>Add School</Button>
            </Grid>

          </Grid>
        </Grid>
      </Grid>






      <br></br>
    </div>



  );
}

export default AddSchool;
