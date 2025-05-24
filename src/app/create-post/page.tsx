import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Bookmark,
  Bot,
  BrainCog,
  Heart,
  Image,
  MessageSquare,
  Share2,
} from "lucide-react";
import { categories } from "@/lib/categories-data";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CreatePost = () => {
  return (
    <main>
      <form action="">
        <div className="flex items-center justify-between">
          <h1 className=" font-bold text-2xl">Create Post</h1>

          <div className="flex items-center gap-5">
            <Button size={"sm"} className="bg-primaryColor" type="button">
              Preview your post
            </Button>
            <Button size={"sm"} className="bg-primaryColor" type="submit">
              Publish your post
            </Button>
          </div>
        </div>

        <section className="mt-6 flex justify-between gap-10">
          <section className=" flex-1">
            <Input
              type="text"
              name="title"
              placeholder="Enter your post title"
              className="p-2 h-[50px]"
            />

            {/* <QuillEditor name="content" /> */}
            <div className=" relative">
              <Button
                className=" absolute right-2 top-2 bg-primaryColor"
                size={"sm"}
                type="button"
              >
                <BrainCog />
                Summarize with AI
              </Button>

              <Textarea
                className=" mt-5 resize-none h-[400px]"
                placeholder="Enter your post content"
                name="content"
              ></Textarea>
            </div>

            <div className="mt-5 space-x-2 space-y-2">
              {/* list of categories */}

              {categories.map((cat, i) => (
                <Button
                  key={i}
                  name={cat.name}
                  type="button"
                  className="bg-primaryColor"
                  size={"sm"}
                >
                  {cat.name}
                </Button>
              ))}
            </div>
          </section>

          <section className="">
            <div className="relative border w-[400px] h-[300px] ">
              {/* <Input type="text" name="title" placeholder="Enter your post title" /> */}

              <Button
                className="w-full rounded-none absolute bottom-0 bg-primaryColor"
                type="button"
                size={"sm"}
              >
                <Bot />
                Enhance with AI
              </Button>
            </div>

            <div className="border w-[400px] mt-7 p-2">
              <h1 className="font-bold text-xl">Post Preview</h1>
              <p className="text-sm mt-1 text-gray-600">
                See what your post looks like
              </p>

              <div>
                <div className="mt-4 flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <h1 className="font-bold text-sm">Current User</h1>
                </div>

                {/* image preview */}
                <div className="bg-gray-300 w-full h-[200px] flex items-center justify-center my-2">
                  <Image size={40} />
                </div>

                <p className=" text-sm">
                  Your post content preview will appear here. This is a
                  placeholder to show the general layout and styling of your
                  text.
                </p>

                <p className=" text-gray-500 text-sm my-3">
                  #Tech #Life #Social #Nature
                </p>

                <div>
                  <ul className="flex items-center gap-5">
                    <li className="flex items-center gap-1">
                      <Heart size={17} color="gray" />
                      <p className="text-xs text-gray-500">0</p>
                    </li>

                    <li className="flex items-center gap-1">
                      <MessageSquare size={17} color="gray" />
                      <p className="text-xs text-gray-500">0</p>
                    </li>

                    <li className="flex items-center gap-1">
                      <Share2 size={17} color="gray" />
                      <p className="text-xs text-gray-500">0</p>
                    </li>

                    <li className="flex items-center gap-1">
                      <Bookmark size={17} color="gray" />
                      <p className="text-xs text-gray-500">0</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </section>
      </form>
    </main>
  );
};

export default CreatePost;
