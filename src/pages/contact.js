import React from "react";
import ContactPage from "../components/Contact";
import GetInToch from "../components/Contact/getintoch";
import AppBar from "@/components/common_component/Appbar";
import Footer from "@/components/common_component/Footer";

function contact() {
  return (
    <div>
      <AppBar />
      <ContactPage />
      <GetInToch />
      <Footer />
    </div>
  );
}

export default contact;
