import Aurora from "../../ReactBits/Particles/Aurora";
import Navbar from "../../src/app/conponents/Navbar";
import HeroSection from "./conponents/HeroSection";
import InnovationSteps from "./conponents/InnovationSteps";
import ScrollVelocity from "../../ReactBits/Particles/ScrollVelocity";
import CircularGallery from "../../ReactBits/Particles/CircularGallery";
import CorporateWebsiteComponent from "./conponents/CorporateWebsiteComponent";
import SeventhGeniusFooter from "./conponents/SeventhGeniusFooter";


export default function Home() {

  const velocity = 100;
  return (
    <>
      <Navbar />
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        {/* Particles Component (in the background) */}
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />

        {/* Hero Section (positioned above particles with z-index) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 10,
          }}
        >
          <HeroSection />
        </div>
      </div>
      <InnovationSteps />

      <div className="mt-30">
        <ScrollVelocity
          texts={["SparewarePro", "SparewarePro"]}
          velocity={velocity}
          className="custom-scroll-text"
        />
      </div>

      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>

      <div>
        <CorporateWebsiteComponent />
      </div>
      <div className="mt-40">
        <SeventhGeniusFooter/>
      </div>
    </>
  );
}
