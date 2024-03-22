import{ useState, lazy, Suspense } from 'react';


const items = Array.from({ length: 5 }, (_, i) => i); // 第一个是参数, 第二个是索引;
const list = Array(5).fill('').map((_,index)=>index);

function LazyLoadComponent() {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((show) => !show);

  return (
    <>
    <div>
      <button onClick={toggleShow}>Show</button>
      {show ? 'This component is lazy loaded, I made it just for lenrning!': null}
    </div>
    <div className='flex flex-row'>
        {items.map((item,index)=>{
            return <div key={index}>items: {item}</div>
        })}
        {list.map((item,index)=>{
            return <div key={index}>list: {item}</div>
        })}
    </div>
    </>
  );
}

export default LazyLoadComponent;