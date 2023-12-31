import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1620358594775-050d831306a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lZ2hhbGF5YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
