import React, { Children, useState } from 'react'
import '../Component/Dot.css'
import { useNavigate } from 'react-router-dom';

function IsHovered({content, rightPos, topPos, nameRightPos, nameTopPos}) {
  const navigate = useNavigate();
    const [showNameTag, setShowNameTag] = useState(false);

    const handleHover = () =>{
        setShowNameTag(true)
    }
    const handleMouseLeave = () => {
        setShowNameTag(false)
    }
  // Expect a productId prop for navigation
  return (
    <div>
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        onClick={() => navigate(`/shop/products/${content._id}`)}
        className="dot h-2 w-2 rounded-full bg-black absolute cursor-pointer"
        style={{ right: `${rightPos}%`, top: `${topPos}%` }}
      ></div>
      <p
        className={showNameTag
          ? 'absolute right-28 top-28 bg-white text-black p-1 font-extrabold rounded-full pl-3 pr-3'
          : 'hidden'}
        style={showNameTag ? { right: `${nameRightPos}%`, top: `${nameTopPos}%` } : {}}
      >{content.name || content}</p>
    </div>
  );
}

export default IsHovered