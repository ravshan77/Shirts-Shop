import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Corusel_Ui from "./corusel-Ui"
import "../../css/Home.css"
import Text_Home from "./Text_Home"
import Focus from "./Focus"
import About_Home from "./Home_About"
import IntoText from "./intoText"
import SupperText from "./SupperText";


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
          <IntoText />
      </section>
      <section className="">
          <Focus />
      </section>
      <section className="">
          <SupperText />
      </section>
      <section className="about-section">
          <About_Home/>
      </section>
    </div>
  );
}

export default Home;
