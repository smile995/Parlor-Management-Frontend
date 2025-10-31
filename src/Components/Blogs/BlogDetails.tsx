import { useParams } from "react-router";
import axiosInstance from "../../assets/Configs/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import type { IBlog, IComment } from "../../Types";
import { useState } from "react";
import Loading from "../ReUsable/Loading";
import {
  FaCalendar,
  FaEye,
  FaHeart,
  FaRegMessage,
  FaUser,
} from "react-icons/fa6";

const BlogDetails = () => {
  const { slug } = useParams();

  // Fetch the blog details by slug
  const fetchDetails = async () => {
    const { data } = await axiosInstance.get(`/blogs/${slug}`);
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["blogDetails", slug],
    queryFn: fetchDetails,
    //     enabled:!slug
  });

  const blogDetails = (data?.data as IBlog) || {};
  
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(blogDetails.likes || 0);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
    // Later you can connect with your backend PATCH API here
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-5xl mx-auto px-5 py-12">
      {/* Category */}
      <div className="inline-block bg-pink-100 text-pink-700 text-xs font-semibold px-4 py-1 rounded-full uppercase mb-4">
        {blogDetails.category}
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
        {blogDetails.title}
      </h1>

      {/* Author + Meta Info */}
      <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-6">
        <span className="flex items-center gap-2">
          <FaUser /> {blogDetails.author}
        </span>
        <span className="flex items-center gap-2">
          <FaCalendar />{" "}
          {new Date(blogDetails.createdAt || Date.now()).toDateString()}
        </span>
        <span className="flex items-center gap-2">
          <FaEye /> {blogDetails.views || 0} views
        </span>
      </div>

      {/* Featured Image */}
      <div className="rounded-xl overflow-hidden shadow-md mb-8">
        <img
          src={blogDetails.image}
          alt={blogDetails.title}
          className="w-full h-[420px] object-cover transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>

      {/* Description / Content */}
      <div className="text-gray-700 leading-relaxed text-[15px] space-y-4 mb-10">
        <p>{blogDetails.description}</p>
        {/* {blogDetails.content && <p>{blogDetails.content}</p>} */}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between border-t border-gray-200 pt-5">
        <div className="flex items-center gap-5 text-gray-600">
          {/* Like */}
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md border transition-all duration-300 ${
              liked
                ? "bg-pink-50 text-pink-600 border-pink-200"
                : "hover:text-pink-600 hover:border-pink-200"
            }`}
          >
            <FaHeart
              size={16}
              fill={liked ? "currentColor" : "none"}
              className="transition-transform duration-200 hover:scale-110"
            />
            <span>{likes}</span>
          </button>

          {/* Comments */}
          <div className="flex items-center gap-2 text-gray-500">
            <FaRegMessage size={16} />
            <span>{blogDetails.comments?.length || 0}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-500">
            <FaEye size={16} />
            <span>{blogDetails.views || 0}</span>
          </div>
        </div>

        {/* Reading Time */}
        <span className="italic text-sm text-gray-400">
          {blogDetails.readingTime || "3 min read"}
        </span>
      </div>

      {/* Comments Section */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Comments ({blogDetails.comments?.length || 0})
        </h3>
        {blogDetails.comments?.length ? (
          <div className="space-y-4">
            {blogDetails.comments.map((comment: IComment, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 border border-gray-100 rounded-lg shadow-sm "
              >
                <div className="flex items-center gap-3">
                  <img
                    className="w-10 rounded-full "
                    src={`${
                      comment.image
                        ? comment.image
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oghbsuzggpkknQSSU-Ch_xep_9v3m6EeBQ&s"
                    }`}
                    alt="user profile"
                  />
                  <div className="text-sm text-gray-600">
                    <p>{comment.user}</p>
                    <p>{new Date(comment.date).toISOString().split("T")[0]}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">{comment.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
