import Image from "next/image";

interface OverviewProps {
  id: number;
  socialIcons: string;
  title: string;
  total: string;
  percentage: string;
  raisingIcon: string;
  specialClass?: string;
}

const overviewToday = [
  {
    id: 1,
    socialIcons: "/images/icon-facebook.svg",
    title: "Page Views",
    total: "87",
    percentage: "3%",
    raisingIcon: "/images/icon-up.svg",
    specialClass: "text-[#1EB589] font-bold text-sm leading-normal",
  },
  {
    id: 2,
    socialIcons: "/images/icon-facebook.svg",
    title: "Likes",
    total: "52",
    percentage: "2%",
    raisingIcon: "/images/icon-down.svg",
    specialClass: "text-[#C4032B] font-bold text-sm leading-normal",
  },
  {
    id: 3,
    socialIcons: "/images/icon-instagram.svg",
    title: "Likes",
    total: "5462",
    percentage: "2257%",
    raisingIcon: "/images/icon-up.svg",
    specialClass: "text-[#1EB589] font-bold text-sm leading-normal",
  },
  {
    id: 4,
    socialIcons: "/images/icon-instagram.svg",
    title: "Profile Views",
    total: "52k",
    percentage: "1375%",
    raisingIcon: "/images/icon-up.svg",
    specialClass: "text-[#1EB589] font-bold text-sm leading-normal",
  },
  {
    id: 5,
    socialIcons: "/images/icon-twitter.svg",
    title: "Retweets",
    total: "117",
    percentage: "303%",
    raisingIcon: "/images/icon-up.svg",
    specialClass: "text-[#1EB589] font-bold text-sm leading-normal",
  },
  {
    id: 6,
    socialIcons: "/images/icon-twitter.svg",
    title: "Likes",
    total: "507",
    percentage: "553%",
    raisingIcon: "/images/icon-up.svg",
    specialClass: "text-[#1EB589] font-bold text-sm leading-normal",
  },
  {
    id: 7,
    socialIcons: "/images/icon-youtube.svg",
    title: "Likes",
    total: "107",
    percentage: "19%",
    raisingIcon: "/images/icon-down.svg",
    specialClass: "text-[#C4032B] font-bold text-sm leading-normal",
  },
  {
    id: 8,
    socialIcons: "/images/icon-youtube.svg",
    title: "Total Views",
    total: "1407",
    percentage: "12%",
    raisingIcon: "/images/icon-down.svg",
    specialClass: "text-[#C4032B] font-bold text-sm leading-normal",
  },
]

export default function Overview() {
  return (
    <section className="flex flex-col gap-y-[1.69rem] mt-[2.88rem]">
      <h2 className="text-[#63687D] text-2xl font-bold leading-normal dark:text-white">Overview - Today</h2>
      <div className="grid gap-y-4 sm:gap-x-6 sm:gap-y-[1.88rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {
          overviewToday.map(({ id, socialIcons, title, total, percentage, raisingIcon, specialClass }: OverviewProps) => (
            <div key={id} className="w-[20.375rem] h-[7.8125rem] bg-[#F1F3FA] dark:bg-[#252B42]
                lg:w-[15.9375rem] sm:w-[17.9375rem] flex rounded-[0.3125rem] px-6 py-8 items-center justify-between">
              <div className="flex flex-col items-start justify-start gap-y-[1.44rem]">
                <h2 className="text-sm font-bold leading-normal text-[#63687D] dark:text-[#8C98C6]">{title}</h2>
                <h3 className="text-[#1D1F29] text-[2rem] leading-normal font-bold dark:text-white">{total}</h3>
              </div>
              <div className="flex flex-col items-end justify-start gap-y-10">
                <Image src={socialIcons} alt="Social Icon" width={20} height={20} />
                <div className="flex items-center gap-x-2">
                  <Image src={raisingIcon} alt="Raising Icon" width={12} height={12} />
                  <h3 className={`${specialClass}`}>{percentage}</h3>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>

  );
}