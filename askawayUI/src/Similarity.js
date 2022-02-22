import { useState } from "react";
import React from 'react';

const API_URL = `${process.env.REACT_APP_HF_API_URI}`;
const Similarity = () => {
    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('');
    // var [query, setQuery] = useState('');
    var [output, setOutput] = useState([]);
    const [callApi, setCallApi] = useState(0);
    
    const handlePost = (e)=>{
        e.preventDefault();
        setCallApi(callApi+1);
        const requestOptions = {
            method: 'POST',
            headers: {"Authorization": `${process.env.REACT_APP_HF_KEY}`},
            body: JSON.stringify({
                "inputs": {
                    "source_sentence": q1,
                    "sentences": [q2]
                },
            })
        };
        fetch(API_URL, requestOptions)
            .then(response => response.json())
            .then(data => setOutput(data));
    }
    return (
        <div className='newPost'>
            <h2>Post the Questions:</h2>
            <form onSubmit={handlePost}>
                <label>Question 1: </label>
                <textarea required
                    value={q1}
                    onChange={(e) => setQ1(e.target.value)}
                ></textarea>
                <label>Question 2: </label>
                <textarea required
                    value={q2}
                    onChange={(e) => setQ2(e.target.value)}
                ></textarea>
                <button><h3>Post!</h3>
                </button>    
            </form>            
            {callApi > 0? 
            <div>
            <h2 style={{
                marginTop: '40px',
                marginBottom: '10px'
                
            }}>
                Similarity Score:</h2><u style={
                    {
                        fontSize: '30px'
                    }
                }>{output}</u></div>: null }
            

        </div>
    );
}
 
export default Similarity;