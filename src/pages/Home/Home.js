import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Corusel_Ui from "./corusel-Ui"
import "../../css/Home.css"
import Text_Home from "./Text_Home"
import Focus from "./Focus"


const useStyles = makeStyles((theme) => ({
  root: {
  },
  btns: {
    width: "45px",
    margin: "30px 0"
  },
}));

function Home() {
  const classes = useStyles();
  
  

  return (
    <div className={classes.root}>
      <section className="dfh">
          <Corusel_Ui />
      </section>
      <section className="">
          <Text_Home />
      </section>
      <section className="">
          <Focus />
      </section>
    </div>
  );
}

export default Home;
