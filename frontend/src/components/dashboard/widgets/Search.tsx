const Search = ({ placeholder }) => {
  return (
    <div className="relative">
      <form className="relative w-[350px]">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-[var(--brown-ligth-50)] border-white border-2 p-[10px] rounded-md text-gray-950 text-1xl font-medium"
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
  );
};

export default Search;
