import Main from "@/sections/Home/Main";
import Image from "next/image";
import { motion } from "framer-motion";

import bgGradient1 from "@/public/bg-gradient-1.webp";
import bgGradient2 from "@/public/bg-gradient-2.webp";
import IntroOverlay from "@/components/IntroOverlay";

export default function Home() {
  return (
    <main className="bg-primary h-full overflow-x-hidden">
      <div className="container relative">
        <Main />
        <div className="absolute top-[-3vw] left-0 w-[100vw] h-[40vw] md:w-[45vw] md:h-[20vw] blur-3xl">
          <Image
            src={bgGradient1}
            alt="Background gradient"
            fill
            objectFit="contain"
          />
        </div>
        <div className="absolute top-[50vw] right-[-40vw] md:top-[-8vw] md:right-[4vw] w-[100vw] h-[40vw] md:w-[45vw] md:h-[20vw] blur-2xl">
          <Image
            src={bgGradient2}
            alt="Background gradient"
            fill
            objectFit="contain"
          />
        </div>
      </div>
      {/* <IntroOverlay /> */}
    </main>
  );
}
