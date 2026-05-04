// import styled from "styled-components";

// export const Section = styled.section`
//   padding: 100px 8%;
//   background: ${({ theme }) => theme.colors.charcoal};
//   text-align: center;
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     width: 600px;
//     height: 600px;
//     border-radius: 50%;
//     background: radial-gradient(circle, rgba(200, 88, 122, 0.15) 0%, transparent 70%);
//   }
// `;

// export const Title = styled.h2`
//   font-family: ${({ theme }) => theme.fonts.title};
//   font-size: clamp(36px, 5vw, 64px);
//   color: white;
//   margin-bottom: 20px;
//   position: relative;

//   em {
//     color: ${({ theme }) => theme.colors.rose};
//     font-style: italic;
//   }
// `;

// export const Description = styled.p`
//   font-size: 17px;
//   color: rgba(255, 255, 255, 0.65);
//   margin-bottom: 40px;
//   position: relative;
// `;

// export const Button = styled.a`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   background: #25d366;
//   color: white;
//   padding: 18px 38px;
//   border-radius: 999px;
//   font-size: 15px;
//   font-weight: 600;
//   transition: 0.25s;
//   position: relative;

//   &:hover {
//     background: #1db954;
//     transform: translateY(-2px);
//   }
// `;

import styled from "styled-components";

export const Section = styled.section`
  padding: clamp(64px, 10vw, 100px) 8%;
  background: ${({ theme }) => theme.colors.charcoal};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: min(600px, 90vw);
    height: min(600px, 90vw);
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(200, 88, 122, 0.15) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  @media (max-width: 480px) {
    padding: 56px 20px;
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: clamp(32px, 10vw, 64px);
  line-height: 1.05;
  color: white;
  margin: 0 auto 20px;
  max-width: 900px;
  position: relative;
  z-index: 1;

  em {
    color: ${({ theme }) => theme.colors.rose};
    font-style: italic;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    margin-bottom: 16px;
  }
`;

export const Description = styled.p`
  font-size: clamp(15px, 3.8vw, 17px);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.65);
  margin: 0 auto 40px;
  max-width: 640px;
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    margin-bottom: 32px;
  }
`;

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  background: #25d366;
  color: white;
  padding: 0 38px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition:
    transform 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;
  position: relative;
  z-index: 1;

  &:hover {
    background: #1db954;
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(37, 211, 102, 0.25);
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 320px;
    padding: 0 24px;
    font-size: 14px;
  }
`;
