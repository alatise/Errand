function Details() {
  return (
    <div className=" w-3/5">
      <div>
        <label className="flex text-[#243763] font-semibold text-sm" htmlFor="">
          Description
          <span className="font-normal"> (Describe the help you need)</span>
        </label>
        <textarea
          name=""
          id=""
          placeholder="Describe the issue that you need help with."
          className="h-36 rounded-lg outline-none flex-1 px-3 py-2 border-[1px] border-[#E6E6E6] flex w-full mt-2 text-xs bg-[#FAFAFA]"
        />
      </div>

      <p className="flex text-[#243763] font-semibold text-sm pt-7 pb-5">
        Duration{' '}
        <span className="font-normal pl-2">
          {' '}
          (Enter a Number and choose your Duration type)
        </span>
      </p>
      <div className="flex gap-12">
        <div className="w-full">
          <label
            className="flex text-[#243763] font-semibold text-sm"
            htmlFor=""
          >
            Number
          </label>
          <input
            name=""
            id=""
            placeholder="Enter a Number"
            className="h-14 rounded-lg outline-none flex-1 px-3 py-2 border-[1px] border-[#`E6E6E6] flex w-full mt-2 text-sm bg-[#FAFAFA]"
          />
        </div>
        <div className="w-full">
          <label
            className="flex text-[#243763] font-semibold text-sm"
            htmlFor=""
          >
            Duration Type
          </label>
          <select
            name=""
            id=""
            placeholder="Enter a Number"
            className="h-14 rounded-lg outline-none flex-1 px-3 py-2 border-[1px] border-[#E6E6E6] flex w-full mt-2 text-sm bg-[#FAFAFA]"
          >
            <option value="">Select Option</option>
          </select>
        </div>
      </div>

      <p className="flex text-[#243763] font-semibold text-sm pt-7 pb-3">
        Supporting Images
        <span className="font-normal pl-2">
          {' '}
          (Upload any images needed to further describe your request)
        </span>
      </p>
      <div className="flex w-full gap-8">
        <div className="border-[1.5px] bg-[#FAFAFA] border-dashed flex justify-center items-center w-[28rem] rounded-lg text-sm">
          <div className="text-[#808080] text-center">
            <div className="flex justify-center items-center pb-2">
              <img
                src="./img.svg"
                alt=""
                className="flex items-center justify-center"
              />
            </div>

            <div>
              <p className="">
                Drag and Drop an image or{' '}
                <span className="text-[#3F60AC] font-semibold">Browse</span>
              </p>
              <p className="pt-2">3 images maximum</p>
            </div>
          </div>
        </div>

        <div className="border-[1.5px] bg-[#FAFAFA] w-3/6 rounded-lg py-1 pb-2 flex justify-center items-center ">
          <div>
            <p className="font-bold text-[#333333] pb-2 text-sm">
              3 images selected
            </p>
            <div className="flex gap-5">
              <img src="./pic.svg" alt="" />
              <img src="./pic.svg" alt="" />
              <img src="./pic.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <p className="flex text-[#243763] font-semibold text-sm pt-7 pb-3">
        Supporting Audio
        <span className="font-normal pl-2">
          {' '}
          (Upload a voice note to further describe your request)
        </span>
      </p>
      <div className="flex w-full gap-8">
        <div className="border-[1.5px] bg-[#FAFAFA] border-dashed flex justify-center items-center w-[28rem] rounded-lg text-sm">
          <div className="text-[#808080] text-center py-5">
            <div className="flex justify-center items-center pb-2">
              <img
                src="./img.svg"
                alt=""
                className="flex items-center justify-center"
              />
            </div>

            <div>
              <p className="">Click on the Mic icon above to record</p>
              <p className="pt-2">your voice message</p>
            </div>
          </div>
        </div>

        <div className="border-[1.5px] bg-[#FAFAFA] w-3/6 rounded-lg py-1 pb-2 flex justify-center items-center ">
          <div className="flex gap-x-8">
            <img src="./sound.svg" alt="" />
            <img src="./stream.svg" alt="" />
            <p className="text-2xl font-semibold pt-3">1:30</p>
          </div>
        </div>
      </div>

      <div className="pt-8 space-y-8 pb-16">
        <div className="w-2/4">
          <label
            className="flex text-[#243763] font-semibold text-sm"
            htmlFor=""
          >
           Restrict Errand by Qualification <span className="pt-1 pl-2"><img src="./tip.svg" alt="" /></span>
          </label>
          <select
            name=""
            id=""
            placeholder="Enter a Number"
            className="h-14 rounded-lg outline-none flex-1 px-3 py-2 border-[1px] border-[#E6E6E6] flex w-full mt-2 text-sm bg-[#FAFAFA]"
          >
            <option value="">Select Option</option>
          </select>
        </div>
        <div className="w-2/4">
          <label
            className="flex text-[#243763] font-semibold text-sm"
            htmlFor=""
          >
            Restrict Errand by Verification <span className="pt-1 pl-2"><img src="./tip.svg" alt="" /></span>
          </label>
          <select
            name=""
            id=""
            placeholder="Enter a Number"
            className="h-14 rounded-lg outline-none flex-1 px-3 py-2 border-[1px] border-[#E6E6E6] flex w-full mt-2 text-sm bg-[#FAFAFA]"
          >
            <option value="">Select Option</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Details
