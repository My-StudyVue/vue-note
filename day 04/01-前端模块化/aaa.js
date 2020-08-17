// CommonJS写法

  // var name = '小明'
  // var age = 22

  // function sum(num1,num2){
  //   return num1 + num2
  // }

  // var flag  = true

  // if(flag){
  //   console.log(sum(10,20));
  // }

  // //模板....必须底层支撑才能使用
  // module.export = {//导出
  //   flag : flag,
  //   sum: sum
  // }

//ES6的Module

  var name = '小明'
  var age = 22
  var flag  = true

  function sum(num1,num2){
    return num1 + num2
  }

  if(flag){
    console.log(sum(10,20));
  }
  
  //导出方式一
  export{
    flag,sum
  }

  //导出方式二
  export var num1 = 1000;
  export var height = 1.88;

  //导出函数/类
  export function num(num1,num2){
    return num1 + num2
  }

  export class Preson{
    run(){
      console.log('在奔跑');
    }
  }

  //导出方式四：export default(可自己命名)________同一个里面只有一个defaukt
  // const  address = "四川省";
// export {
//   address
// }

// export  const address = "四川省"

// const  address = "四川省";
// export default address

export default function(arguement){
  console.log(arguement);
}
  