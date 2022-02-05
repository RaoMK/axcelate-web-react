import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";
import Icon from "@material-tailwind/react/Icon";
import { useRef } from "react";
import { useSelector } from "react-redux";

// const data = [
//   {
//     date: "01-02-2022",
//     particular: "Opening Balance",
//     cs_code: "",
//     debit: "",
//     credit: "40,00,000.00",
//     balance: "40,00,000.00",
//   },
//   {
//     date: "01-02-2022",
//     particular: "EQ-1012 TATASL",
//     cs_code: "10568",
//     debit: "7,98,408.00",
//     credit: "-",
//     balance: "32,01,592.000",
//   },
//   {
//     date: "01-02-2022",
//     particular: "EQ-1030 LT",
//     cs_code: "10467",
//     debit: "6,98,995.00",
//     credit: "-",
//     balance: "25,02,597.00",
//   },
//   {
//     date: "01-02-2022",
//     particular: "EQ-1023 DLF",
//     cs_code: "10274",
//     debit: "3,50,129.34",
//     credit: "-",
//     balance: "21,52,467.66",
//   },
//   {
//     date: "01-02-2022",
//     particular: "EQ-1027 HCL Tech",
//     cs_code: "10563",
//     debit: "2,98,336.50",
//     credit: "-",
//     balance: "18,54,131.16",
//   },
// ];

export default function LedgerTable({ data, onRefresh, ledgerdata }) {
  const currentUser = useSelector((state) => state.user.currentUser);
  const lableRef = useRef();
  return (
    <Card>
      <CardHeader color="purple" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white text-2xl">Ledger Book</h2>
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
                  Date
                </th>

                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Particular
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  CS Code
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Debit
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  Credit
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  Balance
                </th>
              </tr>
            </thead>
            <tbody>
              {!data || data.length < 1 ? (
                <div className=" align-middle justify-center items-center "></div>
              ) : (
                data.map((item) => (
                  <tr>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {item.date}
                    </th>

                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {item.particular}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {item.cs_code}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {item.debit}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {item.credit}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {item.balance}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div className=" mt-10 space-y-3 lg:w-1/2  ">
            <div className="flex justify-between">
              <h1>Total Opening Balance </h1>
              <h1 className="font-bold">{ledgerdata.total_opening_balance}</h1>
            </div>
            <div className="flex justify-between">
              <h1>Uncleared Ledger Marrgin </h1>
              <h1 className="font-bold">
                {" "}
                {ledgerdata.uncleared_ledger_margin}
              </h1>
            </div>
            <div className="flex justify-between">
              <h1>Cleared Avl Margin</h1>
              <h1 className="font-bold"> {ledgerdata.cleared_avail_margin}</h1>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
