import './App.css';
import styled from "styled-components"
import SavingTip from './SavingTip';
import Chart from './Chart';
import YearSlider from './YearSlider';
import UpToDate from './UpToDate';
import GreenCheckMark from "./assets/vector.png"
import ChartPie from './ChartPie';
import AddBank from './AddBank';
import { HighChartWrapper } from "./Chart"
import { useState } from 'react';
import DescreteInput from './DescreteInput';

const initialSaving = 17.10;
const interestRate = 2
const yearsAhead = [...Array(10).keys()].map((number) => number * 10 + 10)



function App() {

  const [savingYearsSelected, setSavingYearsSelected] = useState(10);
  const [startDeposite, setStartDeposite] = useState(initialSaving);
  // const [interestRate, setInterestRate] = useState();
  const [monthlyContribution, setMonthlyContribution] = useState(100);
  console.log('yearSelected::::::', savingYearsSelected);
  console.log('monthlyContribution::::::', monthlyContribution);

  const savingsForYearsAhead = yearsAhead.reduce((acc, currVal) => {

    let princ = initialSaving; // start deposit
    let add = monthlyContribution; // monthly deposit (need plus it every year)
    let rate = interestRate / 100; // interest rate divided to create decimal
    let months = (currVal * 12); //10 years of monthly contributions
    
    for (let i = 1; i <= months; i++) {
      princ += add;
      princ += princ * (rate / 12);
      // console.log(princ);
    }
    console.log(princ.toFixed(2)); //69636.12
    acc[currVal] = princ
    return acc
  }, {})

  const totalSavings = savingsForYearsAhead[savingYearsSelected];

  console.log('savingsForYearsAhead::::::',savingsForYearsAhead);

  const xAxisCategories = [2021, 2031, 2041, 2051, 2061, 2071, 2081, 2091, 2101, 2111, 2121, 2131, 2151]
  const seriesData = [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  
  return (
    <Container>
      <HeaderContainer>
        <HeaderStyle>Savings</HeaderStyle>
        <HrStyle />
        <ConsiderStyle>
          <ConsiderStyleImage src={GreenCheckMark} />
          <ConsiderStyleText>Consider to work on sending more money to the savings account(-s).</ConsiderStyleText>
        </ConsiderStyle>
        <CurrentSavingStyle>You current total savings are: <TotalAmountStyle>{`${initialSaving} kr`}</TotalAmountStyle></CurrentSavingStyle>
      </HeaderContainer>
      <ContentContainer>
        <CommonContainer>
          <ChartPie />
          <HighChartWrapper xAxisCategories={xAxisCategories} seriesData={seriesData} />
        </CommonContainer>
        <CommonContainer>
          <SavingTip />
          <div>
            <DescreteInput onChange={setMonthlyContribution} />
            <YearSlider onChange={setSavingYearsSelected} />
          </div>
        </CommonContainer>
        <CommonContainer>
          <AddBank />
          <UpToDate monthlyContribution={monthlyContribution} totalSavings={totalSavings} interestRate={interestRate}/>
        </CommonContainer>
      </ContentContainer>
    </Container>
  );
}


const Container = styled.div`
  text-align: center;
  max-width: 600px;
  margin: auto;
  @media (min-width: 1000px) {
    max-width: 1200px;
  }
`

const HeaderContainer = styled.div`
  text-align: center;
`

const HeaderStyle = styled.header`
  font-weight: 700;
  font-size: 64px;
  line-height: 87.42px;
  color: #102463;
`

const HrStyle = styled.hr`
  border-color: rgba(46, 108, 198, 0.5)rgba(0, 219, 144, 0.5);
`;
const ConsiderStyle = styled.div`
  max-width: 688px;
  margin: auto;
  display: flex;
  align-items: center;
  margin-block-start: 45px;
  margin-block-end: 49px
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 120.6%;
  color: #102463;
  background-color: #FCFEFF;
  box-sizing: border-box;
  border: 0.3px solid #102463;
  border-radius: 6px;
  padding-block-start: 16px;
  padding-block-end: 16px;
  padding-inline-end: 15px;
  border: 0.3px solid rgba(16, 36, 99, 1);
`

const CurrentSavingStyle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 44px;
  color: #102463;
  padding-block-end: 94px;
`
const ConsiderStyleImage = styled.img`
  padding: 18px;
  border-inline-start-style: solid;
  border-inline-start-color: #00DB90;
  margin-inline-start: 10px;
`;

const ConsiderStyleText = styled.p`
  text-align: start;
`;

const TotalAmountStyle = styled.b`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 55px;
  color: #2E6CC6;
`

const CommonContainer = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const ContentContainer = styled.div``;



export default App;
