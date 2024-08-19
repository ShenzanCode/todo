'use client'
import Todo from "@/components/todo";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


export default function Home() {
  const [todo, settodo]=useState([])
  const [data, setdata]=useState({
    title:"",
    des: ""
  })
  const getTodos = async () => {
    const response= await axios.get('/api/todo')
    console.log(response.data.msg);
    settodo(response.data.msg)
  }
  const del = async (Id) => {
    try {
        const response = await axios.delete('/api/todo', {
            params: {
                mongoId: Id,
            },
        });
        toast.success(response.data.msg);
        getTodos()
    } catch (error) {
        console.error('Error deleting TODO:', error);
        toast.error('Failed to delete TODO');
    }
};

const complete = async (Id) => {
  try {
      const response = await axios.put('/api/todo',{} ,{
          params: {
              mongoId: Id,
          },
      });
      toast.success(response.data.msg);
      getTodos();  // Ensure getTodos refreshes your TODO list correctly
  } catch (error) {
      console.error('Error completing TODO:', error);
      toast.error('Failed to complete TODO');
  }
};


  useEffect(()=>{
    getTodos()
  },[])
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const submit = async(e) => {
    e.preventDefault();
    const response= await axios.post('/api/todo',data)
    toast.success("todo successfully submitted")
    setdata({
      title: "",
      des:""
    })
    getTodos();
    }
  return (
    <div>
      
      <form onSubmit={submit} className="flex flex-col flex-wrap gap-3 items-center justify-center m-auto">
        <h2>My Todo List</h2>
        <input
          className="m-2 p-2 outline-none border border-black rounded-sm w-[50%]"
          type="text"
           name="title"
        value={data.title}
        onChange={handleChange}
          placeholder="Add a todo"
        />
        <textarea
          className="m-2 p-2 outline-none border border-black rounded-sm w-[50%]"
          name="des"
          value={data.des}
          onChange={handleChange}
          placeholder="description"
        ></textarea>
        <button
          type="Submit"
          className="mx-2 px-4 hover:bg-slate-500 py-2 text-white bg-black rounded-md"
        >
          Add todo
        </button>
      </form>

      <div className="relative overflow-x-auto shadow-md shadow-slate-500 sm:rounded-lg w-[70%] m-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
          {todo.map((item,index)=>{
            return <Todo key={index} title={item.title} des={item.des} isCompleted={item.isCompleted} mongoId={item._id} id={index+1} deltodo={del} complete={complete}/>
            
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
