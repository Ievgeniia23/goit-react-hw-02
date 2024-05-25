import { useState } from 'react'
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

  const updateFeedback = (feedbackType) => {

    setFeedback({...feedback, [feedbackType]: feedback[feedbackType] + 1})
  }
  
  return (
    <div>


    <Options
        updateFeedback={updateFeedback} 
        
      
        />

      {totalFeedback > 0 ? (<Feedback feedback={feedback} />)
        : (<Notification />)}
      
      
    </div>
  );
};


export default App



