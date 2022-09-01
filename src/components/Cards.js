// // import React from 'react';
// // import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// // import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// // import Layout from '@theme/Layout';
// // import HomepageFeatures from '@site/src/components/HomepageFeatures';
// // import Trial from '../components/Trial.js'
// // import styles from './index.module.css';
// // import {BrowserRouter, Routes, Route} from 'react-router-dom'
// // import Box from '@mui/material/Box';


// import { Grid, Card, Typography} from '@mui/material';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// // // import FrontPageNavbar from './FrontPageNavbar.js'

// import { CssBaseline } from "@mui/material";
// import { makeStyles } from '@material-ui/core/styles';

// // import * as React from 'react';
// // import { CardActionArea} from '@mui/material';



// const useStyles = makeStyles((theme) => ({
//     root: {
//       minHeight: '100vh',
//       backgroundImage: `url(https://images2.alphacoders.com/103/1036023.jpg)`,
//       // backgroundImage: `url()`,
//       backgroundRepeat: 'no-repeat',
//       backgroundSize: 'cover',
//     },
//     root1: {
//       minHeight: '40vh',
//       backgroundImage: `url(https://images2.alphacoders.com/103/1036023.jpg)`,
//       // backgroundImage: `url()`,
//       backgroundRepeat: 'no-repeat',
//       backgroundSize: 'cover',
//       background: 'none',
//       fontFamily: 'Nunito',
//       fontSize: '1.40rem',
//     },
//     font: {
//       background: 'none',
//       fontFamily: 'Nunito',
//       fontSize: '1.40rem',
//     },
//     links: {
      
//       fontFamily: 'Nunito',
//       fontSize: '1rem',
//       textCo: '#1B9107'
//     }
//   }));







//   const classes = useStyles();
  
//   const Cards = () => {


//     return (
//       <>

// <CssBaseline />
// {/* <FrontPageNavbar/> */}
// {/* <Navbar/> */}
// {/* <hr />
//   <div className={classes.root1}>
// <Header/>
// </div> */}

// <Grid container justifyContent='center'>
//       <Grid item sm={11}>

// <Grid container spacing={1.25} my={5}>



//           <Grid item xs={4} md={4} lg={2}>  
//                   <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="17"
//         image="https://images2.alphacoders.com/103/1036023.jpg"
//       />
//       <CardContent>
//           <Typography  label="Standard" textAlign='center' gutterBottom variant="h5"    component="div">
//             <div className={classes.font}>
//             Handbook
//             </div>
//           </Typography>
//             <hr />

//         <Typography variant="body2" color="text.secondary">
          
//           <ul>
          
//           {/* <li><Button size="small">Onboarding</Button></li>
//           <div className={classes.links}>
//           <li><Button size="small">Cloud Subscription</Button></li>
//           </div> */}
//           <div className={classes.links}>
//           <li>
//             <Link href='handbook/onboardingprivate'  variant='h15' color='primary'>Onboarding Private</Link>
            
//             </li>
          
//           <li><Button size="small">Share</Button></li>
//           <li><Button size="small">Share</Button></li>
//           <li><Button size="small">Share</Button></li>
//           </div>
//         </ul>
       
//         </Typography>
//       </CardContent>
//       <CardActions>
//       {/* <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button> */}
//       </CardActions>
//                     </Card>
//           </Grid>



//           <Grid item xs={4} md={4} lg={2}>  
//                   <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="17"
//         image="https://images2.alphacoders.com/103/1036023.jpg"
//       />
//       <CardContent>
//           <Typography  label="Standard" textAlign='center' gutterBottom variant="h5"        component="div">
//             <div className={classes.font}>
//             Helpful Resources
//             </div>
//           </Typography>
//             <hr />
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//                     </Card>
//           </Grid>



//           <Grid item xs={4} md={4} lg={2}>  
//                   <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="17"
//         image="https://images2.alphacoders.com/103/1036023.jpg"
//       />
//       <CardContent>
//           <Typography  label="Standard" textAlign='center' gutterBottom variant="h5"             component="div">
//             <div className={classes.font}>
//             Automation Initiatives
//             </div>
//           </Typography>
//             <hr />
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//                     </Card>
//           </Grid>



//           <Grid item xs={4} md={4} lg={2}>  
//                   <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="17"
//         image="https://images2.alphacoders.com/103/1036023.jpg"
//       />
//       <CardContent>
//           <Typography  label="Standard" textAlign='center' gutterBottom variant="h5"             component="div">
//             <div className={classes.font}>
//             Best Practices
//             </div>
//           </Typography>
//             <hr />     
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//                     </Card>
//           </Grid>



//           <Grid item xs={4} md={4} lg={2}>  
//                   <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="17"
//         image="https://images2.alphacoders.com/103/1036023.jpg"
//       />
//       <CardContent>
//           <Typography  label="Standard" textAlign='center' gutterBottom     variant="h5"             component="div">
//             <div className={classes.font}>
//             Application Knowledgebase
//             </div>
//           </Typography>

//             <hr />  
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//                     </Card>
//           </Grid>



//           <Grid item xs={4} md={4} lg={2}>  
//                   <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="17"
//         image="https://images2.alphacoders.com/103/1036023.jpg"
//       />
//       <CardContent>
//           <Typography  label="Standard" textAlign='center' gutterBottom     variant="h5"             component="div">
//             <div className={classes.font}>
//             Teams & Contacts
//             </div>
//           </Typography>
//             <hr />  
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//                     </Card>
//           </Grid>


//           </Grid>
//           </Grid>
// </Grid>

        
//       </>
//     )
//   }
  
//   export default Cards
  