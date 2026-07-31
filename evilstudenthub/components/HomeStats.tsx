import BannerCard from "@/components/BannerCard";

export default function HomeStats() {
  return (
    <>
      <BannerCard
        title="Notes"
        numberToShow="2,635"
        statThisMonth="+128 this week"
        backgroundColor="bg-[#e8e0ff]"
      />
      <BannerCard
        title="Classes"
        numberToShow="29"
        statThisMonth="+3 this month"
        backgroundColor="bg-[#d8f5de]"
      />
      <BannerCard
        title="Members"
        numberToShow="60"
        statThisMonth="+7 new"
        backgroundColor="bg-[#d6eaff]"
      />
    </>
  );
}
