import React from 'react';
import '../App.css';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid, Link, Typography, Button } from '@mui/material';
import CountryBox from '../components/countrybox';
import StatesBox from '../components/combo';
import Autocomplete from '@mui/material/Autocomplete/Autocomplete';

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

  function StatesBox() {

    const USStates = [
      { label: 'Alabama', state: "AL" },
      { label: 'Alaska', state: "AK" },
      { label: 'Arizona', state: "AZ" },
      { label: 'Arkansas', state: "AR" },
      { label: 'California', state: "CA" },
      { label: 'Colorado', state: "CO" },
      { label: 'Connecticut', state: "CT" },
      { label: 'Delaware', state: "DE" },
      { label: 'Florida', state: "FL" },
      { label: 'Georgia', state: "GA" },
      { label: 'Hawaii', state: "HI" },
      { label: 'Idaho', state: "ID" },
      { label: 'Illinois', state: "IL" },
      { label: 'Indiana', state: "IN" },
      { label: 'Iowa', state: "IA" },
      { label: 'Kansas', state: "KA" },
      { label: 'Kentucky', state: "KY" },
      { label: 'Louisiana', state: "LA" },
      { label: 'Maine', state: "ME" },
      { label: 'Maryland', state: "MD" },
      { label: 'Massachusetts', state: "MA" },
      { label: 'Michigan', state: "MI" },
      { label: 'Minnesota', state: "MN" },
      { label: 'Mississippi', state: "MS" },
      { label: 'Missouri', state: "MO" },
      { label: 'Montana', state: "MT" },
      { label: 'Nebraska', state: "NE" },
      { label: 'Nevada', state: "NV" },
      { label: 'New Hampshire', state: "NH" },
      { label: 'New Jersey', state: "NJ" },
      { label: 'New Mexico', state: "NM" },
      { label: 'New York', state: "NY" },
      { label: 'North Carolina', state: "NC" },
      { label: 'North Dakota', state: "ND" },
      { label: 'Ohio', state: "OH" },
      { label: 'Oklahoma', state: "OK" },
      { label: 'Oregon', state: "OR" },
      { label: 'Pennsylvania', state: "PA" },
      { label: 'Rhode Island', state: "RI" },
      { label: 'South Carolina', state: "SC" },
      { label: 'South Daktoa', state: "SD" },
      { label: 'Tennessee', state: "TN" },
      { label: 'Texas', state: "TX" },
      { label: 'Utah', state: "UT" },
      { label: 'Vermont', state: "VT" },
      { label: 'Virginia', state: "VA" },
      { label: 'Washington', state: "WA" },
      { label: 'West Virginia', state: "WV" },
      { label: 'Wisconsin', state: "WI" },
      { label: 'Wyoming', state: "WY" }
      ];

      return (
        <Autocomplete
          disablePortal
          getOptionLabel={(option) => option.label}
          onChange={handleStateval}
          id="US-State-Box"
          options={USStates}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label={stateVal?.label} />}
        />
      );
    }
   
  

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

  const [collegeVal, setCollege] = React.useState(false);
  const handleCollege = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCollege(event.target.checked);
    console.log(collegeVal)
  };

  const [highSchoolVal, setHighSchool] = React.useState(false);
  const handleHighSchool = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHighSchool(event.target.checked);
    console.log(highSchoolVal)
  };


  const [stateVal, setStateVal] = React.useState<{ label: string; state: string } | null>(null);
  const handleStateval = (event: React.ChangeEvent<{}>, value: { label: string; state: string } | null) => {
    setStateVal(value);
    console.log(value?.state);
  }

  

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
    college: collegeVal,
    highSchool: highSchoolVal,
    state: stateVal?.state 
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
      <Typography>Search For A School Or Organization</Typography>
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
                <FormControlLabel control={<Checkbox value={memberVal} onChange={handleOnline} />} label="Online" />
              </Typography>
            </Grid>

            <Grid item md={3} xs={12}>
              <Typography paragraph align='left' padding={0}>
                <FormControlLabel control={<Checkbox value={memberVal} onChange={handleCollege} />} label="College/University" />
              </Typography>
            </Grid>

            <Grid item md={3} xs={12}>
              <Typography paragraph align='left' padding={0}>
                <FormControlLabel control={<Checkbox value={memberVal} onChange={handleHighSchool} />} label="High School" />
              </Typography>
            </Grid>

            <Grid item md={3} xs={12}>
              <StatesBox />
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
                            Categories: {String(item.categories)}
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
