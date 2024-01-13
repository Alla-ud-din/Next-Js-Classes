'use client'
import { useEffect, useState } from "react"

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

// <======================= useState =================>
// function Page(){
//   // let count = 0;
//   const [count,setCount] = useState(0)
//   console.log(count)
//   function increment(){
//     setCount(count+1)
//     // count++;
//     // console.log(count);
//   }
//   function decrement(){
//     if(count >0){setCount(count-1)}
//   }
//   return (
//     <section className="flex flex-col">
//     <div className="p-6">Count: {count}  </div>
//     <div className="p-6">
//     <button className="bg-blue-800" onClick={()=>increment()}>Increment</button>
//     <button className="bg-blue-800" onClick={()=>decrement()}>Decrement</button>
//     </div>
//     </section>
//   )
// }

// <======================= useEffect =================>

// Example 1
// function Page() {

//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   useEffect(() => {
//     console.log("count1: ", count1)
//     console.log("count2: ", count2)
//     return () => {
//       console.log("I am using Effect");
//     }
//   }, [count2]);
//   function increment1() {
//     setCount1(count1 + 1);
//   }
//   // function increment2() {
//   //   setCount2(count2 + 1);
//   // }
//   return (
//     <section className="flex flex-col">
//       <div className="p-6">Count: {count1}  & {count2}  </div>
//       <div className="flex gap-4">
//         <button className="bg-blue-400" onClick={() => increment1()}>Increment1</button>
//         <button className="bg-blue-400" onClick={() => setCount2(count2 + 1)}>Increment2</button>
//       </div>
//     </section>
//   )
// }
// export default Page;

// Example 2


// function Page() {
//   const [count1, setCount1] = useState(5);
//   const [count2, setCount2] = useState(0);
//   const [todos, setTodos] = useState([]);

//   useEffect( () => {
//      getData();
//   }, []);

//   const getData = async () => {
//     const data = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const response = await data.json();
//     console.log(response);
//     setTodos(response);
//   };

//   function increment2() {
//     setCount2(count2 + 1);
//     // count = count + 1;
//     // console.log(count);
//   }
//   return (
//     <div>
//       Main {count1}
//       {/* <button onClick={}>Increment</button> */}
//       <br />
//       count {count2}
//       <button onClick={increment2}>Increment 2</button>
//     </div>
//   );
// }

// export default Page;

