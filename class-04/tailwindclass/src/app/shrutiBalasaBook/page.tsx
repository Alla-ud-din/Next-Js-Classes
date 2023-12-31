import Image from "next/image"
export default function Home() {
    return (
      <>
     {/* <======================Flex====================> */}
      {/* Example-1a */}
     <div className="p-12 bg-gray-300">
          <div className = "flex bg-white p-4 rounded-lg">
             <p className = "p-4 mx-3 bg-gray-300 rounded-lg">
             <p className="italic">The success combination in business is: Do what you do better...
                  and do more of what you do.</p> - Divid J. Schwaryz 
             </p>
             <p className = "p-4 mx-3 bg-gray-300 rounded-lg">
                  <p className="italic">Give out what you want to come back.</p> - Robin Sharma
             </p>
             <p className = "p-4 mx-3 bg-gray-300 rounded-lg">
             <p className="italic">You don't have to be great at something to start, but you have to
                  start to be great at something .</p> - Zig Ziglar
             </p>
          </div>
      </div>
      {/* Example-2a */}
      <div className ="bg-gray-300 p-10">
          <div className = "bg-white rounded-full shadow-2xl">
              {/* <div className = "flex m-3 p-2 justify-start"> */}
              {/* <div className = "flex m-3 p-2 justify-end"> */}
              {/* <div className = "flex m-3 p-2 justify-center"> */}
              <div className = "flex m-3 p-2 justify-between">
              {/* <div className = "flex m-3 p-2 justify-around"> */}
              {/* <div className = "flex m-3 p-2 justify-evenly"> */}
                  <a href="#" className = "px-4 py-2 bg-blue-400 rounded-full">Profile</a>
                  <a href="#" className = "px-4 py-2 bg-gray-300 rounded-full">Notification</a>
                  <a href="#" className = "px-4 py-2 bg-gray-300 rounded-full">Payments</a>
                  <a href="#" className = "px-4 py-2 bg-gray-300 rounded-full">settings </a>
              </div>
          </div>
      </div>   
      {/* Example-2b   */}
      <div className="p-20 bg-gray-300">
          <div className="p-2 mx-20 text-center rounded-xl bg-white shadow-xl">
              <h1 className="text-blue-800 font-bold">CSS flex & grid</h1>
              <p className="">
                  This book takes a complete different approach. I won't teach you the things flex
                  and grid can do. Instead, I will first show you some components and layouts and 
                  make you think how to build then using the CSS concepts you already know.
                  Now you have a problem, and you want a solution 
              </p>
              <div className="flex justify-around">
                  <a href="#" className="bg-blue-500 rounded-xl p-2">Prev</a>
                  <a href="#" className="bg-blue-500 rounded-xl p-2">Next</a>
              </div>
          </div>
      </div> 
      {/* Example-2c */}
      <div className="p-20 bg-gray-300">
      <div className="flex flex-wrap justify-around p-10 bg-white rounded-3xl shadow-2xl">
          <div className="flex flex-col items-center">
              <Image className="rounded-full" src={"/bill gates.jpg"} alt={""} width={100} height={100}/>
              <h1 className="font-bold">Bill gates</h1>
              <p>Co-founder of Microsoft</p>
          </div>
          <div className="flex flex-col items-center">
              <Image className="rounded-full" src={"/Elon Musk.jpg"} alt={""} width={100} height={100}/>
              <h1 className="font-bold">Elon Musk</h1>
              <p>CEO of Tesla and SpaceX</p>
          </div>
          <div className="flex flex-col items-center">
              <Image className="rounded-full" src={"/R.png"} alt={""} width={100} height={100}/>
              <h1 className="font-bold">Jeff Bezos</h1>
              <p>CEO of Amazon</p>
          </div>
          <div className="flex flex-col items-center">
              <Image className="rounded-full" src={"/Warren Buffett.jpg"} alt={""} width={100} height={100}/>
              <h1 className="font-bold">Warren Buffett</h1>
              <p>CEO of Berkshire Hathaway</p>
          </div>
      </div>
      </div>
      {/* Example-5a */}
      <div className="h-screen flex items-center justify-center bg-gray-200">
          <div className="flex flex-col justify-center bg-white p-6 rounded shadow-md w-80 h-1/2">
              <button className="w-full py-2 mb-2 bg-blue-500 text-white rounded-md">Login</button>
              <button className="w-full py-2 border border-gray-300 rounded-md">Create account</button>
          </div>
      </div>
      {/* Example-5b */}
      <div className="m-2 p-20 flex justify-center items-center min-h-screen bg-gray-200">
          <div className="py-10 px-5 w-96 bg-white rounded-xl shadow-md">
              <img src="https://res.cloudinary.com/thirus/image/upload/v1629308145/logos/quote-left_tsopjj_zviayy.svg" alt="" width={50} height={50}/>
              <br />
              <br />
              <br />
              <br />
              <p>I just finished my trial period and was so amazed with the support and good results that I 
                  purchased the pro version for my business.
              </p>
              <br />
              <br />
              <span>John Doe</span>
          </div>
      </div>

       <div className="m-2 p-20 flex justify-center items-center min-h-screen bg-gray-200">
          <div className="py-10 px-5 w-2/3 bg-white rounded-xl shadow-md">
            <div className="flex m-10">
              <img src="https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150" alt="" width={130} height={30}/>
              <div className="p-5">
                  <span className="font-bold">Alexa Kardi</span>
                  <p>Founder and CEO</p>
                  <p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                  </p>
              </div>
            </div>
            <div className="flex  m-10">     
              <div className="p-5 text-right">
                  <span className="font-bold">Tavell Monroe</span>
                  <p className="">Web Developer</p>
                  <p className="">Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
                  </p>               
              </div>
              <img src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150" alt="" width={130} height={30}/>
            </div>
          </div>
      </div>

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

      {/* Example-6a */}
      <div className="flex justify-center items-center m-5 h-72 rounded-xl bg-gray-200">
          <div className="flex justify-center items-center rounded-xl h-20 w-1/2 bg-white">
              <div className="flex border border-gray-500 rounded-xl h-10 w-2/3">
                  <input type="email" placeholder="Email Address" className="p-3 flex-grow-4 min-h-full w-2/3 rounded-l-xl"/>
                  <button type="submit" className="bg-blue-500 w-1/3 rounded-r-xl">Subscribe</button>
              </div>
          </div>
      </div>

      {/* Example-6c */}
      <div className="bg-gray-300 min-h-screen m-5 rounded-xl flex justify-center items-center">
          <div className="bg-white w-1/4 p-5 rounded-xl">
              <h1 className="font-bold text-3xl">The Power of CSS Flexbox</h1>
              <p className="py-5">Phasellus ultrices nulla quis nibh. Quisque a lectus. 
                  Donec consectetuer ligula vulputate sem tristique cursus. 
                  Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.
              </p>
              <a className = "bg-blue-500 flex flex-grow justify-center text-white py-2 rounded-lg" href="#">Read more</a>
          </div>
      </div>

      {/* Example-6d */}
      <div className="flex flex-col justify-center items-center bg-gray-200 h-1/2 m-5 rounded-xl">
          <div className="flex justify-around bg-white rounded-lg w-1/2 m-5">
              <h1 className="m-5">Description</h1>
              <h1 className="m-5">Care Instructions</h1>
              <h1 className="m-5">Return Policy</h1>
          </div>
          <div className="flex justify-around bg-white rounded-lg w-1/2 m-5">
              <h1 className="flex-grow hover:flex-grow-[3] m-5 hover:border-4 hover:border-b-blue-500 hover: hover:flex hover:justify-center">Description</h1>
              <h1 className="flex-grow hover:flex-grow-[3] m-5 hover:border-4 hover:border-b-blue-500 hover:flex hover:justify-center">Care Instructions</h1>
              <h1 className="flex-grow hover:flex-grow-[3] m-5 hover:border-4 hover:border-b-blue-500 hover:flex hover:justify-center">Return Policy</h1>
          </div>
      </div>

      {/* Example-6e */}
      <div>
      <div className="container flex items-start">
          <div className="w-1/3">
              <h2>Visit to the Eiffel Tower</h2>
              <p>There's no better start to your Paris tour than visiting the iconic Eiffel Tower. 
                  This is a must visit tourist spot in the whole of France.</p>
          </div>
          <span className="bg-red-500 flex-shrink-1 rounded-xl p-1">10:00 AM</span>
      </div>
      <div className="container flex items-start">
          <div className="w-1/3">
              <h2>Lunch at New Jawad</h2>
              <p>It is an Indian restaurant close to the Eiffel Tower. 
                  Enjoy delicious Indian traditional food and South Asian food.</p>
          </div>
          <span className="bg-red-500 flex-shrink-0 rounded-xl p-1">1:00 PM</span>
      </div>
      </div>

     <div>
     <div className="flex m-2 border border-black">
          {/* <a href="https://example.com" className="grow-[1] bg-blue-500">website 0</a> */}
          {/* <a href="https://example.com" className="grow-[2] bg-slate-600">website 1</a> */}
          {/* <a href="https://example.com" className="grow-[3] bg-green-400">website 2</a> */}
     </div>

     <div className="flex m-2 border border-black">
        {/* <a href="https://example.com" className="flex-shrink bg-blue-500">website 0</a> */}
        {/* <a href="https://example.com" className="flex-shrink-[2] bg-slate-600">website 1</a> */}
        {/* <a href="https://example.com" className="flex-shrink-[4] bg-green-400">website 2</a> */}
     </div>

     <div className="flex m-2 border border-black">
          {/* <a href="https://example.com" className="basis-1/4 bg-blue-500">website 0</a> */}
          {/* <a href="https://example.com" className="basis-1/2 bg-slate-600">website 1</a> */}
          {/* <a href="https://example.com" className="basis-1/4 bg-green-400">website 2</a> */}
     </div>
     </div>

     {/* Example-8c */}
     <div className=" flex items-center justify-center bg-gray-300 border h-64 border-black m-2">
        <div className="flex flex-row justify-around items-center h-1/2 w-1/2 bg-gray-100 border border-black m-2">
             <div className="bg-white p-4 m-">
                  <h1>Standard</h1>
                  <h2>Monthly plan</h2>
                  <h1>25$</h1>
             </div>
             <div className="bg-pink-600 p-4 m-5">
                  <h1>Standard</h1>
                  <h2>Monthly plan</h2>
                  <h1>25$</h1>
             </div>
             <div className="bg-white p-4 m-5">
                  <h1>Standard</h1>
                  <h2>Monthly plan</h2>
                  <h1>25$</h1>
             </div>
        </div>
     </div>

     {/* Example-9a */}
     <div>
        <header className="flex justify-between items-center border border-black">
             <a href="#" className="flex-1 p-5">
             <img className=" h-7" src="https://res.cloudinary.com/thirus/image/upload/v1628614672/logos/circleai_dm9slt.png" alt="" />
             </a>
             <ul className="flex">
                  <li className="p-5"><a href="#">Home</a></li>
                  <li className="p-5"><a href="#">About Us</a></li>
                  <li className="p-5"><a href="#">Pricing</a></li>
                  <li className="p-5"><a href="#">Products</a></li>
             </ul>
             <span className="flex-1 text-right p-5">
                  <a href="#" className="">Join us</a>
             </span>
        </header>
     </div>

     {/* <=====================Grid========================> */}

     <div className="flex justify-center items-center min-h-screen border border-black">
          <div className="grid grid-cols-2 bg-gray-500 w-64 h-64">
          <Image className = " w-full h-full" src={"/red-p-logo-text_dao_croped.png"} alt={"panaverse"} width={100} height={100}/>
          <Image className = " w-full h-full" src={"/red-p-logo-text_dao_croped.png"} alt={"panaverse"} width={100} height={100}/>
          <Image className = " w-full h-full" src={"/red-p-logo-text_dao_croped.png"} alt={"panaverse"} width={100} height={100}/>
          <Image className = " w-full h-full" src={"/red-p-logo-text_dao_croped.png"} alt={"panaverse"} width={100} height={100}/>
          </div>
     </div>

     <div className="flex justify-center items-center p-12 m-6 min-h-screen bg-gray-500 border border-black">
      <div className="h-64 grid grid-cols-[30%,70%] w-96 border border-black">
         <div className="bg-pink-600 p-5">
            <h1>Sidebar</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
         </div>
         <div className="bg-white p-5">
            <h1>Main Content</h1>
            <p>Quidem sint architecto qui, obcaecati et odit pariatur vel expedita temporibus vero fugit aperiam repudiandae iusto ratione nam, velit magni eveniet minima.</p>
         </div>
      </div>
     </div>

     </> )
}