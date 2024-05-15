import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteusers } from '../../slices/UserSlices'

const UsersPage = () => {

  const dispatch = useDispatch()
 const users = useSelector((state)=>state.usersInfo.users)

 console.log(users,"lllll")

 const deleteusersinfo = (index) =>{
  dispatch(deleteusers(index))
 }

  return (
    <div>
         {users.map((item,index)=>{
          return(
            <div>
              <div>  {item.username} </div>
              <div>  {item.place} </div>
              <button onClick={()=>deleteusersinfo(index)}>Delete</button>
            </div>  
          )
         })}
    </div>
  )
}

export default UsersPage
