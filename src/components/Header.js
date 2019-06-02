import React from 'react';


import '../styles/header.scss';

function Header() {
  return (
    
    window.addEventListener('scroll',function() {
      if (window.scrollY > 100) {
        
        
        if (!document.getElementById("header").classList.contains('small')) {
          let animationToClose = document.getElementsByClassName("animation-to-close");
          
          for (let i = 0; i < animationToClose.length ; i++) {
            animationToClose[i].beginElement();
          }
          document.getElementById("header").classList.add("small")
        }
  
      } else {
        if (document.getElementById("header").classList.contains('small')) {
          let animationToOpen = document.getElementsByClassName("animation-to-open");

          for (let i = 0; i < animationToOpen.length ; i++) {
            animationToOpen[i].beginElement();
          }

          document.getElementById("header").classList.remove("small")
        }
      }

    }),
    <div id="header">
      <svg viewBox="-58 0 600 300" id="logo">

        <symbol id="s-text2" stroke="#dc2671" fill="none">

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 0 540 230">
            <polygon points="384 180.38 192 210.38 0 180.38 0 22 192 0 384 22 384 180.38">
              <animate className="animation-to-close" 
                        begin="indefinite" 
                        fill="freeze" 
                        attributeName="points" 
                        dur="500ms" 
                        to="344 130.38 192 80.38 40 130.38 40 82 192 20 344 82 344 130.38">
              </animate>
              <animate className="animation-to-open" 
                        begin="indefinite" 
                        fill="freeze" 
                        attributeName="points" 
                        dur="500ms" 
                        to="384 180.38 192 210.38 0 180.38 0 22 192 0 384 22 384 180.38">
              </animate>
            </polygon>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-18 0 520 230">
            <polygon points="384 180.38 192 210.38 0 180.38 0 22 192 0 384 22 384 180.38">
              <animate className="animation-to-close" 
                        begin="indefinite" 
                        fill="freeze" 
                        attributeName="points" 
                        dur="500ms" 
                        to="344 140.38 192 90.38 40 140.38 40 82 192 15 344 82 344 130.38">
              </animate>
              <animate className="animation-to-open" 
                        begin="indefinite" 
                        fill="freeze" 
                        attributeName="points" 
                        dur="500ms" 
                        to="384 180.38 192 210.38 0 180.38 0 22 192 0 384 22 384 180.38">
              </animate>
            </polygon>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 500 230">
            <polygon points="384 180.38 192 210.38 0 180.38 0 22 192 0 384 22 384 180.38">
              <animate className="animation-to-close" 
                        begin="indefinite" 
                        fill="freeze" 
                        attributeName="points" 
                        dur="500ms" 
                        to="344 150.38 192 100.38 40 150.38 40 82 192 10 344 82 344 130.38">
              </animate>
              <animate className="animation-to-open" 
                        begin="indefinite" 
                        fill="freeze" 
                        attributeName="points" 
                        dur="500ms" 
                        to="384 180.38 192 210.38 0 180.38 0 22 192 0 384 22 384 180.38">
              </animate>
            </polygon>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 0 480 230">
            <polygon points="384 180.38 192 210.38 0 180.38 0 22 192 0 384 22 384 180.38">
              <animate className="animation-to-close" 
                        begin="indefinite" 
                        fill="freeze" 
                        attributeName="points" 
                        dur="500ms" 
                        to="344 160.38 192 110.38 40 160.38 40 82 192 05 344 82 344 130.38">
              </animate>
              <animate className="animation-to-open" 
                        begin="indefinite" 
                        fill="freeze" 
                        attributeName="points" 
                        dur="500ms" 
                        to="384 180.38 192 210.38 0 180.38 0 22 192 0 384 22 384 180.38">
              </animate>
            </polygon>
          </svg>


          <g transform="skewX(0),skewY(-5)">
            <text textAnchor="middle" x="27%" y="40%" dy=".38em" style={{ fontSize: '0.93em' }}>adr</text>
          </g>
          <g transform="skewX(0),skewY(5)">
            <text textAnchor="middle" x="57%" y="25%" dy=".38em" style={{ fontSize: '0.93em' }}>ian</text>

          </g>
          <g transform="skewX(0),skewY(5)" className="surname">
            <text textAnchor="middle" x="23%" y="56%" dy=".38em" style={{ fontSize: '0.74em' }}>de&nbsp;&nbsp;S</text>
          </g>
          <g transform="skewX(0),skewY(-5)" className="surname">
            <text textAnchor="middle" x="53%" y="70%" dy=".38em" style={{ fontSize: '0.74em' }}>ouza</text>

          </g>

        </symbol>

        <symbol id="s-text">

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 0 540 230">
            <polygon filter="url(#glow)" points="384 180.38 192 210.38 0 180.38 0 22 192 0 384 22 384 180.38">
              <animate className="animation-to-close" 
                        begin="indefinite" 
                        fill="freeze" 
                        attributeName="points" 
                        dur="500ms" 
                        to="344 130.38 192 80.38 40 130.38 40 82 192 20 344 82 344 130.38">
              </animate>
              <animate className="animation-to-open" 
                        begin="indefinite" 
                        fill="freeze" 
                        attributeName="points" 
                        dur="500ms" 
                        to="384 180.38 192 210.38 0 180.38 0 22 192 0 384 22 384 180.38">
              </animate>
            </polygon>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-18 0 520 230">
            <polygon filter="url(#glow)" points="384 180.38 192 210.38 0 180.38 0 22 192 0 384 22 384 180.38">
              <animate className="animation-to-close" 
                        begin="indefinite" 
                        fill="freeze" 
                        attributeName="points" 
                        dur="500ms" 
                        to="344 140.38 192 90.38 40 140.38 40 82 192 15 344 82 344 130.38">
              </animate>
              <animate className="animation-to-open" 
                        begin="indefinite" 
                        fill="freeze" 
                        attributeName="points" 
                        dur="500ms" 
                        to="384 180.38 192 210.38 0 180.38 0 22 192 0 384 22 384 180.38">
              </animate>
            </polygon>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 500 230">
            <polygon filter="url(#glow)" points="384 180.38 192 210.38 0 180.38 0 22 192 0 384 22 384 180.38">
              <animate className="animation-to-close" 
                        begin="indefinite" 
                        fill="freeze" 
                        attributeName="points" 
                        dur="500ms" 
                        to="344 150.38 192 100.38 40 150.38 40 82 192 10 344 82 344 130.38">
              </animate>
              <animate className="animation-to-open" 
                        begin="indefinite" 
                        fill="freeze" 
                        attributeName="points" 
                        dur="500ms" 
                        to="384 180.38 192 210.38 0 180.38 0 22 192 0 384 22 384 180.38">
              </animate>
            </polygon>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 0 480 230">
            <polygon filter="url(#glow)" points="384 180.38 192 210.38 0 180.38 0 22 192 0 384 22 384 180.38">
              <animate className="animation-to-close" 
                        begin="indefinite" 
                        fill="freeze" 
                        attributeName="points" 
                        dur="500ms" 
                        to="344 160.38 192 110.38 40 160.38 40 82 192 05 344 82 344 130.38">
              </animate>
              <animate className="animation-to-open" 
                        begin="indefinite" 
                        fill="freeze" 
                        attributeName="points" 
                        dur="500ms" 
                        to="384 180.38 192 210.38 0 180.38 0 22 192 0 384 22 384 180.38">
              </animate>
            </polygon>
          </svg>


          <g transform="skewX(0),skewY(-5)">
            <text textAnchor="middle" x="27%" y="40%" dy=".38em" style={{ fontSize: '0.93em' }}>adr</text>
          </g>
          <g transform="skewX(0),skewY(5)">
            <text textAnchor="middle" x="57%" y="25%" dy=".38em" style={{ fontSize: '0.93em' }}>ian</text>

          </g>
          <g transform="skewX(0),skewY(5)" className="surname">
            <text className="small-glow" textAnchor="middle" x="23%" y="56%" dy=".38em" style={{ fontSize: '0.74em' }}>de&nbsp;&nbsp;S</text>
          </g>
          <g transform="skewX(0),skewY(-5)" className="surname">
            <text className="small-glow" textAnchor="middle" x="53%" y="70%" dy=".38em" style={{ fontSize: '0.74em' }}>ouza</text>

          </g>

          <filter id="glow">

            <feGaussianBlur stdDeviation="5" result="StrokePaint" fill="blue" stroke="blue" />
            <feMerge fill="blue" stroke="blue">
              <feMergeNode in="StrokePaint" fill="blue" stroke="blue" />
              <feMergeNode in="StrokePaint" fill="blue" stroke="blue" />
              <feMergeNode in="SourceGraphic" fill="blue" stroke="blue" />


            </feMerge>
          </filter>

        </symbol>

        <use xlinkHref="#s-text2"></use>
        <use className="text" xlinkHref="#s-text"></use>

      </svg >

      <p className="intro">
        Front-end Web Developer 
      </p>


    </div>

  )
}

export default Header;