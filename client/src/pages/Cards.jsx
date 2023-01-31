import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";

export default function Cards() {
  return (
    <>
      <div>
        
        <PostList />
      </div>
    </>
  );
}
