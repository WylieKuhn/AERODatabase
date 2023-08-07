import React from 'react';
import { useEffect, useState } from 'react';
import '../App.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { Route, Router, Routes, Link } from 'react-router-dom';
import play1 from '../Images/artem-kniaz-DqgMHzeio7g-unsplash.jpg';
import play2 from '../Images/kristin-brown-3kBtYrZ0-hw-unsplash.jpg';
import play3 from '../Images/robert-collins-tvc5imO5pXk-unsplash.jpg';
import { Grid } from "@mui/material";
import AboutAEROCard from "../components/FrontCard";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import EduModels from './edumodels';
import EduModelsCard from '../components/EduModCard';
import SchoolCard from '../components/SchoolCard';
import JoinCard from '../components/joincard';


function AltHome() {
    const imageURL = "../images/play.jpg";
    const [sastotal, setSAS] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/totalsas')
            .then(response => response.json())
            .then(json => setSAS(json))
            .catch(error => console.error(error));
    }, []);


    function SASCard() {
        return (
            <Link to="./pages/about">
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
            </Link>
        );
    }


    return (
        <div>
            <AliceCarousel autoPlay autoPlayInterval={3000}>
                <Link to="/pages/about">
                    <img src={play1} className="sliderimg" />
                </Link>
                <img src={play2} className="sliderimg" />
                <img src={play3} className="sliderimg" />
            </AliceCarousel>

            <Grid container padding={2} alignContent={"center"} justifyContent="center" spacing={2}>
                <Grid item xs={12}>
                    <Grid container padding={2} spacing={2} alignContent="center">

                <Grid item md={4} xs={12}>
                    <AboutAEROCard />
                </Grid>

                <Grid item md={4} xs={12}>
                    <SASCard />
                </Grid>

                <Grid item md={4} xs={12}>
                    <EduModelsCard />
                </Grid>

                <Grid item md={4} xs={12}>
                    <SchoolCard />
                </Grid>

                <Grid item md={4} xs={12}>
                    <JoinCard />
                </Grid>



            </Grid>
            </Grid>
            </Grid>

        </div>




    );
}

export default AltHome;

