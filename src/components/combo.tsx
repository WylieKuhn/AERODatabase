import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} label="State" />}
      />
    );
  }
  
  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  const top100Films = [
    { label: 'AL', state: "AL" },
    { label: 'AK', state: "AK" },
    { label: 'AZ', state: "AZ" },
    { label: 'NC', state: "NC" },
    { label: 'CO', state: "CO" },
  ];