"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function NavBar() {
  const user = {
    image: "/assets/images/user.jpeg",
    name: "Dileepa Nuwan",
  };

  const links = {
    home: { name: "Home", url: "/" },
    automation: { name: "Automation", url: "/automation" },
    postpool: { name: "Post Pool", url: "/postpool" },
    settings: { name: "Settings", url: "/settings" },
  };

  return (
    <nav className="flex z-41 w-screen sticky top-0 rounded-xl items-center justify-between bg-[#FBFBFB] py-2 px-8 shadow-md shadow-black/5 lg:flex-wrap lg:justify-between lg:py-4">
      <div className="flex gap-3 items-center">
        <Link href="/">
          <Image
            src={user.image !== "" ? user.image : "assets/images/logo.svg"}
            alt="afmin companion logo"
            height={40}
            width={40}
            className="object-contain rounded-full border-2 border-sky-500"
          />
        </Link>
        <p className="text-lg font-semibold text-center">
          {user.name !== "" ? user.name : "Admin Companion"}
        </p>
      </div>
      <div className="flex justify-end gap-8">
        <Link
          href={links.home.url}
          className="text-md font-semibold hover:text-sky-400"
        >
          {links.home.name}
        </Link>
        <Link
          href={links.postpool.url}
          className="text-md font-semibold hover:text-sky-400"
        >
          {links.postpool.name}
        </Link>
        <Link
          href={links.automation.url}
          className="text-md font-semibold hover:text-sky-400"
        >
          {links.automation.name}
        </Link>
        <Link
          href={links.settings.url}
          className="text-md font-semibold hover:text-sky-400"
        >
          {links.settings.name}
        </Link>
      </div>
    </nav>
  );
}
