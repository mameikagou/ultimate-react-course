

几个有关redux的包

### Provider
放在根目录, 将store的东西全局注册; 

### connect
将store里面的东西取出来, 放到组件模版中;

### useDispatch
const dispatch = useDispatch();
直接取出获得到 dispatch

### combineReducers
将几个store组合在一起; 

### 异步通信 thunk
```
pnpm i redux-thunk -D
```