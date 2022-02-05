import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { fetchUser } from "api";
import HoldingTable from "views/vendor/components/HoldingTable";
import OrderBookTable from "../vendor/components/OrderBookTable";
import TradeBookTable from "views/vendor/components/TradeBookTable";
import LedgerTable from "views/vendor/components/LedgerTable";
import { addDashboardStats } from "api";
import { addHolding } from "api";
import { addOrderbook } from "api";
import { addTradebook } from "api";
import { addLedger } from "api";
import { addLedgerData } from "api";

export default function ManageUserData() {
  const { location } = useHistory();
  const user = location.state.item;
  const [userData, setUserData] = useState({});

  const [loading, setLoading] = useState(false);

  const [dashboard, setDashboard] = useState({
    equity_invetment: userData?.dashboard?.equity_invetment,
    current_portfolio: "",
    net_change: "",
    portfolio_yield: "",
    capital_gain: "",
  });
  const [holding, setHolding] = useState({
    portfolio_account_number: "",
    segment: "",
    holding_scrip: "",
    qty: "",
    buy_price: "",
    ltp: "",
    net_change: "",
    p_l: "",
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
  });

  const [tradebook, setTradebook] = useState({
    trade_id: "",
    segment: "",
    exchange: "",
    scrip: "",
    rate: "",
    trade_time: "",
    product: "",
    tradeable_value: "",
    txn_chngs: "",
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
  console.log(userData, "hey iiisssdata");

  const handleAddDashboardStats = async () => {
    try {
      const response = await addDashboardStats({
        id: user._id,
        data: dashboard,
      });
      console.log(response);
      fetchUserData(user._id);
      toast.success("Successfully Added Data");
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddLedgerData = async () => {
    try {
      const response = await addLedgerData({
        id: user._id,
        data: ledgerStatic,
      });
      console.log(response);
      fetchUserData(user._id);
      toast.success("Successfully Added Data");
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddHolding = async () => {
    try {
      const response = await addHolding({
        id: user._id,
        data: { data: holding },
      });
      console.log(response);
      fetchUserData(user._id);
      setHolding({
        portfolio_account_number: "",
        segment: "",
        holding_scrip: "",
        qty: "",
        buy_price: "",
        ltp: "",
        net_change: "",
        p_l: "",
      });
      toast.success("Successfully Added Data");
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddOrderbook = async () => {
    try {
      const response = await addOrderbook({
        id: user._id,
        data: { data: orderbook },
      });
      console.log(response);
      fetchUserData(user._id);
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
      });
      toast.success("Successfully Added Data");
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddTradebook = async () => {
    try {
      const response = await addTradebook({
        id: user._id,
        data: { data: tradebook },
      });
      console.log(response);
      fetchUserData(user._id);
      setTradebook({
        trade_id: "",
        segment: "",
        exchange: "",
        scrip: "",
        rate: "",
        trade_time: "",
        product: "",
        tradeable_value: "",
        txn_chngs: "",
      });
      toast.success("Successfully Added Data");
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddLedger = async () => {
    try {
      const response = await addLedger({
        id: user._id,
        data: { data: ledger },
      });
      console.log(response);
      fetchUserData(user._id);
      setLedger({
        date: "",
        particular: "",
        cs_code: "",
        debit: "",
        credit: "",
        balance: "",
      });
      toast.success("Successfully Added Data");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData(user._id);
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
                          type=""
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
                          type="number"
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
                          value={holding.p_l}
                          color="purple"
                          placeholder="P/L"
                          onChange={(e) =>
                            setHolding({ ...holding, p_l: e.target.value })
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
                        onRefresh={() => fetchUserData(user._id)}
                        data={userData?.holding}
                      />
                    </div>
                    <h6 className="text-purple-500 text-xl mt-3 mb-6 font uppercase">
                      Order Book Details
                    </h6>
                    <div className="flex flex-wrap mt-10">
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={orderbook.exchange}
                          type=""
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
                        onRefresh={() => fetchUserData(user._id)}
                        data={userData?.orderbook}
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
                          value={tradebook.rate}
                          type="text"
                          color="purple"
                          placeholder="Rate"
                          onChange={(e) =>
                            setTradebook({ ...tradebook, rate: e.target.value })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={tradebook.trade_time}
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
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={tradebook.product}
                          type="text"
                          color="purple"
                          placeholder="Product"
                          onChange={(e) =>
                            setTradebook({
                              ...tradebook,
                              product: e.target.value,
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
                          value={tradebook.txn_chngs}
                          type="text"
                          color="purple"
                          placeholder="Txn Chngs"
                          onChange={(e) =>
                            setTradebook({
                              ...tradebook,
                              txn_chngs: e.target.value,
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
                        onRefresh={() => fetchUserData(user._id)}
                        data={userData?.tradebook}
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
                        onRefresh={() => fetchUserData(user._id)}
                        ledgerdata={ledgerStatic}
                        data={userData?.ledger}
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
