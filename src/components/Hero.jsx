import React from "react";
import styled from "styled-components";
import image from "../assets/mainBcg.jpeg";
const Hero = ({ children }) => {
  return (
    <Wrraper>
      <div className="hero">
        <div className="banner">
          <h1>think , code,deploy</h1>
          <p>embrace your choice-we do</p>
          {children}
        </div>
      </div>
    </Wrraper>
  );
};

const Wrraper = styled.div`
  .hero {
    min-height: calc(65vh);
    background: url(${image}) center/cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primaryDarkColor);
    border-radius: 1rem;
  }
  .banner {
    width: var(--smallWidth);
    max-width: var(--fullWidth);
    padding-left: 0.5rem;
  }
  .hero h1 {
    font-size: 3rem;
    text-transform: capitalize;
  }
  .hero p {
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 3px;
    margin-bottom: 1.75rem;
  }
  .btn-hero {
    border-radius: 0;
    font-weight: bold;
    padding: 0.8rem 1.5rem;
    background: var(--primaryDarkColor);
    border-color: var(--primaryDarkColor);
    color: var(--mainBlack);
  }
  .btn-hero:hover {
    color: white;
  }
  @media screen and (min-width: 768px) {
    .banner {
      margin-top: 0;
    }

    .hero h1 {
      font-size: 4.3rem;
    }
    .hero p {
      font-size: 2.3rem;
    }
    .btn-hero {
      font-size: 1.2rem;
      padding: 1rem 3rem;
    }
  }
`;
export default Hero;
