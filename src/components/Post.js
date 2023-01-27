import post from '../services/post';
import React from 'react';
import useField from '../hooks/useField';
import '../styles/Post.css';
export default function Post(props) {
let content = useField("text")
let goal = useField("text")
function handleClick(){post({content: content.value, goal:goal.value}, props.token); props.setPopUp(false);}
    return(props.popUp) ? (
        <div className='popup'>
            <div className='popup-inner'>
            <h2>What is your current goal?</h2>
            <input className='goal' type='text' value={goal.value} onChange={goal.onChange}/>
            <h2>What did you do today to be better?</h2>
            <textarea className='content' value = {content.value} onChange = {content.onChange} />
            <button onClick={handleClick} className='submit'>Post</button>
            <svg className="popup-close"onClick={()=>props.setPopUp(false)}xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="black"><path d="M11.414 10l2.829-2.828a1 1 0 1 0-1.415-1.415L10 8.586 7.172 5.757a1 1 0 0 0-1.415 1.415L8.586 10l-2.829 2.828a1 1 0 0 0 1.415 1.415L10 11.414l2.828 2.829a1 1 0 0 0 1.415-1.415L11.414 10zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"></path></svg>
        </div>
            </div>) : null}
        
    
