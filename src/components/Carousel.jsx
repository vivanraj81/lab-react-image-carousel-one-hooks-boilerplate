import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [newImg, setNewImg] = useState(0);
    const { img, title, subtitle } = images[newImg];
  
    const chimg = (nValue) => setNewImg(Math.max(0, Math.min(nValue, images.length - 1)));

    return (
        <div className="box">
          <div className="photo" style={{ backgroundImage: `url(${img})` }}>
            <div className="begin" onClick={() => chimg(newImg - 1)}>
              <ArrowBackIosIcon style={{ fontSize: 55 }} />
            </div>
            <div className="type">
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>
            <div className="finish" onClick={() => chimg(newImg + 1)}>
              <ArrowForwardIosIcon style={{ fontSize: 55 }} />
            </div>
          </div>
        </div>
      );
}

export default Carousel;