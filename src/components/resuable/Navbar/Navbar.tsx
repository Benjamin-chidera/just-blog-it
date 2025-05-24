"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export const Navbar = () => {
  const router = useRouter();
  return (
    <main className=" flex items-center justify-between w-9/12 mx-auto py-5">
      <div>
        <Link href={"/"} className="font-bold">
          JUSTBLOGIT
        </Link>
      </div>

      <div className="flex items-center gap-10 font-bold">
        <Link href={"/"}>Home</Link>
        <Link href={"/search"}>Search</Link>
        <Link href={"/bookmarks"}>Bookmarks</Link>
      </div>

      <div className=" flex items-center gap-5">
        <Button
          className=" bg-primaryColor font-bold"
          size={"sm"}
          onClick={() => router.push("/create-post")}
        >
          <Plus />
          Create Post
        </Button>

        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </main>
  );
};
