"use client";
import Navbar from "./Components/HeroPage/Navbar";
import Profile from "./Components/Profile/Profile";
export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black mt-2">
        {/* Header */}
        <Navbar />
        {/* Block */}
        <div
          style={{
            backgroundColor: "#fff",
            backgroundImage: "radial-gradient(#dcdcdc 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
          className="border-gray-200 border-r  border-l w-2xl h-50"
        ></div>
        {/* Profile */}
        <Profile />
      </div>
    </>
  );
}
