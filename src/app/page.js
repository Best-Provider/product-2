import Aurora from "../../ReactBits/Particles/Aurora";
import Navbar from "../../src/app/conponents/Navbar";
import HeroSection from "./conponents/HeroSection";
import InnovationSteps from "./conponents/InnovationSteps";
import ScrollVelocity from "../../ReactBits/Particles/ScrollVelocity";
import CircularGallery from "../../ReactBits/Particles/CircularGallery";
import CorporateWebsiteComponent from "./conponents/CorporateWebsiteComponent";
import SeventhGeniusFooter from "./conponents/SeventhGeniusFooter";
import FlowingMenu from "../../ReactBits/flowingMenu";

const demoItems = [
  {
    text: "IT Infrastructure Solutions",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aXQlMjBpbmZyYXN0cnVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    text: "Cloud & Managed Services",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    text: "Cybersecurity Solutions",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    text: "Digital Transformation",
    image:
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpZ2l0YWwlMjB0cmFuc2Zvcm1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    text: "Enterprise Support",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaCUyMHRlYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&h=400&q=80",
  },
];

export default function Home() {
  const velocity = 100;
  return (
    <>
      <Navbar />
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        {/* Particles Component (in the background) */}
        {/* <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        /> */}

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
      <div
        className="hidden md:block"
        style={{ height: "600px", position: "relative" }}
      >
        <FlowingMenu items={demoItems} />
      </div>
      <div className="mt-40">
        <SeventhGeniusFooter />
      </div>
    </>
  );
}
