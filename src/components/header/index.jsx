import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../firebase/auth'


const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()

    return (
        <nav className='flex flex-row justify-between w-full z-20 fixed top-0 left-0 h-12 border-b place-content-center items-center bg-gray-200'>
            {userLoggedIn && (
                <div>
                    <Link className='text-sm text-blue-600 underline mr-4' to={'/Youtube'}>Youtube</Link>
                </div>
            )}
            <div>
                {userLoggedIn ?
                    <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-sm text-blue-600 underline ml-2'>Logout</button>
                    :
                    <>
                        <Link className='text-sm text-blue-600 underline mr-4' to={'/login'}>Login</Link>
                        <Link className='text-sm text-blue-600 underline' to={'/register'}>Register New Account</Link>
                    </>
                }
            </div>
        </nav>
    )
}


// const Header = () => {
//     const navigate = useNavigate()
//     const { userLoggedIn } = useAuth()
//     return (
//         <nav className='flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 border-b place-content-center items-center bg-gray-200'>
//             {
//                 userLoggedIn
//                     ?
//                     <>
//                         <Link className='text-sm text-blue-600 underline' to={'/Youtube'}>Youtube</Link>
//                         <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-sm text-blue-600 underline'>Logout</button>
                        
//                     </>
//                     :
//                     <>
//                         <Link className='text-sm text-blue-600 underline' to={'/login'}>Login</Link>
//                         <Link className='text-sm text-blue-600 underline' to={'/register'}>Register New Account</Link>
//                     </>
//             }

//         </nav>
//     )
// }

export default Header