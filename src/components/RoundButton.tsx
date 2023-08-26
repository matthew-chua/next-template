import React from "react";

export default function RoundButton({title, onClick}: {title: string, onClick?: ()=>void}) {
  return (
    <button onClick={onClick} className="text-white rounded-full bg-red py-2 px-12 hover:bg-red-hover transition active:bg-red-active active:transition-none">
      {title}
    </button>
  );
}
