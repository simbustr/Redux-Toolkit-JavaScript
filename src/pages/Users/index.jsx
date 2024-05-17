import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteusers } from '../../slices/UserSlices'
import { showToast, hideToast } from '../../slices/toasterSlice';

const UsersPage = () => {

  const dispatch = useDispatch()
 const users = useSelector((state)=>state.usersInfo.users)
 const loading = useSelector((state)=>state.loaderInfo.loading)
 const messages = useSelector((state)=>state.toasterInfo.messages)
 
 useEffect(() => {
  
  dispatch({ type: 'loader/setLoading', payload: true });
  setTimeout(() => {
    dispatch({ type: 'loader/setLoading', payload: false });
  }, 2000);
}, [dispatch]); // Only run once when the component mounts

 const deleteusersinfo = (index) =>{
  dispatch(deleteusers(index))
 }

 const showMessage = () => {
  dispatch(showToast({ id: 1, text: 'Hello, world!' }));
  setTimeout(() => {
    dispatch(hideToast(1));
  }, 3000);
};

  return (
    <div>
    {loading ? (
      <div>Loading...</div>
    ) : users.length === 0 ? (
      <div>No users found</div>
    ) : (
      <div>
        {users.map((item, index) => (
          <div key={index}>
            <div>{item.username}</div>
            <div>{item.place}</div>
            <button onClick={() => deleteusersinfo(index)}>Delete</button>
          </div>
        ))}
      </div>
    )}

    


    <div><button onClick={showMessage}>Show Toast</button></div>
    <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
  </div>
  )
}

export default UsersPage
