// import React from 'react'
import './Speech.css'
import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useClipboard } from 'use-clipboard-copy';

const Speech = () => {
    const[error,setError]=useState("");
  const clipboard = useClipboard();

  const { transcript,resetTranscript,browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true ,language:"en-us" });
  const stopListening = () => SpeechRecognition.stopListening();
  const reset=()=>{
    resetTranscript();
  };
  const handleCopy=()=>{
    clipboard.copy(transcript);
    setError("Transcript copied to clipboard!");
  }

  return (
    <section className='speech-section'>
       <div className="counter-container">
        <p className='project-name'>Speech To Text Converter</p>
        <p>
          A react hook that converts speech from the microphone to text and
          makes it available to react component
        </p>
        <div className="content">
          <div className="main-content"><p>{transcript}</p></div>
          <div className="btn-style">
          <button onClick={handleCopy}>Copy Transcript</button>
            <button onClick={startListening} >Start listening</button>
            <button onClick={stopListening} >Stop listening</button>
            <button onClick={reset}>Reset Transcript</button>
          </div>
          { <span style={{ color: 'green' }}>{error}</span>}
        </div>
      </div>
    </section>
  )
}

export default Speech
