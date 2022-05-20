import React, {useCallback, useEffect, useState} from 'react';
import styled from "styled-components"
const STEP = 10
function DescreteInput({onChange}) {
    const [count, setCount] = useState(100);

    const handleIncreaseCount = () => {
        setCount(count + STEP)
    }

    const handleDecreaseCount = () => {
        setCount(count - STEP)
       
    }

    useEffect(() => {
        onChange(count)
    }, [count])

    return (
        <div>
            <Container>
                <SpetStyle onClick={handleDecreaseCount}>-</SpetStyle>
                <AmountofMoneyStyle value={`${count}.00 kr`}/>
                <SpetStyle onClick={handleIncreaseCount}>+</SpetStyle>
            </Container>
        </div>
    );
}

const Container = styled.div`
   display: flex;
   flex-direction: row; 
   justify-content: center;
    align-items: center;
`;

const SpetStyle = styled.button`
    max-width: 23px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    width: 16px;
    height: 33px;
    color: #99CDFC;
    padding-inline-end: 26px;
    padding-inline-start: 15px;
    padding-block-end: 35px;
    padding-block-start: 4px;
    border-radius: 50%;
    text-align: center;
    background-color: #F7FBFF;
    border: none;
`;

const AmountofMoneyStyle = styled.input`
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 44px;
    padding-inline-start: 19px;
    padding-inline-end: 19px;
    color: #102463;
    border: none;
    text-align: center;
    max-width: 143px;
`

export default DescreteInput;