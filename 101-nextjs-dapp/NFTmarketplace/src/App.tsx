import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
// 引入这个库的终端图标罢了
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function App() {
  const [Walletaddress, setWalletAddress] = useState(0);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    getWalletaddress();
  });

  const getWalletaddress = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      // 获取metamask钱包地址
      const account = accounts[0];
      setWalletAddress(account);
    } else {
      setShowModal(true);
    }
  };
  // getWalletaddress()
  return <>{showModal ? <ThisAlert setShowModal={setShowModal} /> : <><Main></Main></>}</>;
}

const ThisAlert = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
    <Alert variant="destructive" onClick={() => setShowModal(false)}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>   寄了!!!  </AlertTitle>
      <AlertDescription>
        快去连接metemask钱包!!!
      </AlertDescription>
    </Alert>
    </div>
  );
};

const Main=()=>{
  return(
    <div>
    <Navbar></Navbar>
    </div>
  )
}

export default App;
