import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL:'https://api.github.com/users'
})

export function userFetch<T = unknown>(url: string) {
  const [user, setUser] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null> (null);

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setUser(response.data);
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setIsFetching(false);
      });
  });

  return { user, isFetching, error };
}
