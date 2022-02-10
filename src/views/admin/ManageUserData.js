import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import HoldingTable from "views/vendor/components/HoldingTable";
import OrderBookTable from "../vendor/components/OrderBookTable";
import TradeBookTable from "views/vendor/components/TradeBookTable";
import LedgerTable from "views/vendor/components/LedgerTable";

import {
  addDashboardStats,
  fetchUser,
  createHolding,
  addLedgerData,
  getHoldings,
  removeHolding,
  createTradebook,
  getTradebook,
  deleteTradebook,
  createOrderbook,
  getOrderbook,
  deleteOrderbook,
  createLedger,
  getLedger,
  updateLedger,
} from "api";
import { addFundStats } from "api";
import { deleteLedger } from "api";

export default function ManageUserData() {
  const { location } = useHistory();
  const user = location.state.item;
  const [edit, setEdit] = useState(false);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [dashboard, setDashboard] = useState({
    equity_invetment: userData?.dashboard?.equity_invetment,
    current_portfolio: userData?.dashboard?.current_portfolio,
    net_change: userData?.dashboard?.net_change,
    portfolio_yield: userData?.dashboard?.portfolio_yield,
    capital_gain: userData?.dashboard?.capital_gain,
  });
  const [funds, setFunds] = useState({
    capital_invetment: user?.fundstats?.capital_invetment,
    capital_to_trade: user?.fundstats?.capital_to_trade,
    margin_available: user?.fundstats?.margin_available,
    total_holding_value: user?.fundstats?.total_holding_value,
  });
  const [holding, setHolding] = useState({
    portfolio_account_number: "",
    segment: "",
    holding_scrip: "",
    qty: "",
    buy_price: "",
    ltp: "",
    net_change: "",
    profit_and_loss: "",
    user: user._id,
  });

  const [orderbook, setOrderbook] = useState({
    exchange: "",
    segment: "",
    isin: "",
    scrip_name: "",
    buy_sell: "",
    qty: "",
    rate: "",
    status: "",
    order_id: "",
    time: "",
    user: user._id,
  });

  const [tradebook, setTradebook] = useState({
    trade_id: "",
    segment: "",
    exchange: "",
    scrip: "",
    buying_price: "",
    selling_price: "",
    trade_time: "",
    tradeable_value: "",
    capital_gains: "",
    user: user._id,
  });

  const [ledgerStatic, setLedgerStatic] = useState({
    total_opening_balance: userData?.ledgerData?.total_opening_balance,
    uncleared_ledger_margin: userData?.ledgerData?.uncleared_ledger_margin,
    cleared_avail_margin: userData?.ledgerData?.cleared_avail_margin,
  });

  const [ledger, setLedger] = useState({
    date: "",
    particular: "",
    cs_code: "",
    debit: "",
    credit: "",
    balance: "",
    user: user._id,
  });

  const fetchUserData = async (id) => {
    try {
      setLoading(true);
      const { data } = await fetchUser(id);
      setUserData(data);
      setDashboard(data?.dashboard);
      setLedgerStatic(data.ledgerData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddDashboardStats = async (e) => {
    try {
      await addDashboardStats({
        id: user._id,
        data: dashboard,
      });

      fetchUserData(user._id);
      toast.success("Successfully Added Data");
    } catch (error) {
      console.log(error);
    }
  };
  const handelAddFundStats = async (e) => {
    try {
      await addFundStats({
        id: user._id,
        data: funds,
      });

      fetchUserData(user._id);
      toast.success("Successfully Added Data");
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddLedgerData = async (e) => {
    try {
      await addLedgerData({
        id: user._id,
        data: ledgerStatic,
      });

      fetchUserData(user._id);
      toast.success("Successfully Added Data");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData(user._id);
  }, []);

  /// holding
  const [holdingData, setHoldingData] = useState([]);

  const handleAddHolding = async (e) => {
    try {
      await createHolding(holding);

      setHolding({
        portfolio_account_number: "",
        segment: "",
        holding_scrip: "",
        qty: "",
        buy_price: "",
        ltp: "",
        net_change: "",
        profit_and_loss: "",
        user: user._id,
      });
      handleFetchHolding(user?._id);
      toast.success("Successfully Added Data");
    } catch (error) {
      console.log(error);
    }
  };

  const handleFetchHolding = async (id) => {
    try {
      const { data } = await getHoldings(id);

      setHoldingData(data?.holding);
    } catch (error) {}
  };

  /// tradebook
  const [tradebookData, setTradebookData] = useState([]);

  const handleAddTradebook = async (e) => {
    try {
      await createTradebook(tradebook);
      setTradebook({
        trade_id: "",
        segment: "",
        exchange: "",
        scrip: "",
        buying_price: "",
        selling_price: "",
        trade_time: "",
        tradeable_value: "",
        capital_gains: "",
        user: user._id,
      });
      handleFetchTradebook(user?._id);
      toast.success("Successfully Added Data");
    } catch (error) {
      console.log(error);
    }
  };

  const handleFetchTradebook = async (id) => {
    try {
      const { data } = await getTradebook(id);

      setTradebookData(data?.tradebook);
    } catch (error) {}
  };
  /// orderbook
  const [orderbookData, setOrderbookData] = useState([]);

  const handleAddOrderbook = async (e) => {
    try {
      await createOrderbook(orderbook);
      setOrderbook({
        exchange: "",
        segment: "",
        isin: "",
        scrip_name: "",
        buy_sell: "",
        qty: "",
        rate: "",
        status: "",
        order_id: "",
        time: "",
        user: user._id,
      });
      handleFetchOrderbook(user?._id);
      toast.success("Successfully Added Data");
    } catch (error) {
      console.log(error);
    }
  };

  const handleFetchOrderbook = async (id) => {
    try {
      const { data } = await getOrderbook(id);

      setOrderbookData(data?.orderbook);
    } catch (error) {}
  };

  /// ledgerbook
  const [ledgerData, setLedgerData] = useState([]);

  const handleAddLedger = async (e) => {
    try {
      await createLedger(ledger);
      setLedger({
        date: "",
        particular: "",
        cs_code: "",
        debit: "",
        credit: "",
        balance: "",
        user: user._id,
      });
      handleFetchLedger(user?._id);
      toast.success("Successfully Added Data");
    } catch (error) {
      console.log(error);
    }
  };

  const handleFetchLedger = async (id) => {
    try {
      const { data } = await getLedger(id);

      setLedgerData(data?.ledger);
    } catch (error) {}
  };

  useEffect(() => {
    handleFetchHolding(user?._id);
    handleFetchTradebook(user?.id);
    handleFetchOrderbook(user?.id);
    handleFetchLedger(user?._id);
  }, []);

  if (loading) {
    <h1>Loading</h1>;
  }
  return (
    <>
      <div className="px-3 md:px-8 h-auto mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-0">
            <div className="xl:col-start-1 xl:col-end-5 px-4 mb-16">
              <Card>
                <CardHeader color="purple" contentPosition="none">
                  <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">
                      Manage {user.name} Data
                    </h2>
                  </div>
                </CardHeader>
                <CardBody>
                  <div>
                    <h6 className="text-purple-500 text-xl mt-3 mb-6 font uppercase">
                      Dashboard Details
                    </h6>
                    <div className="flex flex-wrap mt-10">
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={dashboard.equity_invetment}
                          type="text"
                          color="purple"
                          placeholder="Equity Ivestment"
                          onChange={(e) =>
                            setDashboard({
                              ...dashboard,
                              equity_invetment: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={dashboard.current_portfolio}
                          color="purple"
                          placeholder="Current Portfolio"
                          onChange={(e) =>
                            setDashboard({
                              ...dashboard,
                              current_portfolio: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={dashboard.net_change}
                          type="text"
                          color="purple"
                          placeholder="Net Change"
                          onChange={(e) =>
                            setDashboard({
                              ...dashboard,
                              net_change: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={dashboard.portfolio_yield}
                          color="purple"
                          placeholder="Portfolio Yield"
                          onChange={(e) =>
                            setDashboard({
                              ...dashboard,
                              portfolio_yield: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={dashboard.capital_gain}
                          type="text"
                          color="purple"
                          placeholder="Capitl Gain"
                          onChange={(e) =>
                            setDashboard({
                              ...dashboard,
                              capital_gain: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Button
                          color="lightBlue"
                          buttonType="filled"
                          size="lg"
                          rounded={false}
                          block={true}
                          iconOnly={false}
                          ripple="light"
                          onClick={handleAddDashboardStats}
                        >
                          Save
                        </Button>
                      </div>
                    </div>
                    <h6 className="text-purple-500 text-xl mt-3 mb-6 font uppercase">
                      Net Position / Holding
                    </h6>
                    <div className="flex flex-wrap mt-10">
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={holding.portfolio_account_number}
                          type=""
                          color="purple"
                          placeholder="Portfolio Account Number"
                          onChange={(e) =>
                            setHolding({
                              ...holding,
                              portfolio_account_number: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={holding.segment}
                          color="purple"
                          placeholder="Segment"
                          onChange={(e) =>
                            setHolding({ ...holding, segment: e.target.value })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={holding.holding_scrip}
                          type="text"
                          color="purple"
                          placeholder="Holding Script"
                          onChange={(e) =>
                            setHolding({
                              ...holding,
                              holding_scrip: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={holding.qty}
                          color="purple"
                          placeholder="Qty"
                          onChange={(e) =>
                            setHolding({ ...holding, qty: e.target.value })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={holding.buy_price}
                          type="text"
                          color="purple"
                          placeholder="Buy Price"
                          onChange={(e) =>
                            setHolding({
                              ...holding,
                              buy_price: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={holding.ltp}
                          color="purple"
                          placeholder="LTP"
                          onChange={(e) =>
                            setHolding({ ...holding, ltp: e.target.value })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={holding.net_change}
                          type="text"
                          color="purple"
                          placeholder="Net Change"
                          onChange={(e) =>
                            setHolding({
                              ...holding,
                              net_change: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={holding.profit_and_loss}
                          color="purple"
                          placeholder="P/L"
                          onChange={(e) =>
                            setHolding({
                              ...holding,
                              profit_and_loss: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Button
                          color="lightBlue"
                          buttonType="filled"
                          size="lg"
                          rounded={false}
                          block={true}
                          iconOnly={false}
                          ripple="light"
                          onClick={handleAddHolding}
                        >
                          Add
                        </Button>
                      </div>
                      <HoldingTable
                        onRefresh={() => handleFetchHolding(user._id)}
                        data={holdingData}
                        onDelete={(item) => {
                          try {
                            removeHolding(item._id);
                            toast.success("Successfully Removed");
                            handleFetchHolding(user._id);
                          } catch (error) {}
                        }}
                      />
                    </div>
                    <h6 className="text-purple-500 text-xl mt-3 mb-6 font uppercase">
                      Fund Stats Details
                    </h6>
                    <div className="flex flex-wrap mt-10">
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={funds.capital_invetment}
                          type="text"
                          color="purple"
                          placeholder="Capital Investment"
                          onChange={(e) =>
                            setFunds({
                              ...funds,
                              capital_invetment: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={funds.capital_to_trade}
                          color="purple"
                          placeholder="Capital To Trade"
                          onChange={(e) =>
                            setFunds({
                              ...funds,
                              capital_to_trade: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={funds.margin_available}
                          type="text"
                          color="purple"
                          placeholder="Margin Available"
                          onChange={(e) =>
                            setFunds({
                              ...funds,
                              margin_available: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={funds.total_holding_value}
                          color="purple"
                          placeholder="Total Holding Value"
                          onChange={(e) =>
                            setFunds({
                              ...funds,
                              total_holding_value: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Button
                          color="lightBlue"
                          buttonType="filled"
                          size="lg"
                          rounded={false}
                          block={true}
                          iconOnly={false}
                          ripple="light"
                          onClick={handelAddFundStats}
                        >
                          Save
                        </Button>
                      </div>
                    </div>
                    <h6 className="text-purple-500 text-xl mt-3 mb-6 font uppercase">
                      Order Book Details
                    </h6>
                    <div className="flex flex-wrap mt-10">
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={orderbook.exchange}
                          type="text"
                          color="purple"
                          placeholder="Exchange"
                          onChange={(e) =>
                            setOrderbook({
                              ...orderbook,
                              exchange: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={orderbook.segment}
                          color="purple"
                          placeholder="Segment"
                          onChange={(e) =>
                            setOrderbook({
                              ...orderbook,
                              segment: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={orderbook.isin}
                          type="text"
                          color="purple"
                          placeholder="ISIN"
                          onChange={(e) =>
                            setOrderbook({ ...orderbook, isin: e.target.value })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={orderbook.scrip_name}
                          color="purple"
                          placeholder="Script Name"
                          onChange={(e) =>
                            setOrderbook({
                              ...orderbook,
                              scrip_name: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={orderbook.buy_sell}
                          type="text"
                          color="purple"
                          placeholder="Buy & Sell"
                          onChange={(e) =>
                            setOrderbook({
                              ...orderbook,
                              buy_sell: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={orderbook.qty}
                          color="purple"
                          placeholder="Qty"
                          onChange={(e) =>
                            setOrderbook({ ...orderbook, qty: e.target.value })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={orderbook.rate}
                          type="text"
                          color="purple"
                          placeholder="Rate"
                          onChange={(e) =>
                            setOrderbook({ ...orderbook, rate: e.target.value })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={orderbook.status}
                          color="purple"
                          placeholder="Status"
                          onChange={(e) =>
                            setOrderbook({
                              ...orderbook,
                              status: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={orderbook.order_id}
                          type="text"
                          color="purple"
                          placeholder="Order ID"
                          onChange={(e) =>
                            setOrderbook({
                              ...orderbook,
                              order_id: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={orderbook.time}
                          color="purple"
                          placeholder="Time"
                          onChange={(e) =>
                            setOrderbook({ ...orderbook, time: e.target.value })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Button
                          color="lightBlue"
                          buttonType="filled"
                          size="lg"
                          rounded={false}
                          block={true}
                          iconOnly={false}
                          ripple="light"
                          onClick={handleAddOrderbook}
                        >
                          Add
                        </Button>
                      </div>
                      <OrderBookTable
                        onRefresh={() => handleFetchOrderbook(user._id)}
                        data={orderbookData}
                        onDelete={(item) => {
                          try {
                            deleteOrderbook(item._id);
                            toast.success("Successfully Removed");
                            handleFetchOrderbook(user._id);
                          } catch (error) {}
                        }}
                      />
                    </div>

                    <h6 className="text-purple-500 text-xl mt-3 mb-6 font uppercase">
                      Trade Book
                    </h6>
                    <div className="flex flex-wrap mt-10">
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={tradebook.trade_id}
                          type=""
                          color="purple"
                          placeholder="Trade ID"
                          onChange={(e) =>
                            setTradebook({
                              ...tradebook,
                              trade_id: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={tradebook.segment}
                          color="purple"
                          placeholder="Segment  "
                          onChange={(e) =>
                            setTradebook({
                              ...tradebook,
                              segment: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={tradebook.exchange}
                          type="text"
                          color="purple"
                          placeholder="Exchange"
                          onChange={(e) =>
                            setTradebook({
                              ...tradebook,
                              exchange: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={tradebook.scrip}
                          color="purple"
                          placeholder="Scrip"
                          onChange={(e) =>
                            setTradebook({
                              ...tradebook,
                              scrip: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={tradebook.buying_price}
                          type="text"
                          color="purple"
                          placeholder="Buying Price"
                          onChange={(e) =>
                            setTradebook({
                              ...tradebook,
                              buying_price: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={tradebook.selling_price}
                          color="purple"
                          placeholder="Selling Price"
                          onChange={(e) =>
                            setTradebook({
                              ...tradebook,
                              selling_price: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={tradebook.trade_time}
                          type="text"
                          color="purple"
                          placeholder="Trade Time"
                          onChange={(e) =>
                            setTradebook({
                              ...tradebook,
                              trade_time: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={tradebook.tradeable_value}
                          color="purple"
                          placeholder="Tradeable Value"
                          onChange={(e) =>
                            setTradebook({
                              ...tradebook,
                              tradeable_value: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={tradebook.capital_gains}
                          type="text"
                          color="purple"
                          placeholder="Capital Gains"
                          onChange={(e) =>
                            setTradebook({
                              ...tradebook,
                              capital_gains: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Button
                          color="lightBlue"
                          buttonType="filled"
                          size="lg"
                          rounded={false}
                          block={true}
                          iconOnly={false}
                          ripple="light"
                          onClick={handleAddTradebook}
                        >
                          Add
                        </Button>
                      </div>
                      <TradeBookTable
                        onRefresh={() => handleFetchTradebook(user._id)}
                        data={tradebookData}
                        onDelete={(item) => {
                          try {
                            deleteTradebook(item._id);
                            toast.success("Successfully Removed");
                            handleFetchTradebook(user._id);
                          } catch (error) {}
                        }}
                      />
                    </div>

                    <h6 className="text-purple-500 text-xl mt-3 mb-6 font uppercase">
                      Ledger Totals
                    </h6>
                    <div className="flex flex-wrap mt-10">
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={ledgerStatic.uncleared_ledger_margin}
                          type="text"
                          color="purple"
                          placeholder="Uncleared Ledger Marrgin"
                          onChange={(e) =>
                            setLedgerStatic({
                              ...ledgerStatic,
                              uncleared_ledger_margin: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={ledgerStatic.cleared_avail_margin}
                          color="purple"
                          placeholder="Cleared Avail Margin"
                          onChange={(e) =>
                            setLedgerStatic({
                              ...ledgerStatic,
                              cleared_avail_margin: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={ledgerStatic.total_opening_balance}
                          type="text"
                          color="purple"
                          placeholder="Total Opening Balance"
                          onChange={(e) =>
                            setLedgerStatic({
                              ...ledgerStatic,
                              total_opening_balance: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="w-full lg:w-6/12  mb-10 font-light">
                        <Button
                          color="lightBlue"
                          buttonType="filled"
                          size="lg"
                          rounded={false}
                          block={true}
                          iconOnly={false}
                          ripple="light"
                          onClick={handleAddLedgerData}
                        >
                          Save
                        </Button>
                      </div>
                    </div>
                    <h6 className="text-purple-500 text-xl mt-3 mb-6 font uppercase">
                      Ledger Enteries
                    </h6>
                    <div className="flex flex-wrap mt-10">
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={ledger.date}
                          type="text"
                          color="purple"
                          placeholder="Date"
                          onChange={(e) =>
                            setLedger({
                              ...ledger,
                              date: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={ledger.particular}
                          color="purple"
                          placeholder="Particular"
                          onChange={(e) =>
                            setLedger({
                              ...ledger,
                              particular: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={ledger.cs_code}
                          type="text"
                          color="purple"
                          placeholder="CS Code"
                          onChange={(e) =>
                            setLedger({
                              ...ledger,
                              cs_code: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={ledger.debit}
                          color="purple"
                          placeholder="Debit"
                          onChange={(e) =>
                            setLedger({
                              ...ledger,
                              debit: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={ledger.credit}
                          type="text"
                          color="purple"
                          placeholder="Credit"
                          onChange={(e) =>
                            setLedger({
                              ...ledger,
                              credit: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={ledger.balance}
                          color="purple"
                          placeholder="Balance"
                          onChange={(e) =>
                            setLedger({
                              ...ledger,
                              balance: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Button
                          color="lightBlue"
                          buttonType="filled"
                          size="lg"
                          rounded={false}
                          block={true}
                          iconOnly={false}
                          ripple="light"
                          onClick={handleAddLedger}
                        >
                          Add
                        </Button>
                      </div>
                      <LedgerTable
                        onRefresh={() => handleFetchLedger(user._id)}
                        ledgerdata={ledgerStatic}
                        data={ledgerData}
                        onDelete={(item) => {
                          try {
                            deleteLedger(item._id);
                            toast.success("Successfully Removed");
                            handleFetchLedger(user._id);
                          } catch (error) {}
                        }}
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
