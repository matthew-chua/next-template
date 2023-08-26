"use client"
//libraries
import ethers from "ethers";

//components
import RoundButton from "@/components/RoundButton";



export default function Home() {

  const buttonHandler = () => {
    console.log("delete me")
  }

  return (
    <div className="flex flex-col items-center">
      Home Page
      <div className ="bg-blue">Test</div>
      <RoundButton onClick={buttonHandler} title="Round Button"/>
    </div>
  )
}
