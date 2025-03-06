import React, { useEffect, useState } from 'react';

const SurveyPage = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    setQuestions([]);
  });
  return <div>SurveyPage</div>;
};

export default SurveyPage;
