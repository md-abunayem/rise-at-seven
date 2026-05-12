import "./App.css";
import AnnouncementBar from "./components/layout/AnnouncementBar";
import Footer from "./components/layout/Footer";
import Agencies from "./components/sections/Agencies";
import Hero from "./components/sections/Hero";
import ShortStory from "./components/sections/ShortStory";
import CoreServices from "./components/sections/CoreServices"; 
import ShortTheme from "./components/sections/ShortTheme";
import NewsSection from "./components/sections/NewsSection";
import StorySequence from "./components/sections/StorySequence";
import FeaturedWork from "./components/sections/FeaturedWork";
import MarqueeText from "./components/ui/MarqueeText";
import { useState } from "react";
function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-900 ">
      <AnnouncementBar openMenu={openMenu}/>

      <main>
        {/* Hero Section */}
        <Hero OpenMenu={openMenu} setOpenMenu={setOpenMenu}/>
      </main>
      <Agencies></Agencies>
      <ShortStory></ShortStory>
      <CoreServices></CoreServices>
      <FeaturedWork></FeaturedWork>
      <ShortTheme></ShortTheme>
      <StorySequence></StorySequence>
      <NewsSection></NewsSection>
      <MarqueeText></MarqueeText>
      <Footer></Footer>
    </div>
  );
}

export default App;
