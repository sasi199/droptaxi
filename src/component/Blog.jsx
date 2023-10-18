import React from "react";
import car1 from "../assets/0.png";
import car2 from "../assets/10.png";
import car3 from "../assets/taxi11.png";

const BlogCard = ({ image, title, date, author, content }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ${
        isHovered ? "hover:bg-primary hover:text-white" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt={title}
        className="w-64 h-64 object-cover mx-auto py-4"
      />
      <div className="p-6 flex flex-col justify-center">
        <h2
          className={`text-xl font-semibold text-gray-800 mb-2 text-center ${
            isHovered ? "text-white" : ""
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-sm text-gray-600 mb-1 text-center ${
            isHovered ? "text-white" : ""
          }`}
        >
          Published on {date} by {author}
        </p>
        <p
          className={`text-gray-800 text-lg text-center ${
            isHovered ? "text-white" : ""
          }`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

const BlogPage = () => {
  const blogs = [
    {
      image: car1,
      title: "The Future of Electric Cars",
      date: "October 15, 2023",
      author: "John Doe",
      content:
        "Electric cars redefine transport, efficiency, and innovation  technologically advanced future.",
    },
    {
      image: car2,
      title: "Top 10 Road Trip Destinations",
      date: "September 28, 2023",
      author: "Jane Smith",
      content:
        "Discover the most captivating and scenic road trip destinations for unforgettable adventures.",
    },
    {
      image: car3,
      title: "Tips for Maintaining Your Car",
      date: "August 12, 2023",
      author: "Mike Johnson",
      content:
        "Essential tips to keep your car running smoothly and prevent potential maintenance issues",
    },
  ];

  return (
    <div id="blogs" className="min-h-screen  px-5">
      <div className="flex flex-col items-center justify-center  mt-16 px-4 lg:px-0">
        <h3 className="text-4xl font-semibold text-center">
          <span className="text-primary">BLOGS</span>
        </h3>
        <hr className="border-t-2 border-primary my-2 w-14" />
        <p className="text-lg font-medium mt-4 text-center  max-w-2xl">
          Explore Our Blog: Dive into insightful articles covering travel tips,
          destination highlights, and the latest trends in transportation. Let Janani
          Drop-Taxi Blogs be your go-to resource for a well-informed and
          enjoyable travel experience.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 hover:text-white drop-shadow-md">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            image={blog.image}
            title={blog.title}
            date={blog.date}
            author={blog.author}
            content={blog.content}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
