import BlogCard from "../../Components/Blogs/BlogCard";
import Loading from "../../Components/ReUsable/Loading";
import HeaderBanner from "../../Components/shared/HeaderBanner";
import HeaderTitle from "../../Components/shared/HeaderTitle";
import { useBlogs } from "../../Hooks/userBlogs";
import type { IBlog } from "../../Types";
import blogBanner from "../../assets/images/blog1.jpg";
const Blogs = () => {
  const { data, isLoading } = useBlogs();
  const blogs = data?.data as IBlog[];

  return (
    <div>
      <HeaderBanner
        title="Best Beauty Blogs"
        subTitle="Stay updated with the latest trends, tips, and insights in the world of beauty and wellness through our curated blogs."
        image={blogBanner}
      />
      <div className="my-8">
        <HeaderTitle BText="Explore Our" CText="Beauity Blogs" />
      </div>
      <div className=" p-5">
        {isLoading && <Loading />}
        <div>
          {blogs?.length > 0 ? (
            <div className="grid mb-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {blogs.map((blog) => (
                <BlogCard blog={blog} key={blog._id} />
              ))}
            </div>
          ) : (
            <p>No Blogs Available Now</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
