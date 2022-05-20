import React from 'react';
import styled from 'styled-components';

function AddBank() {
    return (
        <ButtonWrapper>
            <ButtonStyle>Add your bank to compare the plans</ButtonStyle>
        </ButtonWrapper>
    );
}

const ButtonWrapper = styled.div`
  text-align: center;
  margin-block-end: 40px;
  margin-block-start: 100px;
  @media (min-width: 1000px) {
    text-align: start; 
}
`
const ButtonStyle = styled.button`
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    width: 417.31px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #2E6CC6;
    background-color: #FCFEFF;
    border: 1px solid #2E6CC6;
    border-radius: 6px;
`

export default AddBank;