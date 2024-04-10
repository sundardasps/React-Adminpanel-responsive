import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

import { tableData } from "../utils/tableData";
import React from "react";

function Table() {
  const [active, setActive] = React.useState(1);

  const next = () => {
    if (active === 10) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };
  return (
    <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border mt-7">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
        <div className="flex flex-col justify-between gap-8 mb-4 md:flex-row md:items-center">
          <div>
            <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Recent Transactions
            </h5>
          </div>
        </div>
      </div>
      <div className="p-6 px-0 overflow-scroll">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Source
                </p>
              </th>
              <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Amount
                </p>
              </th>
              <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Status
                </p>
              </th>
              <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  User ID
                </p>
              </th>
              <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Joined
                </p>
              </th>
              <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Group
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td className="p-4 border-b border-blue-gray-50 ">
                  <div className="flex items-center gap-3">
                    <div className="w-10 py-1 px-1  shadow-md    border rounded-md h-9 border-blue-gray-50">
                      <div
                        dangerouslySetInnerHTML={{ __html: data.sourceSvg }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900">
                        {data.sourceName}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50 ">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {data.amout}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div
                    className={`relative grid items-center px-2 font-semibold  text-[0.7rem]  text-green-900 capitalize ${
                      (data.status === "active" &&
                        "bg-green-50 text-green-400") ||
                      (data.status === "Pending" &&
                        "bg-orange-100 text-orange-600") ||
                      (data.status === "Cancelled" &&
                        "bg-gray-200 text-gray-400")
                    } rounded-full  select-none whitespace-nowrap  w-min`}
                  >
                    <span className="">{data.status}</span>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="w-max">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {data.userId}
                    </p>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="w-max">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {data.joined}
                    </p>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="w-max">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {data.group}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center gap-1 justify-center h-20">
        <IconButton
          size="sm"
          variant="outlined"
          onClick={prev}
          disabled={active === 1}
          className="border-none "
        >
          <ArrowLeftIcon  className="h-7 w-7" />
        </IconButton>
        <Typography color="gray" className="font-light text-lg">
          <strong className="text-gray-900">{active}</strong> /
          <strong className="text-gray-900">15</strong>
        </Typography>
        <IconButton
          variant="outlined"
          onClick={next}
          disabled={active === 10}
          className="border-none"
        >
          <ArrowRightIcon  className="h-7 w-7" />
        </IconButton>
      </div>
    </div>
  );
}

export default Table;
