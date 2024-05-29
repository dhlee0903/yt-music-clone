"use client"
import Image from "next/image";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
const Logo = () => {

    const onClickLogo = () =>{
        // home 이동

    };

  return (
    <section className="flex flex-row gap-4 items-center">
      <div>
        <RxHamburgerMenu size={24} />
      </div>
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image alt="logo" width={100} height={30} src={"/main-Logo.svg"} />
      </div>
    </section>
  );
};

export default Logo;
