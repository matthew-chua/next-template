import React from "react";

export default function Button(props: any) {
  return (
    <button className="text-white rounded-md bg-red-500 py-2 px-8 hover:bg-red-800">
      {props.text}
    </button>
  );
}
