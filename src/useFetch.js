import { useState } from "react";
import { useEffect } from "react";
r;
const useFetch = (url) => {
  const [data, setBlogs] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) throw Error("something went wrong : (");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
        setisPending(false);
        setError(null);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setisPending(false);
      });
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
