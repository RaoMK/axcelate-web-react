import React from "react";
import LedgerTable from "./components/LedgerTable";
import UserFundStats from "./components/UserFundStats";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchUserAction } from "redux/actions/authActions";
import { useState } from "react";
import { getLedger } from "api";

export default function BookingHistory() {
  const [ledger, setLedger] = useState([]);
  const currentUser = useSelector((state) => state.user.currentUser);
  const auth = useSelector((state) => state.user.authenticated);

  const handleFetchLedger = async (id) => {
    try {
      const { data } = await getLedger(id);

      setLedger(data?.ledger);
    } catch (error) {}
  };

  React.useEffect(() => {
    handleFetchLedger(auth?._id);
  }, []);

  return (
    <>
      <UserFundStats />
      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <LedgerTable
              onRefresh={() => handleFetchLedger(auth?._id)}
              ledgerdata={currentUser?.ledgerData}
              data={ledger}
            />
          </div>
        </div>
      </div>
    </>
  );
}
