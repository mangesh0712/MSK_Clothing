
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'
import React from 'react'
import Icons from './Icons'

function  Navbar({screenSize}) {
    return (
        <div className="flex items-center md:mx-10 mx-2 mt-3">
            <Icons/>
            <div className="flex items-center py-2 px-6 text-2xl text-white hover:text-gray-500 hover:bg-white cursor-pointer bg-green-600 rounded-sm">
                Run <ChevronDoubleRightIcon className="h-6 ml-2"/>
            </div>
            <div className="flex justify-end flex-grow items-center font-semibold text-lg ">Result Size :{` ${screenSize}`}</div>
            <div className="flex p-3 text-lg flex-0 m-3 items-center text-white hover:text-gray-500 hover:bg-white cursor-pointer bg-green-600 rounded-sm">Get your own website</div>
        </div>
    )
}

export default Navbar
