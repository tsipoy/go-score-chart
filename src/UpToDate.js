import React from 'react';
import styled from 'styled-components';
import Icon from './assets/f-icon.png';

const coffeePrice = 35;

function UpToDate({monthlyContribution, totalSavings, interestRate}) {
    const numberofCoffeeCups = Math.round(totalSavings / coffeePrice)
    return (
        <Container>
            <InnerContainer>
                <SmallTextStyle>Based on the up-to-date information by Finansportalen's best offer available: </SmallTextStyle>
                <UpToDateContainer>
                    <ImageContainer>
                        <Image src={Icon} />
                    </ImageContainer>
                    <InterestContainer>
                        <InformationStyle>
                            TF Bank Norge NUF
                        </InformationStyle><br />
                        <SpanStyle>{`(interest rate at ${interestRate} %)`}</SpanStyle>
                    </InterestContainer>
                </UpToDateContainer>
            </InnerContainer>
            <InnerContainer>
                <SmallTextStyle>Saving only <b>{`${monthlyContribution} kr`}</b> every months makes a difference : </SmallTextStyle>
                <SavingEvryMonthStyle>
                    <InformationStyle>
                        {`${totalSavings} kr`}
                    </InformationStyle><br />
                    <SpanStyle> {`${numberofCoffeeCups} or  cup of coffee :)`}</SpanStyle>
                </SavingEvryMonthStyle>
            </InnerContainer>
        </Container>
    );
}

const Container = styled.div`
    font-style: normal;
    // @media (min-width: 1000px) {
        font-style: normal;
        justify-content: space-evenly;
        flex-direction: row;
        display: flex;
    // }
`
const SmallTextStyle = styled.div`
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    text-align: center;
    max-width: 229px;
    margin: auto;
    color: #102463;
    text-align: center;
`;
const InformationStyle = styled.p`
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    color: #2E6CC6;
    margin-block-end: -23px;
    margin-block-start: 41px;
    padding-inline-end: 45px;
    padding-inline-start: 3px;
`

const SpanStyle = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 33px;
    font-weight: 400;
    color: #2E6CC6;
`

const SavingEvryMonthStyle = styled.div``;

const InnerContainer = styled.div`
    max-width: 338px;
`;
    const ImageContainer = styled.div``;
    const UpToDateContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    // @media (min-width: 1000px) {
        border-right: 1px solid black;
        height: 106px;
        border-color: rgba(165, 165, 169, 1);
    // }
`;
const InterestContainer = styled.div``;
const Image = styled.img`
    padding-block-start: 46px;
`;

export default UpToDate