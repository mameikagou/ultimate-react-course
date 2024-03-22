import { useState, useEffect, createContext } from "react";
import Layout from "./Layout";
import { DoRequest } from "@/apis/http";
import axios from "axios";

import MySearch from "@pages/Search";

export const SQLFrame = createContext([]);

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}
// 给子组件传递数据, 父传子'

export default function SelectFromMysql() {
  // useState
  const [jsonData, setJsonData] = useState<DataType[]>([
    // {
    //   key: "1",
    //   name: "John Brownnnnnn",
    //   age: 32,
    //   address: "New York No. 1 Lake Park",
    //   tags: ["nice", "developer"],
    // },
    // {
    //   key: "2",
    //   name: "Jim Greehhhhn",
    //   age: 42,
    //   address: "London No. 1 Lake Park",
    //   tags: ["loser"],
    // },
    // {
    //   key: "3",
    //   name: "Joe6666 Black",
    //   age: 32,
    //   ad dress: "Sydney No. 1 Lake Park",
    //   tags: ["cool", "teacher"],
    // },
  ]);

  useEffect(() => {
    // async function fetchData() {
    //   const resp = await DoRequest("/getLabIDandSerialNumber", "get", null);
    //   setJsonData([resp.data, ...jsonData]); // 注意语法,在一个数组里面,  [新数据, ...老数据]
    //   console.log(resp.data);
    // }
    // fetchData();
    const apiurl = "http://127.0.0.1:4523/m1/3607153-0-default/hlq";
    const Token = localStorage.getItem("Token");

    async function getHardware() {
      axios
        .get(apiurl, {
          headers: {
            Authorization: `Bearer ${Token}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setJsonData([response.data, ...jsonData]);
        })
        .catch((error) => {
          console.error("Axios error:", error);
        });
    }
    getHardware();
  }, [
    // jsonData
  ]);

  return (
    <>
      <h4>Select From Mysql</h4>
      <SQLFrame.Provider value={jsonData}>
        <MySearch />
        <Layout />
      </SQLFrame.Provider>
    </>
  );
}
