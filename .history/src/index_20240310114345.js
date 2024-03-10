// es6 语法 babel可以解析
const sum = (a, b) => a + b

// Promise 是新的api babel默认无法解析 babel值解析语法
// 解决：引入 babel-polyfill
import 'babel-polyfill';
Promise.resolve(100).then(data => data);
[1,2,3].includes(100)