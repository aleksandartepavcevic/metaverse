import Image from "next/image";

import Main from "@/sections/Home/Main";
import About from "@/sections/Home/About";
import PageWrapper from "@/components/PageWrapper";
import bgGradient1 from "@/public/bg-gradient-1.webp";
import bgGradient2 from "@/public/bg-gradient-2.webp";

export default function Home() {
  return (
    <PageWrapper>
      <main className="bg-primary">
        <div className="container">
          <Main />
          <div className="absolute top-[-5vw] left-[0] w-[100vw] h-[100vw] md:w-[40vw] md:h-[40vw] blur-3xl transform-gpu ">
            <Image
              src={bgGradient1}
              alt="Background gradient"
              fill
              objectFit="contain"
              className="select-none"
            />
          </div>
          <div className="absolute top-[50vw] right-[-40vw] md:top-[-8vw] md:right-[4vw] w-[100vw] h-[40vw] md:w-[45vw] md:h-[20vw] blur-2xl transform-gpu">
            <Image
              src={bgGradient2}
              alt="Background gradient"
              fill
              objectFit="contain"
              className="select-none"
            />
          </div>
          <About />
          <About />
        </div>
      </main>
    </PageWrapper>
  );
}
