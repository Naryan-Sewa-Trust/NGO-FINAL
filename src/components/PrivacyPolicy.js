import React, { useEffect } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import PageHeader from "./common/PageHeader";
import Privacy from "./contact/Privacy";
const PrivacyPolicy = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div>
      <Header />
      <PageHeader pagetitle="Privacy Policy" />
      <Privacy />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
