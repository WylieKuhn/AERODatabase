import React from 'react';
import { useState } from 'react';
import '../App.css';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid, Link, Typography } from '@mui/material';
import ComboBox from '../components/combo';
import DiscreteSlider from '../components/slider';
import CountryBox from '../components/countrybox';

function Search() {

  const results = [
    { '_id': '8749e922-4708-47b0-9de2-fa03695eda85', 'name': 'Martinez Group', 'address': '53152 Joel Plaza Suite 759', 'city': 'Valenzuelaview', 'state': 'NY', 'postCode': '39297', 'country': 'USA', 'phone': '6999243881', 'email': 'danielgibson@hoffman.biz', 'categories': [{ 'democratic': true, 'sudbury': true, 'hsCoOp': true, 'AEROMember': false, 'online': true, 'inPerson': false, 'sas': false }], 'tMin': 1000, 'tMax': 10000, 'consent': true },
    { '_id': 'faa28e7a-4042-4114-b763-9bd69d7b1df9', 'name': 'Blackwell Ltd', 'address': '2319 Sarah Turnpike', 'city': 'Karenport', 'state': 'NY', 'postCode': '59798', 'country': 'USA', 'phone': '686-275-4847x85656', 'email': 'maryreeves@powell-stevenson.com', 'categories': [{ 'democratic': true, 'sudbury': false, 'hsCoOp': true, 'AEROMember': false, 'online': false, 'inPerson': true, 'sas': false }], 'tMin': 1000, 'tMax': 10000, 'consent': true },
    { '_id': 'a0c4f567-01d1-4a78-982a-28a4ed598826', 'name': 'Walker, Harper and Wallace', 'address': '26132 Sandy Grove Suite 527', 'city': 'Amyland', 'state': 'NY', 'postCode': '52445', 'country': 'USA', 'phone': '3037563569', 'email': 'olsontrevor@reyes.com', 'categories': [{ 'democratic': true, 'sudbury': false, 'hsCoOp': true, 'AEROMember': true, 'online': true, 'inPerson': true, 'sas': true }], 'tMin': 1000, 'tMax': 10000, 'consent': true }]

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

            <Grid item md={6} xs={12}>
              <ComboBox />
            </Grid>

            <Grid item md={6} xs={12}>
              <CountryBox />
            </Grid>

            <Grid item xs={12}>
              {
                results.map((item) => {
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
                            Tuition Range: ${item.tMin} - ${item.tMax}
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
