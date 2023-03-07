import { useState } from 'react'
import Button from '../../components/Button'
import ErrandCard from '../../components/Errands/ErrandCard'
import PlaceBid from '../../components/Errands/PlaceBid'

export default function Errands() {
  const [showBid, setShowBid] = useState<boolean>(false)
  const [showPlaceBid, setShowPlaceBid] = useState<boolean>(false)

  const toggleBidModal = () => {
    setShowBid(!showBid)
  }

  const togglePlaceBid = () => {
    setShowPlaceBid(!showPlaceBid)
  }

  return (
    <div className="">
      <div className="bg-[#F0F3FA] w-full h-72 ">
        <div className="flex justify-center">
          <div className="bg-white px-4 py-2 w-[65%] h-14 flex mt-16 rounded-lg">
            <img src="/search-icon.svg" className=" h-8 mt-2" alt="" />
            <input
              type="text"
              className=" bg-transparent outline-none flex-1 px-2"
            />
          </div>
        </div>

        <div className=" pt-12 flex justify-center gap-40">
          <Button
            child="All Errands"
            className="bg-[#A5B6DE] text-white px-4 py-3 rounded-lg w-40"
          />
          <Button
            child="Requires Insurance"
            className=" text-black px-4 py-3 rounded-lg"
          />{' '}
          <Button
            child="Requires Qualifications"
            className=" text-black px-4 py-3 rounded-lg"
          />{' '}
        </div>
      </div>

      <div
        className="flex justify-center items-center mt-4 mb-20"
        onClick={() => {
          showBid && setShowBid(false)
        }}
      >
        <div className="">
          <div className="container">
            <ErrandCard ins img toggleBidModal={toggleBidModal} />
            <ErrandCard toggleBidModal={toggleBidModal} />
            <ErrandCard ins toggleBidModal={toggleBidModal} />
            <ErrandCard ins toggleBidModal={toggleBidModal} />

            <ErrandCard ins toggleBidModal={toggleBidModal} />
            <ErrandCard ins toggleBidModal={toggleBidModal} />
            <ErrandCard ins img toggleBidModal={toggleBidModal} />
            <ErrandCard ins toggleBidModal={toggleBidModal} />

            <ErrandCard ins toggleBidModal={toggleBidModal} />
            <ErrandCard toggleBidModal={toggleBidModal} />
            <ErrandCard ins img toggleBidModal={toggleBidModal} />

            <ErrandCard ins toggleBidModal={toggleBidModal} />
            <ErrandCard ins toggleBidModal={toggleBidModal} />
            <ErrandCard ins img toggleBidModal={toggleBidModal} />
            <ErrandCard ins toggleBidModal={toggleBidModal} />

            <ErrandCard ins toggleBidModal={toggleBidModal} />
            <ErrandCard ins toggleBidModal={toggleBidModal} />
            <ErrandCard ins img toggleBidModal={toggleBidModal} />
            <ErrandCard ins toggleBidModal={toggleBidModal} />
          </div>
        </div>
      </div>

      {showBid && (
        <PlaceBid showPlaceBid={showPlaceBid} togglePlaceBid={togglePlaceBid} showBid={showBid} toggleBidModal={toggleBidModal} />
      )}
    </div>
  )
}
