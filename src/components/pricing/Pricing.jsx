import React from 'react';

function Pricing() {
  return (
    <div id="pricing">
      <img className="budget__coin1" src="https://drbgg29kvmub6.cloudfront.net/assets/ad360/Coin1.svg" alt="gold-coin-img" />
      <img className="budget__coin2" src="https://drbgg29kvmub6.cloudfront.net/assets/ad360/Coin2.svg" alt="gold-coin-img" />
      <span className="poppins budget__heading">Pick the right plan for your ad budget</span>
      <h2 className="poppins budget__subHeading">My monthly ad spend is up to <span>$4500</span></h2>
      <span className="MuiSlider-root MuiSlider-colorPrimary MuiSlider-sizeMedium budget__slider css-exkjcx">
        <span className="MuiSlider-rail css-b04pc9"></span>
        <span className="MuiSlider-track css-1t2bqnt" style={{ left: '0%', width: '20%' }}></span>
        <span data-index="0" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: '0%' }}></span>
        <span data-index="1" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: '20%' }}></span>
        <span data-index="2" className="MuiSlider-mark css-1ejytfe" style={{ left: '40%' }}></span>
        <span data-index="3" className="MuiSlider-mark css-1ejytfe" style={{ left: '60%' }}></span>
        <span data-index="4" className="MuiSlider-mark css-1ejytfe" style={{ left: '80%' }}></span>
        <span data-index="5" className="MuiSlider-mark css-1ejytfe" style={{ left: '100%' }}></span>
        <span data-index="0" className="MuiSlider-thumb MuiSlider-thumbSizeMedium MuiSlider-thumbColorPrimary css-1s3fy7y" style={{ left: '20%' }}>
          <input
            data-index="0"
            aria-label="Temperature"
            aria-valuenow="1"
            aria-valuetext="1°C"
            aria-orientation="horizontal"
            aria-valuemax="5"
            aria-valuemin="0"
            type="range"
            min="0"
            max="5"
            step="1"
            value="1"
            style={{ border: '0px', clip: 'rect(0px, 0px, 0px, 0px)', height: '100%', margin: '-1px', overflow: 'hidden', padding: '0px', position: 'absolute', whiteSpace: 'nowrap', width: '100%', direction: 'ltr' }}
          />
        </span>
      </span>
      <div className="budget__plansCards">
        <div id="plansCard" className="dflexc justifycenter planCard planCardSelected">
          <h3 className="plansCard__heading poppins">Plan</h3>
          <h2 className="plansCard__price poppins">$199<span>/month</span></h2>
          <p className="plansCard__overages poppins"><span>Overages</span> apply if ad spend limit is exceeded</p>
          <a href="https://enterprise.zocket.com/" target="_blank" rel="noopener noreferrer" className="plansCard__button poppins-semiBold dflexr justifycenter planCard__buttonSelected">Proceed with this</a>
          <p className="plansCard__excludingGst inter">*Excluding GST</p>
          <img className="plansCard__purpleTickCircle" src="https://drbgg29kvmub6.cloudfront.net/assets/ad360/purple-tick-circle.svg" alt="purple-tick-circle" />
        </div>
        <div id="plansCard" className="dflexc justifycenter planCard planCardSelected">
          <h3 className="plansCard__heading poppins">Higher ad spends?</h3>
          <h2 className="plansCard__price poppins">Custom Price</h2>
          <p className="plansCard__overages poppins"><span><br /></span></p>
          <a href="https://ad360.ai/book-a-demo/" target="_blank" rel="noopener noreferrer" className="plansCard__button poppins-semiBold dflexr justifycenter planCard__buttonSelected">Talk to us</a>
          <p className="plansCard__excludingGst inter">*Excluding GST</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
