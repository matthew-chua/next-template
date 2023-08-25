//libraries
import ethers from "ethers";

//components
import NavBar from "@/components/NavBar";
import RoundButton from "@/components/RoundButton";


export default function Home() {

  return (
    <div className="flex flex-col items-center">
      <NavBar/>
      Home Page
      <RoundButton text="Round Button"/>
    </div>
  )
}
