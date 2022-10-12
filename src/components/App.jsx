import Section from "./section/Section";
import FeedbackOptions from './feedback/FeedbackOptions'
import Statistics from "./statistics/Statistics";
import { useState } from "react";

export function App(){
  const[good,setGood]=useState(0)
  const[neutral,setNeutral]=useState(0)
  const[bad,setBad]=useState(0)

  const buttonClick=(e)=>{
    switch(e.target.name){
      case 'Good':
        setGood((prev)=>(prev+1))
        break;

        case 'Neutral':
        setNeutral((prev)=>(prev+1))
        break;

        case 'Bad':
        setBad((prev)=>(prev+1))
        break;
        
        default:
          return
    }
   }
   const total = good + neutral + bad
   const positivePercentage = Math.round(good / total * 100)
   return (
    <>
    <Section title="Please leave a feedback" children={<FeedbackOptions onLeaveFeedback={buttonClick}/>}/>
    <Section title='Statistics'
     children={<Statistics good={good} neutral={neutral} bad={bad} 
     total={total} positivePercentage={positivePercentage}/>}/>
    </>
  )
}
