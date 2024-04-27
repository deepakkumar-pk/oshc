"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { RiInformation2Fill } from "react-icons/ri";


const Page = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    let today = new Date();

    let nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);

    let nextYear = new Date(
      today.getFullYear() + 2,
      nextMonth.getMonth(),
      nextMonth.getDate() - 1
    );

    let nextMonthFormatted = formatDate(nextMonth);
    let nextYearFormatted = formatDate(nextYear);

    setStartDate(nextMonthFormatted);
    setEndDate(nextYearFormatted);
  }, []);

  const formatDate = (date) => {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="bg-base h-[60vh] bg-cover bg-no-repeat flex justify-center items-center">
      <div className="max-w-[50rem]">
        <div className="bg-white px-10 py-6 bg-opacity-90 rounded-t-md">
          <div>
            <Image
              src="/logo.svg"
              width={800}
              height={800}
              alt="Picture of the author"
            />
            <h3 className="text-right font-bold text-[#888888] -mt-6 text-lg">
              Get the best deal on OSHC
            </h3>
          </div>
          <div className="pt-4 space-y-3">
            <p className="text-center font-normal text-[#333333]">
              You have a choice in your overseas student health cover. Let OSHC
              Australia help you compare your OSHC insurance options, and find
              the best value insurance for you.
            </p>
            <h3 className="text-center font-medium text-black text-[22px]">
              Compare Australian Government-approved providers in one place; buy
              your policy and have it in minutes.
            </h3>
          </div>
        </div>
        <div className="">
          <div className="bg-[#0297C4] bg-opacity-80 px-8 py-4">
            <div className="grid grid-cols-3 space-x-2">
              <div className="col-span-1 flex justify-center items-center">
                <div className="w-full grid place-items-center space-y-1">
                  <label htmlFor="adults" className="text-xs text-white ">
                    Adults
                  </label>
                  <select
                    id="adults"
                    name="adults"
                    className="text-sm text-[#555555] w-24 px-1 text-center py-1 rounded-sm"
                  >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                  </select>
                </div>
                <div className="w-full grid place-items-center space-y-1">
                  <label htmlFor="children" className="text-xs text-white">
                    Children
                  </label>
                  <select
                    id="children"
                    name="children"
                    className="text-sm text-[#555555] w-28 p-1 text-center rounded-sm"
                  >
                    <option value="0">0 Children</option>
                    <option value="1">1 Child</option>
                    <option value="2">2 Children</option>
                    <option value="3">3 Children</option>
                    <option value="4">4 Children</option>
                    <option value="5">5 Children</option>
                    <option value="6">6 Children</option>
                    <option value="7">7 Children</option>
                    <option value="8">8 Children</option>
                    <option value="9">9 Children</option>
                    <option value="10">10 Children</option>
                  </select>
                </div>
              </div>

              <div className="col-span-2 flex items-center justify-between">
                <div className="w-full grid place-items-center space-y-1">
                  <label
                    htmlFor="start-date"
                    className="text-xs text-white flex"
                  >
                    My policy starts on
                    <BsFillQuestionCircleFill className="text-sm ml-1" />
                  </label>
                  <input
                    type="date"
                    id="start-date"
                    name="start-date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="text-sm text-[#555555] w-52 p-1 text-center rounded-sm"
                  />
                </div>
                <div className="w-full grid place-items-center space-y-1">
                  <label htmlFor="end-date" className="text-xs text-white flex">
                    My policy finishes on
                    <BsFillQuestionCircleFill className="text-sm ml-1" />
                  </label>
                  <input
                    type="date"
                    id="end-date"
                    name="end-date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="text-sm text-[#555555] w-52 p-1 text-center rounded-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid place-items-center mt-3">
              <button className="text-[28px] px-4 py-1 rounded-md bg-[#28a745] text-white hover:bg-green-800">
                Get Quote Now
              </button>
            </div>
          </div>
          <div className="bg-black opacity-80 text-[11px] rounded-b-md text-white py-3 text-center flex justify-center items-center">
            <RiInformation2Fill className="mr-1 text-2xl"/>
            OSHC is a visa-length cover - you need to get a policy that covers
            the entire length of your student visa.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
