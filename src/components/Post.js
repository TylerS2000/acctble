import post from '../services/post';
import React from 'react';
import useField from '../hooks/useField';
import getPosts from '../services/getPosts';
import '../styles/Post.css';
export default function Post(props) {
let content = useField("text")

function handleClick(){post({content: content.value}, props.token); getPosts(props.setPosts)}
    return(props.popUp) ? (
        <div className='popup'>
            <div className='popup-inner'>
            <input type="text" value = {content.value} onChange = {content.onChange}/>
            <button onClick={handleClick}>Post</button>
            <button onClick={()=>props.setPopUp(false)}>Cancel</button>
        </div>
            </div>) : null}
        
    
