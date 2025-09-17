

const SharedBtn = ({label}:{label:string}) => {
  return (
    <button className="bg-[#f63e7b] rounded flex justify-center mx-auto px-3 py-2 text-white font-semibold ">
      {label}
    </button>
  );
};

export default SharedBtn;
