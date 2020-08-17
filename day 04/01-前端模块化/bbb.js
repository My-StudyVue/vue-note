//1.导入的{ }中定义的变量
import {flag , sum} from "./aaa.js";

if(flag){
  console.log('刘大傻子');
  console.log(sum(20,30));
}

//2.直接导入export定义的变量
import {num1,height} from  "./aaa.js"

console.log(num1);
console.log(height);

//3.导入 export的 function/class
import {num,Preson} from "./aaa.js"

console.log(num(30,50));
const p = new Preson();
p.run()

//4.导入export default的内容
// import {address} from "./aaa.js"

import addr from "./aaa.js"
// console.log(addr('你好啊'));
addr('你好啊');//调用函数

//5.统一全部导入
// import {flag,num,num1,height,Preson,sum} from "./aaa.js"

import * as aaa from "./aaa.js"
console.log(aaa.flag);
console.log(aaa.height);