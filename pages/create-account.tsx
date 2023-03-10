/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/Button'
import { InputField } from '../components/InputField'
import Loader from '../components/Loader'
import { createAccount } from '../services/auth/create-account'
import { RootState } from '../services/store'
import { ICreateAccount } from '../types'

export default function Register() {
  const [visible, setVisible] = useState<boolean>(false)
  const [phone, setPhone] = useState('')
  const dispatch = useDispatch()
  const router = useRouter()

  const { loading, data, error } = useSelector(
    (state: RootState) => state.createAccount,
  )

  console.log('>>>>>>data,', phone.substring(1))

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ICreateAccount>()

  useEffect(() => {
    const phone = localStorage.getItem('phone') || ''
    setPhone(phone)
  }, [])

  const createAccountHandler = (data: ICreateAccount) => {
    const newData = {
      client: 'web',
      phone_number: `+234${phone.substring(1)}`,
      first_name: data.first_name,
      last_name: data.last_name,
      password: data.password,
    }
    dispatch(createAccount({ router, newData }))
  }

  return (
    <>
      <Head>
        <title>Errand App</title> 
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white flex ">
        <div className=" w-3/5 hero-banner font-recoletta flex  justify-center items-center font-bold">
          <p className="text-7xl text-white tracking-wider">
            Run Errands, Get Paid
          </p>
        </div>
        <div className="w-2/5 bg-white pt-16 px-20">
          <img src="/fake-logo.svg" alt="" />

          <div className="pt-10">
          <Toaster />

            <h1 className="font-inter text-2xl font-bold text-black tracking-wide">
              Create an Account
            </h1>
            <p className="pt-2 text-base">
              Let???s get started and create a Profile for you
            </p>

            <form
              className="pt-10 space-y-8"
              onSubmit={handleSubmit(createAccountHandler)}
            >
              <InputField
                name="first_name"
                placeholder="Enter First Name"
                required
                label="First Name"
                type="text"
                register={register}
                errors={errors.first_name}
                message="First name field is required"
              />
              <InputField
                label="Last Name"
                placeholder="Enter First Name"
                required
                type="text"
                name="last_name"
                register={register}
                errors={errors.last_name}
                message="Last name field is required"
              />
              <InputField
                label="Phone Number"
                placeholder="Enter Phone Number"
                value={phone}
                required
                type="text"
                name="phone_number"
                register={register}
              />
              <InputField
                label="Password"
                placeholder="Enter First password"
                required
                type="password"
                name="password"
                register={register}
                errors={errors.password}
                message="password field is required"
              />

              <Button
                type="submit"
                child={loading ? <Loader /> : 'Register'}
                className="w-full bg-[#243763] text-white rounded-lg p-4 text-base"
              />
              <h5 className="text-center text-black">
                Already Have an Account?{' '}
                <Link href="/login">
                  <span className="font-bold text-[#243763]">Login</span>
                </Link>
              </h5>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
