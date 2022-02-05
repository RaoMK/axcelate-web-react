import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import DropdownLink from "@material-tailwind/react/DropdownLink";
import Icon from "@material-tailwind/react/Icon";
import { useRef } from "react";
import { useSelector } from "react-redux";

export default function OrderBookTable({ data, onRefresh }) {
  const lableRef = useRef();
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <Card>
      <CardHeader color="purple" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white text-2xl">Order Book</h2>
          {/* <div className="flex space-x-2">
            <Dropdown
              color="lightBlue"
              placement="bottom-start"
              buttonText="Exchange"
              buttonType="filled"
              size="regular"
              rounded={false}
              block={false}
              ripple="light"
            >
              <DropdownItem color="lightBlue" ripple="light">
                NSE
              </DropdownItem>

              <DropdownItem color="lightBlue" ripple="light">
                BSE
              </DropdownItem>
            </Dropdown>
            <Dropdown
              color="lightBlue"
              placement="bottom-start"
              buttonText="Order Status"
              buttonType="filled"
              size="regular"
              rounded={false}
              block={false}
              ripple="light"
            >
              <DropdownItem color="lightBlue" ripple="light">
                Pending
              </DropdownItem>

              <DropdownItem color="lightBlue" ripple="light">
                Open
              </DropdownItem>
              <DropdownItem color="lightBlue" ripple="light">
                Completed
              </DropdownItem>
            </Dropdown>
            <Dropdown
              color="lightBlue"
              placement="bottom-start"
              buttonText="Segment"
              buttonType="filled"
              size="regular"
              rounded={false}
              block={false}
              ripple="light"
            >
              <DropdownItem color="lightBlue" ripple="light">
                EQ
              </DropdownItem>

              <DropdownItem color="lightBlue" ripple="light">
                FN
              </DropdownItem>
              <DropdownItem color="lightBlue" ripple="light">
                FX
              </DropdownItem>
            </Dropdown>
            
          </div> */}
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
                  Exchange
                </th>

                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Segment
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  ISIN
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Scrip Name
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  Buy/Sell
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  Qty
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  Rate
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  Status
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  Order ID
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  Time
                </th>
                {/* <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  Action
                </th> */}
              </tr>
            </thead>
            <tbody>
              {!data || data.length < 1 ? (
                <div className=" align-middle justify-center items-center "></div>
              ) : (
                data.map((item) => (
                  <tr>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {item.exchange}
                    </th>

                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {item.segment}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {item.isin}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {item.scrip_name}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {item.buy_sell}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {item.qty}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {item.rate}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {item.status}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {item.order_id}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {item.time}
                    </td>
                    {/* <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                    <Button
                      className="ml-2"
                      color="green"
                      buttonType="filled"
                      size="regular"
                      rounded={true}
                      block={false}
                      iconOnly={true}
                      ripple="light"
                      ref={lableRef}
                    >
                      <Icon name="storefront" />
                    </Button>
                    <Tooltips placement="top" ref={lableRef}>
                      <TooltipsContent>Sell</TooltipsContent>
                    </Tooltips>
                  </td> */}
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
