//libraries
import ethers from "ethers";

//components
import Button from "@/components/Button";

export default function Home() {

  const connectWalletHandler = async () => {
    
  }
  return (
    <div className="flex flex-col items-center">
      <Button onClick={connectWalletHandler} text="Connect Wallet"/>
    </div>
  )
}
