import { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function ScrollupButton() {
  const [showScroll, setShowScroll] = useState(false);

  

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <i className="scroll-up" id="scroll-up" title="Retour vers le haut">
      <ArrowUpwardIcon
        className="up-arrow"
        onClick={scrollTop}
        alt="scroll-up"
        style={{ display: showScroll ? 'flex' : 'none' }}
      />
    </i>
  );
}

export default ScrollupButton;
