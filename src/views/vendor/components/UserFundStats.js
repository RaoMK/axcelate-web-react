import React from "react";
import StatusCard from "../../../components/StatusCard";
import { useSelector } from "react-redux";

function UserFundStats(props) {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
      <div className="container mx-auto max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
          <StatusCard
            color="pink"
            icon="poll"
            title=""
            amount={currentUser?.fundstats.capital_invetment}
            // percentage="3.48"
            percentageIcon="arrow_forward"
            percentageColor="green"
            date="Capital Investment"
          />
          <StatusCard
            color="orange"
            icon="paid"
            title=""
            amount={currentUser?.fundstats.capital_to_trade}
            // percentage="3.48"
            percentageIcon="arrow_forward"
            percentageColor="green"
            date="Capital To
            Trade"
          />
          <StatusCard
            color="purple"
            icon="price_change"
            // title="(TTD)"
            amount={currentUser?.fundstats.margin_available}
            // percentage="1.10"
            percentageIcon="arrow_forward"
            percentageColor="green"
            date="Margin Available"
          />
          <StatusCard
            color="blue"
            icon="trending_up"
            // title="% Portfolio Yeild"
            amount={currentUser?.fundstats.total_holding_value}
            // percentage="4.55%"
            percentageIcon="arrow_forward"
            percentageColor="green"
            date="Total Holding Value (Today)"
          />
        </div>
      </div>
    </div>
  );
}

export default UserFundStats;
