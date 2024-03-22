import { useState, useEffect } from "react";

export default function UseEffect_Chat() {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);
  const List = ["general", "random", "reactjs"];
  return (
    <>
      <label>
        Choose the chat room:{" "}
        {/* 就是一个select框, 然后绑定value是roomId, 最后的setRoomId是箭头函数加e.target.value */}
        <select value={roomId} onChange={e=>setRoomId(e.target.value)}>
          {List.map((val,index)=>{
            return<option value={val} key={index}>
              {val}
            </option>
          })}
        </select>
        <button onClick={() => setShow(!show)}>
          {show ? "Close chat" : "Open chat"}
        </button>
        <br></br>
        {
            show && <ChatRoom roomId={roomId} />
        }
      </label>
    </>
  );
}

function ChatRoom({roomId}:any) {
    const [serverUrl, setServerUrl] = useState("");

    useEffect(()=>{
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return()=>{
            connection.disconnect();
        }
    },[roomId,serverUrl])

    // 在生产环境开启时, 会先测试一次, 因此是setup -> clearup -> setup

    // 下文中的{' '}, 作用是插入一个空格; 
    return(
        <>
            Server URL:{' '}
            <input value={serverUrl} onChange={e=>setServerUrl(e.target.value)} />
            <h4>Chat room: {roomId}</h4>
        </>
    )
}

function createConnection(serverUrl: string, roomId: string) {
  return {
    connect() {
      console.log(
        '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
      );
    },
    disconnect() {
      console.log(
        '❌ Disconnecting from "' + roomId + '" room at ' + serverUrl + "..."
      );
    },
  };
}
