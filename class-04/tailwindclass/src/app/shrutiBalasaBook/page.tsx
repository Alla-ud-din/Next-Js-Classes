import Image from "next/image"
export default function Home() {
    return (
        // Example-1a
        // <div className="p-12 bg-gray-300">
        //     <div className = "flex justify-center bg-white p-4 rounded-lg">
        //         <div className = "flex">
        //             <p className = "p-4 mx-3 bg-gray-300 rounded-lg">
        //                 <p className="italic">The success combination in business is: Do what you do better...
        //                 and do more of what you do.</p> - Divid J. Schwaryz 
        //             </p>
        //             <p className = "p-4 mx-3 bg-gray-300 rounded-lg">
        //                 <p className="italic">Give out what you want to come back.</p> - Robin Sharma
        //             </p>
        //             <p className = "p-4 mx-3 bg-gray-300 rounded-lg">
        //                 <p className="italic">You don't have to be great at something to start, but you have to
        //                 start to be great at something .</p> - Zig Ziglar
        //             </p>
        //         </div>
        //     </div>
        // </div>
        // Example-2a
        // <div className ="bg-gray-300 p-10">
        //     <div className = "bg-white rounded-full shadow-2xl">
        //         {/* <div className = "flex m-3 p-2 justify-start"> */}
        //         {/* <div className = "flex m-3 p-2 justify-end"> */}
        //         {/* <div className = "flex m-3 p-2 justify-center"> */}
        //         <div className = "flex m-3 p-2 justify-between">
        //         {/* <div className = "flex m-3 p-2 justify-around"> */}
        //         {/* <div className = "flex m-3 p-2 justify-evenly"> */}
        //             <a href="#" className = "px-4 py-2 bg-blue-400 rounded-full">Profile</a>
        //             <a href="#" className = "px-4 py-2 bg-gray-300 rounded-full">Notification</a>
        //             <a href="#" className = "px-4 py-2 bg-gray-300 rounded-full">Payments</a>
        //             <a href="#" className = "px-4 py-2 bg-gray-300 rounded-full">settings </a>
        //         </div>
        //     </div>
        // </div>   
        // Example-2b  
        // <div className="p-20 bg-gray-300">
        //     <div className="p-2 mx-20 text-center rounded-xl bg-white justify-center shadow-xl">
        //         <h1 className="text-blue-800 font-bold">CSS flex & grid</h1>
        //         <p className="">
        //             This book takes a complete different approach. I won't teach you the things flex
        //             and grid can do. Instead, I will first show you some components and layouts and 
        //             make you think how to build then using the CSS concepts you already know.
        //             Now you have a problem, and you want a solution 
        //         </p>
        //         <div className="flex justify-around">
        //             <a href="#" className="bg-blue-500 rounded-xl p-2">Prev</a>
        //             <a href="#" className="bg-blue-500 rounded-xl p-2">Next</a>
        //         </div>
        //     </div>
        // </div> 
        // Example-2c
        // <div className="p-20 bg-gray-300">
        // <div className="flex flex-wrap justify-around p-10 bg-white rounded-3xl shadow-2xl">
        //     <div className="flex flex-col items-center">
        //         <Image className="rounded-full" src={"/bill gates.jpg"} alt={""} width={100} height={100}/>
        //         <h1 className="font-bold">Bill gates</h1>
        //         <p>Co-founder of Microsoft</p>
        //     </div>
        //     <div className="flex flex-col items-center">
        //         <Image className="rounded-full" src={"/Elon Musk.jpg"} alt={""} width={100} height={100}/>
        //         <h1 className="font-bold">Elon Musk</h1>
        //         <p>CEO of Tesla and SpaceX</p>
        //     </div>
        //     <div className="flex flex-col items-center">
        //         <Image className="rounded-full" src={"/R.png"} alt={""} width={100} height={100}/>
        //         <h1 className="font-bold">Jeff Bezos</h1>
        //         <p>CEO of Amazon</p>
        //     </div>
        //     <div className="flex flex-col items-center">
        //         <Image className="rounded-full" src={"/Warren Buffett.jpg"} alt={""} width={100} height={100}/>
        //         <h1 className="font-bold">Warren Buffett</h1>
        //         <p>CEO of Berkshire Hathaway</p>
        //     </div>
        // </div>
        // </div>
        // Example-5a
        // <div className="h-screen flex items-center justify-center bg-gray-200">
        //     <div className="bg-white p-6 rounded shadow-md w-80">
        //         <button className="w-full py-2 mb-2 bg-blue-500 text-white rounded-md">Login</button>
        //         <button className="w-full py-2 border border-gray-300 rounded-md">Create account</button>
        //     </div>
        // </div>
        // Example-5b
        // <div className="m-2 p-20 flex justify-center items-center min-h-screen bg-gray-200">
        //     <div className="py-10 px-5 w-96 bg-white rounded-xl shadow-md">
        //         <img src="https://res.cloudinary.com/thirus/image/upload/v1629308145/logos/quote-left_tsopjj_zviayy.svg" alt="" width={50} height={50}/>
        //         <br />
        //         <br />
        //         <br />
        //         <br />
        //         <p>I just finished my trial period and was so amazed with the support and good results that I 
        //             purchased the pro version for my business.
        //         </p>
        //         <br />
        //         <br />
        //         <span>John Doe</span>
        //     </div>
        // </div>

        //  <div className="m-2 p-20 flex justify-center items-center min-h-screen bg-gray-200">
        //     <div className="py-10 px-5 w-2/3 bg-white rounded-xl shadow-md">
        //       <div className="flex m-10">
        //         <img src="https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150" alt="" width={130} height={30}/>
        //         <div className="p-5">
        //             <span className="font-bold">Alexa Kardi</span>
        //             <p>Founder and CEO</p>
        //             <p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        //             </p>
        //         </div>
        //       </div>
        //       <div className="flex  m-10">     
        //         <div className="p-5">
        //             <span className="flex justify-end font-bold">Tavell Monroe</span>
        //             <p className="flex justify-end">Web Developer</p>
        //             <p className="flex justify-end">Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
        //             </p>               
        //         </div>
        //         <img src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150" alt="" width={130} height={30}/>
        //       </div>
        //     </div>
        // </div>

        <div className="flex justify-center items-center min-h-screen border border-black m-5 bg-gray-200">
            <div className="my-10 mx-20 border border-green-500">
                <div className="p-5 bg-white">
                    <h1 className="my-0.5">Join our community</h1>
                    <br />
                    <h1 className="my-0.5">30-day, hassle-free money back guarantee</h1>
                    <br />
                    <p>Gain acceess to our full library of tutorials along with expert code reviews.
                        <br />
                        Perfect for any Developers who are serious about honing their skills.
                    </p>
                </div>
                <div className="flex">
                    <div className="p-5 w-1/2 bg-blue-500">
                        <span>Monthly Subscription</span>
                        <br />
                        <p><strong>$29</strong>  per month</p>
                        <p>Full acceess for less than $1 a day</p>
                        <button>Sign up</button>
                    </div>
                    <div className="p-5 w-1/2 bg-blue-200">
                        <h1>Why us</h1>
                        <ul>
                            <li>Tutorials by industry experts</li>
                            <li>Peer & expert code review </li>
                            <li>Coding exercises </li>
                            <li>Access to our Github repos </li>
                            <li>Community forum </li>
                            <li>Flashcard decks </li>
                            <li>New videos every Week </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}