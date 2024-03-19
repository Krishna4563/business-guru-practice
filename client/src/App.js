import React from "react";
import Carousel from "./components/carousel";
import HomeImg1 from "./assets/home-img-1.avif";
import HomeImg2 from "./assets/home-img-2.avif";
import HomeImg3 from "./assets/home-img-3.avif";
import Home from "./components/home";
import Form from "./components/form";

const App = () => {
  const images = [HomeImg1, HomeImg2, HomeImg3];

  return (
    <div>
      <Carousel images={images} />
      <Home />
      <Form
        serviceName="StartUp Advisory"
        apiRoute="http://localhost:3001/send-email"
      />
    </div>
  );
};

export default App;
