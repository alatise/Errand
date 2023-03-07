import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

interface LayoutProp {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProp) {
  
  return (
    <div className="">
      <div className="relative">
        <Navbar />
        <div>{children}</div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
