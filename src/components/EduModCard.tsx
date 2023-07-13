import * as React from 'react';
import learning from "../Images/learning.avif"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';


export default function EduModelsCard() {
  return (
    <Link to="/pages/edumodels">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="204"
          image={learning}
          alt="AERO Logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Learner-Centered Education
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Explore the different models of learner-centered education,
            from democratic schools to unschooling.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}

