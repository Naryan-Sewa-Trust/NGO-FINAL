import Header from "./common/Header";
import Footer from "./common/Footer";
import Donate from "./donate/Donate";
import PageHeader from "./common/PageHeader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function CausesPage() {
  return (
    <>
      <ToastContainer limit={1} position="bottom-center" />
      <Header />
      <PageHeader pagetitle="Donate" />
      <Donate />
      <Footer />
    </>
  );
}
export default CausesPage;
