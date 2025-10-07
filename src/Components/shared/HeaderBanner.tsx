const HeaderBanner = ({
  title,
  subTitle,
  image,
}: {
  title: string;
  subTitle: string;
  image: string;
}) => {
  return (
    <div className="relative mt-16 min-h-[300px] w-full overflow-hidden group">
      <div
        className="absolute inset-0 min-h-[300px] flex items-center justify-center bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div
          className="md:px-12 px-8 md:py-6 py-4 text-center  bg-[#f53d7a] rounded-tl-4xl rounded-br-4xl text-white opacity-90
         "
        >
          <h2 className="md:text-4xl text-2xl font-bold bg-gradient-to-l from-primary to-black bg-clip-text text-transparent">
            {title}
          </h2>

          <p className="text-sm text-zinc-100">{subTitle}</p>
        </div>
      </div>

      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default HeaderBanner;
