import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import Tweets from "./Tweets";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
// import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // db.collection("posts").onSnapshot((snapshot) => {
    //   setPosts(snapshot.docs.map((doc) => doc.data()));
    // });
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <div style={{marginLeft: "10%", width: "80%"}}>
      <TextareaAutosize
      style={{width: "80%", height: "80px"}}
      rowsMax={4}
      aria-label="maximum height"
      placeholder="What happened!!"
      defaultValue=""
    />
    <button style={{marginLeft: "60%", width: "20%", height: "40px", color: "white", background: "#3D4BF6"}}><b>Post Tweet</b></button>
      </div>
      {/* <Tweets /> */}
      {/* {posts.map((post) => ( */}
        <Post
          displayName={"Abhishek S"}
          username={"abhi"}
          text={"This is a sample Post for testing jalsfjlkjf lsdkfj lkfj dkfjdlg jdlfkgj ldkgjldfkjgl rjoil fkeljfrlegjlket"}
          avatar={"dss"}
          image={"asds"}
        />
        <Post
          displayName={"Abhishek S"}
          username={"abhi"}
          text={"This is a sample Post for testing jalsfjlkjf lsdkfj lkfj dkfjdlg jdlfkgj ldkgjldfkjgl rjoil fkeljfrlegjlket"}
          avatar={"dss"}
          image={"asds"}
        />
        <Post
          displayName={"Abhishek S"}
          username={"abhi"}
          text={"This is a sample Post for testing jalsfjlkjf lsdkfj lkfj dkfjdlg jdlfkgj ldkgjldfkjgl rjoil fkeljfrlegjlket"}
          avatar={"dss"}
          image={"asds"}
        />
      {/* ))} */}
    </div>
  );
}

export default Feed;