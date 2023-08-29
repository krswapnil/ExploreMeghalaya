import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1635349031615-03675ab566d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lZ2hhbGF5YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        title="Explore 
         Meghalaya"
        text="The Scotland of the east"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      {/* <AboutUs /> */}
      <Footer />
    </>
  );
}
export default Home;
