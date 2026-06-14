import React from 'react'

function Card({username="unknown" , btnText = "visit me"}) {
  
  
  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src="https://images.unsplash.com/photo-1755838692094-49a97b9fb9ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D"


          alt=" pic"
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
              soluta amet corporis accusantium aliquid consectetur eaque!
            </p>
          </div>
          <button
            type="button"
            
            
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-black"
          >
              {btnText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
