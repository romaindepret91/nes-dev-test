import React from "react";
import "./HeroBanner.css";

/**
 *
 * @returns  HeroBanner component
 */
export default function HeroBanner() {
  return (
    <div className="hero-banner-container">
      <section className="pt-5 pb-5">
        <div className="cb-bg-color"></div>
        <div
          className="cb-bg-img position-absolute"
          style={{
            backgroundImage:
              "url(https://www.nespresso.com/ecom/medias/sys_master/public/15678815469598/Food-Bites-Desktop-1920x360-1.jpg)",
          }}
        ></div>
        <div className="cb-inner d-flex flex-column align-items-center text-white">
          <h1 className="display-5 fw-bolder mb-0 pb-3">Food and Bites</h1>
          <p className="text-center fs-5 fw-normal lh-sm">
            Get the perfect complement to your next cup of coffee with
            <br />
            Nespresso’s Amaretti biscuits and sugar sticks. These Nespresso
            products are ideal <br />
            for sharing with guests and for treating yourself. Make your coffee
            moment <br />
            even sweeter with additional&nbsp;
            <a
              href="https://www.nespresso.com/ca/en/accessories"
              className="text-white"
            >
              Nespresso accessories
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
