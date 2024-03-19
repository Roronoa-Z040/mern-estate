import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";


import { 
  updateUserStart, 
  updateUserSuccess, 
  updateUserFailure, 

  signOutUserStart,
  signOutUserFailure,
  signOutUserSuccess,

} from "../redux/user/userSlice";

import { useDispatch } from "react-redux";

export default function Profile() {
  const fileRef = useRef(null);
  const {currentUser, loading, error} = useSelector(state => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [showListingserror, setShowListingserror ] = useState(false);
  const [userListings, setUserListings] = useState([]);
  const dispatch = useDispatch();
  
  console.log(formData); 
  
  useEffect(() => {
    if(file) {
      handleFileUpload(file);
    }
  }, [file]);






 

  const handleSignOut = async () => {
    try {
       dispatch(signOutUserStart());
       const res = await fetch (`/api/auth/signout`);
       const data = await res.json();
       if (data.success === false) {
        dispatch(signOutUserFailure(data.message));
        return;
      }   
      dispatch(signOutUserSuccess(data));
    } catch (error) {
      dispatch(signOutUserFailure(error.message));
    }
  };




 


  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl font-semibold text-center my-7 '>ADMIN PROFILE</h1>
      <form  className="flex flex-col gap-4">
        
        
        
        <img 
           
          src={formData.avatar || currentUser.avatar} 
          alt="profile" 
          className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2 '
        />


        
        <input 
          type="text" 
          placeholder="username" 
          defaultValue={currentUser.username}
          id='username' 
          className="border p-3 rounded-lg "  
          readOnly="true" 
        />
        
        <input 
          type="email" 
          placeholder="email" 
          defaultValue={currentUser.email}
          id='email' 
          className="border p-3 rounded-lg " 
          readOnly="true" 
        />
        
       
        
        
        
        

      </form>
      
      <div className="flex justify-between mt-4">
        
        <span onClick={handleSignOut} className="text-red-700 cursor-pointer  uppercase text-center flex">Sign out</span>
      </div>

         
              

      
      


    </div>
  )
}