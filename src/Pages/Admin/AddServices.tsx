
import { useForm } from "react-hook-form";

const AddServices = () => {
  const {
    register,
    formState: { errors },
    
  } = useForm<IServiceForm>();
  interface IServiceForm {
    name: string;
    description: string;
    category: string;
    price: number;
    duration: string;
    image: string;
  }

  return (
    <div>
      <div className=" mx-auto p-4 shadow rounded ">
        <h2 className="text-xl font-bold mb-4 ">Add New Service</h2>
        <form className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Service Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full border p-2 rounded"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full border p-2 rounded"
            />
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <select
              {...register("category", { required: "Category is required" })}
              className="w-full border p-2 rounded"
            >
              <option value="">Select category</option>
              <option value="Hair">Hair</option>
              <option value="Skin">Skin</option>
              <option value="Nails">Nails</option>
            </select>
            {errors.category && (
              <p className="text-red-500">{errors.category.message}</p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 font-medium">Price ($)</label>
            <input
              type="number"
              {...register("price", {
                required: "Price is required",
                min: { value: 1, message: "Price must be greater than 0" },
              })}
              className="w-full border p-2 rounded"
            />
            {errors.price && (
              <p className="text-red-500">{errors.price.message}</p>
            )}
          </div>

          {/* Duration */}
          <div>
            <label className="block mb-1 font-medium">Duration</label>
            <input
              type="text"
              placeholder="e.g. 50 min, 1 hr"
              {...register("duration", { required: "Duration is required" })}
              className="w-full border p-2 rounded"
            />
            {errors.duration && (
              <p className="text-red-500">{errors.duration.message}</p>
            )}
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-1 font-medium">Image URL</label>
            <input
              type="text"
              {...register("image", { required: "Image URL is required" })}
              className="w-full border p-2 rounded"
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
