import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      setLoading(true);
      try {
        let res = await fetch(url);

        if (!res.ok) {
          throw {
            err: true,
          };
        }

        let dataReceived = await res.text();
        let dataJson = JSON.parse(dataReceived);
        if (dataJson.services) {
          let result = {};
          dataJson.services.forEach((el) => {
            if (!result[el.category]) result[el.category] = [];
            result[el.category].push(el);
          });
          setData(result);
        } else setData(dataJson);
      } catch (error) {
        setLoading(true);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData(url);
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
