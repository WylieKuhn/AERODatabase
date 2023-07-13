import React from 'react';
import '../App.css';
import { Grid } from '@mui/material';
import AboutAEROCard from '../components/FrontCard';
import SchoolCard from '../components/SchoolCard';
import EduModelsCard from '../components/EduModCard';
import JoinCard from '../components/joincard';
import Link from 'react-router-dom';

function Jerry() {
  return (
    <div className="App">
      <br/>
        <Grid container spacing={1} sx={{width: "100%"}} alignItems={"center"} justifyContent={"center"}>

          <Grid item xs={7}>
            <Grid container spacing={8}>

              <Grid item md={12} xs={12}>
                <h3>Jerry</h3>
              </Grid>

              

            </Grid>
            </Grid>
            </Grid>
              
        
              
    </div>
  );
}

export default Jerry;
