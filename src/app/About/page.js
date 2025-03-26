import Navbar from "../conponents/Navbar";
import Aurora from "../../../ReactBits/Particles/Aurora";
import SeventhGeniusFooter from "../conponents/SeventhGeniusFooter";
import QuoteForm from "../conponents/QuoteForm";
import DsmDistributionSection from "../conponents/DsmDistributionSection";

const Page = () => {
  const data = [
    { id: 1, image: "/brands/6com.svg", height: 400 },
    { id: 3, image: "/brands/acer.webp", height: 300 },
    { id: 2, image: "/brands/BrilliantDragon.jpeg", height: 300 },
    { id: 4, image: "/brands/cisco.svg", height: 300 },
    { id: 5, image: "/brands/Emacs.jpeg", height: 300 },
    { id: 6, image: "/brands/Epyc.png", height: 300 },
    { id: 7, image: "/brands/hp.png", height: 200 },
    { id: 8, image: "/brands/Imation.png", height: 300 },
    { id: 9, image: "/brands/Jabra.webp", height: 200 },
    { id: 10, image: "/brands/Junifer.jpeg", height: 400 },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar on top */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Aurora/Particles Component (in the background) */}
        <div className="absolute inset-0 z-0">
          {/* <Aurora /> */}
        </div>
     
        
        {/* DSM Distribution Section */}
        <div className="relative z-10">
          <DsmDistributionSection />
        </div>
      </main>
      
      {/* Footer at the bottom */}
      <SeventhGeniusFooter />
    </div>
  );
};

export default Page;