import { ModeToggle } from "./ModeToggle";
import { Separator } from "@/components/ui/separator"

export default function Header() {
  return (
    <header className="flex flex-col ml-[1.56rem] mr-6 sm:ml-[2.44rem] sm:mr-10 lg:mx-[10.31rem] mt-9 gap-8">
      <div className="flex flex-row items-center justify-between">
        {/* The Dashboard Title & The Total Followers */}
        <div className="">
          <h1 className="text-[#1D1F29] text-2xl sm:text-[1.75rem] leading-normal font-bold
           dark:text-white">
            Social Media Dashboard
          </h1>
          <h2 className="text-sm text-[#63687D] font-bold leading-normal dark:text-[#8C98C6]">
            Total Followers: 23,004
          </h2>
        </div>
        {/* The Dark Mode Toggle */}
        <ModeToggle />
      </div>
      {/* The Horizontal Line */}
      <Separator />
    </header>
  );
}