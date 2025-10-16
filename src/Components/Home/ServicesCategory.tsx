import HeaderTitle from "../shared/HeaderTitle";

const ServicesCategory = () => {
  const handleGetCategory = (category: string) => {
    console.log(category);
  };
  return (
    <div className="bg-[#fff8f5]">
      <div className="py-10">
        <HeaderTitle BText="Our Sercice" CText="Category" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-5 px-5 md:px-10 pb-10">
        <div
          onClick={() => handleGetCategory("Premium")}
          className="w-full md:col-span-3 flex items-center justify-center  h-40 bg-cover hover:bg-blue-700 bg-blend-multiply bg-gray-500 bg-center rounded-lg"
          style={{
            backgroundImage:
              "url('https://media.gettyimages.com/id/2168687154/video/female-doctor-examining-a-womans-face.jpg?s=640x640&k=20&c=jKs6XXwH6KHVQWv-wQFXZMmsNnqqlsrXMCOFKkHBnlg=')",
          }}
        >
          <h3 className="uppercase text-white font-semibold ">Premium</h3>
        </div>
        <div
          onClick={() => handleGetCategory("Make Over")}
          className="w-full  flex items-center justify-center  h-40 bg-cover hover:bg-blue-700 bg-blend-multiply bg-gray-500 bg-center rounded-lg"
          style={{
            backgroundImage:
              "url('https://static.vecteezy.com/system/resources/thumbnails/045/907/161/small_2x/cosmetics-arranged-on-pink-background-free-photo.jpeg')",
          }}
        >
          <h3 className="uppercase text-white font-semibold ">Make Over</h3>
        </div>
        <div
          onClick={() => handleGetCategory("Body Care")}
          className="w-full  flex items-center justify-center  h-40 bg-cover hover:bg-blue-700 bg-blend-multiply bg-gray-500 bg-center rounded-lg"
          style={{
            backgroundImage:
              "url('https://www.shutterstock.com/image-photo/young-woman-getting-facial-massage-600nw-109966265.jpg')",
          }}
        >
          <h3 className="uppercase text-white font-semibold ">Body Care</h3>
        </div>
        <div
          onClick={() => handleGetCategory("Hair Care")}
          className="w-full  flex items-center justify-center  h-40 bg-cover hover:bg-blue-700 bg-blend-multiply bg-gray-500 bg-center rounded-lg"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/hairdresser-applies-professional-liquid-keratin-client-s-hair-girl-does-keratin-hair-strengthening-beauty-salon-hair-care_357889-5258.jpg')",
          }}
        >
          <h3 className="uppercase text-white font-semibold ">Hair Care</h3>
        </div>
        <div
          onClick={() => handleGetCategory("Bridal")}
          className="w-full  flex items-center justify-center  h-40 bg-cover hover:bg-blue-700 bg-blend-multiply bg-gray-500 bg-center rounded-lg"
          style={{
            backgroundImage:
              "url('https://png.pngtree.com/thumb_back/fh260/background/20250121/pngtree-a-bride-to-be-in-beauty-parlor-her-eyes-closed-relaxation-image_16914070.jpg')",
          }}
        >
          <h3 className="uppercase text-white font-semibold ">Bridal</h3>
        </div>
        <div
          onClick={() => handleGetCategory("Hair Cut")}
          className="w-full  flex items-center justify-center  h-40 bg-cover hover:bg-blue-700 bg-blend-multiply bg-gray-500 bg-center rounded-lg"
          style={{
            backgroundImage:
              "url('https://beunatural.in/image/hair-page-image/Hair-Cuts.webp')",
          }}
        >
          <h3 className="uppercase font-semibold text-white ">Hair Cut</h3>
        </div>
        <div
          onClick={() => handleGetCategory("Hair Removal")}
          className="w-full  flex items-center justify-center  h-40 bg-cover hover:bg-blue-700 bg-blend-multiply bg-gray-500 bg-center rounded-lg"
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDf3T3jhe6RTSeRXIT2bEho52UrOC6cff_1g&s')",
          }}
        >
          <h3 className="uppercase font-semibold text-white ">Hair Removal</h3>
        </div>
      </div>
    </div>
  );
};

export default ServicesCategory;
