import HeaderBanner from "../../Components/shared/HeaderBanner";
import HeaderTitle from "../../Components/shared/HeaderTitle";

const Blogs = () => {
  return (
    <div>
      <HeaderBanner
        title="Best Beauty Blogs"
        subTitle="Stay updated with the latest trends, tips, and insights in the world of beauty and wellness through our curated blogs."
        image="https://media.l8t.top/wp-content/uploads/2020/08/beauty_blogs.jpg"
      />
      <div className="my-8">
        <HeaderTitle BText="Explore Our" CText="Beauity Blogs" />
      </div>
      <div>Blogs are coming soon...</div>
    </div>
  );
};

export default Blogs;
