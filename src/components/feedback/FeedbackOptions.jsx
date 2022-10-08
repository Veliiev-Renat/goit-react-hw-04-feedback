import { Component } from "react";
import PropTypes from 'prop-types';

const buttonStyle = {display:'flex',
alignItems:'center',
justifyContent:'center',
borderRadius: '5px',
padding:'5px'}

function FeedbackOptions({onLeaveFeedback}){
    const buttonsName=['Good','Neutral','Bad']
    return(
            <ul style={{display:'flex'}}>
               {buttonsName.map(name=>(
            <li style={{marginRight:"15px"}} key={name}>
                <button type="button" style={buttonStyle}
                name={name} onClick={onLeaveFeedback}>{name}
               </button>
            </li>
            ))}
            </ul>
        )
}
// export default class FeedbackOptions extends Component{

// buttonsName=['Good','Neutral','Bad']

// render(){
// return(<>
//     <ul style={{display:'flex'}}>
//         {this.buttonsName.map(name=>(
//             <li style={{marginRight:"15px"}} key={name}><button type="button" style={buttonStyle}
//              name={name} onClick={this.props.onLeaveFeedback}>{name}
//              </button>
//              </li>
//         ))}
//     </ul>
// </>
// )
//       }
//     }

FeedbackOptions.propTypes={
    onLeaveFeedback:PropTypes.func
}

export default FeedbackOptions