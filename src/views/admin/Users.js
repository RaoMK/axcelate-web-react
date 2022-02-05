import UserTable from "./components/UserTable";

import { useEffect } from "react";

import { useRef, useState } from "react";
import { fetchAlluser } from "api";
import { useHistory } from "react-router-dom";

export default function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetchAlluser();
      setData(response.data);
      setLoading(false);
      console.log(response.data, "its fetch response");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="px-3 md:px-8 h-auto mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <UserTable
              loading={loading}
              data={data}
              onRefresh={() => fetchUsers()}
            />
          </div>
        </div>
      </div>
    </>
  );
}
