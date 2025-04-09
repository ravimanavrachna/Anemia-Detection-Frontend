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
      setError(null); // Reset error state

      const response = await axios.post(`${apiHost}/${url}`, data);

      setResponseData(response.data);
      return response.data; // ✅ API response return kar raha hoon

    } catch (err) {
      const apiError = err?.response?.data || "Something went wrong!";
      setError(apiError);
      return { error: apiError }; // ✅ Error return kar raha hoon

    } finally {
      setLoading(false);
    }
  };

  return { postData, loading, error, responseData };
};

export default usePost;
