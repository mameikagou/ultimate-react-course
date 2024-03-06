/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

const Cards = () => {
  const data = [
    { index: 1, name: "111", close: "222" },
    { index: 2, name: "111", close: "222" },
    { index: 3, name: "111", close: "222" },
    { index: 4, name: "111", close: "222" },
    { index: 5, name: "111", close: "222" },
    { index: 6, name: "111", close: "222" },
  ];
  const dataStyles: React.CSSProperties = {
    width: "100px",
    height: "100px",
    backgroundColor: "red",

    lineHeight: "100px",
    textAlign: "center",
  };
  const wrapStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };
  const selectStyle: React.CSSProperties = {
    ...dataStyles,
    // 后面覆盖前面
    backgroundColor: "green",
  }
  const [openStates, setOpenStates] = useState(false);
  const [selectIndex, setSelectIndex] = useState(1);
  return (
    <div style={wrapStyle}>
      {/* // eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {data.map((item, _) => {
        return (
          <div
            onClick={() => setSelectIndex(item.index)}
            key={item.index}
            style={selectIndex===item.index ? selectStyle : dataStyles}
          >
            {selectIndex === item.index ? item.name : item.close}
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
