import React from "react";
import styled from "styled-components";
import { FiLoader } from "react-icons/fi";
const Loader = () => {
  return (
    <Load>
      <div className="load">
        <FiLoader />
      </div>
    </Load>
  );
};
const Load = styled.section`
  .load {
    font-size: 10rem;
    text-align: center;
  }
`;
export default Loader;
