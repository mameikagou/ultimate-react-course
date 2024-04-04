

import { Button } from "./ui/button"

export const Navbar=()=>{
    return(
        // 设置最大宽度; 使用margin auto来使其居中和浮动到右边; 
        <nav className="bg-black ml-auto mr-auto flex max-w-screen-xl">
            <div className="text-white leading-10 pl-2">NFT Marketplace</div>
            <div className="ml-auto">
                <Button className="bg-sky-500">Connect Wallet</Button>
            </div>
        </nav>
    )
}