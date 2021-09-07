import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "../../css/Home.css"


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    minHeight:"100vh",
    fontFamily:"poppins",
    boxSizing: "border-box",
  },
}));

function Corusel_Ui() {

  return (
    <div className="con">
      <div className="boxs">
        <span style={{"--i":1}} ><i>Olline</i> shirts <i>shop</i></span>
        <span style={{"--i":2}} ><i>Olline</i> shirts <i>shop</i></span>
        <span style={{"--i":3}} ><i>Olline</i> shirts <i>shop</i></span>
        <span style={{"--i":4}} ><i>Olline</i> shirts <i>shop</i></span>
        <span style={{"--i":5}} ><i>Olline</i> shirts <i>shop</i></span>
        <span style={{"--i":6}} ><i>Olline</i> shirts <i>shop</i></span>
        <span style={{"--i":7}} ><i>Olline</i> shirts <i>shop</i></span>
        <span style={{"--i":8}} ><i>Olline</i> shirts <i>shop</i></span>
        <span style={{"--i":9}} ><i>Olline</i> shirts <i>shop</i></span>
        <span style={{"--i":10}} ><i>Olline</i> shirts <i>shop</i></span>
        <span style={{"--i":11}} ><i>Olline</i> shirts <i>shop</i></span>
        <span style={{"--i":12}} ><i>Olline</i> shirts <i>shop</i></span>
        <span style={{"--i":13}} ><i>Olline</i> shirts <i>shop</i></span>
        <span style={{"--i":14}} ><i>Olline</i> shirts <i>shop</i></span>
        <span style={{"--i":15}} ><i>Olline</i> shirts <i>shop</i></span>
        <span style={{"--i":16}} ><i>Olline</i> shirts <i>shop</i></span>
      </div>
    </div>
  );
}

export default Corusel_Ui;

{/* <ExpandMoreIcon onClick={()=> handleWindov()} className={classes.scrollBtn}  /> */}


{/* <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        position="static"
        className={classes.dots}
        variant="dots"
      />
      <Button
        size="small"
        className={classes.next}
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft className={classes.btns} />
        ) : (
          <KeyboardArrowRight className={classes.btns} />
        )}
      </Button>
      <Button
        size="small"
        className={classes.back}
        onClick={handleBack}
        disabled={activeStep === 0}
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight className={classes.btns} />
        ) : (
          <KeyboardArrowLeft className={classes.btns} />
        )}
      </Button> */}


      // img: {
      //   height: 455,
      //   display: "block",
      //   overflow: "hidden",
      //   width: "100%",
      //   objectFit: "cover",
      // },
      // dots: {
      //   background: "none",
      //   position: "absolute",
      //   bottom: 22,
      //   right: "50px",
      // },
      // back: {
      //   position: "absolute",
      //   top: "0%",
      //   left: 0,
      //   height: "100%",
      //   color: "#fff",
      // },
      // next: {
      //   top: "0%",
      //   right: 0,
      //   position: "absolute",
      //   height: "100%",
      // },
      // btns: {
      //   color: "#fff",
      //   width: "45px",
      //   height: "100%",
      // },
    
      // scrollBtn: {
      //   position: "absolute",
      //   color: "#fff",
      //   bottom: 10, 
      //   right: "50%",
      //   width: "45px",
      //   height: "45px",
        
      // }


      // const theme = useTheme();
      // const [activeStep, setActiveStep] = React.useState(0);
      // const maxSteps = tutorialSteps.length;
    
      // const handleNext = () => {
      //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
      // };
    
      // const handleBack = () => {
      //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
      // };
    
      // const handleStepChange = (step) => {
      //   setActiveStep(step);
      // };
    
      // const handleWindov = () => {
      //   window.scrollTo({
      //     top: 600,
      //     behavior: "smooth",
      //   });
      // };
    

      // const tutorialSteps = [
      //   {
      //     label: "San Francisco – Oakland Bay Bridge, United States",
      //     imgPath:
      //       "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
      //   },
      //   {
      //     label: "Bird",
      //     imgPath:
      //       "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
      //   },
      //   {
      //     label: "Bali, Indonesia",
      //     imgPath:
      //       "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
      //   },
      //   {
      //     label: "NeONBRAND Digital Marketing, Las Vegas, United States",
      //     imgPath:
      //       "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
      //   },
      //   {
      //     label: "Goč, Serbia",
      //     imgPath:
      //       "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
      //   },
      // ];
      