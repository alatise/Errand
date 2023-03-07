function Review() {
  return (
    <div className="w-full pb-24">
      <div>
        <p className="text-lg font-bold border-b-[1px] pb-1 border-[#CCCCCC]">
          Errand Category
        </p>
        <div className="flex gap-x-56 pt-2">
          <div className="w-3/12 text-base text-[#777777]">
            <p>
              In this section, you can select the category which your errand
              falls under here.{' '}
            </p>
          </div>

          <div className="5/12 space-y-8">
            <div>
              <p className="font-bold text-base">Category Type</p>
              <p className="text-base">Services</p>
            </div>
            <div>
              <p className="font-bold text-base">Activity</p>
              <p className="text-sm">Baby Sitting</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg font-bold border-b-[1px] pb-1 border-[#CCCCCC]">
          Errand Details
        </p>
        <div className="flex gap-x-56 pt-2">
          <div className="w-3/12 text-base text-[#777777]">
            <p>
              In this section, you can supply additional information about the
              errand you wish to post.
            </p>
          </div>

          <div className="5/12 space-y-8">
            <div>
              <p className="font-bold text-base">Description</p>
              <p className="text-base w-[600px]">
                I want someone who is good with watching over babies within the
                age of 0-3 years old while i go out for a conference meeting.
              </p>
            </div>
            <div>
              <p className="font-bold text-base">Duration</p>
              <p className="text-base">
                Friday, 10th February 2023 - Wednesday, 15th February 2023
              </p>
            </div>
            <div>
              <p className="font-bold text-base">Supported Images</p>
              <div className="flex gap-5">
                <img src="./pic.svg" alt="" />
                <img src="./pic.svg" alt="" />
                <img src="./pic.svg" alt="" />
              </div>
            </div>
            <div>
              <p className="font-bold text-base">Supported Audio</p>
              <div className="flex gap-5">
                {/* <img src="./pic.svg" alt="" />
              <img src="./pic.svg" alt="" />
              <img src="./pic.svg" alt="" /> */}
                Audio Image
              </div>
            </div>
            <div>
              <p className="font-bold text-base">
                Restrict Errand by Qualification
              </p>
              <p>Yes</p>
            </div>
            <div>
              <p className="font-bold text-base">
                Restrict Errand by Verification
              </p>
              <p>Yes</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg font-bold border-b-[1px] pb-1 border-[#CCCCCC]">
          Errand Location
        </p>
        <div className="flex gap-x-56 pt-2">
          <div className="w-3/12 text-base text-[#777777]">
            <p>
              In this section, you can set the location that you want the errand
              to take place in.
            </p>
          </div>

          <div className="5/12 space-y-8">
            <div>
              <p className="font-bold text-base">Pickup Location</p>
              <p className="text-base w-[600px]">
                35,Mosafejo Amukoko, Ajegunle Apapa, Lagos.
              </p>
            </div>
            <div>
              <p className="font-bold text-base">Delivery Location</p>
              <p className="text-base">16 Beirut Road, Mikano, Lagos State.</p>
            </div>
            <div>
              <p className="font-bold text-base">Google Map Location</p>
              <p>N/A</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg font-bold border-b-[1px] pb-1 border-[#CCCCCC]">
          Errand Finances
        </p>
        <div className="flex gap-x-56 pt-2">
          <div className="w-3/12 text-base text-[#777777]">
            <p>
              In this section, you can set the financial plan for this request
              regarding the budget of the request
            </p>
          </div>

          <div className="5/12 space-y-8">
            <div>
              <p className="font-bold text-base">Errand Budget</p>
              <p className="text-base w-[600px]">
                NGN 40,000.00
              </p>
            </div>
            <div>
              <p className="font-bold text-base">Demand for Insurance</p>
              <p className="text-base">Yes</p>
            </div>
            <div>
              <p className="font-bold text-base">Insurance Amount</p>
              <p>NGN 10,000.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
