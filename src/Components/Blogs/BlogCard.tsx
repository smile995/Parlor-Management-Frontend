import type { IBlog } from "../../Types";
import { Link } from "react-router";
import { useState } from "react";
import { FaEye, FaHeart, FaMessage } from "react-icons/fa6";

const BlogCard = ({ blog }: { blog: IBlog }) => {
  const {
    image,
    title,
    likes: totalLike,
    author,
    category,
    description,
    views,
    readingTime,
    comments,
    slug,
  } = blog;
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(totalLike);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="group border  border-pink-100 rounded-2xl  overflow-hidden">
      <Link to={`/blogs/${slug}`}>
        <div className="relative ">
          <img
            src={image}
            alt={title}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute top-3 left-3 bg-white/90 text-pink-600 text-xs font-semibold uppercase px-3 py-1 rounded-full shadow-sm">
            {category}
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-500">
                by <span className="font-medium text-gray-700">{author}</span>
              </span>
              <span className="text-xs text-gray-400 italic">
                {readingTime || "3 min read"}
              </span>
            </div>

            <h2 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2">
              {title.slice(0,30)}...
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
              {description.slice(0,75)}...
            </p>
          </div>
        </div>
      </Link>

      {/* Social Buttons */}
      <div className="flex mt-auto items-center border-t py-3 border-pink-100 justify-center text-sm bg-pink-50">
        <div className="flex items-center gap-4">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-300 ${
              liked
                ? "text-pink-600 bg-pink-50"
                : "text-gray-500 hover:text-pink-600 hover:bg-pink-50"
            }`}
          >
            <FaHeart
              size={17}
              fill={liked ? "currentColor" : "gray"}
              className="transition-transform duration-200 hover:scale-110"
            />
            {likes}
          </button>

          {/* Comment Button */}
          <button className="flex items-center gap-1 px-2 py-1 text-gray-500 hover:text-pink-600 hover:bg-pink-50 rounded-md transition">
            <FaMessage size={17} />
            <span>{comments?.length || 0}</span>
          </button>

          {/* View Count */}
          <div className="flex items-center gap-1 text-gray-400">
            <FaEye size={17} />
            <span>{views || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
