import React from "react";
import img1 from "../images/whyChoose1.webp";
import img2 from "../images/whyChoose2.webp";
import img3 from "../images/whyChoose3.webp";
import img4 from "../images/whyChoose4.webp";
import img5 from "../images/whyChoose5.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Product() {
  // useGSAP(
  //   () => {
  //     // gsap code here...
  //     gsap.from(".boxx1", {
  //        x: 0
  //        }); // <-- automatically reverted
  //   },
  //   { scope: container }
  // );
  return (
    <div id="about">
      <h2 className="poppins whyChoose__heading">Why choose Ad360?</h2>
      <astro-island
        client="only"
        component-export="default"
        component-url="/_astro/WhyChoose.sQ0BHLDW.js"
        opts='{"name":"whychoose","value":"react"}'
        props="{}"
        renderer-url="/_astro/client.AorvF5L6.js"
        ssr=""
        uid="ZT8bQ5"
      ></astro-island>
      <section className="whyChoose__wrapper">
        <div className="whyChoose__wrapper__flex" id="whyChoose__wrapper__left">
          <div className="whyChoose__wrapper1 whyChoose__wrapperImg">
            <img
              className="animation__img"
              src="https://drbgg29kvmub6.cloudfront.net/assets/ad360/whyChoose1.webp"
              alt="Instant Account Top-Up"
            />
          </div>
          <div className="whyChooseLine">
            <div></div>
            <span className="wrapperMiddle__first poppins">1</span>
          </div>
        </div>
        <div className="scroll">
          <div
            className="scrollAnimation boxx1"
            data-scroll="in"
            style={{ "--visible-y": 0.6435, "--viewport-y": -0.7129 }}
          >
            <h2 className="poppins whyChoose__cardHeadingAnimation">
              Instant Account Top-Up
            </h2>
            <p className="poppins whyChoose__cardSubHeading">
              Our automated top-up system is a game-changer compared to the
              manual, time-consuming process used by our competitors. With
              Ad360, your account is recharged in seconds, ensuring continuous
              ad campaign momentum.
            </p>
          </div>
          <div
            className="scrollAnimation"
            data-scroll="out"
            style={{ "--visible-y": 0, "--viewport-y": -1 }}
          >
            <h2 className="poppins whyChoose__cardHeadingAnimation">
              Advanced Analytics Dashboard
            </h2>
            <p className="poppins whyChoose__cardSubHeading">
              While others lack efficient monitoring tools, Ad360 provides a
              comprehensive analytics dashboard. Gain valuable insights into
              your Meta and Google ads easily, making data-driven decisions
              without the complexity.
            </p>
          </div>
          <div
            className="scrollAnimation"
            data-scroll="out"
            style={{ "--visible-y": 0, "--viewport-y": -1 }}
          >
            <h2 className="poppins whyChoose__cardHeadingAnimation">
              Expert Marketing Guidance
            </h2>
            <p className="poppins whyChoose__cardSubHeading">
              Ad360 offers expert consultations to navigate ad policies, a
              service often absent in competitors’ offerings. We guide you in
              maintaining policy compliance, ensuring your ads run smoothly
              without policy infringements.
            </p>
          </div>
          <div
            className="scrollAnimation"
            data-scroll="out"
            style={{ "--visible-y": 0, "--viewport-y": -1 }}
          >
            <h2 className="poppins whyChoose__cardHeadingAnimation">
              Transparent and Economical Pricing
            </h2>
            <p className="poppins whyChoose__cardSubHeading">
              Stand out with our transparent pricing model. Unlike competitors
              who charge a percentage of ad spend, Ad360's fixed fee structure
              makes it a more budget-friendly and predictable option for your
              advertising needs.
            </p>
          </div>
          <div
            className="scrollAnimation"
            data-scroll="out"
            style={{ "--visible-y": 0, "--viewport-y": -1 }}
          >
            <h2 className="poppins whyChoose__cardHeadingAnimation">
              Professional and Recognized Partner
            </h2>
            <p className="poppins whyChoose__cardSubHeading">
              Ad360, a professionally managed startup and a technology partner
              with Meta, offers more than just a temporary solution, unlike
              smaller competitors. Our established partnerships and startup
              vigor ensure cutting-edge, reliable services.
            </p>
          </div>
        </div>
      </section>
      <div className="whyChoose__responsive">
        <div className="dflexr spacebetween whyChoose__responsiveCard whyChoose__wrapper1">
          <img
            src={img1}
            height="400"
            width="440"
            alt="whychoose-img"
            decoding="async"
            loading="lazy"
          />
          <div>
            <h2 className="poppins whyChoose__cardHeading">
              Instant Account Top-Up
            </h2>
            <p className="poppins whyChoose__cardSubHeading">
              Our automated top-up system is a game-changer compared to the
              manual, time-consuming process used by our competitors. With
              Ad360, your account is recharged in seconds, ensuring continuous
              ad campaign momentum.
            </p>
          </div>
        </div>
        <div className="dflexr spacebetween whyChoose__responsiveCard whyChoose__wrapper2">
          <img
            src={img2}
            height="400"
            width="440"
            alt="whychoose-img"
            decoding="async"
            loading="lazy"
          />
          <div>
            <h2 className="poppins whyChoose__cardHeading">
              Advanced Analytics Dashboard
            </h2>
            <p className="poppins whyChoose__cardSubHeading">
              While others lack efficient monitoring tools, Ad360 provides a
              comprehensive analytics dashboard. Gain valuable insights into
              your Meta and Google ads easily, making data-driven decisions
              without the complexity.
            </p>
          </div>
        </div>
        <div className="dflexr spacebetween whyChoose__responsiveCard whyChoose__wrapper3">
          <img
            src={img3}
            height="400"
            width="440"
            alt="whychoose-img"
            decoding="async"
            loading="lazy"
          />
          <div>
            <h2 className="poppins whyChoose__cardHeading">
              Expert Marketing Guidance
            </h2>
            <p className="poppins whyChoose__cardSubHeading">
              Ad360 offers expert consultations to navigate ad policies, a
              service often absent in competitors’ offerings. We guide you in
              maintaining policy compliance, ensuring your ads run smoothly
              without policy infringements.
            </p>
          </div>
        </div>
        <div className="dflexr spacebetween whyChoose__responsiveCard whyChoose__wrapper4">
          <img
            src={img4}
            height="400"
            width="440"
            alt="whychoose-img"
            decoding="async"
            loading="lazy"
          />
          <div>
            <h2 className="poppins whyChoose__cardHeading">
              Transparent and Economical Pricing
            </h2>
            <p className="poppins whyChoose__cardSubHeading">
              Stand out with our transparent pricing model. Unlike competitors
              who charge a percentage of ad spend, Ad360's fixed fee structure
              makes it a more budget-friendly and predictable option for your
              advertising needs.
            </p>
          </div>
        </div>
        <div className="dflexr spacebetween whyChoose__responsiveCard whyChoose__wrapper5">
          <img
            src={img5}
            height="400"
            width="440"
            alt="whychoose-img"
            decoding="async"
            loading="lazy"
          />
          <div>
            <h2 className="poppins whyChoose__cardHeading">
              Professional Management
            </h2>
            <p className="poppins whyChoose__cardSubHeading">
              Ad360, a professionally managed startup and a technology partner
              with Meta, offers more than just a temporary solution, unlike
              smaller competitors. Our established partnerships and startup
              vigor ensure cutting-edge, reliable services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
