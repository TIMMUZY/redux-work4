import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./PostDetails.module.css";
import {useDispatch,useSelector} from 'react-redux'
import fetchDetails from "../../store/creators/postDetailsCreator";
const PostDetails = () => {
  const {post} = useSelector((state)=>state.postDetailsSlice)
  const params = useParams();
  const navigate = useNavigate();
const dispatch = useDispatch()
  const onBack = () => navigate(-1);

  useEffect(() => {
dispatch(fetchDetails(params))
  }, []);
  console.log(params);
  return (
    <div className={classes.post}>
      {post && (
        <>
          <button onClick={onBack}>Back</button>
          <h1>{post.id} </h1>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};


export default PostDetails;