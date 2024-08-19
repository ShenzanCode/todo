import React from 'react'

const Todo = ({title, des, isCompleted, complete, mongoId, deltodo, id}) => {
  return (
    <>
        <tr>
              <td className="px-6 py-4">{id}</td>
              <td className="px-6 py-4">{title}</td>
              <td className="px-6 py-4">{des}</td>
              <td className="px-6 py-4">{isCompleted? "Done":"Panding"}</td>
              <td className="px-6 py-4 flex gap-1">
                <button onClick={()=> deltodo(mongoId)} className="px-2 py-1 rounded-md text-white hover:text-gray-900 bg-red-950">
                  Delete
                </button>
                {isCompleted? " ":<button onClick={()=>complete(mongoId)} className="px-2 py-1 rounded-md text-white hover:text-yellow-50 bg-black">
                  Done
                </button>}
                
              </td>
            </tr>
    </>
  )
}

export default Todo