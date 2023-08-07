import * as React from 'react';
import aerologo from "../Images/logo.jpg";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';


export default function AboutAEROCard() {
  return (
    <Link to="./pages/about">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="204"
          image={aerologo}
          alt="AERO Logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            About AERO
          </Typography>
          <Typography variant="body2" color="text.secondary">
            AERO is the world's premiere Alternative education resource, drawing from a
            deep well of historical knowledge and our network of peers.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}

