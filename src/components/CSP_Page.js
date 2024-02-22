import Header from "./common/Header";
import Footer from "./common/Footer";
import PageHeader from "./common/PageHeader";
import CSP from "./csp/CSP";
import { useEffect } from "react";
function CausesPage() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <Header />
      <PageHeader pagetitle="Child Sponsorship Program" />
      <CSP />
      <Footer />
    </>
  );
}
export default CausesPage;
