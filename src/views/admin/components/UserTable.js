import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";
import { useRef } from "react";

import { useState } from "react";
import CustomPagination from "../../../components/CustomPagination";
import { useHistory } from "react-router-dom";

export default function UserTable({
  data,
  onRefresh,
  onDelete,
  loading,
  onAdd,
}) {
  const lableRef = useRef();
  const history = useHistory();

  return (
    <Card>
      <CardHeader color="purple" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white text-2xl">User Details</h2>

          <div className="flex align-middle">
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
        </div>
      </CardHeader>

      <CardBody>
        {loading ? (
          <div className="flex flex-col w-full h-40 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 text-green-500 animate-spin"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className=" items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Name
                  </th>
                  <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Email
                  </th>
                  <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Phone
                  </th>

                  <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Actions
                  </th>
                </tr>
              </thead>

              {!data || data.length < 1 ? (
                <div className=" align-middle justify-center items-center "></div>
              ) : (
                data.map((item) => (
                  <tbody key={item._id}>
                    <tr>
                      <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {item.name}
                      </td>
                      <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {item.email}
                      </td>

                      <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {item.phone}
                      </td>
                      <td className=" flex space-x-2 border-b cursor-pointer border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                        <Button
                          className="self-center justify-self-center"
                          color="green"
                          buttonType="filled"
                          size="regular"
                          rounded={true}
                          block={false}
                          iconOnly={true}
                          ripple="light"
                          ref={lableRef}
                          onClick={() =>
                            history.push(`/admin/user/${item._id}`, { item })
                          }
                        >
                          <Icon name="edit" />
                        </Button>

                        <Tooltips placement="top" ref={lableRef}>
                          <TooltipsContent>Edit</TooltipsContent>
                        </Tooltips>

                        {/* <Button
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
                        </Tooltips> */}
                      </td>
                    </tr>
                  </tbody>
                ))
              )}
            </table>
            {/* <Pagination
              postsPerPage={postsPerPage}
              totalPosts={currentPosts.length}
              paginate={paginate}
              currentPage={currentPage}
            /> */}
            {/* <CustomPagination
              postsPerPage={postsPerPage}
              totalPosts={currentPosts.length}
              paginateBack={paginateBack}
              paginateFront={paginateFront}
              currentPage={currentPage}
              paginate={paginate}
              lastPage={lastPage}
            /> */}
          </div>
        )}
      </CardBody>
    </Card>
  );
}
