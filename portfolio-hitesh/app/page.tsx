import Image from "next/image";
import Navbar from "./Components/HeroPage/Navbar";

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
          className="border-gray-200 border-r  border-l w-xl h-[30vh]"
        ></div>
        {/* Profile */}
        <div className="flex flex-1 w-full  flex-col items-center border-t border-b  border-neutral-100 dark:bg-black sm:items-start">
          <div className="border-r items-baseline  flex w-xl mx-auto border-neutral-200 border-l">
            <div className="h-40 w-40 shrink-0  border-r border-neutral-200">
              {/* <Image /> */}
            </div>{" "}
            <div className=" w-full">
              {" "}
              <div className="border-neutral-200 px-4 border-t border-b h-fit w-full ">
                <p className="font-bold text-3xl">Hitesh Suthar</p>
              </div>
              <div className="border-neutral-200 px-4  h-fit w-full ">
                <p className="font-bold text-3xl">Hitesh Suthar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
