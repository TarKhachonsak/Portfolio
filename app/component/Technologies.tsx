import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";

export default function Technologies() {
  return (
    <>
      <div className="pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
          <div className="p-4">
            <TbBrandNextjs className="text-7xl" />
          </div>
          <div className="p-4">
            <SiTailwindcss className="text-7xl text-cyan-400" />
          </div>
          <div className="p-4">
            <TbBrandTypescript  className="text-7xl text-cyan-400"/>
          </div>
          <div>
            <TbBrandHtml5 className="text-7xl text-red-400"/>
          </div>
          <div>
            <TbBrandCss3 className="text-7xl text-[#2965f1]"/>
          </div>
          <div>
            <TbBrandJavascript className="text-7xl text-yellow-400"/>
          </div>
        </div>
      </div>
    </>
  );
}
