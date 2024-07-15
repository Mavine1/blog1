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
            <img src="https://www.google.com/imgres?q=blog%20bible%20images%20jpg&imgurl=https%3A%2F%2Fdavidjeremiah.blog%2Fwp-content%2Fuploads%2F2018%2F02%2Fis-bible-prophecy-important.jpg&imgrefurl=https%3A%2F%2Fdavidjeremiah.blog%2Fis-bible-prophecy-important%2F&docid=mmUy8TwuCKCdGM&tbnid=daqfe-gd_nz9sM&vet=12ahUKEwiWiayS1KiHAxWq9QIHHYqtD9IQM3oECFoQAA..i&w=750&h=420&hcb=2&ved=2ahUKEwiWiayS1KiHAxWq9QIHHYqtD9IQM3oECFoQAA" />
        </div>
    </div>
  )
}