import React, { useState } from 'react';

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
  );
};

export default AddBookForm;
