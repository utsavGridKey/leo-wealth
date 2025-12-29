import AboutUs from "@/components/AboutUs";
import FourthAboutUs from "@/components/FourthAboutUs";
import SecondAboutUs from "@/components/SecondAboutUs";
import ThirdAboutUs from "@/components/ThirdAboutUs";

export default function About() {
  return (
    <main className="overflow-auto">
      <AboutUs />
      <SecondAboutUs />
      <ThirdAboutUs />
      <FourthAboutUs />
    </main>
  );
}
