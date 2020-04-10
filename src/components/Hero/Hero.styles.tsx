import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 5vh;
  height: 95vh;
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    margin: 0 auto;
    font-size: 1rem;
    font-family: Raleway;
    text-decoration: none;
    color: black;
  }

  &:hover {
    a {
      color: lightgrey;
      transition: 0.3s;
    }
  }
  }
`;
