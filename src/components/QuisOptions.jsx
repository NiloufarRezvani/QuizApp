import React, { useEffect, useState } from "react";
import { fetchCategories } from "../api/quizApi";

function QuisOptions({ startQuiz }) {
  const [categories, setCategories] = useState([]);
  const [options, setOptions] = useState({
    category: "",
    difficulty: "",
    type: "",
    amount: 10,
  });
  //giving categories
  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };

    getCategories();
  }, []);
  //function for managing changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOptions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  //function for submition
  const handleSubmit = (e) => {
    e.preventDefault();
    startQuiz(options);
  }
  return (
    <div className="w-[80%]  -space-y-4 px-36 flex items-center justify-center flex-col z-20 relative">
      <div className="w-fit p-1 bg-transparent rounded-xl z-10 border-2 border-pink-200 ">
        <h1 className="text-xl font-bold text-black rounded-lg bg-pink-200  w-fit py-2 px-4">
          select Quiz options
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full p-6 space-y-6  bg-pink-800 backdrop-blur rounded-xl"
      >
        {/* categories part */}
        <label className="block space-y-1">
          <p className="text-base text-white font-medium">Select Category</p>
          <select
            name="category"
            value={options.category}
            onChange={handleChange}
            className="block w-full h-12 p-2 bg-pink-400 border border-pink-100
           rounded-lg focus:border-pink-300  outline-none"
          >
            <option value="">Any Category</option>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        {/* difficulty part */}
        <label className="block space-y-1">
          <p className="text-base text-white font-medium">Select difficulty</p>
          <select
            name="difficulty"
            value={options.difficulty}
            onChange={handleChange}
            className="block w-full h-12 p-2 bg-pink-400 border border-pink-100
           rounded-lg focus:border-pink-300  outline-none">
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        {/* type part */}
        <label className="block space-y-1">
          <p className="text-base text-white font-medium">Select Type of questions</p>
          <select
            name="type"
            value={options.type}
            onChange={handleChange}
            className="block w-full h-12 p-2 bg-pink-400 border border-pink-100
           rounded-lg focus:border-pink-300  outline-none"
          >
            <option value="">Any type</option>
            <option value="multiple">multiple</option>
            <option value="bolean">True/False</option>
          </select>
        </label>
        {/* amount */}
        <label className="block space-y-1">
          <p className="text-base text-black font-medium">Select amount of questions</p>
          <input
           type="number"
            value={options.amount}
            onChange={handleChange}
            className="block w-full h-12 p-2 bg-pink-400 border border-pink-100
           rounded-lg focus:border-pink-300  outline-none"/>
          
          
        </label>
        <button type="submit" className="bg-pink-300 border-4
        hover:bg-pink-100 ease-in-out
        px-8 py-3 border-pink-800 text-black font-bold rounded-lg">start quiz</button>
      </form>
    
    </div>
  );
}

export default QuisOptions;
