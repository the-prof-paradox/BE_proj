import { useState } from "react";
import React from 'react';

const API_URL = `${process.env.REACT_APP_TAGGING_API_URI}`;
const Tagging = () => {
    const [q1, setQ1] = useState('');
    var [output, setOutput] = useState([]);
    const [callApi, setCallApi] = useState(0);
    
    
    const handlePost = (e)=>{
        e.preventDefault();
        setCallApi(callApi+1);
        const requestOptions = {
          method: 'POST',
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify({"question": q1})            
      };
      fetch(API_URL, requestOptions)
          .then(response => response.json())
          .then(data => setOutput(data["results"]));
    }
    return (
        <div className='newPost'>
            <h2>Post the Question:</h2>
            <form onSubmit={handlePost}>
                <textarea required
                    value={q1}
                    onChange={(e) => setQ1(e.target.value)}
                ></textarea>
                <button><h3>Post!</h3>
                </button> 
            </form>            
            {callApi > 0? 
            <div><h2 style={{
                marginTop: '40px',
                marginBottom: '10px'
                }}>
                Suggested Tags:</h2>
                <ul style={{fontSize: '30px'}}>
                  {output.map(tag => <li key={output.indexOf(tag)}>{tag}</li>)
                  }
                </ul>
            </div>: null }
        </div>
    );
}
 
export default Tagging;