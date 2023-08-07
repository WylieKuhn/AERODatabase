import React from 'react';
import '../App.css';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid, Link, Typography, Button } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete/Autocomplete';
import AccountDrawer from "../components/AccountDrawer";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import EduModels from './edumodels';
import EduModelsCard from '../components/EduModCard';
import SchoolCard from '../components/SchoolCard';
import JoinCard from '../components/joincard';
import { useEffect, useState } from 'react';


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

    const [sastotal, setSAS] = useState(null);
    const [orgtotal, setOrg] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/totalsas')
            .then(response => response.json())
            .then(json => setSAS(json))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/totalorgs')
            .then(response => response.json())
            .then(json => setOrg(json))
            .catch(error => console.error(error));
    }, []);


    function SASCard() {
        return (
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography variant='h1' align='center'>
                                {Number(sastotal)}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Schools Started By People Who Took AERO's School Starters Course
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
        );
    }

    function TotalCard() {
        return (
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography variant='h1' align='center'>
                                {Number(orgtotal)}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Total Schools and Organizations In Database
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
        );
    }


    return (
        <div className="member">
            <AccountDrawer />


            <Grid container spacing={2} sx={{ width: "100%" }} alignItems={"center"} justifyContent={"center"}>

                <Grid item xs={7}>
                    <Grid container spacing={2}>

                        <Grid item md={4} xs={12}>
                            <SASCard />
                        </Grid>

                        <Grid item md={4} xs={12}>
                            <TotalCard />
                        </Grid>







                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Account;
