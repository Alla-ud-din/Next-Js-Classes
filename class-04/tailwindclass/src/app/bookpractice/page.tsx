import Image from "next/image"
export default function Home() {
    return (
    // <div className="flex flex-3 bg-gray-300 m-40 rounded-lg">
    //     <div className="p-10 flex flex-col space-y-4 items-center">
    //         <h1 className="font-bold text-6xl text-blue-700">Welcome to NorthBy</h1>
    //         <h2 className="text-3xl font-semibold text-blue-300">A Premium in sight and sound </h2>
    //         <button className="border border-black bg-blue-900 p-3 rounded-2xl">Learn More</button>
    //     </div>
    //     <div className="flex flex-1 my-4 px-4 py-2 border-black items-center justify-center">
    //         <Image src={"/red-p-logo-text_dao_croped.png"} alt={""} width={160} height={160}/>
    //     </div>
    // </div>

    <div className="">
        <h1 className="text-xs text-left text-inherit border border-yellow-500 my-2">Hello World 1</h1>
        <h1 className="text-5xl text-center text-current border border-blue-500/20 my-2">Hello World 2</h1>
        <h1 className="text-6xl underline decoration-blue-500 decoration-dotted underline-offset-8  border border-green-500 my-2">Hello World 3</h1>
        <h1 className="text-9xl text-end leading-relax overline decoration-yellow-400 decoration-wavy border border-red-500 my-2">Hello World 4</h1>
    </div>
  )
}
