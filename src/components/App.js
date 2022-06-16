import {useState} from "react";

import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

export function App() {

  const [good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbackType = { good, neutral, bad };

  const onLeaveFeedback = e => {
    switch (e.target.value) {
      case "good":
      return setGood(good + 1)
        
      case "neutral":
        return setNeutral(neutral + 1)
       
      case "bad": 
        return setBad(bad + 1)
      
      default: return ""; 
    }
  }
  
  const countTotalFeedback = () => {
    let sum = good + neutral + bad;
    return sum;
  }

  const countPositiveFeedbackPercentage = () => {
    if ( good  === 0) { return  good  };
    const total = countTotalFeedback();
    const positive = (good / total)*100;
    return Math.round(positive);
  }

    return (

    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
        
      <Section title="Please leave feedback">
          
        <FeedbackOptions
            options={Object.keys(feedbackType)}
            onLeaveFeedback={onLeaveFeedback}
        />
          
        {countTotalFeedback() === 0  
          ?
            <Notification
              message="There is no feedback"
            />
          :
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positive={countPositiveFeedbackPercentage()}
            /> 
        }
          
      </Section>
    </div>
  );
}



