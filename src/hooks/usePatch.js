// src/hooks/usePatch.js
import { useState } from "react";
import axios from "axios";
import { apiHost } from "../config";

const usePatch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const patchData = async (data) => {
    try {
      setLoading(true);
      const token = sessionStorage.getItem("authToken"); 

      const response = await axios.patch(`${apiHost}/${url}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      // console.log("In the try catch", response);
      setResponseData(response?.data);
      return response?.data;
    } catch (err) {
      console.log("In HOok error :", err);
      setError(err);
      return err;
    } finally {
      setLoading(false);
    }
  };

  return { patchData, loading, error, responseData };
};

export default usePatch;
