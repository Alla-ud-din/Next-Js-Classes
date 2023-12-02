import Image from "next/image";

export default function Home() {
    return (
    <>  <div className="sm:columns-2 md:columns-3 border border-black">
            <p>Well, let me tell you something, ...</p>
            <p className="break-after-right">Sure, go ahead, laugh...</p>
            <p>Maybe we can live without...</p>
            <p>Look. If you think this is...</p>
            <p>Look. If you think this is second...</p>
            <p>Look. If you think this is third...</p>
        </div>
        <div className="columns-2">
                <p>Well, let me tell you something, ...</p>
                <p className="break-before-column">Sure, go ahead, laugh...</p>
                <p>Maybe we can live without...</p>
                <p>Look. If you think this is...</p>
        </div>
        <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
            Hello<br />World</span><br/>
        <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
            Hello<br />World</span>

        <div>
            When controlling the flow of text, using the CSS property
            <span className="inline border-2">display: inline</span>
            will cause the text inside the element to wrap normally................
            While using the property <span className="inline-block border-2">display: inline-block</span>
            will wrap the element to prevent the text inside from extending beyond its parent.
            Lastly, using the property <span className="block border-2">display: block</span>
            will put the element on its own line and fill its parent.
        </div>

        <div className="p-4">
            <div className="flow-root ...">
                <div className="my-4 ...">Well, let me tell you something, ...</div>
            </div>
            <div className="flow-root ...">
                <div className="my-4 ...">Sure, go ahead, laugh if you want...</div>
            </div>
        </div>

        <span className="inline-grid border border-black grid-cols-3 m-4 gap-4">
            <span>01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
            <span>05</span>
            <span>06</span>
        </span>
        <span className="inline-grid  border border-black grid-cols-3 m-4 gap-4">
            <span>01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
            <span>05</span>
            <span>06</span>
        </span>
        {/* <div className="grid grid-cols-3 m-5 gap-4">
        <Image className = "object-none object-left-top bg-yellow-300 w-full h-full" src={"/red-p-logo-text_dao_croped.png"} alt={"panaverse"} width={100} height={100}/>
        <Image className = "object-none object-top bg-yellow-300 w-full h-full" src={"/red-p-logo-text_dao_croped.png"} alt={"panaverse"} width={100} height={100}/>
        <Image className = "object-none object-right-top bg-yellow-300 w-full h-full" src={"/red-p-logo-text_dao_croped.png"} alt={"panaverse"} width={100} height={100}/>
        <Image className = "object-none object-left bg-yellow-300 w-full h-full" src={"/red-p-logo-text_dao_croped.png"} alt={"panaverse"} width={100} height={100}/>
        <Image className = "object-none object-center bg-yellow-300 w-full h-full" src={"/red-p-logo-text_dao_croped.png"} alt={"panaverse"} width={100} height={100}/>
        <Image className = "object-none object-right bg-yellow-300 w-full h-full" src={"/red-p-logo-text_dao_croped.png"} alt={"panaverse"} width={100} height={100}/>
        <Image className = "object-none object-left-bottom bg-yellow-300 w-full h-full" src={"/red-p-logo-text_dao_croped.png"} alt={"panaverse"} width={100} height={100}/>
        <Image className = "object-none object-bottom bg-yellow-300 w-full h-full" src={"/red-p-logo-text_dao_croped.png"} alt={"panaverse"} width={100} height={100}/>
        <Image className = "object-none object-right-bottom bg-yellow-300 w-full h-full" src={"/red-p-logo-text_dao_croped.png"} alt={"panaverse"} width={100} height={100}/>
        </div> */}

        <div>
            <button className="absolute top-0 right-0 p-4 bg-blue-500 text-white">Button</button>
            <Image src="/red-p-logo-text_dao_croped.png" width={"100"} height={"100"} className="relative bottom-0 left-0 w-1/2 h-auto" alt="Image"/>
            <nav className="fixed top-0 w-full bg-white z-50">Hello</nav>
        </div>

        <div className="bg-gray-200 p-4 bg-clip-border">This element has a gray background that extends to the edges of its padding.</div>
        <div className="bg-blue-500 p-4 bg-clip-padding">This element has a blue background that extends slightly beyond its content.</div>
        <div className="bg-yellow-100 p-4 bg-clip-content">This element has a yellow background that is confined to the area of its visible content.</div>
        <p className="bg-green-400 bg-clip-text">This text has a green background.</p>

        <div className="blur-none border border-black">
            Hello
        </div>
        <div className="blur-sm border border-black">
            How
        </div>
        <div className="blur-lg border border-black">
            are
        </div>
        <div className="blur-2xl border border-black">
            you
        </div>

        <table className="border-collapse border border-slate-500 ...">
            <thead>
                <tr>
                    <th className="border border-slate-600 ...">State</th>
                    <th className="border border-slate-600 ...">City</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-slate-700 ...">Indiana</td>
                    <td className="border border-slate-700 ...">Indianapolis</td>
                </tr>
                <tr>
                    <td className="border border-slate-700 ...">Ohio</td>
                    <td className="border border-slate-700 ...">Columbus</td>
                </tr>
                <tr>
                    <td className="border border-slate-700 ...">Michigan</td>
                    <td className="border border-slate-700 ...">Detroit</td>
                </tr>
            </tbody>
        </table>
    </>
    )
}