import ColorThief from "colorthief";
import React, { useEffect, useRef } from "react";
import imgSvg from "../assets/2.png";

const colorThief: any = new ColorThief();
export default function ColorImg(): JSX.Element {
  // const imgUrl =
  //   "https://y.qq.com/music/photo_new/T002R300x300M000000vtKmF3OEIbF_2.jpg?max_age=2592000";
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete) {
      img.crossOrigin = "anonymous"; // 设置 crossOrigin 属性
      const co = colorThief.getColor(img);
      console.log("color",co);
    } else {
      img?.addEventListener("load", function () {
        colorThief.getColor(img);
      });
    }
  }, []);

  return (
    <div className="circle">
      <img ref={imgRef} width={300} src={imgSvg} alt="music img" />
    </div>
  );
}
