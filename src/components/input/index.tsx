import React from "react";

type Props = {
  id?: string;
  name: string;
  placeholder: string;
  type: "email" | "password" | "text" | "url";
  iconLeft?: React.ReactNode;
};

export default function index({
  id,
  name,
  placeholder,
  type,
  iconLeft,
}: Props) {
  return (
    <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
      {iconLeft}
      <input
        id={id}
        className="pl-2 w-full outline-none border-none"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
