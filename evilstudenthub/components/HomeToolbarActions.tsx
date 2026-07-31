import { CiCalendar } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import BannerButton from "@/components/BannerButton";

export default function HomeToolbarActions() {
  return (
    <>
      <BannerButton label="Calendar" icon={CiCalendar} />
      <BannerButton label="Notifications" icon={IoIosNotificationsOutline} />
      <BannerButton
        label="Profile"
        text="KP"
        className="bg-white hover:bg-white/90"
      />
    </>
  );
}
