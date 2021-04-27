import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import userImage from "../images/user.png"

function Post({ displayName, username, text, image, avatar }) {
  return (
    <div style={{width: "65%", marginLeft: "15%"}}>
      <tabel >
        <tbody>
          <tr>
            <td style={{width: "10%"}}><img style={{width: "100px", height: "100px"}} src={userImage}/></td>
            <td style={{width: "90%"}}><h3>{displayName}</h3><p>{text}</p></td>
          </tr>
          <tr style={{border: "2px"}}>
            <td style={{width: "10%"}}></td>
            <td style={{width: "90%"}}>comment &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Like</td>
          </tr>
        </tbody>
      </tabel>
      <br/><br/>
          </div>
  );
}

export default Post;