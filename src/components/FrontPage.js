import Header from "./common/Header";
import Footer from "./common/Footer";
import HomeBanner from "./frontpage/Banner";
import About from "./frontpage/About";
import School from "./frontpage/School";
import CSP from "./csp/CSP";
import Donate from "./donate/Donate";
import Team from "./team/Team";
import { useEffect } from "react";

function FrontPage() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <Header />
      <HomeBanner />
      <About />
      <School />
      <CSP />
      <Donate />
      <Team />
      <Footer />
    </>
  );
}
export default FrontPage;
