import React from 'react';
import { useState } from 'react';
import '../App.css';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid, Link, Typography, Button } from '@mui/material';
import ComboBox from '../components/combo';
import DiscreteSlider from '../components/slider';
import CountryBox from '../components/countrybox';

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

function Search() {
   
  

  const [demVal, setDem] = React.useState(false);
  const handleDem = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDem(event.target.checked);
    console.log(demVal)
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

  const [publicVal, setPublic] = React.useState(false);
  const handlePublic = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPublic(event.target.checked);
    console.log(publicVal)
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

  const [VCVal, setVSFirm] = React.useState(false);
  const handleVCFirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVSFirm(event.target.checked);
    console.log(VCVal)
  };

  const [slidingScaleVal, setSlidingScale] = React.useState(false);
  const handleSlidingScale = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSlidingScale(event.target.checked);
    console.log(slidingScaleVal)
  };

  const [ALCVal, setALC] = React.useState(false);
  const handleALC = (event: React.ChangeEvent<HTMLInputElement>) => {
    setALC(event.target.checked);
    console.log(ALCVal)
  };

  const [consultingVal, setConsulting] = React.useState(false);
  const handleConsulting = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConsulting(event.target.checked);
    console.log(consultingVal)
  };

  const [stateVal, setStateVal] = React.useState("");
  const handleStateval = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateVal(event.target.value);
    console.log(stateVal)
  };

  var searchoptions = JSON.stringify({
    
    democratic: demVal,
    sudbury: sudVal,
    hsCoOp: homeVal,
    montessori: montVal,
    vcfirm: VCVal,
    consulting: consultingVal,
    public: publicVal,
    slidingscale: slidingScaleVal,
    alc: ALCVal,
    AEROMember: memberVal,
    online: onlineVal,
    inPerson: inPersonVal,
    sas: SasVal,
  })


  const [results, setResults] = React.useState<Array<Organization>>([]);

  function searchData() {
    fetch("http://127.0.0.1:8000/api/v1/search", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: searchoptions,
    }).then(response => response.json()).then(data => setResults(data));
  }


  return (
    <div className="App">
      <br />
      <h2>Search For A School or Organization</h2>
      <Grid container spacing={2} sx={{ width: "100%" }} alignItems={"center"} justifyContent={"center"}>

        <Grid item xs={7}>
          <Grid container spacing={2}>

            <Grid item md={3} xs={12}>
              <Typography paragraph align='left' padding={0}>
                <FormControlLabel control={<Checkbox value={demVal} onChange={handleDem} />} label="Democratic" />
              </Typography>
            </Grid>

            <Grid item md={3} xs={12}>
              <Typography paragraph align='left' padding={0}>
                <FormControlLabel control={<Checkbox value={sudVal} onChange={handleSud} />} label="Sudbury" />
              </Typography>
            </Grid>

            <Grid item md={3} xs={12}>
              <Typography paragraph align='left' padding={0}>
                <FormControlLabel control={<Checkbox value={homeVal} onChange={handleHome} />} label="Homeschool Co-Op" />
              </Typography>
            </Grid>

            <Grid item md={3} xs={12}>
              <Typography paragraph align='left' padding={0}>
                <FormControlLabel control={<Checkbox value={montVal} onChange={handlemont} />} label="Montessori" />
              </Typography>
            </Grid>

            <Grid item md={3} xs={12}>
              <Typography paragraph align='left' padding={0}>
                <FormControlLabel control={<Checkbox value={VCVal} onChange={handleVCFirm} />} label="Educational VC Firm" />
              </Typography>
            </Grid>

            <Grid item md={3} xs={12}>
              <Typography paragraph align='left' padding={0}>
                <FormControlLabel control={<Checkbox value={consultingVal} onChange={handleConsulting} />} label="Consulting" />
              </Typography>
            </Grid>

            <Grid item md={3} xs={12}>
              <Typography paragraph align='left' padding={0}>
                <FormControlLabel control={<Checkbox value={publicVal} onChange={handlePublic} />} label="Public" />
              </Typography>
            </Grid>

            <Grid item md={3} xs={12}>
              <Typography paragraph align='left' padding={0}>
                <FormControlLabel control={<Checkbox value={slidingScaleVal} onChange={handleSlidingScale} />} label="Sliding Scale Tuition" />
              </Typography>
            </Grid>

            <Grid item md={3} xs={12}>
              <Typography paragraph align='left' padding={0}>
                <FormControlLabel control={<Checkbox value={SasVal} onChange={handleSAS} />} label="Started By A School Starter" />
              </Typography>
            </Grid>

            <Grid item md={3} xs={12}>
              <Typography paragraph align='left' padding={0}>
                <FormControlLabel control={<Checkbox value={ALCVal} onChange={handleALC} />} label="ALC" />
              </Typography>
            </Grid>

            <Grid item md={3} xs={12}>
              <Typography paragraph align='left' padding={0}>
                <FormControlLabel control={<Checkbox value={memberVal} onChange={handleMember} />} label="AERO Member" />
              </Typography>
            </Grid>

            <Grid item md={3} xs={12}>
              <Typography paragraph align='left' padding={0}>
                <FormControlLabel control={<Checkbox value={inPersonVal} onChange={handleInPerson} />} label="In Person" />
              </Typography>
            </Grid>

            <Grid item md={3} xs={12}>
              <Typography paragraph align='left' padding={0}>
                <FormControlLabel control={<Checkbox value={memberVal} onChange={handleMember} />} label="Online" />
              </Typography>
            </Grid>

            <Grid item md={3} xs={12}>
              <Typography paragraph align='left' padding={0}>
                <FormControlLabel control={<Checkbox value={memberVal} onChange={handleMember} />} label="PH" />
              </Typography>
            </Grid>

            <Grid item md={3} xs={12}>
              <Typography paragraph align='left' padding={0}>
                <FormControlLabel control={<Checkbox value={memberVal} onChange={handleMember} />} label="PH" />
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" onClick={searchData}>Search</Button>
            </Grid>

            <Grid item xs={12}>
              {
                results.map((item:Organization) => {
                  return (
                    <div>
                      <Grid container>
                        <Grid item md={12} xs={12}>
                          <Typography>
                            {item.name}
                          </Typography>

                          <Typography>
                            {item.address}, {item.city}, {item.state}, {item.postCode}
                          </Typography>

                          <Typography>
                            Contact: {item.phone}, {item.email}
                          </Typography>

                          <Typography>
                            Tuition Range: ${String(item.tMin)} - ${String(item.tMax)}
                          </Typography>

                          <Link href={`https://www.google.com/maps/place/${item.address},+${item.city},+${item.state}+${item.postCode}/`} target="_blank" rel="noreferrer">
                            Google Maps Link
                          </Link>
                          <hr></hr>

                        </Grid>
                      </Grid>
                    </div>
                  )
                })
              }
            </Grid>

            

          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Search;
