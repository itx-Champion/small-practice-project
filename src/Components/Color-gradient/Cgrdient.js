import './Cgradient.css';
import React, { useState, useEffect } from 'react';

const Cgradient = () => {
  const [rgb1, setRgb1] = useState('#004773');
  const [rgb2, setRgb2] = useState('#54d542');
  const [background, setBackground] = useState(`linear-gradient(to right, ${rgb1}, ${rgb2})`);

  const hexValue = () => {
    const value = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += value[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const handleClick1 = () => {
    const newColor = hexValue();
    setRgb1(newColor);
    setBackground(`linear-gradient(to right, ${newColor}, ${rgb2})`);
  }

  const handleClick2 = () => {
    const newColor = hexValue();
    setRgb2(newColor);
    setBackground(`linear-gradient(to right, ${rgb1}, ${newColor})`);
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`background-image: ${background}`);
    alert('Copied to clipboard');
  }

  useEffect(() => {
    document.body.style.backgroundImage = background;
    console.log(`Updated background: ${background}`);
  }, [background]);

  return (
    <section className='section-Gradient'>
    <section className='inner-section'>
    <p className='project-name'>Color gradient</p>
      <div>
        <button id='Button1' onClick={handleClick1}>{rgb1}</button>
        <button id='Button2' onClick={handleClick2}>{rgb2}</button>
      </div>
      <p>Copy your code here</p>
      <div className="copycode" onClick={copyToClipboard}>
        background-image: {background}
      </div>
      </section>
    </section>
  );
}

export default Cgradient;
