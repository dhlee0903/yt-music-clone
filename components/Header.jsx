"use client";

import UserIcon from "@/components/UserIcon";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import PagePadding from "@/components/PagePadding";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";

const HeaderDrawer = ({ children }) => {
  return (
    <Drawer direction="left">
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        {/* 로고 */}
        {/* 네비게이션 UI + 재생목록 */}
        <div className="py-3">
          <div className="px-3">
            <Logo />
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const Header = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = headRef?.current?.scrollTop;
      console.log(">scrollValue", scrollValue);
      setIsScrolled(scrollValue !== 0);
    };

    headRef?.current?.addEventListener("scroll", handleScroll)
    return () => {
      headRef?.current?.removeEventListener("scroll", handleScroll)
    };
  }, []);

  return (
    <header ref={headRef} className=" relative overflow-y-auto w-full h-full">
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
      <section className=" sticky top-0 left-0 z-10">
        <PagePadding>
          <div className="h-[64px] flex flex-row justify-between items-center">
            <article
              className="h-[42px] min-w-[480px] hidden lg:flex flex-row items-center bg-[rgba(0,0,0,0.14)] 
            rounded-2xl px-[16px] gap-[16px]"
            >
              <div>
                <FiSearch size={26} />
              </div>
              <input
                className="h-[42px] w-full bg-transparent"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
                type="text"
              />
            </article>
            <HeaderDrawer>
              <article className="lg:hidden">
                <Logo />
              </article>
            </HeaderDrawer>
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
