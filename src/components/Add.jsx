import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../config/firebase'


const Add = () => {

    const [todo, setTodo] = useState('')

    const listRef = collection(db,'list')

    const submit = async (e) =>{
        e.preventDefault()
        if(todo === ''){
            alert(`Please enter Todo's`)
            return
        }else{
            try{
                await addDoc(listRef , {description: todo, isDone: false})
                // alert('Added')
            }catch(error){
                console.log(error)
                alert(error)
            }
        }
        setTodo('')
    }

  return (
    <div className='w-full relative'>
      <form onSubmit={submit} className='flex items-center justify-center'>
        <input type="text" value={todo} placeholder='Add Todo...'
        onChange={(e)=>setTodo(e.target.value)}
        className='my-2 w-4/5 px-2 py-1 outline-none rounded-l-md capitalize text-xl text-slate-700'/>
        <button className='bg-white px-2 py-1 rounded-r-md hover:bg-slate-400 text-slate-700 font-bold text-xl'>+</button>
      </form>
      
    </div>
  )
}

export default Add
