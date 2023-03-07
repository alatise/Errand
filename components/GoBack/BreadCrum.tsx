import Link from 'next/link'
import react from 'react'


interface BreadCrumbProps {
  isLastItem: boolean
  link: string
  text: string
  disabled?: boolean
}

export const BreadCrumb = ({ isLastItem, link, text }: BreadCrumbProps) => {
  return (
    <div className='flex gap-3 items-center '>
      <Link href={link} className={`text-base font-medium leading-4.5 ${isLastItem ? 'text-[#3F60AC]' : 'text-[#000000]'}  whitespace-nowrap`}>
        {text}
      </Link>
      {!isLastItem && (
        <div>
           <span className="mx-2">{">"}</span>
        </div>
      )}
    </div>
  )
}