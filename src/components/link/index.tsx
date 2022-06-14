import React from "react";

type Props = {
  href?: string;
  children: React.ReactNode;
};

export default function index({ href = "#", children }: Props) {
  return (
    <a
      href={href}
      className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
    >
      {children}
    </a>
  );
}
