import React from 'react';
import '../App.css';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid } from '@mui/material';
import ComboBox from '../components/combo';
import DiscreteSlider from '../components/slider';
import CountryBox from '../components/countrybox';

function Search() {
  return (
    <div className="App">
      <br/>
        <h2>Search For A School or Organization</h2>
        <Grid container spacing={2} sx={{width: "100%"}} alignItems={"center"} justifyContent={"center"}>

          <Grid item xs={7}>
            <Grid container spacing={2}>

              <Grid item xs={12}>
              <TextField id="search-text" label="Search" variant="standard" fullWidth/>
              </Grid>

              <Grid item md={3} xs={12}>
                <FormControlLabel control={<Checkbox />} label="Democratic" />
              </Grid>

              <Grid item md={3} xs={12}>
                <FormControlLabel control={<Checkbox />} label="Sudbury" />
              </Grid>

              <Grid item md={3} xs={12}>
                <FormControlLabel control={<Checkbox />} label="Homeschool Co-Op" />
              </Grid>

              <Grid item md={3} xs={12}>
                <FormControlLabel control={<Checkbox />} label="Montessori" />
              </Grid>

              <Grid item md={3} xs={12}>
                <FormControlLabel control={<Checkbox />} label="Educational VC Firm" />
              </Grid>

              <Grid item md={3} xs={12}>
                <FormControlLabel control={<Checkbox />} label="Consulting" />
              </Grid>

              <Grid item md={3} xs={12}>
                <FormControlLabel control={<Checkbox />} label="Public" />
              </Grid>

              <Grid item md={3} xs={12}>
                <FormControlLabel control={<Checkbox />} label="Sliding Scale Tuition" />
              </Grid>

              <Grid item md={3} xs={12}>
                <FormControlLabel control={<Checkbox />} label="AERO Helped Start" />
              </Grid>

              <Grid item md={3} xs={12}>
                <FormControlLabel control={<Checkbox />} label="Placeholder" />
              </Grid>

              <Grid item md={3} xs={12}>
                <FormControlLabel control={<Checkbox />} label="Placeholder" />
              </Grid>

              <Grid item md={3} xs={12}>
                <FormControlLabel control={<Checkbox />} label="Placeholder" />
              </Grid>

              <Grid item md={6} xs={12}>
                <ComboBox />
              </Grid>

              <Grid item md={6} xs={12}>
                <CountryBox />
              </Grid>
              
            </Grid>
          </Grid>
        </Grid>  
    </div>
  );
}

export default Search;
