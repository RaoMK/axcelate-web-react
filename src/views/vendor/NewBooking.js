import React from "react";
import VendorTopStats from "./components/VendorTopStats";
import TradeBookTable from "./components/TradeBookTable";
import OrderBookTable from "./components/OrderBookTable";
import { fetchUserAction } from "redux/actions/authActions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTradebook } from "api";
import { getOrderbook } from "api";

export default function NewBooking() {
  const dispatch = useDispatch();
  const [orderbook, setOrderbook] = React.useState([]);
  const [tradebook, setTradebook] = React.useState([]);
  const currentUser = useSelector((state) => state.user.currentUser);
  const auth = useSelector((state) => state.user.authenticated);

  const handleFetchTradebook = async (id) => {
    try {
      const { data } = await getTradebook(id);

      setTradebook(data?.tradebook);
    } catch (error) {}
  };
  const handleFetchOrderbook = async (id) => {
    try {
      const { data } = await getOrderbook(id);

      setOrderbook(data?.orderbook);
    } catch (error) {}
  };

  React.useEffect(() => {
    handleFetchTradebook(auth?._id);
    handleFetchOrderbook(auth?._id);
  }, []);
  return (
    <>
      <VendorTopStats />

      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <OrderBookTable
              data={orderbook}
              onRefresh={() => handleFetchOrderbook(auth?._id)}
            />
            <div className="mt-16">
              <TradeBookTable
                data={tradebook}
                onRefresh={() => handleFetchTradebook(auth?._id)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
