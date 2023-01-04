import React, { useEffect, useState } from 'react'
import upload from '../../assets/upload.png';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../../firebaseConfig";
function CvUpload() {
  const [uploadLoading, setUploadLoading] = useState(0);
  const [cv,setCV]=useState(false);
  let inputRef = React.createRef();
  
  

  const uploadCV=(e)=>{
    let file = e.target.files[0];
    console.log(file);
    //ref(storage,'path to file',file,name)
    const storageRef = ref(storage, "user-cv/" + file.name);
    //uploadBytesResumable(storage-Ref,file)
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setUploadLoading(progress);
      },
      (error) => {
        Notification({ message: "something went wrong" });
      },
        
      
    )
    setCV(true)
  }
  // useEffect(()=>{
  //   uploadCV(e)
  // },[cv])
  return (
    <div className='cv-section'>
    <div className='cv-container'>
      <div className='cv-content'>
    Get Matched The Most Valuable Jobs,Just Drop Your CV at Job-Place Solutions
      </div>
      <p className='cv-subcontent'>In the subject line of email, write your name, the description of the position you want to apply</p>
      <div className='upload-box'>
      <input
                          accept="image/*"
                          style={{
                            display: "none",
                          }}
                          ref={inputRef}
                          type={"file"}
                          value={""}
                          onChange={(e) => uploadCV(e)}
                        />
        <button
        onClick={() => inputRef.current.click()}
        ><img src={upload} alt="upload"/>Upload Your CV</button>
      </div>
     </div>
    </div>
  )
}

export default CvUpload
