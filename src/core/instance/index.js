import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

/**
 * 用 function 实现的类
 */
function Vue (options) {
  // 当直接以函数调用形式调用 Vue 时
  // this 可能会指向全局变量，引发以下提醒
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

/**
 * 这里通过 Mixin 的方式给 Vue 的 prototype 上扩展一些方法
 * Vue 按功能把这些扩展分散到多个模块中去实现，而不是在一个模块里实现所有
 * 这种方式是用 Class 难以实现的。这么做的好处是非常方便代码的维护和管理
 */
initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
