'use client'
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { accordionContent } from '@/constants'



function AccordionFunction({ id, question, answer }: accordionType) {
    return (
        <Accordion.Root className="rounded bg-white w-[300px] shadow-md" type='single' collapsible>
            <Accordion.Item value={`item-${id}`} className=''>
                <Accordion.Header>
                    <Accordion.Trigger className='flex items-center justify-between'>
                        <span>{question}</span>
                        <ChevronDownIcon className="AccordionChevron" aria-hidden />
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="AccordionContent">
                    {answer}
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
    );
}
export default function Accordionn() {
    return (
        <div>
            {accordionContent.map((feature) => (
                <AccordionFunction
                    id={feature.id}
                    key={feature.id}
                    question={feature.question}
                    answer={feature.answer}
                />
            ))}
        </div>
    );
}

type accordionType = {
    id: number;
    question: string;
    answer: string;
}