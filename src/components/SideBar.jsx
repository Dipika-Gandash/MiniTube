import React from "react";
import {
  Home,
  PlaySquare,
  Tv,
  User,
  History,
  Clock,
  ThumbsUp,
  CircleUser,
  Flame,
  Music,
  Gamepad2,
  Newspaper,
  Trophy,
  Settings,
  HelpCircle,
  MessageSquare,
} from "lucide-react";
import SideBarItem from "./SideBarItem";

const SideBar = () => {
  return (
    <aside className="w-64 h-full shadow-md overflow-y-auto bg-white">
      <SideBarItem icon={Home} label="Home" />
      <SideBarItem icon={PlaySquare} label="Shorts" />
      <SideBarItem icon={Tv} label="Subscriptions" />

      <hr className="my-3 border-gray-600"/>

      <p className="px-4 mt-4 mb-2 text-md font-bold text-gray-900 uppercase">
        You
      </p>

      <SideBarItem icon={User} label="Your Channel" />
      <SideBarItem icon={History} label="History" />
      <SideBarItem icon={Clock} label="Watch Later" />
      <SideBarItem icon={ThumbsUp} label="Liked Videos" />

      <hr className="my-3 border-gray-600" />

      <p className="px-4 mt-4 mb-2 text-md font-bold text-gray-900 uppercase">
        Subscriptions
      </p>

      <SideBarItem icon={CircleUser} label="CodeWithHarry" />
      <SideBarItem icon={CircleUser} label="Apna College" />
      <SideBarItem icon={CircleUser} label="Fireship" />
      <SideBarItem icon={CircleUser} label="Traversy Media" />
      <SideBarItem icon={CircleUser} label="Web Dev Simplified" />
      <SideBarItem icon={CircleUser} label="FreeCodeCamp" />

      <hr className="my-3 border-gray-600" />

      <p className="px-4 mt-4 mb-2 text-md font-bold text-gray-900 uppercase">
        Explore
      </p>

      <SideBarItem icon={Flame} label="Trending" />
      <SideBarItem icon={Music} label="Music" />
      <SideBarItem icon={Gamepad2} label="Gaming" />
      <SideBarItem icon={Newspaper} label="News" />
      <SideBarItem icon={Trophy} label="Sports" />
      <hr className="my-3 border-gray-600" />

      <SideBarItem icon={Settings} label="Settings" />
      <SideBarItem icon={HelpCircle} label="Help" />
      <SideBarItem icon={MessageSquare} label="Send Feedback" />
    </aside>
  );
};

export default SideBar;
