/* eslint-disable react/jsx-key */

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import  './Main.css';
import axios from 'axios';
function TodoList() {
 const [item, setItem] = useState();
 const [datas , setDatas] = useState([]);

 useEffect(()=>{
    const fetchdata = async()=>{
        try{
            const response = await axios.get(`http://localhost:4000/api/Getdata`);
            setDatas(response.data);
        }catch(error){
            console.log(error)

        }
    }
    fetchdata()
},[])

 const add = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:4000/api/Addlist",{item})
    .then(res=>{
        setDatas([...datas,res.data])
        setItem('');
        console.log(res);
    })
    .catch(err=>{
        console.log(err)
    })

 }
 const deletedata = (id)=>{
    axios.delete(`http://localhost:4000/api/delete/${id}`)
    .then(()=>
        {setDatas(datas.filter((datas)=> datas._id !==  id))
 })
 .catch(error=>{
    console.log(error)
 })
 
}
  return ( 
   <>
    <div className='Main-div'>
        <div className='Headdiv'>
            <h3>TO-DO LIST</h3>
        </div>
        <div className='Otherdiv'>
        <input type="text" placeholder="Type here . . . . ." className="input input-bordered w-full max-w-xs" value={item} onChange={(e)=>setItem(e.target.value)}/>
        <button className="btn btn-ghost pr-12px" onClick={add}>ADD</button>
        </div>
        
        <div className="Itemdiv">{datas.map((datas)=>{
                    return(
                        <ul key={datas._id}>
                            <li>{datas.item}
                                <button onClick={()=>deletedata(datas._id)}>X</button>
                            </li>
                        </ul>
                        
                    );
                })}

        
        </div>

    </div>
   
   </>
  )
}

export default TodoList
