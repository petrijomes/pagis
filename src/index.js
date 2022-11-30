import React from "react";
import ReactDOM from "react-dom/client";
import { Navbr } from "./componentes/barra";
import { Review } from "./componentes/review";
import background from "./assets/img/salon.PNG";
import {Footer} from './componentes/Footer'
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        padding:0,margin:0,
        display:"block"
      }}
    >
      
      <Navbr />
      <body>
      <Review />
      </body>
      <Footer/>
    </div>
);
