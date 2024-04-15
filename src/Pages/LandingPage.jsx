import React, { useState } from "react";
import Header from "../Components/Header";
import Map from "../Components/Map";
import CardContainer from "../Components/CardContainer";

function LandingPage() {
  const [alignment, setAlignment] = useState("bottom");
  return (
    <>
      <Header setAlignment={setAlignment} />
      <Map />
      <CardContainer alignment={alignment} />
    </>
  );
}

export default LandingPage;
