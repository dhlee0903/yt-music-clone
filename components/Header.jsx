import UserIcon from "@/components/UserIcon";
import Image from "next/image";
import React from "react";
import PagePadding from "@/components/PagePadding";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Header = ({ children }) => {
  return (
    <header className=" relative overflow-y-auto w-full h-full">
      {/* bgSection */}
      <section className=" absolute top-0 w-full">
        <div className=" relative h-[400px] w-full">
          <Image
            alt="mediaItem"
            className=" object-cover"
            fill
            src="https://images.unsplash.com/photo-1715553176007-31923bd14f78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className=" absolute h-[400px] top-0 bg-black opacity-40 w-full h-full"></div>
        <div className=" absolute h-[400px] top-0 bg-gradient-to-t from-black w-full"></div>
      </section>
      {/* searchSection */}
      <section className=" sticky">
        <PagePadding>
          <div className="h-[64px] flex flex-row justify-between items-center">
            <article
              className="h-[42px] min-w-[480px] flex flex-row items-center bg-[rgba(0,0,0,0.14)] 
            rounded-2xl px-[16px] gap-[16px]"
            >
              <div>
                <FiSearch size={26} />
              </div>
              <input className="h-[42px] w-full bg-transparent" placeholder="노래, 앨범, 아티스트, 팟캐스트 검색" type="text" />
            </article>
            <article className="flex flex-row gap-6 items-center">
              <FaChromecast size={24} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className=" absolute">{children}</section>
    </header>
  );
};

export default Header;
