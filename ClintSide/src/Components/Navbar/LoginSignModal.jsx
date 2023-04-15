import React, { useState } from 'react'
import Login from '../../Authentication/Login/Login';
import SignIn from '../../Authentication/Signin/SignIn';
import { GoSignIn } from "react-icons/go";

const LoginSignModal = () => {
    const [showModal, setShowModal] = useState(false);

    const [logIn,setLog]=useState(true)
  return (
    <div>
          <div className="flex items-center justify-center "  onClick={() => setShowModal(true)}>
            <GoSignIn/>
            </div>
            {showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8 h-400px">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                            <button className="absolute top-0 right-0 w-16 mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                                onClick={() => setShowModal(false) } > close </button>
                            <div className=' mt-5' >
                                {logIn ? <Login logIn={logIn} setLog={setLog} showModal={showModal} setShowModal={setShowModal} /> : <SignIn  logIn={logIn} setLog={setLog} />}
                                    
                                    
                             </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}

    </div>
  )
}

export default LoginSignModal