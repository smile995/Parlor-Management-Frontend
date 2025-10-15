const Loading = () => {
  return (
    <div className="h-[50vh] text-center font-bold text-2xl w-full flex justify-center items-center">
      <div>
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
        <span className="loading loading-dots loading-xl"></span>
      </div>
    </div>
  );
};

export default Loading;
