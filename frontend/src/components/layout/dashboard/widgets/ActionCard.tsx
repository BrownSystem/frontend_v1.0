const ActionCard = () => {
  return (
    <div className="h-full px-4 w-full shadow-md flex flex-col bg-white rounded-lg justify-around">
      <div className="w-full flex gap-14 items-center justify-between">
        <div className="bg-gradient-to-b from-[var(--brown-ligth-400)] to-[var(--brown-dark-800)] rounded-lg p-2 w-[40px] cursor-pointer shadow-md">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 10L10.7506 2.99951C11.481 2.41516 12.519 2.41516 13.2494 2.99951L22 10"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M9.47763 4.04943L5.47763 7.29943C4.75138 7.88951 4.38825 8.18455 4.19412 8.5924C4 9.00025 4 9.46813 4 10.4039V14C4 17.7712 4 19.6569 5.17157 20.8284C6.34315 22 8.22876 22 12 22C15.7712 22 17.6569 22 18.8284 20.8284C20 19.6569 20 17.7712 20 14V10.4039C20 9.46813 20 9.00025 19.8059 8.5924C19.6117 8.18455 19.2486 7.88951 18.5224 7.29943L14.5224 4.04943C13.3142 3.06777 12.7101 2.57694 12 2.57694C11.2899 2.57694 10.6858 3.06777 9.47763 4.04943Z"
              stroke="white"
              stroke-width="1.5"
            ></path>
            <path
              d="M9.75 16.25H14.25"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
          </svg>
        </div>
        <div className="text-1xl relative pr-5">
          <figure className="flex relative">
            <img
              className="rounded-full h-[35px] w-[35px] z-1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzj00mTDRWomeiIY_ezq_EVu1H_1_9I7IRxA&s"
              alt="logo"
            />
            <img
              className="absolute top-0 right-5 rounded-full h-[35px] w-[35px] z-0"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzj00mTDRWomeiIY_ezq_EVu1H_1_9I7IRxA&s"
              alt="logo"
            />
            <div className="absolute top-[-1px] left-5 bg-[var(--brown-ligth-400)] w-[40px] h-[40px] rounded-full z-2 border-2 border-white">
              <p className="text-white text-center font-semibold text-md pt-1">
                +2
              </p>
            </div>
          </figure>
        </div>
      </div>
      <div className="">
        <p className="text-1xl text-gray-500 font-light">Sucursales</p>
        <button className="text-sm text-green-600 cursor-pointer flex">
          Ingresar{" "}
          <span className="pt-[5.5px] pl-1">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.43704 5.9581L15.5163 2.93168C19.5892 1.57404 21.8095 3.79435 20.4519 7.86729L17.4255 16.9465C15.389 23.0559 12.0585 23.0489 10.0291 16.9465L9.42103 15.1081C9.26546 14.6414 8.74927 14.1252 8.28258 13.9696L6.43703 13.3544C0.334707 11.325 0.334708 7.98749 6.43704 5.9581Z"
                stroke="#00a63e"
                stroke-width="2dd"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M9.05322 14.3302L12.8716 10.5118"
                stroke="#00a63e"
                stroke-width="2dd"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ActionCard;
