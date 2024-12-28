import Image from 'next/image'

interface TotalFollowersProps {
  id: number;
  socialIcons: string;
  accountName: string;
  followers: string;
  raisingIcon: string;
  todayFollowers: string;
  specialClass?: string;
  border: string;
}
const totalFollowersBox = [
  {
    id: 1,
    socialIcons: "/images/icon-facebook.svg",
    accountName: "@nathanf",
    followers: "1987",
    raisingIcon: "/images/icon-up.svg",
    todayFollowers: "12 Today",
    specialClass: "text-[#1EB589] font-bold text-sm leading-normal",

    border: "2px solid #178FF5"
  },
  {
    id: 2,
    socialIcons: "/images/icon-twitter.svg",
    accountName: "@nathanf",
    followers: "1044",
    raisingIcon: "/images/icon-up.svg",
    todayFollowers: "99 Today",
    specialClass: "text-[#1EB589] font-bold text-sm leading-normal",

    border: "2px solid #1DA1F2"

  },
  {
    id: 3,
    socialIcons: "/images/icon-instagram.svg",
    accountName: "@realnathanf",
    followers: "11k",
    raisingIcon: "/images/icon-up.svg",
    todayFollowers: "1099 Today",
    specialClass: "text-[#1EB589] font-bold text-sm leading-normal",

    border: "2px solid #EE877E"
  },
  {
    id: 4,
    socialIcons: "/images/icon-youtube.svg",
    accountName: "Nathan F.",
    followers: "8239",
    raisingIcon: "/images/icon-down.svg",
    todayFollowers: "144 Today",
    specialClass: "text-[#C4032B] font-bold text-sm leading-normal",
    border: "2px solid #C4032B"
  }
]

export default function TotalFollowers() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
     gap-y-6 sm:gap-x-[1.87rem] sm:gap-y-6 mt-10 items-center justify-center">
      {
        totalFollowersBox.map(({ id, socialIcons, accountName, followers, raisingIcon, todayFollowers, specialClass, border }: TotalFollowersProps) => (
          <div key={id} className="w-[20.375rem] h-[13.5rem] bg-[#F1F3FA] dark:bg-[#252B42]
           lg:w-[15.9375rem] sm:w-[17.9375rem] flex flex-col items-center justify-center rounded-[0.3125rem]" style={{ borderTop: border }} >
            <div className="flex items-center mb-[1.87rem] gap-x-2">
              <Image src={socialIcons} alt="Social Icon" width={20} height={20} />
              <h3 className="text-[#63687D] text-xs leading-none font-bold dark:text-[#8C98C6]">
                {accountName}
              </h3>
            </div>
            <div className="mb-[1.56rem] flex flex-col items-center justify-center text-center gap-y-2">
              <h2 className="text-[#1D1F29] text-[3.5rem] leading-[3rem] font-bold
               dark:text-white tracking-[-0.125rem]">
                {followers}
              </h2>
              <p className="text-[#63687D] text-xs font-normal leading-normal uppercase
               tracking-[0.3125rem] dark:text-[#8C98C6]">
                {todayFollowers}
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <Image src={raisingIcon} alt="Raising Icon" width={12} height={12} />
              <p className={specialClass}>
                {todayFollowers}
              </p>
            </div>
          </div>
        ))
      }
    </section >
  )
}