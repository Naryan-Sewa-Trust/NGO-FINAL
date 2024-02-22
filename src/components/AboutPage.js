import Header from "./common/Header";
import Footer from "./common/Footer";
import PageHeader from "./common/PageHeader";
import AboutContent from "./about/AboutContent";
import { useEffect } from "react";
function AboutPage() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <Header />
      <PageHeader pagetitle="About Us" />
      <AboutContent />
      <Footer />
    </>
  );
}
export default AboutPage;
