"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [MainTask, setMainTask] = useState([])

  //storing data in object
  const submitHandler = (e)=>{
    e.preventDefault()
    setMainTask([...MainTask, {title,desc}])
    settitle("")
    setdesc("")
  }

  //deleting task from the list
  const deletehandler = (i)=>{
    let copyTask = [...MainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }

//list rendering 
  let renderTask = <h2> No task available...</h2>
  if(MainTask.length>0){
    renderTask = MainTask.map((t,i)=>{
    return(
      <div key={`${t.title}-${t.desc}-${i}`} className='grid grid-cols-12 gap-4 my-1'>
        <h5 className='text-xl font-semibold font-bevietnam col-span-3'>{t.title}</h5>
        <h6 className='text-lg font-medium font-bevietnam col-span-7'>{t.desc}</h6>
        <button onClick={()=>{
          deletehandler(i)
        }} className='px-1 py-0.5 bg-red-600 font-medium text-white rounded-md cursor-pointer'>Delete</button>
        <button className='px-1 py-0.5 bg-green-600 font-medium text-white rounded-md cursor-pointer'>Done</button>
      </div>
    )
  })
  }
  return (
    <>
    <h1 className='bg-gray-900 text-white text-center text-4xl font-bevietnam tracking-wide py-1'>
      Todo List
    </h1>
    <form onSubmit={submitHandler} className='flex  flex-col m-5 p-6 gap-4'>

      <input type='text' placeholder='Enter Title here' className='px-4 py-2 text-lg bg-white rounded-sm border-2' required value={title} onChange={(e)=>{
        settitle(e.target.value)
      }}/>

      <input type='text' placeholder='Enter Description here' required className='px-4 py-2 text-lg bg-white rounded-sm border-2' value={desc} onChange={(e)=>{
        setdesc(e.target.value)
      }}/>

      <button className='px-3 py-2 bg-blue-400 hover:bg-blue-500 border-2 cursor-pointer w-50 border-black rounded-sm hover:font-bold hover:tracking-wide text-cyan-300 self-center'> GO</button>

    </form>

    <hr/>
    <div className='bg-slate-200 p-8'>
      <ol>
        {renderTask}
      </ol>
    </div>
    </>
  )
}

export default page