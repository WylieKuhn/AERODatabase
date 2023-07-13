import * as React from 'react';
import school from "../Images/playing.avif"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SchoolCard() {
    return (
      <Link to='./pages/search'>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="204"
            image={school}
            alt="AERO Logo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Find A School
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Find a school that fits your learners needs and style from our Database
              of learner-centered schools
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Link>
    );
  }