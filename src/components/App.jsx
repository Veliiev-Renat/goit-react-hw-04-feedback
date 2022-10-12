import Section from "./section/Section";
import FeedbackOptions from './feedback/FeedbackOptions'
import Statistics from "./statistics/Statistics";
import { useState } from "react";

export function App(){
  const[Good,setGood]=useState(0)
  const[Neutral,setNeutral]=useState(0)
  const[Bad,setBad]=useState(0)

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
   const total = Good + Neutral + Bad
   const positivePercentage = Math.round(Good / total * 100)
   return (
    <>
    <Section title="Please leave a feedback" children={<FeedbackOptions onLeaveFeedback={buttonClick}/>}/>
    <Section title='Statistics'
     children={<Statistics good={Good} neutral={Neutral} bad={Bad} 
     total={total} positivePercentage={positivePercentage}/>}/>
    </>
  )
}
