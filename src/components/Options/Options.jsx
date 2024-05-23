import css from './Options.module.css'


const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
      <div className={css.optionsWrapper}>
          <h1 className={css.optionsTitle}>Sip Happens Café</h1>
          <p>Please leave your feedback about our service by selecting one of the options below.</p>

          <div className={css.optionsBtnWrapper}>
            <button onClick={() => updateFeedback('good')} className={css.optionsBtn}>Good</button>
            <button onClick={() => updateFeedback('neutral')} className={css.optionsBtn}>Neutral</button>
            <button onClick={() => updateFeedback('bad')} className={css.optionsBtn}>Bad</button>
        <button onClick={resetFeedback}>Reset</button>
        {/* {totalFeedback > 0 && (
        <button onClick={resetFeedback}>
          Reset
        </button>
      )} */}
         
          </div>
    </div>
  );
};

export default Options;

// className={css.optionsBtn}