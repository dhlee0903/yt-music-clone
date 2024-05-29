"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import IconButton from "./IconButton";

const Logo = () => {
  const { push } = useRouter();

  const onClickLogo = () => {
    push("/");
  };

  const onClickMenu = () => {};

  return (
    <section className="flex flex-row gap-4 items-center">
      <IconButton
        onClickIcon={onClickMenu}
        icon={<RxHamburgerMenu size={24} />}
      />
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image alt="logo" width={100} height={30} src={"/main-Logo.svg"} />
      </div>
    </section>
  );
};

export default Logo;
