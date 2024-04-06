
import { useSelector } from "react-redux";


// 选择那其中的customer的数据
export default function Customer() {
    const costomer = useSelector(store=>store.customer.fullName);
    return <h2>Welcome!  {costomer}</h2>
}