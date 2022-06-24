import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import WcImage from '../assets/images/wc.webp';
function Header() {
  return (
    <div>
        <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">

                </div>
                <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">

                </div>
            </div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">When and where is the 2022 World Cup?</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">When and where is the 2022 World Cup?</p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                    <Link href="/about"><div className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#9a074f] hover:bg-[#470f2a] md:py-4 md:text-lg md:px-10"> About </div></Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="/teams"><div className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#9a074f] bg-[#fddfed] hover:text-white hover:bg-[#963162] md:py-4 md:text-lg md:px-10">Teams</div></Link>
                    </div>
                </div>
                </div>
            </main>
            </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 pr-40 hidden lg:flex">
            <Image  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={WcImage} alt="World Cup Image" />
        </div>
        </div>
    </div>
  )
}

export default Header