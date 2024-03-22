import { AudioOutlined } from "@ant-design/icons";
import React from "react";
import { Input, Space } from "antd";
// import type { SearchProps } from '../Search';
import { useEffect } from "react";
import  connect  from '@reduxjs/toolkit';


const { Search } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) => {

    const resp = getHardwareList(value);
    value.setKeyValueData(resp);
};
//   console.log(info?.source, value);

// useEffect(()=>{
// })

const mySearch: React.FC = () => (
  <Space direction="vertical">
    <Search placeholder="input search text" onSearch={onSearch} enterButton />
  </Space>
);

export default mySearch;

import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:4523/m1/3607153-0-default";
// axios.defaults.headers.common['Authorization'] =
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const instance = axios.create({
  baseURL: axios.defaults.baseURL,
  timeout: 5000,
});

// useEffect(()=>{
// })

const User = '/p/user'
export async function getHardwareList(HardwareName) {
  const resp = await instance.request({
    url: User+"/hlq",
    method: "GET",
    data: HardwareName,
  });
  console.log(resp.data); 
  return resp.data;
}
