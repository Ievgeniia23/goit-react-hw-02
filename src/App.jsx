import { useState, useEffect } from 'react'
import css from './App.module.css'

import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';



const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback')
    if (savedFeedback) {
          return JSON.parse(savedFeedback)
    }
return {
    good: 0,
    neutral: 0,
  bad: 0
    }
  });
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100)

 
  useEffect(() => {
     localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

 
  const updateFeedback = (feedbackType) => {

    setFeedback({...feedback, [feedbackType]: feedback[feedbackType] + 1})
  }
  const resetFeedback = () => {
    setFeedback(
      {
        good: 0,
        neutral: 0,
        bad: 0
      }
  )
  }
  
  return (
  <div className={css.container}>
   <Description/>

    <Options
        updateFeedback={updateFeedback} 
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
    />

      {totalFeedback > 0 ? (<Feedback
        feedback={feedback}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
            
      />)
        : (
    <Notification />)}
 
  </div>
  );
};


export default App



