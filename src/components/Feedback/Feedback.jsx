import css from './Feedback.module.css'

const Feedback = ({ feedback }) => {
  return (
    <div className={css.feedbackWrapper}>
     
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
    </div>
  );
};

export default Feedback;