import jwt_decode from 'jwt-decode'
import { useLayoutEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../Button'

export default function Navbar() {
  const [user, setUser] = useState<any>({})
  const [show, setShow] = useState<boolean>(false)
  // const  {userInfo } = useSelector((state:RootState) => state.login

  return (
   <div className="flex px-20 border border-b-gray-300 shadow-sm">
        <div className="flex items-center w-full mt-8 mb-4">
          <p className="flex-1 font-bold leading-43 text-3xl text-black">
            Gofer
          </p>
          <Button
            child="Get Started"
            className="bg-white text-blue rounded-lg border-[#A5B6DE] py-3 px-3 w-40 border-1 text-xs text-blue-500 ml-auto"
            onClick={() => {}}
          />
        </div>
    </div>
  )
}
