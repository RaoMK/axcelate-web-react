import React from "react";
import StatusCard from "../../../components/StatusCard";
import { useSelector } from "react-redux";

function VendorTopStats(props) {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
      <div className="container mx-auto max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5">
          <StatusCard
            color="pink"
            icon="poll"
            title=""
            amount={currentUser?.dashboard.equity_invetment}
            // percentage="3.48"
            percentageIcon="arrow_forward"
            percentageColor="green"
            date="Equity Invetment"
          />
          <StatusCard
            color="orange"
            icon="paid"
            title=""
            amount={currentUser?.dashboard.current_portfolio}
            // percentage="3.48"
            percentageIcon="arrow_forward"
            percentageColor="green"
            date="Current Portfolio"
          />
          <StatusCard
            color="purple"
            icon="price_change"
            title="(TTD)"
            amount={currentUser?.dashboard.net_change}
            // percentage="1.10"
            percentageIcon="arrow_forward"
            percentageColor="green"
            date="Net Change"
          />
          <StatusCard
            color="blue"
            icon="trending_up"
            // title="% Portfolio Yeild"
            amount={currentUser?.dashboard.portfolio_yield + "%"}
            percentageIcon="arrow_forward"
            percentageColor="green"
            date="% Portfolio Yeild"
          />
          <StatusCard
            color="green"
            icon="card_membership"
            // title="Capital Gains"
            amount={currentUser?.dashboard.capital_gain}
            // percentage="4.55%"
            percentageIcon="arrow_forward"
            percentageColor="green"
            date="Capital Gains"
          />
        </div>
      </div>
    </div>
  );
}

export default VendorTopStats;
