
import React from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

function SignInAndSignUp() {
    return (
        <div className="p-1 m-1 sm:flex sm:p-3 sm:m-3">
            <div className="flex mt-5 sm:mt-0 justify-center sm:w-3/6">
                <SignIn/>
            </div>
            <div className="flex mt-10 sm:mt-0 justify-center sm:w-3/6">
                <SignUp/>
            </div>
        </div>
    )
}

export default SignInAndSignUp
