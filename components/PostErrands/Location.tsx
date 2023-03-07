function Location() {
  return (
    <div>
      <p className="flex text-[#243763] font-bold text-base pt-7 pb-3">
        Request Location
        <span className="font-normal pl-2">
          (If you have a separate Pickup Location or Delivery Location, Provide
          the address below)
        </span>
      </p>

      <div className="flex w-full">
        <div className="pt-8 space-y-8 pb-16 w-4/12">
          <div className="w-full">
            <label className="flex text-[#243763] font-bold text-sm" htmlFor="">
              What is your Current Location?
              <span className="pt-1 pl-2">
                <img src="./tip.svg" alt="" />
              </span>
            </label>
            <input
              name=""
              id=""
              placeholder="Enter a Number"
              className="h-14 rounded-lg outline-none flex-1 px-3 py-2 border-[1px] border-[#`E6E6E6] flex w-full mt-2 text-sm bg-[#FAFAFA]"
            />
          </div>
          <div className="w-full">
            <label className="flex text-[#243763] font-bold text-sm" htmlFor="">
              Delivery Address
              <span className="pt-1 pl-2">
                <img src="./tip.svg" alt="" />
              </span>
            </label>
            <input
              name=""
              id=""
              placeholder="Enter a Number"
              className="h-14 rounded-lg outline-none flex-1 px-3 py-2 border-[1px] border-[#`E6E6E6] flex w-full mt-2 text-sm bg-[#FAFAFA]"
            />
          </div>
          <div className="w-full">
            <label className="flex text-[#243763] font-bold text-sm" htmlFor="">
              Google Map Address
              <span className="pt-1 pl-2">
                <img src="./tip.svg" alt="" />
              </span>
            </label>
            <input
              name=""
              id=""
              placeholder="Enter a Number"
              className="h-14 rounded-lg outline-none flex-1 px-3 py-2 border-[1px] border-[#`E6E6E6] flex w-full mt-2 text-sm bg-[#FAFAFA]"
            />
          </div>
        </div>

        <div>hello</div>
      </div>
    </div>
  )
}

export default Location
