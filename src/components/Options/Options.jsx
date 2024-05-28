import css from './Options.module.css'


const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={css.optionsWrapper}>
         
        <button onClick={() => updateFeedback('good')} className={css.optionsBtn}>Good</button>
        <button onClick={() => updateFeedback('neutral')} className={css.optionsBtn}>Neutral</button>
        <button onClick={() => updateFeedback('bad')} className={css.optionsBtn}>Bad</button>
       
      {totalFeedback > 0 && (<button onClick={resetFeedback} className={css.optionsBtn}>Reset</button>)}
        
    </div>
  );
};

export default Options;




