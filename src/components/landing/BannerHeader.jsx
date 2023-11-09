import { useState } from "react"
import {Dialog} from '@headlessui/react'
export const MobileHeader = () =>{
    const[isOpen,setIsOpen] = useState(false)
    return(
    <>
     <div className="lg:hidden">
     <button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={()=>setIsOpen(true)}>
     <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
              </svg>
     </button>
     </div>
     <Dialog open={isOpen} onClose={()=>setIsOpen(false)}>
        <div className="mt-6 flow-root">
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <button onClick={()=>setIsOpen(false)}>
        <span className="sr-only" >Close menu</span>
                            <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
        </button>
        <Dialog.Title className="p-3 text-right text-3xl text-black">Menu</Dialog.Title>
        <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div class="space-y-2 py-6">
                            <a
                                href="/"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >Inicio</a
                            >
                            <a
                                href="/product"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >Productos</a
                            >
                            <a
                                href="/about"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >Sobre Nosotros</a
                            >
                            <a
                                href="/contact"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >Contactenos</a
                            >
                            </div>
                            
                        </div>
                        </div>
        </Dialog.Panel>
        </div>
        
     </Dialog>
    </>    
    )
}