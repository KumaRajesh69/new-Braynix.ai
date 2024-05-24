import AutoSlide from "@/components/HomePage/AutoSlide";
import Clients from "@/components/HomePage/Clients";
import DeliveryProject from "@/components/HomePage/DeliveryProject";
import Movies from "@/components/HomePage/Movies";
import ProjectDetails from "@/components/HomePage/ProjectDetails";
import Ratings from "@/components/HomePage/Ratings";
import GotProject from "@/components/HomePage/gotproject";
import ProductSlider from "@/components/HomePage/product";
import Welcome from "@/components/HomePage/welcome";
import AppBar from "@/components/common_component/Appbar";
import Footer from "@/components/common_component/Footer";
import React from "react";

function index() {
  return (
    <div>
      <AppBar />
      <Welcome />
      <Clients />
      <DeliveryProject />
      <Movies />
      <Ratings />
      <ProductSlider />
      {/* <ProjectDetails /> */}
      <AutoSlide />
      <GotProject />
      <Footer />
    </div>
  );
}

export default index;
