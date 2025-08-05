import { useState } from "react";
import axios from "axios";
import { apiHost } from "../config";

const usePost = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const postData = async (data) => {
    try {
      setLoading(true);
      setError(null);

      const token = sessionStorage.getItem("authToken");
      const isFormData = data instanceof FormData;

      const response = await axios.post(`${apiHost}/${url}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        ...(isFormData ? {} : { "Content-Type": "application/json" }), // ✅ Skip for FormData
        },
      });

      setResponseData(response.data);
      return response.data;

    } catch (err) {
      const apiError = err?.response?.data || "Something went wrong!";
      setError(apiError);
      console.log(err);
      
      return { error: apiError };

    } finally {
      setLoading(false);
    }
  };

  return { postData, loading, error, responseData };
};

export default usePost;
