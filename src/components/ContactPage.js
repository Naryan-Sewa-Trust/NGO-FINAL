import Header from "./common/Header";
import Footer from "./common/Footer";
import PageHeader from "./common/PageHeader";
import ContactContent from "./contact/ContactContent";
import { useEffect } from "react";
function AboutPage() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <Header />
      <PageHeader pagetitle="Contact Us" />
      <ContactContent />
      <Footer />
    </>
  );
}
export default AboutPage;
