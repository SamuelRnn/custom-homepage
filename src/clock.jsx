import { useState } from "react";
import { motion } from "framer-motion";

const Clock = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const getCurrentDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = months[date.getMonth()];
    const dayName = days[date.getDay()];

    return `${month}. ${day} - ${dayName}`;
  };
  const getGreeting = () => {
    const hours = new Date().getHours();

    if (hours >= 0 && hours < 12) {
      return "Good morning,";
    } else if (hours >= 12 && hours < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };
  const getformatedHours = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    //formatting the hours
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  };
  //----------------------------------------
  const [time, setTime] = useState({
    greeting: getGreeting(),
    currentDate: getCurrentDate(),
    formatedHours: getformatedHours(),
  });
  // functions
  const clock = () => {
    setTime({
      greeting: getGreeting(),
      currentDate: getCurrentDate(),
      formatedHours: getformatedHours(),
    });
  };
  setInterval(clock, 1000);
  return (
    <div className="flex gap-40 items-center">
      <motion.div
        initial={{ x: -90, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl mt-10"
      >
        <span className="font-semibold text-accent">
          {time.greeting + ", "}
        </span>
        Samuel
      </motion.div>
      <div className="flex flex-col justify-center items-center">
        <span className="text-[86px] font-bold">{time.formatedHours}</span>
        <span className="text-[24px] mt-[-26px]">{time.currentDate}</span>
      </div>
    </div>
  );
};

export default Clock;
