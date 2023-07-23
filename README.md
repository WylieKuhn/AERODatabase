# The AERO Database Project  
  
## The Basics  
- This is currently a work in progress  
- The frontend is written in [React](https://react.dev/) and [Material UI](https://mui.com/) and uses [MUI tel input](https://viclafouch.github.io/mui-tel-input/).  
- The backend will be written [FastAPI](https://fastapi.tiangolo.com/) running on [Uvicorn](https://www.uvicorn.org/).  
  
## To Do: First Goals, 18-24 Months  
### API and Adding/Searching for Schools
- ~~Fix Bug where the first entered character of an entered string in a MUI component registers as an empty string~~.  
- Make frontend page send data to API backend
- Set up the backend API to recieve info from frontend and store in a database.  
- Make search page send criteria to API backend.  
- Make API search database based on criteria and get results.  
- Return results to frontend fo display.  
  
### Login  
- Figure Out how to authenticate users and only allow them to add schools/orgs if they're a member.  
  
### Membership  
- Add ability to pay for membership and verify membership status to give users correct privilages.
  
### Job Ads
- Replicate the process of adding a school to add job adds to NoSQL database.  
- Allow people to link job ads and their organizations so they cross display.  
  
## To Do: Later Goals, 24-48 Months  
### Store 
- Add storefront to Database site.  
- Find framework for this? 
  
### Newsletter  
- Use Constant Contact API to add emails of members when they sign up.  
- Use Constant Contact API to get and display newsletters automatically.  
  
### Network Data  
- Set up page that displays data about the AERO network of schools and members for the public.  
- Set up a private admin data dashboard to show member and financial data.  




