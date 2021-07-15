import { FC } from "react";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  animation: spin 2s linear infinite;
  ${({ theme: { colors } }) => `
        border: 10px solid ${colors.lightDark};
        border-top: 10px solid ${colors.dark};
    `}

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner: FC = () => {
  return <SpinnerContainer />;
};

export default Spinner;
