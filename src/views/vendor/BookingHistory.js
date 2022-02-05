import LedgerTable from "./components/LedgerTable";
import UserFundStats from "./components/UserFundStats";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchUserAction } from "redux/actions/authActions";

export default function BookingHistory() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <>
      <UserFundStats />
      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <LedgerTable
              onRefresh={() => dispatch(fetchUserAction)}
              ledgerdata={currentUser?.ledgerData}
              data={currentUser?.ledger}
            />
          </div>
        </div>
      </div>
    </>
  );
}
