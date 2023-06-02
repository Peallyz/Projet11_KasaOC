import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState({
    data: undefined,
    loading: true,
    error: undefined,
  });

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData({ data: data, loading: false });
      })
      .catch((err) => {
        setData({ data: undefined, loading: false });
        console.log(err);
      });
  }, [url]);

  return [data.data, data.loading, data.error];
}
