import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HomeHero = () => {
  const textRef = useRef(null);
  useEffect(() => {
    const letters = textRef.current.querySelectorAll(".char");

    gsap.fromTo(
      letters,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.2,
      },
    );
  }, []);

  const blog = "Blog";
  const app = "App";

  return (
    <section className="w-full min-h-[70vh] flex m-2 mb-4 rounded-sm items-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 ">
      <div className="max-w-6xl px-8">
        {/* App Name */}
        <h1
          ref={textRef}
          className="text-6xl my-6 font-extrabold tracking-tight"
        >
          {/* Blog (white) */}
          {blog.split("").map((char, index) => (
            <span
              key={`blog-${index}`}
              className="char inline-block text-white"
            >
              {char}
            </span>
          ))}

          {/* App (red) */}
          {app.split("").map((char, index) => (
            <span
              key={`app-${index}`}
              className="char inline-block text-red-500"
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <h2 className="text-2xl text-gray-300 font-medium mb-6 max-w-3xl">
          Write. Publish. Share your ideas with others.
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-10">
          A full-stack blogging platform built with a production mindset —
          focused on clean architecture, secure authentication, and real-world
          development practices. This project allows users to create, manage,
          and publish blog posts using a modern tech stack.
        </p>

        {/* Highlights */}
        <div className="flex gap-6 text-gray-300 font-medium">
          <span className="px-4 py-2 border border-gray-700 rounded-full">
            Full-Stack
          </span>
          <span className="px-4 py-2 border border-gray-700 rounded-full">
            Secure Auth
          </span>
          <span className="px-4 py-2 border border-gray-700 rounded-full">
            Scalable Backend
          </span>
          <span className="px-4 py-2 border border-gray-700 rounded-full">
            Cloud Storage
          </span>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
