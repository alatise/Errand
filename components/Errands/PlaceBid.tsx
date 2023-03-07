import Button from '../Button'

type PlaceBidProps = {
  showBid: boolean
  toggleBidModal: any
  togglePlaceBid: any
  showPlaceBid: boolean
}

export default function PlaceBid({
  showBid,
  toggleBidModal,
  showPlaceBid,
  togglePlaceBid,
}: PlaceBidProps) {
  return (
    <div className="w-1/2 absolute right-0 top-0 h-[100%] bg-white px-14 bottom-0  p-10 shadow-lg">
      {!showPlaceBid ? (
        <div className="flex justify-between border-b-[1px] pb-4">
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleBidModal}
          >
            <img src="/close-icon.svg" alt="" className="w-3 h-3 mr-4 " />
            <span className="font-semibold text-lg">Close</span>{' '}
          </div>

          <Button
            onClick={() => {
              togglePlaceBid()
              togglePlaceBid()
            }}
            child="Place your Bid"
            className="bg-[#3F60AC] px-6 py-2 rounded-lg text-white text-sm cursor-pointer"
            icon="/message.svg"
          />
        </div>
      ) : (
        <div className="flex border-b-[1px] pb-4">
          <div
            className="flex items-center cursor-pointer pr-20"
            onClick={togglePlaceBid}
          >
            <img src="/back-arrow.svg" alt="" className="w-5 h-5 mr-4 " />
            <span className="font-semibold text-lg">Back</span>{' '}
          </div>

          <p className="font-bold text-lg pl-36">Place Your Bid</p>
        </div>
      )}
      <p className="text-xl font-semibold pt-6">
        I need a mechanic to fix a broken windshield
      </p>
      <div className="flex space-x-2 items-center mt-2">
        <img src="/pic-3.svg" className="w-8 h-8 rounded-full" alt="" />
        <p className="text-[#666666] font-semibold text-sm">George Eno</p>
      </div>

      <div className="pt-6 flex gap-20 ">
        <div className="space-y-5 text-sm text-[#888888] font-bold">
          <p>status</p>
          <p>Duration</p>
          <p>Location</p>
          <p>Special Requirements</p>
        </div>
        <div className="space-y-[17px] text-sm">
          <Button
            child="open"
            className="bg-[#CBD5EC] px-4 rounded-sm text-sm text-[#243763] h-6"
          />
          <div className="flex">
            <img src="/cal-icon.svg" alt="" />{' '}
            <span className="pl-2">Jan 14, 2023 - Feb 14, 2023</span>
          </div>
          <p>Sangotedo, Lagos</p>
          <div className="flex space-x-3">
            <Button
              icon="/insurance.svg"
              child="Insurance"
              className="bg-[#F0F3FA] h-6 px-2 rounded-lg text-[#3F60AC] border-[#3F60AC] border-[1px] text-xs"
            />
            <Button
              icon="/bookmark.svg"
              child="Insurance"
              className="bg-[#E6CDFE] h-6 px-2 rounded-lg text-[#6604C8] border-[#6604C8] border-[1px] text-xs"
            />
            <Button
              icon="/user-icon.svg"
              child="Insurance"
              className="bg-[#D8F8E9] h-6 px-2 rounded-lg text-[#198553] border-[#198553] border-[1px] text-xs"
            />
          </div>
        </div>
      </div>

      <div className="pt-10 text-sm text-[#444444]">
        <p className=" font-semibold">Description</p>
        <p className=" leading-6">
          Lorem ipsum dolor sit amet consectetur. At convallis lacus sodales
          lorem et. Consectetur est posuere fermentum egestas congue lectus
          purus. Mattis libero ultrices at massa hendrerit purus. Eget netus non
          vel duis hendrerit mi gravida. In sed elit elit morbi vitae nisl
          malesuada aliquam ultricies.
        </p>
        <p className="pt-3 leading-6">
          Lorem ipsum dolor sit amet consectetur. At convallis lacus sodales
          lorem et. Consectetur est posuere fermentum egestas congue lectus
          purus. Mattis libero ultrices at massa hendrerit purus. Eget netus non
          vel duis hendrerit mi gravida. In sed elit elit morbi vitae nisl
          malesuada aliquam ultricies.
        </p>
      </div>

      <div className="pt-10 text-sm text-[#444444]">
        <p className=" font-semibold pb-3">Supportive Images</p>
        <div className="flex space-x-4">
          <img src="/pic-2.svg" className=" w-32" alt="" />
          <img src="/pic-3.svg" className=" w-32" alt="" />
          <img src="/pic.svg" className=" w-32" alt="" />
        </div>
      </div>

      <div className="pt-10 text-sm text-[#444444] border-b-[1.5px] pb-16">
        <p className=" font-semibold pb-3">Supportive Audio</p>
        <div className="flex space-x-4 items-center">
          <img src="/play-sound.svg" alt="" />

          <p className="text-[#3F60AC] font-semibold">1:20</p>
          <img src="/play-audio.svg" alt="" />
          <p className="text-[#3F60AC] font-semibold">2:20</p>
        </div>
      </div>

      {showPlaceBid ? (
        <div className="pt-14">
          <div className="flex space-x-4 items-center">
            <img src="/pic.svg" alt="" className="rounded-full w-14 h-14" />
            <div>
              <p className="">Kaiya Stanton</p>
              <div className="flex items-center space-x-2">
                <span>4.5</span> <img src="/star.svg" className="w-3" alt="" />{' '}
                <span className="text-[#6D6D6D] text-sm">
                  (134 Errands Completed)
                </span>
              </div>
            </div>
          </div>

          <div className="w-1/3 pt-6">
            <label
              className="flex text-[#243763] font-semibold text-sm"
              htmlFor=""
            >
              Enter your Bid Amount
            </label>
            <input
              name=""
              id=""
              placeholder="Enter a Number"
              className="h-14 rounded-lg outline-none flex-1 px-3 py-2 border-[1px] border-[#`E6E6E6] flex w-full mt-2 text-sm bg-[#FAFAFA]"
            />
          </div>
          <div className="pt-10">
            <label
              className="flex text-[#243763] font-semibold text-sm"
              htmlFor=""
            >
              Enter your Bid Comment
              <span className="font-normal">
                {' '}
                (Sell your skills to the poster)
              </span>
            </label>
            <textarea
              name=""
              id=""
              placeholder="Describe the issue that you need help with."
              className="h-36 rounded-lg outline-none flex-1 px-3 py-2 border-[1px] border-[#E6E6E6] flex w-full mt-2 text-xs bg-[#FAFAFA]"
            />
          </div>

          <Button
            child="Place Your Bid"
            className="bg-[#243763] w-60  border border-blue-700 text-lg text-white p-2 rounded px-4 py-3 mt-8"
            icon2='/send.svg'
          />
        </div>
      ) : (
        <div className="pt-14  text-[#444444]">
          <p className=" font-semibold pb-3 text-base">Existing Bids</p>

          <div className="space-y-14">
            <div>
              <div className="flex space-x-4 items-center">
                <img src="/pic.svg" alt="" className="rounded-full w-14 h-14" />
                <div>
                  <p className="">Kaiya Stanton</p>
                  <div className="flex items-center space-x-2">
                    <span>4.5</span>{' '}
                    <img src="/star.svg" className="w-3" alt="" />{' '}
                    <span className="text-[#6D6D6D] text-sm">
                      (134 Errands Completed)
                    </span>
                  </div>
                </div>
              </div>
              <p className=" leading-6 text-sm pt-4">
                Lorem ipsum dolor sit amet consectetur. At convallis lacus
                sodales lorem et. Consectetur est posuere fermentum egestas
                congue lectus purus. Mattis libero ultrices at massa hendrerit
                purus. Eget netus non vel duis hendrerit mi gravida. In sed elit
                elit morbi vitae nisl malesuada aliquam ultricies.
              </p>
              <p className="pt-3 leading-6  text-sm">
                Lorem ipsum dolor sit amet consectetur. At convallis lacus
                sodales lorem et. Consectetur est posuere fermentum egestas
                congue lectus purus. Mattis libero ultrices at massa hendrerit
                purus. Eget netus non vel duis hendrerit mi gravida. In sed elit
                elit morbi vitae nisl malesuada aliquam ultricies.
              </p>
            </div>

            <div>
              <div className="flex space-x-4 items-center">
                <img src="/pic.svg" alt="" className="rounded-full w-14 h-14" />
                <div>
                  <p className="">Kaiya Stanton</p>
                  <div className="flex items-center space-x-2">
                    <span>4.5</span>{' '}
                    <img src="/star.svg" className="w-3" alt="" />{' '}
                    <span className="text-[#6D6D6D] text-sm">
                      (134 Errands Completed)
                    </span>
                  </div>
                </div>
              </div>
              <p className=" leading-6 text-sm pt-4">
                Lorem ipsum dolor sit amet consectetur. At convallis lacus
                sodales lorem et. Consectetur est posuere fermentum egestas
                congue lectus purus. Mattis libero ultrices at massa hendrerit
                purus. Eget netus non vel duis hendrerit mi gravida. In sed elit
                elit morbi vitae nisl malesuada aliquam ultricies.
              </p>
            </div>

            <div>
              <div className="flex space-x-4 items-center">
                <img src="/pic.svg" alt="" className="rounded-full w-14 h-14" />
                <div>
                  <p className="">Kaiya Stanton</p>
                  <div className="flex items-center space-x-2">
                    <span>4.5</span>{' '}
                    <img src="/star.svg" className="w-3" alt="" />{' '}
                    <span className="text-[#6D6D6D] text-sm">
                      (134 Errands Completed)
                    </span>
                  </div>
                </div>
              </div>
              <p className=" leading-6 text-sm pt-4">
                Lorem ipsum dolor sit amet consectetur. At convallis lacus
                sodales lorem et. Consectetur est posuere fermentum egestas
                congue lectus purus. Mattis libero ultrices at massa hendrerit
                purus. Eget netus non vel duis hendrerit mi gravida. In sed elit
                elit morbi vitae nisl malesuada aliquam ultricies.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
