import React from 'react';
import '../App.css';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid, Link, Typography, Button } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete/Autocomplete';
import AccountDrawer from "../components/AccountDrawer";

type Organization = {
    _id: string
    name:string
    address:string
    city:string
    state:string
    postCode:string
    phone:string
    email:string
    country:string
    categories:Array<string>
    tMin:Number
    tMax:Number
    consent:boolean
}

function Account() {

    const [results, setResults] = React.useState<Array<Organization>>([]);

    function searchData() {
        fetch("http://127.0.0.1:8000/api/v1/search", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: "",
        }).then(response => response.json()).then(data => setResults(data));
    }


    return (
        <div className="member">
            <AccountDrawer />


            <Grid container spacing={2} sx={{ width: "100%" }} alignItems={"center"} justifyContent={"center"}>

                <Grid item xs={7}>
                    <Grid container spacing={2}>







                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Account;
