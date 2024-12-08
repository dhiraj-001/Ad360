import React from 'react';

import img1 from "../images/Ad360_Header.svg";
function Navbar() {
  return (
    <div>
      <div id="appNavbar" className="sticky">
        <a href="/">
          <img src={img1} alt="logo-img" className="appNavbar__logo" />
        </a>
        <style>
          {`
            astro-island,
            astro-slot,
            astro-static-slot {
              display: contents;
            }
          `}
        </style>

        <astro-island
          client="only"
          component-export="default"
          component-url="/_astro/Sidebar.UnYHrlUk.js"
          opts='{"name":"sidebar","value":"react"}'
          props='{"page":[0,"main"]}'
          renderer-url="/_astro/client.AorvF5L6.js"
          ssr=""
          uid="bID3X"
        ></astro-island>
        
        <ul className="appNavbar__navLinks">
          <li><a href="#home" className="inter appNavbar__navLink">Home</a></li>
          <li><a href="#about" className="inter appNavbar__navLink">About</a></li>
          <li><a href="#pricing" className="inter appNavbar__navLink" data-astro-reload="" data-astro-transition="back" data-astro-transition-scope="astro-gjjrnpmp-1">Pricing</a></li>
          <li><a href="#faq" className="inter appNavbar__navLink">FAQ</a></li>
          <li><a href="https://blog.ad360.ai/" className="inter appNavbar__navLink" rel="noopener noreferrer" target="_blank">Blogs</a></li>
        </ul>
        
        <div className="appNavbar__btn">
          <a href="/book-a-demo" className="dflexr justifycenter bookademo inter">Book a Demo</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;