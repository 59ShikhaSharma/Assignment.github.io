import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(url)
      .then(response => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
};

export default useApi;
