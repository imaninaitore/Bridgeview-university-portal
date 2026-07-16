import React from "react";

const DashboardCard = ({ title, value, icon: Icon, color }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-500 text-sm">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-[#0A2342] mt-2">
            {value}
          </h2>

        </div>

        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center ${color}`}
        >
          <Icon className="text-white" size={30} />
        </div>

      </div>

    </div>
  );
};

export default DashboardCard;