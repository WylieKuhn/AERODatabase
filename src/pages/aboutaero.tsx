import React from 'react';
import '../App.css';
import { Grid, Button } from '@mui/material';
import AboutAEROCard from '../components/FrontCard';
import SchoolCard from '../components/SchoolCard';
import EduModelsCard from '../components/EduModCard';
import JoinCard from '../components/joincard';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="App">
      <br/>
        <Grid container spacing={1} sx={{width: "100%"}} alignItems={"center"} justifyContent={"center"}>

          <Grid item xs={7}>
            <Grid container spacing={8}>

              <Grid item md={12} xs={12}>
                <h3>About AERO</h3>
              </Grid>

              <Grid md={12} xs={12}>
                <p>
                The Alternative Education Resource Organization (AERO) was founded in 1989 by Jerry Mintz. 
                AERO's goal is to advance student-driven, learner-centered approaches to education. 
                AERO is the primary hub of communications and support for educational alternatives around the world. 
                Our network includes Montessori, Waldorf (Steiner), Public Choice and At-Risk, Democratic, Homeschool, 
                Open, Charter, Free, Sudbury, Holistic, Virtual, Magnet, Early Childhood, Reggio Emilia, Indigo, Krishnamurti, 
                Quaker, Libertarian, Independent, Progressive, Community, Cooperative, and Unschooling.
                </p>
              </Grid>

              <Grid xs={12}>
                <p>
                <i>AERO's mission is to help create an education revolution to make learner-centered education available to everyone.</i>
                </p>
              </Grid>

              <Grid xs={12}>
                <p>
                One of AERO's areas of expertise is democratic process and democratic education, but equally important is the 
                networking of all forms of educational alternatives. Towards this end, AERO provides information, resources 
                and guidance to families, schools and organizations regarding their educational choices. AERO disseminates 
                information internationally on topics such as: homeschooling, public and private alternative schools, and charter schools.

 
                </p>
              </Grid>

              <Grid xs={12}>
                <p>
                <h5>AERO Membership</h5>
                </p>
              </Grid>

              <Grid xs={12}>
                <p>
                AERO membership is available for individuals and schools around the world who would like to help realize an education revolution. 
                Individual and school members get access to our conversational listserve and an extensive video library of speeches and interviews 
                with some of the most famous and influential voices of the alternative education movement. Members also enjoy discounts in our bookstore 
                and to our annual conference. Individual and school AERO members can post job listings. Schools can have their website links posted 
                to AERO's member list, one of the most heavily trafficked lists of alternative schools online.
                </p>
              </Grid>

              <Grid md={4} xs={12}>
                <Link to="/pages/team">
                    <Button variant="contained">Meet Our Team</Button>
                </Link>
              </Grid>

              <Grid md={4} xs={12}>
                <Link to="/pages/history">
                    <Button variant="contained">Our History</Button>
                </Link>
              </Grid>

              <Grid md={4} xs={12}>
                <Link to="/pages/jerry">
                    <Button variant="contained">About Jerry Mintz</Button>
                </Link>
              </Grid>

            
              

            </Grid>
            </Grid>
            </Grid>
              
        
              
    </div>
  );
}

export default About;
