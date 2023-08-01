import React from 'react';
import '../App.css';
import { Grid } from '@mui/material';
import AboutAEROCard from '../components/FrontCard';
import SchoolCard from '../components/SchoolCard';
import EduModelsCard from '../components/EduModCard';
import JoinCard from '../components/joincard';
import Link from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
function Home() {
  return (
    <div className="App">
      <br/>
        <Grid container spacing={2} sx={{width: "100%"}} alignItems={"center"} justifyContent={"center"}>
          

          <Grid item xs={7}>
            <Grid container spacing={2}>

              <Grid item md={6} xs={12}>
                <AboutAEROCard />
              </Grid>

              <Grid item md={6} xs={12}>
                <SchoolCard />
              </Grid>

              <Grid item md={6} xs={12}>
                <EduModelsCard />
              </Grid>

              <Grid item md={6} xs={12}>
                <JoinCard />
              </Grid>

            </Grid>
            </Grid>
            </Grid>
              
        
              
    </div>
  );
}

export default Home;
