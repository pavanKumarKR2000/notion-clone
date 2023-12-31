import Footer from "./_components/Footer";
import Heading from "./_components/Heading";
import Heroes from "./_components/Heroes";

export default function LandingPage() {
  return (
    <div className="flex min-h-full flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-6">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
}
