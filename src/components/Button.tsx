import React from "react";

export default function Button(props: any) {
  return (
    <button className="text-red-300 rounded-full bg-slate-200 py-4 px-12">
      {props.text}
    </button>
  );
}
