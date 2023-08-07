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
    active_member:boolean
    approved:boolean
    membership_expiration:Number
}

function Account() {

    const [sastotal, setSAS] = useState(null);
    const [orgtotal, setOrg] = useState(null);
    const [membertotal, setMember] = useState(null);
    const [approvetotal, setApprove] = useState([]);
    const [thirtyTotal, setThirty] = useState([]);
    const [nintyTotal, setNinty] = useState([]);
    const [oneEightyTotal, setOneEighty] = useState([]);

    const [results, setResults] = React.useState<Array<Organization>>([]);

    var ndays = JSON.stringify({
        daysOut: 90
    })

    var thirtydays = JSON.stringify({
        daysOut: 30
    })

    var oneeightydays = JSON.stringify({
        daysOut: 180
    })


  


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

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/totalmembers')
            .then(response => response.json())
            .then(json => setMember(json))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/approvals')
            .then(response => response.json())
            .then(json => setApprove(json))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/expiration', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: thirtydays,
          })
            .then(response => response.json())
            .then(json => setThirty(json))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/expiration', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: ndays,
          })
            .then(response => response.json())
            .then(json => setNinty(json))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/expiration', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: oneeightydays,
          })
            .then(response => response.json())
            .then(json => setOneEighty(json))
            .catch(error => console.error(error));
    }, []);

    const [approveVal, setApprovalVal] = React.useState(false);
    const handleApproval = (event: React.ChangeEvent<HTMLInputElement>) => {
      setApprovalVal(event.target.checked);
      console.log(approveVal)
    };

    const [denyVal, setDenyVal] = React.useState(false);
    const handleDeny = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDenyVal(event.target.checked);
      console.log(denyVal)
    };

    


    function SASCard() {
        return (
                <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography variant='h1' align='center' color={"red"}>
                                {Number(sastotal)}
                            </Typography>
                            <Typography variant="body2" color="black" fontSize={20} align='center'>
                            Schools AERO Has Helped Start
                            </Typography>
                        </CardContent>
                </Card>
        );
    }

    function TotalCard() {
        return (
                <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography variant='h1' align='center' color={"blue"}>
                                {Number(orgtotal)}
                            </Typography>
                            <Typography variant="body2" color="black" fontSize={20} align='center'>
                            Total Schools and Organizationse
                            </Typography>
                        </CardContent>
                </Card>
        );
    }

    function MemberCard() {
        return (
                <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography variant='h1' align='center' color={"Orange"}>
                                {Number(membertotal)}
                            </Typography>
                            <Typography variant="body2" color="black" fontSize={20} align='center'>
                            Total Active Members
                            </Typography>
                        </CardContent>
                </Card>
        );
    }

    function MoneyCard() {
        return (
                <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography variant='h1' align='center' color={"#12a317"}>
                                ${Number(sastotal)*5}
                            </Typography>
                            <Typography variant="body2" color="black" fontSize={20} align='center'>
                            Monthly Income from Membership
                            </Typography>
                        </CardContent>
                </Card>
        );
    }

    function ThirtyCard() {
        return (
                <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography variant='h1' align='center' color={"#12a317"}>
                                {Number(thirtyTotal)}
                            </Typography>
                            <Typography variant="body2" color="black" fontSize={20} align='center'>
                            Members Expring within 30 days
                            </Typography>
                        </CardContent>
                </Card>
        );
    }

    function NintyCard() {
        return (
                <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography variant='h1' align='center' color={"#12a317"}>
                                {Number(nintyTotal)}
                            </Typography>
                            <Typography variant="body2" color="black" fontSize={20} align='center'>
                            Members Expring within 60 days
                            </Typography>
                        </CardContent>
                </Card>
        );
    }

    function ApprovalCard() {
        return (
                <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography variant='h1' align='center' color={"#12a317"}>
                                {Number(approvetotal)/263}
                            </Typography>
                            <Typography variant="body2" color="black" fontSize={20} align='center'>
                            Organizations Awaiting Approval
                            </Typography>
                        </CardContent>
                </Card>
        );
    }

    function OneEightyCard() {
        return (
                <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography variant='h1' align='center' color={"#12a317"}>
                                {Number(oneEightyTotal)}
                            </Typography>
                            <Typography variant="body2" color="black" fontSize={20} align='center'>
                            Members Expring within 60 days
                            </Typography>
                        </CardContent>
                </Card>
        );
    }


    return (
        <div className="member">
            <AccountDrawer />


            <Grid container spacing={2} sx={{ width: "100%" }} alignItems={"center"} justifyContent={"center"} alignContent={"center"}>

                <Grid item xs={7}>
                    <Grid container spacing={2}>

                    <Grid item md={3} xs={12}>
                            <TotalCard />
                        </Grid>

                        <Grid item md={3} xs={12}>
                            <SASCard />
                        </Grid>

                        <Grid item md={3} xs={12}>
                            <MemberCard />
                        </Grid>

                        <Grid item md={3} xs={12}>
                            <MoneyCard />
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <ApprovalCard />
                        </Grid>

                        <Grid item md={3} xs={12}>
                            <ThirtyCard />
                        </Grid>

                        <Grid item md={3} xs={12}>
                            <NintyCard />
                        </Grid>

                        <Grid item md={3} xs={12}>
                            <OneEightyCard />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            
        </div>
    );
}

export default Account;
