export default function Finance() {
  return (
    <div className="w-full pb-10">
      <div className="w-4/12">
        <label className="flex text-[#243763] font-bold text-base" htmlFor="">
          What is your budget for this errand?
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
        <p className=" italic text-sm pt-1 text-[#FF0000]">
          The Budget for this errand is calculated against the current market
          rate and it is currently ₦2,000.{' '}
        </p>
      </div>

      <div className="w-7/12 pt-5">
        <p className="text-xl text-[#243763] font-semibold">Insurance</p>
        <p className="text-sm leading-6">
          Setting an Insurance value on your errand forces bidders to have that
          value in their wallet before they can bid for your errand. The value
          is then held by GOFER until the errand is completed in order to secure
          your valuables.. Use this option carefully as it will likely limit the
          number of bids you receive on this errand
        </p>
      </div>

      <div className="w-4/12 mt-6 mb-20">
        <label className="flex text-[#243763] font-bold text-base" htmlFor="">
          Request for Insurance
          <span className="pt-1 pl-2">
            <img src="./tip.svg" alt="" />
          </span>
        </label>
        <input
          name=""
          id=""
          placeholder="Enter a Number"
          className="h-14 rounded-lg outline-none flex-1 px-3 py-2 border-[1px] border-[#`E6E6E6] flex w-full text-sm mt-2 mb-8 bg-[#FAFAFA]"
        />
        <label className="flex text-[#243763] font-bold text-base" htmlFor="">
         How much insurance amount do you require from Bidders for this errand?
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
  )
}
