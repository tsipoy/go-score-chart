import React from 'react';
import styled from 'styled-components';

const SavingTip = () => {
    return (
        <SavingTipContainerStyle>
            <SavingTipStyle>Savings tip & analytics</SavingTipStyle>
            <SavingTipTextStyle>We've calculated that your minimum essential expenditure is <b>15,039.76</b> kr per month. We urge to have at least 6 months savings backup to overcome most of the unexpected challenges in life. So, it would be benefiticial to have at least <b>90,238.54</b> kr in savings. It could be savings accounts, shares/trading accounts or fond investments.</SavingTipTextStyle>
        </SavingTipContainerStyle>
    );
}

const SavingTipContainerStyle = styled.div`
    color: #102463;
    font-style: normal;
`

const SavingTipStyle = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 49px;
    padding-block-end: 56px;
    text-align: start;
    `;
    
    const SavingTipTextStyle = styled.p`
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    text-align: start;
    padding-block-end: 70px;
    @media (min-width: 1000px) {
        max-width: 718px;
    }
`

export default SavingTip;