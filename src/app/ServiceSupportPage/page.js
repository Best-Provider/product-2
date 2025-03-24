// pages/service-support.js

import Navbar from "../conponents/Navbar";
import ServiceSupport from "../conponents/ServiceSupport";
import SeventhGeniusFooter from "../conponents/SeventhGeniusFooter";

export default function ServiceSupportPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      
      <main className="flex-grow">
        <ServiceSupport />
      </main>
      
      <SeventhGeniusFooter />
    </div>
  );
}