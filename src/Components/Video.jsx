import React, { useState } from 'react'
import {storage} from './firebase'
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import ReactPlayer from 'react-player'

function Video() {

    const uploadFile=(e)=>{
let file=e.target.files[0];
let fileRef =ref(storage,file.name);
const uploadTask = uploadBytesResumable(fileRef, file);
uploadTask.on('state_changed',(snapshot)=>{
    const progress=(snapshot.bytesTransferred / snapshot.totalBytes)*100;
console.log("Upload is" + progress + "%done" );

}).then(snapshot=>{getDownloadURL(snapshot.ref).then(url=>{console.log(url)})})
    }
   
    const keyGenerator = () => {
      return (
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
      );
    };
    console.log(keyGenerator())
    
  return (
    <div>video
        <input type="file" onChange={uploadFile} />
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    </div>
  )
}

export default Video