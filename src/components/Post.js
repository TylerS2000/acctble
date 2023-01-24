import post from '../services/post';
import React from 'react';
import useField from '../hooks/useField';
export default function Post(props) {
let content = useField("text")

function handleClick(){post({content: content.value}, props.token)}
    return(
        <div>
            <input type="text" value = {content.value} onChange = {content.onChange}/>
            <button onClick={handleClick}>Post</button>
        </div>
    )
}