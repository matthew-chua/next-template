import React from "react";

export default function Button({title, onClick}: {title: string, onClick?: ()=>void}) {
  return (
    <button onClick={onClick} className="text-white rounded-md bg-red py-2 px-8 hover:bg-red-hover transition active:bg-red-active active:transition-none ">
      {title}
    </button>
  );
}
