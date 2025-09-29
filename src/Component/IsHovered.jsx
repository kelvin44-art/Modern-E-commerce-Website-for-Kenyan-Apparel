import React, { useState, useRef, useLayoutEffect } from 'react'
import '../Component/Dot.css'
import { useNavigate } from 'react-router-dom';
import './IsHovered3D.css';

function IsHovered({content, rightPos, topPos, nameRightPos, nameTopPos}) {
  const navigate = useNavigate();
  const [showNameTag, setShowNameTag] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  // Ref for the popup
  const popupRef = useRef(null);
  const [popupStyle, setPopupStyle] = useState({ left: '50%', top: '30px', transform: 'translateX(-50%)', zIndex: 30 });

  // Only show 3D flip if content.image is an array and has at least 2 images
  const hasFlip = Array.isArray(content.image) && content.image.length > 1;

  const handleHover = () => {
    setShowNameTag(true);
    if (hasFlip) setIsFlipped(true);
  };
  const handleMouseLeave = () => {
    setShowNameTag(false);
    if (hasFlip) setIsFlipped(false);
  };

  // Adjust popup position to stay within viewport
  useLayoutEffect(() => {
    if (showNameTag && popupRef.current) {
      const popup = popupRef.current;
      const rect = popup.getBoundingClientRect();
      const margin = 8;
      let left = '50%';
      let transform = 'translateX(-50%)';
      let top = 30;
      // Get parent dot position in viewport
      const parent = popup.parentElement;
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        let popupLeft = parentRect.left + parentRect.width / 2 - rect.width / 2;
        let popupTop = parentRect.top + parentRect.height + 8;
        // Clamp left
        if (popupLeft < margin) {
          popupLeft = margin;
          transform = 'none';
        } else if (popupLeft + rect.width > window.innerWidth - margin) {
          popupLeft = window.innerWidth - rect.width - margin;
          transform = 'none';
        }
        // Clamp top
        if (popupTop + rect.height > window.innerHeight - margin) {
          popupTop = parentRect.top - rect.height - 8;
        }
        setPopupStyle({
          position: 'fixed',
          left: popupLeft,
          top: popupTop,
          zIndex: 30,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transform,
        });
      }
    }
  }, [showNameTag]);

  return (
    <div
      style={{ position: 'absolute', right: `${rightPos}%`, top: `${topPos}%` }}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div
        onClick={() => navigate(`/shop/products/${content._id}`)}
        className="dot h-2 w-2 rounded-full bg-black cursor-pointer"
      ></div>
      {showNameTag && (
        <div ref={popupRef} style={popupStyle}>
          {hasFlip && (
            <div className={`flip-container${isFlipped ? ' flipped' : ''}`} style={{ width: 140, height: 140 }}>
              <div className="flipper">
                <img src={content.image[0]} alt="front" className="front product-img-3d" />
                <img src={content.image[1]} alt="back" className="back product-img-3d" />
              </div>
            </div>
          )}
          <span style={{ marginTop: 8, background: 'white', color: 'black', fontWeight: 800, borderRadius: 12, padding: '4px 16px', fontSize: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            {content.name || content}
          </span>
        </div>
      )}
    </div>
  );
}

export default IsHovered