import bgImg from '@/assets/bgImg.jpg'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardWithForm({title, Description = "Default Description"}:{title: string, Description: string}) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        
      </CardHeader>
      <CardContent>
        <Image src={'https://th.bing.com/th/id/R.b1a8b639bc85222a7c74e6d999280455?rik=SB2eHe3dgnb%2b6Q&pid=ImgRaw&r=0'}
        alt="Bg image"
        width={700}
        height={700} />
        <CardDescription>{Description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>See More</Button>
      </CardFooter>
    </Card>
  )
}
