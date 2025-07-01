import { useState } from "react";
import axios from "axios";
import { apiHost } from "../config";

const useDelete = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const deleteData = async ({ headers = {} } = {}, qrId) => {
    try {
      setLoading(true);

      const token = sessionStorage.getItem("authToken"); // ✅ Get token from localStorage

      const response = await axios.delete(`${apiHost}/${url}/${qrId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ Add token to Authorization header
          ...headers, // ✅ Merge with any custom headers passed
        },
      });

      setResponseData(response.data);
      return response?.data;

    } catch (err) {
      setError(err.message);
      return err?.message;
    } finally {
      setLoading(false);
    }
  };

  return { deleteData, loading, error, responseData };
};

export default useDelete;
