import { useState } from "react";
import PhoneContainer from "./components/PhoneContainer";
import Nav from "./components/Nav";
import HeroIntro from "./components/HeroIntro";
import Couple from "./components/Couple";
import Events from "./components/Celebrations";
import Venue from "./components/Venue";
import Rsvp from "./components/Rsvp";
import Countdown from "./components/Countdown";
import ThankYou from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  const [isIntroEnded, setIsIntroEnded] = useState(false);

  return (
    <PhoneContainer>
      <div className="min-h-screen overflow-x-clip relative">
        <Nav />
        <main>
          <HeroIntro onIntroEnd={() => setIsIntroEnded(true)} />
          <Couple />
          <Events />
          <Venue />
          <Rsvp />
          <Countdown />
          <ThankYou />
        </main>

        {/* Floating background wedding music player: only appears in bottom-right after intro video ends */}
        <MusicPlayer isVisible={isIntroEnded} src="music/Prem-mandir-audio.mp3" />
      </div>
    </PhoneContainer>
  );
}
