import { useEffect, useState } from "react";

const PAGE = 1
const PAGE_SIZE = 20

export const useGetAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({});

  useEffect(() => {
    fetch(
      `https://mysterious-wildwood-52860.herokuapp.com/v1/users?page=${PAGE}&pageSize=${PAGE_SIZE}`,
      { method: "GET", headers: { "Content-Type": "application/json" } }
    )
      .then((res) => res.json())
      .then((response) => {
        setUsers(response);
        setIsLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  return [users, isLoading, error];
};
