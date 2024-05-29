"use client";
import React, { useMemo } from "react";
import { GoHome } from "react-icons/go";
import { FiPlus, FiMusic, FiCompass } from "react-icons/fi";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

const Navigator = () => {
  const pathname = usePathname();
  const routes = useMemo(() => {
    return [
      {
        icon: <GoHome size={20} />,
        label: "홈",
        isActive: pathname === "/",
        href: "/",
      },
      {
        icon: <FiCompass size={20} />,
        label: "둘러보기",
        isActive: pathname === "/explore",
        href: "/explore",
      },
      {
        icon: <FiMusic size={20} />,
        label: "보관함",
        isActive: pathname === "/library",
        href: "/library",
      },
    ];
  }, [pathname]);

  return (
    <div>
      <section>
        {routes.map((route) => {
          return (
            <Link key={route.label} href={route.href}>
              <div className="flex flex-row gap-4">                
                {route.icon}
                <span>{route.label}</span>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default Navigator;
