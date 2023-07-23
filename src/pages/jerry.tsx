import React from 'react';
import '../App.css';
import { Grid, List, ListItem, Typography } from '@mui/material';
import AboutAEROCard from '../components/FrontCard';
import SchoolCard from '../components/SchoolCard';
import EduModelsCard from '../components/EduModCard';
import JoinCard from '../components/joincard';
import Link from 'react-router-dom';
import jerrypic from '../Images/jerrymintz.jpg'

function Jerry() {
  return (
    <div className="App">
      <br />
      <Grid container spacing={2} sx={{ width: "100%" }} alignItems={"center"} justifyContent={"center"}>
        <Grid item md ={7} xs={11}>
          <Grid container spacing={2} rowGap={1}>

            <Grid item md={12} xs={12}>
              <h1>Jerry Mintz: Speaker, Consultant, Revolutionary</h1>
            </Grid>

            <Grid item md={12} xs={12}>
              <img src={jerrypic} alt='Picture Of jerry Mintz'
              style={{float:'left', margin:'10px'}}
              
              />
            

            
              <Typography variant="body1" paragraph align="left">
                Jerry Mintz has been a leading voice in the alternative school movement for over 30 years. In addition to his seventeen years as a public and independent alternative school principal and teacher,
                he has also helped found more than one hundred public and private alternative schools and organizations. He has lectured and consulted in more than twenty-five countries around the world.
              </Typography>

              <Typography variant="body1" paragraph align="left">
                In 1989, he founded the Alternative Education Resource Organization and since then has served as it’s Director. Jerry was the first executive director of the National Coalition of Alternative Community Schools (NCACS),
                and was a founding member of the International Democratic Education Conference (IDEC).
              </Typography>

              <Typography variant="body1" paragraph align="left">
                In addition to several appearances on national radio and TV shows, Jerry’s essays, commentaries, and reviews have appeared in numerous newspapers, journals, and magazines including The New York Times, Newsday,
                Paths of Learning, Green Money Journal, Communities, Saturday Review, Holistic Education Review as well as the anthology Creating Learning Communities (Foundation for Educational Renewal, 2000).
              </Typography>
            
              <Typography variant="body1" paragraph align="left">
                Jerry was Editor-in-Chief for the Handbook of Alternative Education (Macmillan, 1994), and the Almanac of Education Choices (Macmillan/Simon & Schuster, 1995). He is the author of School’s
                Over: How to Have Freedom and Democracy in Education (AERO, 2017) and is editor of Turning Points: 35 Visionaries in Education Tell Their Own Story (AERO, 2010).
              </Typography>

              <Typography variant="body1" paragraph align="left" marginBottom={0}>
                His consultations and presentations can help anyone who:
              </Typography>
              <List sx={{ listStyleType: 'disc', pl: 5, pt:0}} dense >
                {
                  ["Is starting a new alternative.", "Is looking for an alternative for their children or in which to teach.",
                    "Wants to change their school or organization’s culture to a more learner-centered approach."].map((item) => {
                      return (
                        <ListItem sx={{ display: 'list-item' }}>
                          {item}
                        </ListItem>
                      )
                    })
                }

              </List>
              

              <Typography variant="body1" paragraph align="left">
                Jerry Mintz has spoken at <a href='https://www.aeroconference.org/'>Alternative Education Resource Organization Conferences</a> from its inception in 2004 through 2019 in locations such as Troy, NY,
                Albany, NY, Portland, OR, and Long Island University. He has spoken at the <a href='http://www.ideconline.org/'>International Democratic Education Conference</a>  in locations including Hadera, Israel,
                Vienna, Austria, Devon, England, Summerhill School, England, Vinnitsa, Ukraine, Tokyo, Japan, Christchurch, New Zealand, Sydney, Australia, Berlin, Germany, Bhubanashwar, India, Vancouver, Canada,
                Nuestra Escuela, Puerto Rico, Boulder, Colorado, Gwangmyeong, Korea, Mikkeli, Finland, and Kiev, Ukraine. He has done TEDx talks in Brooklyn and Norway. He has also spoken at the Reevo Conference in
                Bogota, Colombia, the ED Crunch Conference in St. Petersburg, Russia, the Eureka Conferences in Narva, Estonia, Simferipol, Ukraine, and Moscow, Russia, The Green Festival in New York,
                International Association of Learning Alternatives Conferences in Deluth, MN, Portland, OR, St. Augustine, FL, Atlanta, GA, Des Moines, IA, Denver, CO, Amsterdam, NY. He has spoken a homeschooling
                conferences such as in Albany, NY, Montreal, Quebec, Dallas, TX. He has spoken at the Montessori Foundation Conference in Sarasota, FL. He spoke at numerous National Coalition of Alternative Community
                School conferences such as in Salem, OR, Chicago, IL, Santa Fe, NM, Ann Arbor, MI, Bloomington, IN, San Diego, CA, Summertown, TN, Glenmoore, PA. He has done consultations in nearly every state and
                over 22 countries, most recently in Eger, Hungary, Chalford, England and Kiev, Ukraine.
              </Typography>

              <Typography variant="body1" paragraph align="left">
                If you are interested in featuring Jerry Mintz as a keynote speaker, consultant or for a TV or radio show, contact him at <a href='mailto:Jerryaero@aol.com'>Jerryaero@aol.com</a> or call 516-621-2195.
              </Typography>
            </Grid>



          </Grid>
        </Grid>
      </Grid>



    </div>
  );
}

export default Jerry;
