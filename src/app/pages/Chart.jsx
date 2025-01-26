import React, { useState } from "react";
import chartData from "./chartData.json"; // Pastikan file JSON ini ada di direktori yang sama

const ProfileHeader = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <header className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Profile Overview
      </h1>
      <div className="mb-4">
        <label htmlFor="month" className="block text-gray-700 dark:text-gray-300 mb-2">
          Select Month:
        </label>
        <select
          id="month"
          value={selectedMonth}
          onChange={handleMonthChange}
          className="p-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        >
          {chartData.charts[0].data.map((item) => (
            <option key={item.month} value={item.month}>
              {item.month}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {chartData.charts.map((chart, index) => {
          const selectedData = chart.data.find((item) => item.month === selectedMonth);
          return (
            <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                {chart.title}
              </h2>
              <p className="text-3xl font-bold text-blue-500 dark:text-blue-300">
                {selectedData ? selectedData.value : 0}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Data for {selectedMonth} 2024
              </p>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default ProfileHeader;
