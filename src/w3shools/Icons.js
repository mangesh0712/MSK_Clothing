
import { DocumentAddIcon, HomeIcon, MenuIcon, MoonIcon, SaveAsIcon, SaveIcon } from '@heroicons/react/solid'
import React from 'react'

function Icons() {
    return (
        <div className="flex items-center p-3">
            <div className="flex items-center">
                <HomeIcon className="w3Icons"/>
                <MenuIcon className="w3Icons"/>
                <SaveIcon className="w3Icons"/>
                <DocumentAddIcon className="w3Icons"/>
                <MoonIcon className="w3Icons"/>
            </div>
        </div>
    )
}

export default Icons
