import React, { useState, useRef } from "react";
import "./card.css";

export default function Card(props) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const sizesboxRef = useRef(null);
  const purchaseRef = useRef(null);


  return (
    
      <div
        className="card"
        ref={cardRef}
      >
        <img
          ref={imgRef}
          src={require("../../assets/paintbox1.png")}
          alt="paint"
          className="paint-img"
        />
        <h1 className="title" ref={titleRef}>
          Emulsion
        </h1>
        <p ref={descRef}>
        interior house colours and ceiling surfaces
        </p>
        <ul className="sizes-box" ref={sizesboxRef}>
          <li>1 ltr</li>
          <li>2 ltr</li>
          <li>5 ltr</li>
        </ul>
        <div className="button-box" ref={purchaseRef}>
          <button className="purchase" >
            Purchase
          </button>
        </div>
      </div>
  );
}