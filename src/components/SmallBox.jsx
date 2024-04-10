import { Typography } from "@material-tailwind/react";

function SmallBox({ data }) {
  return (
    <div className="bg-white p-4 w-auto  lg:w-[20rem] rounded-lg my-5 mx-2 md:h-[8rem] shadow-blue-gray-200 ">
      <div className="m">
        <p className="text-xs">{data.Title}</p>
        <Typography variant="h4" className="font-normal mb-5">
          {data.Content}
        </Typography>
        <div className="flex gap-2">
          {data.Hike ? (
            <>
              <Typography
                variant="small"
                className={`rounded-full text-center  w-[3rem] h-[1.3rem] bg-${data.color}-50`}
              >
                <span
                  className={` ${
                    (data.color === "green" && "text-green-400") ||
                    (data.color === "red" && "text-red-400")
                  } text-xs font-semibold mt-1`}
                >
                  {data.Hike.from}%
                </span>
              </Typography>
              <span className="my-auto text-xs">From</span>
              <Typography className="my-auto text-xs">
                {data.Hike.to}
              </Typography>
            </>
          ) : (
            <Typography
              variant="small"
              className={`rounded-full text-center  w-[3rem] h-[1.3rem] bg-blue-gray-50 `}
            >
              <span className={` text-xs mt-1`}>00.0</span>
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
}

export default SmallBox;
