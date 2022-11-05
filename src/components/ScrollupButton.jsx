import React, { useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function ScrollupButton() {
  

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll & window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <i class="scroll-up" id="scroll-up"
    ><ArrowUpwardIcon
      src="assets/icons/icons8-upward-arrow.gif"
      className="up-arrow"
      onClick={scrollTop}
      alt="scroll-up"
      style={{height: 40, display: showScroll ? 'flex' : 'none'}}
  /></i>
  )
}

export default ScrollupButton