import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import { collection, getDocs, doc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import {AiFillDelete, AiFillCheckCircle} from 'react-icons/ai'

const List = ({submit}) => {

    const [list, setList] = useState([])
    const listRef = collection(db, 'list')

    const getData = async () =>{
        const listRef = collection(db, 'list')
        try{
            const snapshot = await getDocs(listRef)
            const docs = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            })) 
            setList(docs)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
     getData()
    },[getData])

    const deleteItem = async (id) =>{
        try{
            const listDoc = doc(db, 'list', id)
            await deleteDoc(listDoc)
        }catch(error){
            console.log(error)
        }
    }

    const completed = async (id) =>{
        try{
            const listDoc = doc(db, 'list', id)
            await updateDoc(listDoc, {isDone: true}) 
        }catch(error){
            console.log(error)
        }
    }


  return (
    <div className='w-full h-full flex justify-center'>
        <div className='w-5/6 h-5/6 bg-white  overflow-auto'>
            {list.map((item) =>{
                return(
                    <div key={item.id} >
                        <div className={item.isDone ? `flex justify-between items-center group hover:bg-slate-700 py-1 px-2  border-l-4 border-green-500` :
                        `flex justify-between items-center group hover:bg-slate-700 py-1 px-2`}>
                            <p className='text-slate-700 group-hover:text-white capitalize'>{item.description}</p>
                            <div className='flex gap-1 opacity-0 group-hover:opacity-100'>
                                <AiFillDelete onClick={()=>deleteItem(item.id)}  className='text-white hover:bg-red-500 hover:text-white text-2xl cursor-pointer rounded-md p-1'/>
                                <AiFillCheckCircle onClick={()=>completed(item.id)} 
                                className= 'text-white hover:bg-green-500 hover:text-white text-2xl cursor-pointer rounded-md p-1'/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default List
