import VendorTopStats from "./components/VendorTopStats";
import TradeBookTable from "./components/TradeBookTable";
import OrderBookTable from "./components/OrderBookTable";
import { fetchUserAction } from "redux/actions/authActions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function NewBooking() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <>
      <VendorTopStats />

      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <OrderBookTable
              data={currentUser?.orderbook}
              onRefresh={() => dispatch(fetchUserAction)}
            />
            <div className="mt-16">
              <TradeBookTable
                data={currentUser?.tradebook}
                onRefresh={() => dispatch(fetchUserAction)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
