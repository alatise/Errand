type CardProps = {
  img?: boolean
  ins?: boolean
  toggleBidModal?: any
}

export default function ErrandCard({ ins, img, toggleBidModal }: CardProps) {
  return (
    <div className={`bg-white w-[320px] border-1 z-0 rounded-lg mt-14 ml-6 break-inside-avoid float-left shadow ${img ? "h-[410px]": "h-[200px]"} cursor-pointer `} onClick={toggleBidModal}>
      {img && <img src="/errand-img.svg" className="w-[350px]" alt="" />}
      <div className="py-2 font-semibold pl-3">
        <p className="text-base">I need someone to help with laundry</p>

        <p className="text-xs text-[#888888] flex pt-1">
          <span className="pr-1">
            <img src="/map-icon.svg" className="w-3 h-3 mt-[3px]" alt="" />
          </span>{' '}
          Sangotedo, Lagos
        </p>
        <p className="text-[#FA6B05] text-base font-semibold py-4">N50k</p>

       {ins ? <img src="/insurance.svg" className="w-6 h-6 mb-2" alt="" />: <img src="/bookmark.svg" className="w-6 h-6 mb-2" alt="" />} 

        <div className="flex items-center pt-4 border-t-1">
          <img src="/pic-2.svg" alt="" className="rounded-full w-7 h-7" />
          <p className="text-xs pl-4">Timothy Weah James</p>
        </div>
      </div>
    </div>
  )
}
