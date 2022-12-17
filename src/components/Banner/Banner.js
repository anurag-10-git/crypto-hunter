import {makeStyles } from '@mui/styles'
import {Container, Typography} from '@material-ui/core'
import Carousel from "./Carousel";
import React from 'react'

const useStyles = makeStyles(()=>({
banner: {
    backgroundImage: "url(./banner2.jpg)",
},
bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
},
tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
},
}))

const Banner = () => {
    const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
          <div className={classes.tagline}>
                <Typography
                variant='h2'
                style={{
                    fontWeight: "bold",
                    marginBottom: 15,
                    fontFamily: "Montserrat",
                    // textShadow: "0px 0px 3px #fff", 
                }}
                >
                    Crypto Hunter
                
                </Typography>

                <Typography
                style={{
                    color: "#868e96",
                }}
                >
                    Get all the Info regarding your favourite Crypto Currency
                </Typography>
          </div>
          <Carousel/>
      </Container>
    </div>
  )
}

export default Banner