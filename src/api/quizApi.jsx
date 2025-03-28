import axios from 'axios';

export const fetchCategories = async () => {
  try {
    const url = 'https://opentdb.com/api_category.php';
    const response = await axios.get(url);
    return response.data.trivia_categories || [];
  } catch (error) {
    console.error("Error while fetching categories:", error);
    return [];
  }
};

export const fetchQuiz = async (category, difficulty, type, amount) => {
  try {
    let url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
    const response = await axios.get(url);
    console.log(response.data.results);
    
    return response.data.results || [];
  } catch (error) {
    console.error("Error while fetching quiz questions:", error);
    return [];
  }
};
