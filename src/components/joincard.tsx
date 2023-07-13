import * as React from 'react';
import joinimage from "../Images/join.avif"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';


export default function JoinCard() {
  return (
    <Link to='./pages/addschool'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="204"
          image={joinimage}
          alt="AERO Logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Join
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Join AERO's extensive network of schools, organizations, and consultants to
            help grow the education revolution.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}

