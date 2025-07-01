import { useState, useEffect } from "react";
import axios from "axios";
import { apiHost } from "../config";

const useGet = (url, { params = {}, query = {}, headers = {} } = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem("authToken"); // ✅ Token get karo

        const response = await axios.get(`${apiHost}/${url}`, {
          params: { ...params, ...query },
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Token add karo
            ...headers, // ✅ User-defined headers ko merge karo
          },
        });

        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, JSON.stringify(params), JSON.stringify(query), JSON.stringify(headers)]);

  return { data, loading, error };
};

export default useGet;
