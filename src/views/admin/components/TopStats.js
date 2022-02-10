import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StatusCard from "../../../components/StatusCard";

function TopStats(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.client.userList);
  const loading = useSelector((state) => state.client.loading);

  useEffect(() => {}, []);

  return (
    <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
      <div className="container mx-auto max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
          <StatusCard
            color="pink"
            icon="trending_up"
            title="Equity Invetment"
            amount={data.filter((item) => item.is_staff === false).length}
            // percentage="3.48"
            // percentageIcon="arrow_upward"
            // percentageColor="green"
            // date="Since last month"
          />
          <StatusCard
            color="orange"
            icon="groups"
            title="Current Portfolio"
            amount={data.filter((item) => item.is_staff === true).length}
            // percentage="3.48"
            // percentageIcon="arrow_downward"
            // percentageColor="red"
            // date="Since last month"
          />
          <StatusCard
            color="purple"
            icon="paid"
            title="Net Change"
            amount="$924"
            // percentage="1.10"
            // percentageIcon="arrow_downward"
            // percentageColor="orange"
            // date="Since yesterday"
          />
          <StatusCard
            color="blue"
            icon="poll"
            title="% Portfolio Yeild"
            amount="49,65"
            // percentage="12"
            // percentageIcon="arrow_upward"
            // percentageColor="green"
            // date="Since last month"
          />
          <StatusCard
            color="blue"
            icon="poll"
            title="Capital Gains"
            amount="49,65"
            // percentage="12"
            // percentageIcon="arrow_upward"
            // percentageColor="green"
            // date="Since last month"
          />
        </div>
      </div>
    </div>
  );
}

export default TopStats;
