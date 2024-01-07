
import Accordionn from "@/components/Accordion"
import AlertBox from "@/components/AlertBox"
import AlertDialogg from "@/components/AlertDialog"
import PopOver from "@/components/Popover"
import Framermotion from "@/components/Framermotion"


export default function Home() {
  return (
    <div className='m-8 flex flex-col gap-5'>
      <PopOver />
      <Accordionn />
      {/* <AlertDialogg /> */}
      {/* <AlertBox /> */}
      {/* <Framermotion /> */}
    </div>
  )
}
