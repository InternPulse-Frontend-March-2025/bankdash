import React from "react";
import WeeklyActivity from "../components/overview/WeeklyActivity";
import ExpenseStatistics from "../components/overview/ExpenseStatistics";
import DashBoardCards from "../components/transaction/DashBoardCards";
const Home = () => {
  return (
    <div className="h-screen w-full max-w-[1440px] bg-[#F5F7FA] mx-auto">
      <DashBoardCards/>
      <div className="p-2 grid sm:grid-cols-3 gap-4 h-auto w-screen">
        <WeeklyActivity className="sm:col-span-2 h-[285px] md:h-[299px] xl:h-[367px] " />
        <ExpenseStatistics className="w-full h-[271px] sm:h-[285px] md:h-[299px] xl:h-[367px]" />
      </div>
    </div>
  );
};

export default Home;