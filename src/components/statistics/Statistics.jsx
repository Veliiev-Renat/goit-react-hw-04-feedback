import Notification from "components/noFeedback/Notification";
import PropTypes from 'prop-types';

function Statistics({good,neutral,bad,total,positivePercentage}){
     return(
       <>
       {!total ? (
       <Notification  message="There is no feedback"/>):(<ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{total}</li>
        <li>Positive feedback:{(positivePercentage)}%</li>
       </ul>)}
       </>     
       )  
}

Statistics.propTypes = {
    good:PropTypes.number,
    neutral:PropTypes.number,
    bad:PropTypes.number,
    total:PropTypes.number,
    positivePercentage:PropTypes.number
}

export default Statistics