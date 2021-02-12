import { useEffect, useState } from "react";

export const useGetOneUser = (userId) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({});

  useEffect(() => {
    fetch(
      `https://mysterious-wildwood-52860.herokuapp.com/v1/users/${userId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        setUsers(response);
        setIsLoading(false);
      })
      .catch((error) => setError(error));
  }, [userId]);


  return [users, isLoading, error];
};
