import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";
import Icon from "@material-tailwind/react/Icon";
import { useRef } from "react";
import { useSelector } from "react-redux";

export default function HoldingTable({ data, onRefresh, onEdit, onDelete }) {
  const lableRef = useRef();
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <Card>
      <CardHeader color="purple" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white text-2xl">Net Position / Holding</h2>
          <Button
            className="ml-2"
            color="blue"
            buttonType="filled"
            size="regular"
            rounded={true}
            block={false}
            iconOnly={true}
            ripple="light"
            ref={lableRef}
            onClick={onRefresh}
          >
            <Icon name="sync" />
          </Button>
          <Tooltips placement="top" ref={lableRef}>
            <TooltipsContent>Refresh</TooltipsContent>
          </Tooltips>
        </div>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Portfolio Acc. No
                </th>

                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Segment
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Holding Scrip
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Qty
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  Buy Price
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  LTP
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  Net Change
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  P/L
                </th>
                {currentUser?.role === 1 ? (
                  <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Actions
                  </th>
                ) : (
                  ""
                )}
              </tr>
            </thead>
            <tbody>
              {!data || data.length < 1 ? (
                <div className=" align-middle justify-center items-center "></div>
              ) : (
                data.map((item) => (
                  <tr key={item._id}>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {item.portfolio_account_number}
                    </th>

                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {item.segment}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {item.holding_scrip}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {item.qty}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {item.buy_price}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {item.ltp}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {item.net_change}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {item.profit_and_loss}
                    </td>
                    {currentUser?.role === 1 ? (
                      <td className=" flex space-x-2 border-b cursor-pointer border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                        {/* <Button
                        className="self-center justify-self-center"
                        color="green"
                        buttonType="filled"
                        size="regular"
                        rounded={true}
                        block={false}
                        iconOnly={true}
                        ripple="light"
                        ref={lableRef}
                        onClick={() => onEdit(item)}
                      >
                        <Icon name="edit" />
                      </Button>

                      <Tooltips placement="top" ref={lableRef}>
                        <TooltipsContent>Edit</TooltipsContent>
                      </Tooltips> */}

                        <Button
                          className="self-center justify-self-center"
                          color="red"
                          buttonType="filled"
                          size="regular"
                          rounded={true}
                          block={false}
                          iconOnly={true}
                          ripple="light"
                          ref={lableRef}
                          onClick={() => onDelete(item)}
                        >
                          <Icon name="delete" />
                        </Button>
                        <Tooltips placement="top" ref={lableRef}>
                          <TooltipsContent>Delete</TooltipsContent>
                        </Tooltips>
                      </td>
                    ) : (
                      ""
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
