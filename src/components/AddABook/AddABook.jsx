import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Book1 from "../../assets/arrival/profeth.jpg";
import Book2 from "../../assets/arrival/algo.jpg";
import Book3 from "../../assets/arrival/python.jpeg";
import Book4 from "../../assets/arrival/softeng.jpeg";
import Book5 from "../../assets/books/sihbook4.jpg";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Professional Ethics",
    rating: 5.0,
    author: "V.S.Bagad,I.A. Dhotre and Uma Joshi",
    price: 300,
  },
  {
    id: 2,
    img: Book2,
    title: "Analysis and Design of Algorithms",
    rating: 4.5,
    author: "A.A. Puntambekar",
    price: 230,
  },
  {
    id: 3,
    img: Book3,
    title: "Python for Datascience",
    rating: 4.7,
    author: "I.A. Dhotre",
    price: 200,
  },
  {
    id: 4,
    img: Book4,
    title: "Software Engineering",
    rating: 4.4,
    author: "A.A. Puntambekar",
    price: 320,
  },
  {
    id: 5,
    img: Book5,
    title: "Computer Networking",
    rating: 4.5,
    author: "Abhishek Jaguessar",
    price: 280,
  },
];

const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 right-2 text-black cursor-pointer z-10"
      onClick={onClick}
    >
      <FaChevronRight size={30} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 left-1 text-black cursor-pointer z-10"
      onClick={onClick}
    >
      <FaChevronLeft size={30} />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: '',
    condition: 'Good',
    image: null,
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Book:', formData);

    // Simulate successful submission
    setSuccessMessage('✅ Book added successfully!');
    
    // Clear form fields
    setFormData({
      title: '',
      author: '',
      price: '',
      condition: 'Good',
      image: null,
    });

    // Hide the message after 3 seconds
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <>
    <div className="max-w-2xl mx-auto mt-[100px] p-10 bg-gradient-to-br from-white to-blue-50 shadow-xl rounded-2xl">
      {/* ✅ Success Message */}
      {successMessage && (
        <div className="mb-6 text-green-600 text-center font-semibold bg-green-100 border border-green-400 px-4 py-2 rounded">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-blue-700">Add a New Book</h2>

        {/* ... all your input fields here ... (unchanged) */}

        <div>
          <label className="block text-gray-700 font-medium mb-1">📘 Book Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter book title"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">✍️ Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            placeholder="Enter author's name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">💰 Price (₹)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            placeholder="Enter price"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">📋 Condition</label>
          <select
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="Nice">Nice</option>
            <option value="Good">Good</option>
            <option value="Bad">Bad</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">📷 Upload Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Submit Book
        </button>
      </form>

      
    </div>

    <div className='addedbook p-[40px]'> <h2 className='text-3xl'> Your Added Book </h2>
    <Slider {...settings}>
          {booksData.map(({ id, img, title, rating, author, price }) => (
            <div key={id} className="p-10">
              <div
                className="space-y-4 p-3 bg-white rounded-xl shadow-md hover:shadow-lg hover:shadow-[#004aad] transition-shadow duration-300"
                style={{ width: "300px" }} // Adjusted width for the book cover
              >
                <img
                  src={img}
                  alt={title}
                  className="h-[240px] w-[185px] rounded-xl object-cover rounded-md mx-auto"
                />
                <div className="text-black text-center">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-gray-700">{author}</p>
                  <div className="flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{rating}</span>
                  </div>
                  <div className="text-lg font-bold">Rs. {price}</div>
                 
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* View All Books Button */}
        <div className="flex justify-center mt-10">
          <button className="text-center cursor-pointer bg-[#004aad] text-white py-2 px-6 rounded-md hover:bg-[#003a8c] transition-colors duration-300">
            View All
          </button>
        </div>
      </div>
    </>
  );
};

export default AddBookForm;
