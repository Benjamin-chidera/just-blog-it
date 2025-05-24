"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import logo from "../../../../public/just-blog-it.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const router = useRouter();
  return (
    <main className=" flex items-center justify-between w-9/12 mx-auto py-5">
      <div>
        <Link href={"/"} className="font-bold">
          <Image
            src={logo}
            height={300}
            width={300}
            alt="JUSTBLOGIT"
            className="w-[70px] h-[70px]"
          />
          {/* JUSTBLOGIT */}
        </Link>
      </div>

      <div className="lg:flex hidden items-center gap-10 font-bold">
        <Link href={"/"}>Home</Link>
        <Link href={"/search"}>Search</Link>
        <Link href={"/bookmarks"}>Bookmarks</Link>
      </div>

      <div className=" lg:flex items-center gap-5 hidden">
        <Button
          className=" bg-primaryColor font-bold"
          size={"sm"}
          onClick={() => router.push("/create-post")}
        >
          <Plus />
          Create Post
        </Button>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={"/search"}>Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/bookmarks"}>Profile</Link>
              </DropdownMenuItem>

              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* this is for the mobile device navbar */}
      <section className=" lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/"}>Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/search"}>Search</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/bookmarks"}>Bookmarks</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                className=" bg-primaryColor font-bold"
                size={"sm"}
                onClick={() => router.push("/create-post")}
              >
                <Plus />
                Create Post
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </main>
  );
};
