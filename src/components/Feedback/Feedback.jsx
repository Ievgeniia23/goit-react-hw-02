import css from './Feedback.module.css'

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div className={css.feedbackWrapper}>
     
      <p className={css.feedbackInfo}>Good: {feedback.good}</p>
      <p className={css.feedbackInfo}>Neutral: {feedback.neutral}</p>
      <p className={css.feedbackInfo}>Bad: {feedback.bad}</p>
       <p className={css.feedbackInfo}>Total: {totalFeedback}</p>
      <p className={css.feedbackInfo}>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;