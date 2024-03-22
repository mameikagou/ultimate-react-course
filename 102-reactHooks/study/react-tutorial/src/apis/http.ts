import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:4523/m1/3607153-0-default";
// axios.defaults.headers.common['Authorization'] =
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const instance = axios.create({
  baseURL: axios.defaults.baseURL + "/p",
  timeout: 5000,
});
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// request 方法是一个通用的方法，用于向指定的 URL 发送指定的 HTTP 请求1。
// 它可以接受一个对象作为参数，这个对象包含了请求的配置，如方法，头部，主体，模式等2。
// request 方法返回一个 Promise 对象，用于处理响应或错误2。

// 用户在前端输入用户名和密码，点击登录按钮
// 前端将用户名和密码发送给后端，后端验证用户名和密码的正确性
// 如果验证通过，后端生成一个 token，并将 token 返回给前端
// 前端收到 token，保存在本地存储中，如 localStorage，sessionStorage 或 cookie12

interface requestBody {}

export async function DoRequest(
  url: string,
  method: "get" | "post" | "put" | "patch" | "delete",
  requestBody: requestBody | null
  // withtoken:false
) {
  const resp = await instance.request({
    url: url,
    method: method,
    data: requestBody,
  });
  return resp.data;
}

export async function Init(
  Server,
  DBName,
  User,
  Password,
  Username,
  Pwd,
  Full_name,
  Email,
  Phone_number
) {
   const resp = await instance.request({
    url: "/init",
    method: "POST",
    data: {
      Server: Server,
      DBName: DBName,
      User: User,
      Password: Password,
      Username: Username,
      Pwd: Pwd,
      Full_name: Full_name,
      Email: Email,
      Phone_number: Phone_number,
    },
  });
  const Token = localStorage.getItem('Token');
  if(!Token){
  localStorage.setItem('Token',resp.data.token)}

  return resp.data;
}



// export async function getHardwareList(HardwareName) {

//   const resp = await instance.request({
//     url: '/hlq',
//     method: 'GET',
//     data: HardwareName,
//   });
//   return resp.data;
// }