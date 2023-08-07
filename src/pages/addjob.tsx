import React, { useState } from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid } from '@mui/material';

import {
    MuiTelInput,
    MuiTelInputCountry,
    MuiTelInputInfo,
    MuiTelInputContinent
} from 'mui-tel-input'
import { METHODS } from 'http';





export function AddJob() {

    const [orgName, setOrgName] = useState("")
    const handleTextInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOrgName(event.target.value);
        console.log(orgName);
    }

    const [jobDescription, setJobDescription] = useState("")
    const handleJobDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setJobDescription(event.target.value);
        console.log(jobDescription);
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

                        <Grid item xs={12}>
                            <TextField multiline size={"medium"} id="orgName" value={jobDescription} name="description" label="Job Description" variant="outlined" onChange={handleJobDescriptionChange} fullWidth />
                        </Grid>



                        <Grid item xs={12}>
                            <h4>
                                Pay Range
                            </h4>
                        </Grid>

                        <Grid item md={6} xs={12}>
                            <TextField id="tuitionMin" label="Minimum Pay" variant="standard" type='number' onChange={handleTminChange} fullWidth />
                        </Grid>

                        <Grid item md={6} xs={12}>
                            <TextField id="tuitionMax" label="Maximum Pay" variant="standard" type='number' onChange={handleTmaxChange} fullWidth />
                        </Grid>

                        <Grid xs={12}>
                            <p>
                                I have permission from the owner of this school or organization, or am the owner of, or have permission
                                as part of a condition of employment or contract, to add this job listing to AERO's resource database,
                                and manage it. I understand that adding a job listing to AERO's database without
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

export default AddJob;
