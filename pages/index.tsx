import Link from 'next/link'

export default function profile() {
  return (
    <div className="bg-white h-screen font-inter">
      <div className="bg-[#243763] h-24 flex justify-center items-center text-white text-base space-x-5">
        <Link href="/login">
          <p>Login</p>
        </Link>
        <Link href="/verify-phone">
          <p>Register</p>
        </Link>
      </div>
      <div className="flex z-20 w-full justify-center items-center px-40 pt-10 text-3xl">
        Landing Page
      </div>
    </div>
  )
}
