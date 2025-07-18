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

      const token = sessionStorage.getItem("authToken");

      const response = await axios.delete(`${apiHost}/${url}/${qrId}`, {
        headers: {
          Authorization: `Bearer ${token}`, 
          ...headers, 
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
