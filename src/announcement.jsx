// src/components/NewsTicker.jsx
import './NewsTicker.css';

const NewsTicker = ({ text }) => {
  return (
    <div className="news-ticker-wrapper" style={{paddingLeft:"10px",paddingRight:"10px",overflow:"hidden"}}>
      <div style={{backgroundColor:"#1d1d21", borderRadius:"3px",overflow:"hidden"}}> <div className="news-ticker">
        <span>{text}</span>
        
      </div></div>
     
    </div>
  );
};

export default NewsTicker;
