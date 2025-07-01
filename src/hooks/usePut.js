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
      const token = sessionStorage.getItem("authToken"); // ✅ Token get karo

      const response = await axios.put(`${apiHost}/${url}`, data, {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ Token header me bhejo
          "Content-Type": "application/json",
        },
      });

      setResponseData(response.data);
      return response.data;
    } catch (err) {
      setError(err.message);
      return { error: err.message };
    } finally {
      setLoading(false);
    }
  };

  return { putData, loading, error, responseData };
};

export default usePut;
