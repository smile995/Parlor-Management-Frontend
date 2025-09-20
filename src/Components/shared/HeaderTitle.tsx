
const HeaderTitle = ({BText, CText}:{BText:string, CText:string}) => {
  return (
    <h1 className="md:text-3xl text-2xl font-semibold text-black text-center">
     {BText} <span className="text-[#f63e7b]">{CText}</span>
    </h1>
  );
};

export default HeaderTitle;
