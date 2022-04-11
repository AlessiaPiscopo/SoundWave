import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const axios = require("axios");

const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("http://localhost:8000/login", {
        code,
      })
      .then((res) => {
        console.log(res.data);
        // remove code from url
        navigate({}, null, "/");
      })
      .catch(() => {
        window.location = "/";
      });
  }, [code]);
};

export default useAuth;
