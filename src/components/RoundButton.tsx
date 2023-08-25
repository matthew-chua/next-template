import React from "react";

export default function RoundButton(props: any) {
  return (
    <button className="text-white rounded-full bg-red-500 py-2 px-12 hover:bg-red-800">
      {props.text}
    </button>
  );
}
