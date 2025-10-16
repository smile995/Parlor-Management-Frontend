import axios from "axios";

const imageUploadIntoImaBB = async (image: File | null) => {
  if (!image) {
    return alert("Please Select an image first  ");
  }

  try {
    const formdata = new FormData();
    formdata.append("image", image);
    const key = import.meta.env.VITE_IMGBB_API_KEY;
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${key}`,
      formdata
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default imageUploadIntoImaBB;
