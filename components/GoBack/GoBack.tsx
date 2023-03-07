// import { arrow } from 'Assets/svgs'
import React, { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BreadCrumb } from './BreadCrum'

export type BreadCrumbsListItemType = {
  text: string
  link: string
  disabled?: boolean
}

type Props = {
  breadCrumbsList: Array<BreadCrumbsListItemType>
}

export const GoBack = memo(({ breadCrumbsList }: Props) => {
  const [breadCrumbsListLength, setBreadCrumbsListLength] = useState<number>(0)

  useEffect(() => {
    setBreadCrumbsListLength(breadCrumbsList.length - 1)
  }, [breadCrumbsList])

  return (
    <div
      className='px-8  flex flex-col justify-center gap-4  h-28 lg:h-32 border-b-[#E5E9EB] border '
    >
      <div className='flex gap-4'>
        <Link to={'/'}>
          <span className="mx-2">{">"}</span>
        </Link>
        {breadCrumbsList?.map((item: BreadCrumbsListItemType, index: number) => {
          return (
            <BreadCrumb
              link={item.link}
              text={item.text}
              isLastItem={breadCrumbsList ? index === breadCrumbsListLength : false}
              disabled={item.disabled}
              key={item.link}
            />
          )
        })}
      </div>
    </div>
  )
})
