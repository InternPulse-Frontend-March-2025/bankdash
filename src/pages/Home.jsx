import React from "react";
import ExpenseStatistics from "../components/ExpenseStatistics";
import WeeklyActivity from "../components/WeeklyActivity";

const Home = () => {
  return (
    <div className="w-full bg-[#F5F7FA]">
      <div className="w-full grid grid-cols-1 p-2 sm:grid-cols-3 gap-4 h-auto md:h-[367px] xl:h-[367px]">
        <WeeklyActivity className="sm:col-span-2 w-full h-[285px] sm:h-full" />
        <ExpenseStatistics className="w-full h-[271px] sm:h-full" />
      </div>
    </div>
  );
};

export default Home;
