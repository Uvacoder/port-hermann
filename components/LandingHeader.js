import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: 'Home', href: 'https://herrmann.page', current: true },
  { name: 'About', href: 'https://herrmann.page/#about', current: false },
  { name: 'Projects', href: 'https://herrmann.page/#projects', current: false },
]
const mobile_navigation = [...navigation, { name: 'Contact', href: 'mailto:henry@herrmann.page', current: false }]

export default function Header() {
  return (
    <Fragment>
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
          <div className="mx-auto w-screen px-9 sm:px-15 lg:px-52 backdrop-blur-md fixed">
              <div className="relative flex h-[9vh] items-center justify-between">
                  <div className='flex-none items-center p-5 cursor-pointer invisible sm:visible'>
                    <Link href="">
                        <Image
                          src="/logo/logo.svg"
                          alt="rjks Logo"
                          width={60}
                          height={60}
                        />
                    </Link>
                  </div>
                  <p className='text-2xl flex flex-1 invisible sm:visible sm:justify-start lg:justify-start'>Henry Herrmann</p>
                  <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                          {navigation.map((item) => (
                              <Link
                                  key={item.name}
                                  href={item.href}
                                  className='hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium'
                              >
                              {item.name}
                              </Link>
                          ))}
                          <Link href="mailto:henry@herrmann.page">
                            <div className='sm:w-auto w-[70vw] min-w-[100px] bg-herrmann-blue px-3 py-2 rounded-md text-sm font-medium hover:shadow-md hover:bg-herrmann-blue-gray hover:cursor-pointer transition'>
                              <p className="flex justify-center text-white">Contact</p>
                            </div>
                          </Link>
                      </div>
              </div>
              <div className="flex inset-y-0 left-100 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-herrmann-gray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>                  
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
  
                    )}
                  </Disclosure.Button>
              </div>
              </div>
            </div>
  
            <Disclosure.Panel className="sm:hidden fixed w-screen mt-16 backdrop-blur-md">
              <div className="space-y-1 ml-4 px-2 pt-2 pb-3">
                {mobile_navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className='block px-3 py-2 rounded-md text-base font-medium'
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                
              </div>
            </Disclosure.Panel>
          </>
        )}
    </Disclosure>
    </Fragment>
  )
}