
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
      const response = await axios.delete(`${apiHost}/${url}/${qrId}`, {
      });
      setResponseData(response.data);
      return response?.data

    } catch (err) {
      setError(err.message);
      return err?.message
    } finally {
      setLoading(false);
    }
  };

  return { deleteData, loading, error, responseData };
};

export default useDelete;
