# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


## 知识点学习

##### lazy懒加载的React组件
```
import {lazy} from 'react';
const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));

lazy loading, return a Promise or a thenable; 
It's will wait for it to resolve, and render the resolved value's; 

The resolved value will be cached, so it's will not be call load more than once; 

```

##### For naming format

```
React Hook "useState" is called in function "lazyLoadComponent" that is neither a React function component nor a custom React Hook function. 

React component names must start with an uppercase letter. 

React Hook names must start with the word "use".
```

##### `<Suspense> `:焦虑，悬念，兴奋；<法律> 暂停，权利中止

 allow you display  fallback untill its child have finished loading;

```
const 组件 = lazy(()=>import(...));

<Suspence fallback="<div> Loading... </div>">
   < 组件/>
</Suspence>

```

##### useEffeat 

```
示例代码:

import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234'); 
  // 这是外部函数

  useEffect(() => {
  	const connection = createConnection(serverUrl, roomId);
    connection.connect();
    // 这是setup连接代码; 

  	return () => {

      connection.disconnect();
      // 这是clearup重置代码

  	};
  }, [serverUrl, roomId]);// 监视的数据; 
  // ...
}

```
尽量 将每个 Effect 作为一个独立的过程编写，并且 每次只考虑一个单独的 setup/cleanup 周期。

组件是否正在挂载、更新或卸载并不重要。当你的 cleanup 逻辑正确地“映射”到 setup 逻辑时，你的 Effect 是可复原的，因此可以根据需要多次运行 setup 和 cleanup 函数。

```
Notice: 

Effect 可以让你的组件与某些外部系统（比如聊天服务）保持同步。在这里，外部系统是指任何不受 React 控制的代码，例如：

由 setInterval() 和 clearInterval() 管理的定时器。
使用 window.addEventListener() 和 window.removeEventListener() 的事件订阅。
一个第三方的动画库，它有一个类似 animation.start() 和 animation.reset() 的 API。
如果你没有连接到任何外部系统，你或许不需要 Effect。

```

```
Notice:
 

```

##### useRef

useRef is a React Hook that let you reference a value that's not needed for rending; 

useState, 用于能看见的, 可视的状态; 
useRef, 用于看不见的, 不需要渲染的数据; 

```

// 使用 useState
const [count, setCount] = useState(0);

// 使用 useRef
const buttonRef = useRef(null);

它是一个对象, 只有一个属性, .current; 
就跟vue的.value一样的写法, 因为不触发渲染, 所以不考虑在模版中怎么样; 

```

##### useContext

就是子组件可以从父组件获得数据, 就是父传子; 

```

<!-- 父组件中 -->
const v = createContext(null);

return(
   <v.Provider value="dark">
      <!-- 这是子组件 -->
   </ v.Provider value="dark">
)

<!-- 子组件 -->
const v = useContext(v);

```

