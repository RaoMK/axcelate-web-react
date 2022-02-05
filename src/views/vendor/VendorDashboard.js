import ChartLine from "components/ChartLine";
import ChartBar from "components/ChartBar";
import VendorTopStats from "./components/VendorTopStats";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import HoldingTable from "./components/HoldingTable";
import { fetchUserAction } from "redux/actions/authActions";

export default function VendorDashboard() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {}, []);
  return (
    <>
      <div className="bg-light-blue-500 px-3 md:px-8 " />

      <VendorTopStats />

      <div className="px-3 md:px-8 -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
              <ChartBar />
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
              <ChartLine />
            </div>
          </div>
        </div>
        <HoldingTable
          onRefresh={() => dispatch(fetchUserAction)}
          data={currentUser?.holding}
        />
      </div>
    </>
  );
}
