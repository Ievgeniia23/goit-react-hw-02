import css from './Options.module.css'


const Options = ({ updateFeedback }) => {
  return (
      <div className={css.optionsWrapper}>
          <h1 className={css.optionsTitle}>Sip Happens Café</h1>
          <p>Please leave your feedback about our service by selecting one of the options below.</p>

          <div className={css.optionsBtnWrapper}>
            <button onClick={() => updateFeedback('good')} className={css.optionsBtn}>Good</button>
            <button onClick={() => updateFeedback('neutral')} className={css.optionsBtn}>Neutral</button>
            <button onClick={() => updateFeedback('bad')} className={css.optionsBtn}>Bad</button>
       
         
          </div>
    </div>
  );
};

export default Options;

