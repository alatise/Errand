/* eslint-disable react/no-unescaped-entities */
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import Button from '../components/Button'
import Loader from '../components/Loader'
import app from '../helpers/firebase'
import { verifyPhone } from '../services/auth/verify-phone'

declare global {
  interface Window {
    recaptchaVerifier: any
  }
}

declare global {
  interface Window {
    confirmationResult: any
  }
}

export default function VerfiyPhone() {
  const [visible, setVisible] = useState<boolean>(false)
  const [phone, setPhone] = useState<string>('')
  const [otp, setOtp] = useState<string>('')
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [otpLoading, setOtpLoading] = useState<boolean>(false)
  const dispatch = useDispatch()
  const [error, setError] = useState('')
  const [showPhoneInput, setShowPhoneInput] = useState<boolean>(true)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const configureCaptcha = () => {
    const auth = getAuth(app)
    window.recaptchaVerifier = new RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
        callback: (response: any) => {
          onSignInSubmit()
        },
      },
      auth,
    )
  }

  const onSignInSubmit = (e?: any) => {
    e.preventDefault()
    if (!phone) {
      return setError('Please enter your Phone No.')
    }
    setLoading(true)
    const phone_number = '+234' + phone
    dispatch(verifyPhone({ phone_number }))

    configureCaptcha()
    const appVerifier = window.recaptchaVerifier
    const auth = getAuth(app)
    signInWithPhoneNumber(auth, phone_number, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult
        setLoading(false)
        setShowPhoneInput(false)
        toast.success('An OTP has been sent to your phone')
        localStorage.setItem('phone', phone)
        console.log('>>>>>otp sent')
        // ...
      })
      .catch((error) => {
        console.log(">>>>>>>>>error", error)
        setLoading(false)
      })
  }

  const submitOTP = (e?: any) => {
    e.preventDefault()

    if (!otp) {
      return toast.error('Please enter OTP to continue')
    }
    setOtpLoading(true)

    window.confirmationResult
      .confirm(otp)
      .then((result: any) => {
        // console.log(">>>>result", result)
        // User signed in successfully.
        const user = result.user
        toast.success('Verification Successful')
        setOtpLoading(false)
        router.push('/create-account')
      })
      .catch((error: any) => {
        // setError('Sorry, Please enter the otp sent to your phone')
        // if(error.in=)
        toast.error('Sorry, Please enter the otp sent to your phone')
        setOtpLoading(false)
        console.log(">>>>>>>>>>>erorr", error.FirebaseError)

        // User couldn't sign in (bad verification code?)
        // ...
      })
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <Head>
        <title>Errand App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen bg-white flex">
        <div className=" w-3/5 h-full hero-banner font-recoletta flex  justify-center items-center font-bold">
          <p className="text-7xl text-white tracking-wider">
            Run Errands, Get Paid
          </p>
        </div>
        <div className="w-2/5 bg-white pt-16 px-20">
          <img src="/fake-logo.svg" alt="" />

          <div className="pt-10">
            <h1 className="font-inter text-2xl font-bold text-black tracking-wide">
              Phone Verification
            </h1>

            <div className="pt-10 space-y-10">
              {showPhoneInput && (
                <form onSubmit={onSignInSubmit}>
                  {/* <p className="py-2 text-base">Enter your phone number</p> */}
                  <div id="sign-in-button"></div>
                  <div className="space-y-2">
                    <label
                      htmlFor=""
                      className="text-base capitalize text-[#243763] pb-2"
                    >
                      PHONE
                    </label>
                    <div className="flex justify-between items-center w-full bg-white py-2 border-2 border-inputBorder rounded-lg mt-t">
                      <input
                        type="text"
                        placeholder="Enter Your Phone No."
                        onChange={(e: any) => setPhone(e.target.value)}
                        className="rounded-lg outline-none flex-1 px-3 py-2"
                      />
                    </div>
                  </div>

                  <Button
                    child={loading ? <Loader /> : 'Submit'}
                    type="submit"
                    className="w-full bg-[#CBD5EC] text-white rounded-lg py-3 px-5 mt-6 text-base border-[#3F60AC] border-[0.5px]"
                  />
                </form>
              )}

              <form onSubmit={submitOTP}>
                {/* <p className="py-2 text-base">
                  Enter The OTP sent to your phone
                </p> */}
                <div className="space-y-2">
                  <label
                    htmlFor=""
                    className="text-base capitalize text-[#243763] pb-2"
                  >
                    VERIFY PHONE NUMBER
                  </label>
                  <div className="flex justify-between items-center w-full bg-white py-2 border-2 border-inputBorder rounded-lg mt-t">
                    <input
                      type="number"
                      placeholder="Enter Your Phone No."
                      onChange={(e: any) => setOtp(e.target.value)}
                      className="rounded-lg outline-none flex-1 px-3 py-2 "
                    />
                  </div>
                </div>

                <Button
                  child={otpLoading ? <Loader /> : 'Verify OTP'}
                  type="submit"
                  className="w-full bg-[#243763] text-white rounded-lg p-5 mt-7 text-base cursor-pointer"
                />
              </form>
            </div>

            {/* <div className="pt-5">
              
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
