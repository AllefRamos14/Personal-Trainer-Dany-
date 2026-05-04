// import { Link } from "react-router-dom";
// import styled from "styled-components";

// export const Section = styled.section`
//   min-height: calc(100vh - 72px);
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   align-items: center;
//   padding: 0 8%;
//   gap: 5%;
//   position: relative;
//   overflow: hidden;
//   background: ${({ theme }) => theme.colors.cream};

//   &::before {
//     content: "";
//     position: absolute;
//     right: -10%;
//     top: -20%;
//     width: 60%;
//     height: 140%;
//     background: linear-gradient(135deg, #f5e6ec 0%, #f8f0e3 100%);
//     border-radius: 50% 0 0 50%;
//     z-index: 0;
//   }

//   @media (max-width: 900px) {
//     grid-template-columns: 1fr;
//     text-align: center;
//     padding: 60px 6% 40px;

//     &::before {
//       display: none;
//     }
//   }
// `;

// export const Content = styled.div`
//   position: relative;
//   z-index: 1;
// `;

// export const Badge = styled.div`
//   display: inline-flex;
//   align-items: center;
//   gap: 8px;
//   background: ${({ theme }) => theme.colors.roseLight};
//   color: ${({ theme }) => theme.colors.rose};
//   font-size: 12px;
//   font-weight: 600;
//   letter-spacing: 1.5px;
//   text-transform: uppercase;
//   padding: 8px 18px;
//   border-radius: 999px;
//   margin-top: 18px;
//   margin-bottom: 28px;

//   &::before {
//     content: "";
//     width: 7px;
//     height: 7px;
//     border-radius: 50%;
//     background: ${({ theme }) => theme.colors.rose};
//     animation: pulse 1.8s infinite;
//   }

//   @keyframes pulse {
//     0% {
//       box-shadow: 0 0 0 0 rgba(255, 0, 100, 0.7);
//     }
//     70% {
//       box-shadow: 0 0 0 8px rgba(255, 0, 100, 0);
//     }
//     100% {
//       box-shadow: 0 0 0 0 rgba(255, 0, 100, 0);
//     }
//   }
// `;

// export const Title = styled.h1`
//   font-family: ${({ theme }) => theme.fonts.title};
//   font-size: clamp(42px, 5vw, 72px);
//   line-height: 1.1;
//   color: ${({ theme }) => theme.colors.charcoal};
//   margin-bottom: 20px;

//   em {
//     font-style: italic;
//     color: ${({ theme }) => theme.colors.rose};
//   }
// `;

// export const Description = styled.p`
//   font-size: 17px;
//   line-height: 1.75;
//   color: ${({ theme }) => theme.colors.warmGray};
//   max-width: 480px;
//   margin-bottom: 40px;

//   @media (max-width: 900px) {
//     max-width: 100%;
//   }
// `;

// export const Actions = styled.div`
//   display: flex;
//   gap: 16px;
//   align-items: center;
//   flex-wrap: wrap;

//   @media (max-width: 900px) {
//     justify-content: center;
//   }
// `;

// export const PrimaryButton = styled(Link)`
//   background: ${({ theme }) => theme.colors.rose};
//   color: white;
//   padding: 16px 36px;
//   border-radius: 999px;
//   font-size: 15px;
//   font-weight: 600;
//   transition: 0.25s;
//   letter-spacing: 0.3px;

//   &:hover {
//     background: ${({ theme }) => theme.colors.roseDark};
//     transform: translateY(-2px);
//   }
// `;

// export const OutlineButton = styled(Link)`
//   background: transparent;
//   color: ${({ theme }) => theme.colors.rose};
//   padding: 16px 36px;
//   border-radius: 999px;
//   font-size: 15px;
//   font-weight: 600;
//   border: 2px solid ${({ theme }) => theme.colors.rose};
//   transition: 0.25s;

//   &:hover {
//     background: ${({ theme }) => theme.colors.roseLight};
//     transform: translateY(-2px);
//   }
// `;

// export const Stats = styled.div`
//   display: flex;
//   gap: 40px;
//   margin-top: 45px;
//   margin-bottom: 18px;
//   padding-top: 40px;
//   border-top: 1px solid ${({ theme }) => theme.colors.border};

//   @media (max-width: 900px) {
//     justify-content: center;
//     flex-wrap: wrap;
//   }
// `;

// export const StatItem = styled.div``;

// export const StatNumber = styled.div`
//   font-family: ${({ theme }) => theme.fonts.title};
//   font-size: 36px;
//   color: ${({ theme }) => theme.colors.rose};
//   line-height: 1;
//   margin-bottom: 4px;
// `;

// export const StatLabel = styled.div`
//   font-size: 13px;
//   color: ${({ theme }) => theme.colors.warmGray};
//   font-weight: 500;
// `;

// export const Visual = styled.div`
//   position: relative;
//   z-index: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const Avatar = styled.div`

//   display: flex;
//   justify-content: center;

//   @media (max-width: 900px) {
//     width: 280px;
//     height: 350px;
//     margin: 0 auto;
//   }
// `;
// export const AvatarImg = styled.img`
//   width: 420px;
//   height: 600px;
//   object-fit: cover;
//    border-radius: 60% 40% 40% 60% / 50% 50% 50% 50%;
//   border: 3px solid #fff;
// `;

// export const Tag = styled.div`
//   position: absolute;
//   background: white;
//   border-radius: 16px;
//   padding: 14px 20px;
//   box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
//   font-size: 13px;
//   font-weight: 600;

//   &.top-left {
//     top: 10%;
//     left: -10%;
//   }

//   &.bottom-right {
//     bottom: 15%;
//     right: -10%;
//   }

//   span {
//     display: block;
//   }

//   strong {
//     font-family: ${({ theme }) => theme.fonts.title};
//     font-size: 22px;
//     color: ${({ theme }) => theme.colors.rose};
//   }

//   small {
//     color: ${({ theme }) => theme.colors.warmGray};
//     font-weight: 400;
//     font-size: 12px;
//   }

//   @media (max-width: 900px) {
//     display: none;
//   }
// `;

import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  min-height: calc(100vh - 72px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: clamp(56px, 8vw, 90px) 8%;
  gap: 5%;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.cream};

  &::before {
    content: "";
    position: absolute;
    right: -10%;
    top: -20%;
    width: 60%;
    height: 140%;
    background: linear-gradient(135deg, #f5e6ec 0%, #f8f0e3 100%);
    border-radius: 50% 0 0 50%;
    z-index: 0;
  }

  @media (max-width: 900px) {
    min-height: auto;
    grid-template-columns: 1fr;
    text-align: center;
    padding: 56px 6% 44px;

    &::before {
      display: none;
    }
  }

  @media (max-width: 480px) {
    padding: 44px 20px 36px;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.roseLight};
  color: ${({ theme }) => theme.colors.rose};
  font-size: clamp(10px, 2.8vw, 12px);
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  padding: 8px 18px;
  border-radius: 999px;
  margin-bottom: 24px;

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.rose};
    animation: pulse 1.8s infinite;
    flex-shrink: 0;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 0, 100, 0.7);
    }

    70% {
      box-shadow: 0 0 0 8px rgba(255, 0, 100, 0);
    }

    100% {
      box-shadow: 0 0 0 0 rgba(255, 0, 100, 0);
    }
  }

  @media (max-width: 480px) {
    padding: 8px 14px;
    margin-bottom: 20px;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: clamp(36px, 11vw, 72px);
  line-height: 1.05;
  color: ${({ theme }) => theme.colors.charcoal};
  margin-bottom: 20px;

  em {
    font-style: italic;
    color: ${({ theme }) => theme.colors.rose};
  }
`;

export const Description = styled.p`
  font-size: clamp(15px, 3.8vw, 17px);
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.warmGray};
  max-width: 480px;
  margin-bottom: 36px;

  @media (max-width: 900px) {
    max-width: 680px;
    margin-inline: auto;
  }

  @media (max-width: 480px) {
    margin-bottom: 28px;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  background: ${({ theme }) => theme.colors.rose};
  color: white;
  padding: 0 36px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  transition:
    background 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
  letter-spacing: 0.3px;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.roseDark};
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(200, 88, 122, 0.22);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0 24px;
  }
`;

export const OutlineButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  background: transparent;
  color: ${({ theme }) => theme.colors.rose};
  padding: 0 36px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  border: 2px solid ${({ theme }) => theme.colors.rose};
  transition:
    background 0.25s ease,
    transform 0.25s ease;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.roseLight};
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0 24px;
  }
`;

export const Stats = styled.div`
  display: flex;
  gap: clamp(20px, 5vw, 40px);
  margin-top: 40px;
  margin-bottom: 18px;
  padding-top: 36px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 900px) {
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 32px;
    padding-top: 28px;
  }
`;

export const StatItem = styled.div``;

export const StatNumber = styled.div`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: clamp(30px, 8vw, 36px);
  color: ${({ theme }) => theme.colors.rose};
  line-height: 1;
  margin-bottom: 6px;
`;

export const StatLabel = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.warmGray};
  font-weight: 500;
`;

export const Visual = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    order: -1;
  }
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  max-width: 420px;
  width: 100%;

  @media (max-width: 900px) {
    max-width: 320px;
    margin: 0 auto 24px;
  }

  @media (max-width: 480px) {
    max-width: 260px;
  }
`;

export const AvatarImg = styled.img`
  width: 100%;
  aspect-ratio: 7 / 10;
  object-fit: cover;
  border-radius: 60% 40% 40% 60% / 50% 50% 50% 50%;
  border: 3px solid #fff;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.12);
`;

export const Tag = styled.div`
  position: absolute;
  background: white;
  border-radius: 16px;
  padding: 14px 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  font-size: 13px;
  font-weight: 600;

  &.top-left {
    top: 10%;
    left: -10%;
  }

  &.bottom-right {
    bottom: 15%;
    right: -10%;
  }

  span {
    display: block;
  }

  strong {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 22px;
    color: ${({ theme }) => theme.colors.rose};
  }

  small {
    color: ${({ theme }) => theme.colors.warmGray};
    font-weight: 400;
    font-size: 12px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
