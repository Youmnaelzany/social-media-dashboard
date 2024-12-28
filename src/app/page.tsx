import Overview from "@/components/Overview";
import TotalFollowers from "@/components/TotalFollowers";

export default function Home() {
  return (
    <main className="ml-[1.56rem] mr-6 sm:mx-20 lg:mx-[10.31rem]
      mb-[2.81rem] sm:mb-[4.69rem]">
      <TotalFollowers />
      <Overview />
    </main>
  );
}
