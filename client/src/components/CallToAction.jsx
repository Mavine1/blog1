import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to dive deeper into God's Word?
            </h2>
            <p className='text-gray-500 my-2'>
            Explore the Bible with these online resources
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.biblegateway.com" target='_blank' rel='noopener noreferrer'>
                Read the Bible Online
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://www.freepik.com/free-photo/holy-bible-with-rays-light-coming-out-ai-generative_41369575.htm#query=bible&position=20&from_view=keyword&track=sph&uuid=85902157-ab3b-4fac-965b-6a94a997d7d2.jpg" />
        </div>
    </div>
  )
}