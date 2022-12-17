import { makeStyles } from "@mui/styles";
import React from "react";
import devImg from "../Pages/devImg.jpg";
import de2 from "../Pages/de.jpeg";

const useStyles = makeStyles(() => ({
  Heading: {
    margin: "15px 0 50px 0",
    textAlign: "center",
  },

  images: {
    height: "120px",
    width: "120px",
    borderRadius: "5px",
    border: "2px solid gray",
    gridRow: "1/-1",
    filter: "brightness(90%)",
  },
  devlopers: {
    margin: "18px 0",
    display: "grid",
    gridTemplateColumns: "120px 0.9fr",
    gridTemplateRows: "3fr 1fr",
    columnGap: "30px",
  },
  devName: {
    gridRow: "-2/-1",
    textAlign: "left",
    fontSize: "14px",
    fontWeight: "bold",
    marginTop: "10px",
    color: "#e9ecef",
  },
  devTestimonial: {
    fontSize: "17px",
    gridRow: "1/2",
    lineHeight: "1.3",
    color: "#ced4da",
    textAlign: "left",
  },
  mainSection: {
    color: "#adb5bd",
    margin: "0 90px 0 40px",
    fontSize: "18px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "15px",
    textAlign: "justify",
    lineHeight: "1.4",
    letterSpacing: "0.5px",
  },
}));

function AboutUs() {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.Heading}>
        PROJECT: Real-Time Cryptocurrency Tracker
      </h1>
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1.9fr",
        }}
      >
        <div
          style={{
            border: "2px ridge gold",
            padding: "10px 15px",
            marginLeft: "5px",
          }}
        >
          <h2 style={{ color: "#e9ecef" }}>Developed by:</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <p className={classes.devlopers}>
              <img src={devImg} className={classes.images} alt="developer's" />
              <span className={classes.devTestimonial}>
                ‟We got the opportunity to showcase our knowledge, so together
                we tried to get best out of us”
              </span>
              <span className={classes.devName}> — Anurag Mohan</span>
            </p>
            <p className={classes.devlopers}>
              <img
                src={de2}
                className={classes.images}
                style={{ filter: " brightness(80%) contrast(132%)" }}
                alt="txt"
              />
              <span className={classes.devTestimonial}>
                ‟Working together on the project, I have learned many new things
                that will help me immensely in future”
              </span>
              <span className={classes.devName}> — Saurabh Sagar Pandey</span>
            </p>
          </div>
        </div>
        <div className={classes.mainSection}>
          <p>
            We have probably read about some of the most popular types of crypto
            currencies such as Bitcoin, Dogecoin, and Ethereum. Crypto
            currencies are increasingly popular alternatives for online
            payments.
          </p>
          <p>
            A crypto currency is a digital currency, which is an alternative
            form of payment created using encryption algorithms.The use of
            encryption technologies means that crypto currencies function both
            as a currency and as a virtual accounting system.
          </p>
          <p>
            So by keeping all this in mind we have developed a product that will
            keep track of all the crypto currencies. we have more than 90+
            crypto-currencies data populated on our page which will provide
            exact data of every second of last 365 days on a single chart each
            for every currency. Any person who wants to invest in crypto
            currencies, can see all the past data required to him for the
            investment and to learn about crypto currencies. In future we would
            like to add some new features which will help the users to directly
            invest from our application.
          </p>
        </div>
      </main>
    </>
  );
}

export default AboutUs;
