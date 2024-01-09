import React , {useEffect, useState} from 'react'
import "./Account.css"
import {useDispatch, useSelector} from "react-redux"
import { GetMyposts, Logoutuser } from '../../Actions/User';
import Loader from "../Loader/Loader"
import { useAlert } from 'react-alert';
import Post from '../Post/Post';
import { Avatar, Button, Dialog, Typography } from '@mui/material';
import { Link,useNavigate } from 'react-router-dom';
import User from '../User/User';


const Account = () => {
 const {userdata,loading:userloading}= useSelector((state)=>state.user)
    const { loading, error, posts} = useSelector((state)=>state.Mypost)
    const {error:likeerror,message}= useSelector((state)=>state.Likepost)
    // console.log("postdata",posts)
const alert=useAlert();
const navigate = useNavigate()
    const dispatch = useDispatch();
    const [ followers,SetFollowers]= useState(false)
    const [ followering,SetFollowering]= useState(false)


    const logouthandler =  (e)=>{
        e.preventDefault();
          dispatch(Logoutuser());
         alert.success("logout successfully")
         navigate("/")
    }

    useEffect(() => {
      dispatch(GetMyposts());
    }, [dispatch])

    useEffect(()=>{
        if(error){
            alert.error(error)
            dispatch({type:"clearerror"})
        }
        if(likeerror){
            alert.error(likeerror)
            dispatch({type:"clearerror"})
        }
        if(message){
            alert.success(message)
            dispatch({type:"clearmessage"})
        }
    },[alert,message,likeerror,error,dispatch])
    

  return  loading===true || userloading===true ? <Loader/> : (
        <div className='account'>
          <div className="accountleft">
  {posts && posts.length > 0 ? (
    posts.map((item) => (
      <Post
        key={item?._id}
        postId={item?._id}
        postcaption={item?.caption}
        postimage={item?.image?.url}
        userId={item?.users?._id}
        userimage={item?.users?.profilepic?.url || 'default_profile_image_url'}
        userName={item?.users?.name}
        likes={item?.likes}
        comments={item?.comments}
        IsAccount={true}
        IsDelete={true}
      />
    ))
  ) : (
    <Typography variant='h4'>No Post to show</Typography>
  )}
</div>

            <div className="accountright">
                <Avatar src={userdata?.profilepic?.url} style={{height:"8vmax" , width:"8vmax"}}/> 
<Typography variant='h5'> {userdata?.name}</Typography>
<div>
    <button>
        <Typography > Posts</Typography>
    </button>
    <Typography variant='h6'> {userdata?.posts.length}</Typography>
</div>
<div>
    <button  disabled={followers.length===0 ?true :false}
    onClick={()=>SetFollowers(!followers)}>
        <Typography > Followers</Typography>
    </button>
    <Typography variant='h6'> {userdata?.followers.length}</Typography>
</div>
<div>
    <button disabled={followering.length===0 ?true :false}
    onClick={()=>SetFollowering(!followering)}>
        <Typography > Followings</Typography>
    </button>
    <Typography variant='h6'> {userdata?.following.length}</Typography>
</div>

<Button variant='contained' onClick={logouthandler}> Logout</Button>
<Link to={"/update/profile"}> Edit Profile</Link>
<Link to={"/update/password"}> Change Password</Link>

<Button style={{backgroundColor:"red", color:"white"}} >
    Delete Profile
</Button>
            </div>

            <Dialog
open={followers}
onClose={()=>SetFollowers(!followers)}
>
<div className='DialogBox'>
    <Typography> Followers</Typography>

    {userdata && userdata?.followers.length > 0 ? (userdata?.followers.map((like)=>(
<User
 key={like?._id}
 userID={like?._id}
 avator={like?.profilepic?.url}
 name={like?.name}
/>)
    )):(
        <Typography style={{display:"flex", alignItems:"center",justifyItems:"center"}}>You have No Followers</Typography>
    )}
</div>
</Dialog>
            <Dialog
open={followering}
onClose={()=>SetFollowering(!followering)}
>
<div className='DialogBox'>
    <Typography> Followings</Typography>

    {userdata && userdata?.following.length > 0 ? (userdata.following.map((like)=>(
 <User
 key={like?._id}
 userID={like?._id}
 avator={like?.profilepic?.url}
 name={like?.name}
/>
) 
    )):(
        <Typography style={{display:"flex", alignItems:"center",justifyItems:"center"}}>You Are Not Following Anyone</Typography>
    )}
</div>
</Dialog>
        </div>
      )
  }


export default Account