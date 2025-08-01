import React from 'react';

function Card() {
    return (
        <>
        {/* <div>
        <h1 className='p-4 bg-blue-600 text-3xl rounded-lg border-4 border-black'>Hello</h1>
        </div> */}
        <div className="grid place-content-center h-screen w-full dark:bg-gray-900 bg-green-500 ">
            <div className=" bg-yellow-500 p-7 rounded-full flex shadow-red-950 shadow-md hover:bg-yellow-400 hover:scale-110 md:bg-pink-700 md:p-16 md:hover:scale-110 md:hover:bg-pink-600 dark:bg-gray-800  dark:hover: dark:text-white dark:shadow-black md:dark:shadow-black  md:dark:bg-gray-800  md:dark:hover: " >
                <img className="object-cover overflow-hidden w-24 rounded-full md:w-56 " src="https://images.pexels.com/photos/31993370/pexels-photo-31993370.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Dog On Hill" />    
                <div className="place-content-center">
                    <p className="flex items-center p-2 text-center text-xl text-green-900 md:text-blue-900 md:text-4xl md:font-extrabold dark:text-white md:dark:text-white">Found a Dog on the hills.</p>
                    <p className="font-bold"><a href="https://www.pexels.com/@himanshu-singh-2152040016/gallery/" target="_blank" className="text-slate-600 text-sm p-4 hover:text-pink-700 dark:text-gray-400 md:dark:text-gray-400">by Roaming Realms
                    </a></p>
                </div>     
            </div>
        </div>
        </>
    )
}

export default Card;
