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
  const resetFeedback = () => {
    setFeedback({
       good: 0,
    neutral: 0,
    bad: 0

    })
  }
const resetFeedback = () => {
    setReviews({ good: 0, neutral: 0, bad: 0 });
  };
  return (
    <div>


    <Options
        updateFeedback={updateFeedback} 
        resetFeedback={resetFeedback}
      
        />

      {totalFeedback > 0 ? (<Feedback feedback={feedback} />)
        : (<Notification />)}
      
      
    </div>
  );
};


export default App



// const handleGoodFeedback = () => {
//     setFeedback(prevFeedback => ({
//       ...prevFeedback,
//       good: prevFeedback.good + 1
//     }));
//   };

//   const handleNeutralFeedback = () => {
//     setFeedback(prevFeedback => ({
//       ...prevFeedback,
//       neutral: prevFeedback.neutral + 1
//     }));
//   };

//   const handleBadFeedback = () => {
//     setFeedback(prevFeedback => ({
//       ...prevFeedback,
//       bad: prevFeedback.bad + 1
//     }));
//   };