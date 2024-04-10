import { Typography, Button } from "@material-tailwind/react";
import SmallBox from "./SmallBox";
import ChartCom from "./ChartCom";
import Table from "./Table";

function InnerContent() {
  const Datas = [
    {
      Title: "Revenue",
      Content: "$56,945",
      color: "green",
      Hike: {
        from: "+ 45",
        to: "4.6",
      },
    },
    {
      Title: "Users",
      Content: "76.8%",
      color: "red",
      Hike: {
        from: "-1.7",
        to: "4.6",
      },
    },
    {
      Title: "New Signups",
      Content: "116",
    },
    {
      Title: "Retention",
      Content: "12.67%",
      color: "green",
      Hike: {
        from: "+0.6",
        to: "4.6",
      },
    },
  ];

  return (
    <div className=" w-auto   m-5 my-4 text-">
      <div
        style={{ backgroundColor: "#282828" }}
        className=" md:h-[8rem] rounded-2xl grid  sm:flex  md:justify-between  p-6"
      >
        <div className="my-auto text-white m-auto md:m-0 text-center mb-5">
          <Typography className="font-medium text-3xl my-2 ">
            Unlock premium stats
          </Typography>
          <Typography className="text-sm font-semibold ">
            Get up to 10TB of storage for a limited time
          </Typography>
        </div>
        <Button
          color="white"
          className="rounded-full  flex gap-2  md:ml-auto my-auto m-auto md:mx-0"
        >
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.83329 1.5V7.33333H12.8333L6.16663 16.5V10.6667H1.16663L7.83329 1.5Z"
              fill="white"
              stroke="#282828"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-semibold capitalize">Upgrade</span>
        </Button>
      </div>
      <div className="grid lg:flex gap-4 my-2 ">
        {Datas.map((data, index) => (
          <SmallBox key={index} data={data} />
        ))}
      </div>
      <div className="rounded-xl bg-white border-b h-[30rem] overflow-hidden">
        <div className="h-16 border-b flex justify-between p-6">
          <Typography>Performance</Typography>
          <svg
            width="4"
            height="18"
            viewBox="0 0 4 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.00122 8.99969C1.00122 9.26491 1.10658 9.51926 1.29411 9.7068C1.48165 9.89434 1.736 9.99969 2.00122 9.99969C2.26644 9.99969 2.52079 9.89434 2.70833 9.7068C2.89586 9.51926 3.00122 9.26491 3.00122 8.99969C3.00122 8.73448 2.89586 8.48012 2.70833 8.29259C2.52079 8.10505 2.26644 7.99969 2.00122 7.99969C1.736 7.99969 1.48165 8.10505 1.29411 8.29259C1.10658 8.48012 1.00122 8.73448 1.00122 8.99969ZM1.00122 15.9997C1.00122 16.2649 1.10658 16.5193 1.29411 16.7068C1.48165 16.8943 1.736 16.9997 2.00122 16.9997C2.26644 16.9997 2.52079 16.8943 2.70833 16.7068C2.89586 16.5193 3.00122 16.2649 3.00122 15.9997C3.00122 15.7345 2.89586 15.4801 2.70833 15.2926C2.52079 15.1051 2.26644 14.9997 2.00122 14.9997C1.736 14.9997 1.48165 15.1051 1.29411 15.2926C1.10658 15.4801 1.00122 15.7345 1.00122 15.9997ZM1.00122 1.99969C1.00122 2.26491 1.10658 2.51926 1.29411 2.7068C1.48165 2.89434 1.736 2.99969 2.00122 2.99969C2.26644 2.99969 2.52079 2.89434 2.70833 2.7068C2.89586 2.51926 3.00122 2.26491 3.00122 1.99969C3.00122 1.73448 2.89586 1.48012 2.70833 1.29259C2.52079 1.10505 2.26644 0.999695 2.00122 0.999695C1.736 0.999695 1.48165 1.10505 1.29411 1.29259C1.10658 1.48012 1.00122 1.73448 1.00122 1.99969Z"
              stroke="#9D9FA2"
              strokeWidth="1.38462"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <ChartCom />
      </div>
    
    
        
<Table />
    </div>
  );
}

export default InnerContent;
