'use client'
import {useEffect, useState} from "react"

// class page extends React.Component{
//   // count = 0
//   constructor(props:any){
//     super(props);
//     this.state = {count:0};
//     console.log("Constructor")
//   }
//   componentDidMount(): void {
//     console.log("ComponentDidMount")
//   }
//   shouldComponentUpdate(
//     nextProps: Readonly<{}>, 
//     nextState: Readonly<{}>, 
//     nextContext: any): boolean {
//       return false;
//   }
//   increment(){
//     // this.count = this.count + 1;
   
//     this.setState({count:this.state.count +1})
//      console.log(this.state.count);
//   }
//   render(){
//     console.log("Render")
//     return (
//     <div>
//       Main {this.state.count}
//       <button onClick={()=>this.increment()}>Increment</button>
//     </div>
//     )
//   }
// }

// function Page(){
//   // let count = 0;
//   const [count,setCount] = useState(0)
//   console.log(count)
//   function increment(){
//     setCount(count+1)
//     // count++;
//     // console.log(count);
//   }
//   return (
//     <div>Count: {count}
//     <button onClick={()=>increment()}>Increment</button>
//     </div>

//   )
// }

function Page(){
 
  const [count1, setCount1] = useState(5);
  const [count2, setCount2] = useState(5);
  useEffect(()=>{
    console.log("I am using Effect");
  },[count2]);
function increment1(){
  setCount1(count1+1);
}
function increment2(){
  setCount2(count2+1);
}
return (
      <div>Count: {count1}
      <button onClick={()=>increment1()}>Increment</button>
      <button onClick={()=>increment2()}>Increment</button>
      </div>
  
    )
}
export default Page;