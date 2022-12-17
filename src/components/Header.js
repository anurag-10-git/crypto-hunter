import { Select, MenuItem, AppBar, Container, Toolbar, Typography,createTheme, ThemeProvider} from '@material-ui/core'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useNavigate } from "react-router-dom";
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles(()=>({
    title: {
        flex:1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    },
    about: {
        color: "darkgray",
        cursor: "pointer",
        fontSize: "18px",
        fontWeight: "600",
        marginLeft: "10px"

      }

}))

const Header = () => {
    const classes = useStyles()

    const navigate = useNavigate();

    const {currency, setCurrency} = CryptoState();

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        },
    });

  return (
    <ThemeProvider theme={darkTheme}>
   <AppBar color='transparent' position='static'>
     <Container>
        <Toolbar>
            <Typography 
            onClick={() => navigate("/")}
             className={classes.title}
             variant = "h5"
             >
                CryptoHunter
                </Typography>
                
                <Typography
              onClick={() => navigate(`/`)}
            //   variant="h6"
              className={classes.about}
            >
             Home
            </Typography>

                <Typography
              onClick={() => navigate(`/about`)}
            //   variant="h6"
              className={classes.about}
            >
             About
            </Typography>

            <Select  
            variant='outlined'
            style={{
                width: 100,
                height: 40,
                marginLeft: 20,
            }}
            value = {currency}
            onChange={(e) => setCurrency(e.target.value)}
            >
                <MenuItem value={'USD'}>USD</MenuItem>
                <MenuItem value={'INR'}>INR</MenuItem>
            </Select>
        </Toolbar>
     </Container>
   </AppBar>
   </ThemeProvider>
  )
}

export default Header