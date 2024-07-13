import TimelineSVG from "./_components/timeline";

export default function Home() {
  return (
    <main className="relative w-full h-[100dvh] flex flex-col gap-16 md:gap-32">
      <Hero />
      <div className="w-full h-full flex justify-center items-center">
        <TimelineScroll />
      </div>
    </main>
  );
}

const TimelineScroll = () => {
  return (
    <div className="flex justify-center items-center w-full max-h-[400px] overflow-hidden">
      <div
        className="flex justify-center items-center w-full"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
          transformStyle: "preserve-3d",
          transform: "rotateX(65deg)",
        }}
      >
        <TimelineSVG />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="flex flex-col mt-[15dvh] ">
      <h1 className="relative text-5xl text-cyan-500 md:text-5xl text-center tracking-tight font-semibold">
        Semper.dev
      </h1>

      <div className="flex justify-center items-center  gap-5 mt-3 text-sm">
        <a
          href="https://github.com/LukaTizic"
          target="_blank"
          className="px-3 py-1 rounded border  border-cyan-500 bg-background"
        >
          Github
        </a>
      </div>
    </div>
  );
};
