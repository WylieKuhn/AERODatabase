import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import React from 'react';
import { NONAME } from 'dns';



export default function StatesBox() {

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
        //onChange here
        id="combo-box-demo"
        options={USStates}
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} label="State" />}
      />
    );
  }
  
  //All 50 States
