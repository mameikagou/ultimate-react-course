import { useState } from 'react'



function App() {
  const data = {
      img: "https://picsum.photos/50/50",
      title:
          "Jona Schmedtmann ",
        text: "is a full-stack developer, designer, and teacher who has sold over 250,000 courses with more than 1,000,000 students worldwide. He has also worked with companies such as Mercedes-Benz, Sony, and Adidas.",
      tags: [
          { bgColor: "#b8c1ec", textColor: "#eebbc3",text: "tag1",id:1 },
          { bgColor: "#abd1c6", textColor: "#f9bc60",text: "tag1",id:2 },
          { bgColor: "#FFCD6A", textColor: "#e16162",text: "tag1",id:3 },
          { bgColor: "#FFCD6A", textColor: "#e16162",text: "tag1",id:4 },
          { bgColor: "#FFCD6A", textColor: "#e16162",text: "tag1",id:5 },
          { bgColor: "#FFCD6A", textColor: "#e16162",text: "tag1",id:6 },
          { bgColor: "#FFCD6A", textColor: "#e16162",text: "tag1",id:7 },
      ],
  };
  const  appStyle = {
    width:"500px",
    height:"500px",
    display:"flex",
    flexDirection:"column",
  }
  return (
      <div style={appStyle}>
          <img src={data.img} alt="random" />
          <h2>{data.title}</h2>
          <p>{data.text}</p>
          <div style={{
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",

            textAlign: "center",
          }}>
              {data.tags.map((tag) => {
                  return <Tag bgColor={tag.bgColor} textColor={tag.textColor} text={tag.text} key={tag.id}></Tag>
              })}
          </div>
      </div>
  )
}
function Tag({ bgColor,textColor, text }) {
  const style = {
      backgroundColor: bgColor,
      color: textColor,
      width: "5rem",
      height: "2rem",

      fontSize: "1rem",
      
      textAlign: "center",
  };
  return (
      <div className="tag" style={style}>
          {text}
      </div>
  );
}


export default App
