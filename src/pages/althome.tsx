import React from 'react';
import '../App.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { Route, Router, Routes, Link } from 'react-router-dom';

import play1 from '../Images/artem-kniaz-DqgMHzeio7g-unsplash.jpg';
import play2 from '../Images/kristin-brown-3kBtYrZ0-hw-unsplash.jpg';
import play3 from '../Images/robert-collins-tvc5imO5pXk-unsplash.jpg';
import {Grid} from "@mui/material";
import AboutAEROCard from "../components/FrontCard";


function AltHome() {
    const imageURL = "../images/play.jpg";
  return (
      <div>
          <AliceCarousel autoPlay autoPlayInterval={3000}>
              <Link to="/pages/about">
                <img src={play1} className="sliderimg" />
              </Link>
              <img src={play2} className="sliderimg" />
              <img src={play3} className="sliderimg" />
          </AliceCarousel>

          <Grid container padding={2}>

              <Grid item md={4} xs={12}>
                  <AboutAEROCard />
              </Grid>




          </Grid>

      </div>




  );
}

export default AltHome;

