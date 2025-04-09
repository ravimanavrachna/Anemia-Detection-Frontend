// src/hooks/usePut.js
import { useState } from "react";
import axios from "axios";
import { apiHost } from "../config";

const usePut = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const putData = async (data) => {
    try {
      setLoading(true);
      const response = await axios.put(`${apiHost}/${url}`, data);
      setResponseData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { putData, loading, error, responseData };
};

export default usePut;
