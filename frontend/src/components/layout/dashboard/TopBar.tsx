import { useEffect, useState } from "react";

const TopBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const time = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const date = currentTime.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="flex items-center justify-between w-full gap-5 pb-3 pt-5 px-5">
      <div className="text-[var(--brown-dark-800)]  text-3xl font-bold w-[80px]">
        GM
      </div>

      <div className="relative">
        <form className="relative w-[350px]">
          <input
            type="text"
            className="w-full bg-[var(--brown-ligth-50)] border-white border-2 p-[10px] rounded-md text-gray-950 text-1xl font-medium"
            placeholder="Buscar Productos"
          />
          <div className="py-1 px-1 absolute top-1 right-1 rounded-md bg-gradient-to-b from-[var(--brown-ligth-400)] to-[var(--brown-dark-800)] cursor-pointer">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11"
                cy="11"
                r="6"
                stroke="#ffff"
                stroke-width="1.2"
              ></circle>
              <path
                d="M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11"
                stroke="#ffff"
                stroke-opacity="0.24"
                stroke-width="1.2"
                stroke-linecap="round"
              ></path>
              <path
                d="M20 20L17 17"
                stroke="#ffff"
                stroke-width="1.2"
                stroke-linecap="round"
              ></path>
            </svg>
          </div>
        </form>
      </div>

      <div className="w-[500px] p-2 rounded-md bg-[var(--brown-ligth-50)] border-2 border-white flex justify-center">
        <p className="text-[1rem] tracking-normal text-gray-500 font-medium flex justify-between items-center gap-2">
          {time}
          <span>•</span>
          {date}

          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12Z"
                stroke="#6e4025"
                stroke-width="2"
              ></path>
              <path
                d="M12 7.5V12L15 15"
                stroke="#6e4025"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
        </p>
      </div>
    </div>
  );
};

export default TopBar;
