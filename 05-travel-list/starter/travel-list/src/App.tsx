import { CSSProperties, useState } from "react";
import "./App.css";
import Cards from "./exercise/Cards";

// 定义类型/结构体
type ItemType = {
  quantity: string;
  description: string;
  packed: boolean;
};

const initialList: ItemType[] = [
  { quantity: "1", description: "Passport", packed: false },
  { quantity: "2", description: "Phone Charger", packed: false },
  { quantity: "3", description: "Socks", packed: false },
  { quantity: "4", description: "Sleeping Pills", packed: false },
  { quantity: "5", description: "Underwear", packed: false },
];

export default function App() {
  // 状态
  const [items, setItems] = useState<ItemType[]>(initialList);

  const handleItems = (item: ItemType) => {
    // 输入不为空才可以添加; 通过更新items来添加元素
    if (item.description === "") {
      alert("Please input something");
    } else if (items.some((i) => i.quantity === item.quantity)) {
      alert("Please input a different quantity");
    } else {
      setItems((items) => [...items, item]);
    }
  };
  // 用filter来删
  const handleDeleteItem = (id: string) => {
    // 通过更新items来删除元素
    setItems((items) => items.filter((items) => items.quantity !== id));
  };
  // 用map来选中
  // 一个自己的状态,代表源数组, 一个传下去的, 代表选中的; 
  const handleToggleItem = (quantity:string) => {
    setItems((items)=>{
      return items.map((item) => item.quantity === quantity ? { ...item, packed: !item.packed } : item);
    })
  }
  // 直接传items, 保证可读性和可拓展性; 
  // const numItem = items.length;
  // const packedItem = items.filter((item)=>item.packed).length;

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleItems} />
        <PackingList 
        items={items} 
        onDeleteItem={handleDeleteItem} 
        onToggleItem={handleToggleItem}
        />
      </div>
      <Cards />
    </>
  );
}

const Logo = () => {
  return (
    <>
      <h1>Far Away</h1>
    </>
  );
};

const Form = ({ onAddItems }: { onAddItems: (item: ItemType[]) => void }) => {
  const [description, setDescription] = useState("这很滔博");
  const [quantity, setQuantity] = useState(5);

  const handleSubmint = (e: React.MouseEvent<HTMLButtonElement>) => {
    // 用来阻止默认行为, 防止页面刷新
    e.preventDefault();
    // 这里抓的就是button元素
    console.log(e);
    // 属于react的合成事件, 可以阻止冒泡等等
    console.log(e.target);

    const newItem: ItemType[] = {
      description: description,
      quantity: quantity.toString(),
      packed: false,
      time: new Date().getTime().toString(),
    };
    console.log(newItem);

    onAddItems(newItem);

    // 刷新
    setDescription("");
    setQuantity(1);
  };
  return (
    <>
      <div className="add-form">
        <h3>What do you need for your trip?</h3>
        {/* 使用parseInt来避免ts的问题 */}
        <select
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        >
          {/* 长度为20, 占位符是元素1本身, 第二个是索引;  */}
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          // 通过react来控制这个状态, 设置value然后onChange来改变这个状态
          value={description}
          onChange={(e) => {
            // console.log(e.target.value);
            setDescription(e.target.value);
          }}
        />
        <button onClick={handleSubmint}>Add</button>
      </div>
    </>
  );
};

const PackingList = ({
  items,
  onDeleteItem,
  onToggleItem,
}: {
  items: ItemType[];
  onDeleteItem: (id: string) => void;
  onToggleItem: (quantity: string) => void;
}) => {
  // 按照数量排序的功能
  items.sort((a, b) => parseInt(a.quantity) - parseInt(b.quantity));
  console.log("items:");
  console.log(items);


  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return <Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>;
        })}
      </ul>
      <Stats items={items}/>
    </div>
  );
};

const Item = ({
  item,
  onToggleItem,
  onDeleteItem,
}: {
  item: ItemType;
  onToggleItem: (quantity: string) => void;
  onDeleteItem: (quantity: string) => void;
}) => {

  const textStyle:CSSProperties|undefined= {
    textDecoration: "line-through"
  }

  return (
    <>
      <li>
        <input
          type="checkbox"
          value={item.packed.toString()} // Convert boolean value to string
          onChange={() => onToggleItem(item.quantity)}
        />
        <span style={item.packed ? textStyle : undefined}>
          {item.quantity}: {item.description}
        </span>
        <button onClick={() => onDeleteItem(item.quantity)}>❌</button>
      </li>
    </>
  );
};

const Stats = ({items}:{items:ItemType[]}) => {
  const numItem = items.length;
  const packedItem = items.filter((item)=>item.packed).length;
  const percentage = Math.round((packedItem / numItem) * 100);
  return (
    <>
      <footer>
       {packedItem!==numItem ? `You have ${numItem} items on your list, and you already packed ${packedItem} (${percentage}%)`:`You have finished packing all your items!`}
      </footer>
    </>
  );
};
