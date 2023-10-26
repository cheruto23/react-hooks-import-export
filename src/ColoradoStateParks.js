import React from "react";
import HowManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import RockyMountain from "./parks/RockyMountain";

function ColoradoStateParks() {
  HowManyParks(); // => "42 parks!"
  MesaVerde();
  RockyMountain();

  return <h1>Colorado State Parks!</h1>;
}

