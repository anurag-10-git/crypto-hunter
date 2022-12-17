import { makeStyles } from '@mui/styles'
import React from 'react'
// import selected from './CoinInfo';


const useStyles = makeStyles(()=>({
    selectbutton: {
        border: "1px solid gold",
        borderRadius: 5,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: "Montserrat",
        cursor: "pointer",
        // backgroundColor: selected ? "" : "black",
        // color: selected ? "" : "black",
        // fontWeight: selected ? 700 : 500,
        "&:hover": {
            backgroundColor: "#4e430963",
            color: "white",
        },
        width: "22%",
    }
 }));
 
 const SelectButton = ({children ,selected, onClick}) => {
    const classes = useStyles();
    return (
    <span
    onClick= {onClick} 
    style={{
        backgroundColor: selected ? "gold" : "",
        color: selected ? "black":"",
        fontWeight: selected ? 700 : 500,
        transition: "background-color 0.3s",
    }}  
    className={classes.selectbutton}
    >{children}</span>
  );
};

export default SelectButton