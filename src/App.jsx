import { useState,useEffect } from 'react'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';


const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100)

 
  useEffect(() => {
     console.log('Saving feedback to localStorage:', feedback);
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  
  useEffect(() => {
    const savedFeedback = localStorage.getItem('feedback');
    console.log('Loaded feedback from localStorage:', savedFeedback);
    if (savedFeedback) {
      setFeedback(JSON.parse(savedFeedback));
    }
  }, []);


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
    <div>


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
        : (<Notification />)}
        
     
    </div>
  );
};


export default App



