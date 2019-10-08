## 目录结构

### vue 源码

```
src
├── compiler        # 编译相关 把模板解析成 ast 语法树，ast 语法树优化，代码生成，编译可以在运行时做，也可以在构建的时候做
├── core            # 核心代码 包括内置组件，全局 API 封装，Vue 实例化，观察者，虚拟 DOM，工具函数
├── platforms       # 不同平台的支持 2个目录代表2个主要入口，分别打包成运行在web和weex上的 Vue.js
├── server          # 服务端渲染
├── sfc             # .vue 文件解析 该目录下的代码逻辑会把 .vue文件内容解析成一个 js 对象
├── shared          # 共享代码 浏览器端和服务端共享的工具方法
```

```
flow
├── compiler.js        # 编译相关
├── component.js       # 组件数据结构
├── global-api.js      # Global API 结构
├── modules.js         # 第三方库定义
├── options.js         # 选项相关
├── ssr.js             # 服务端渲染相关
├── vnode.js           # 虚拟 node 相关
├── weex.js            # weex 相关
```
