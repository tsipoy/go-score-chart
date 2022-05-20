import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
  },
  {
    value: 10,
    label: '10 years',
  },
  {
    value: 20,
    label: '20 years',
  },
  {
    value: 30,
    label: '30 years',
  },
  {
    value: 40,
    label: '40 years',
  },
];


function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

const CustomSlider = styled(Slider)({
  '& .MuiSlider-track': {
    background: "linear-gradient(rgba(47, 109, 198, 1), rgba(0, 219, 144, 1))",
    border: 'none',
  },
  "& .MuiSlider-rail": {
    color: "rgba(224, 237, 249, 1)",
    fontStyle: "normal",
    fontHeight: 500,
    fontSize: "20px",
    lineHeight: "27px",
    // color: "#2E6CC6",
  },
  '& .MuiSlider-thumb': {
    background: "linear-gradient(rgba(47, 109, 198, 1), rgba(0, 219, 144, 1))",
    width: "39.07px",
    height: "39.07px",
    backgroundColor: '#ffffff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: '#F7FBFF',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "27px",
    color: "#2E6CC6",
    padding: 0,
    width: 50,
    height: 50,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
  '& .MuiSlider-markLabel' : {
    paddingBlockStart: "30px",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "27px",
    color: "#2E6CC6",
  }
});


const YearSlider = ({ onChange }) => {

  return (
    <Container>
      <Box sx={{ width: 584}}>
        <CustomSlider
          aria-label="Restricted values"
          defaultValue={10}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          step={null}
          max={40}
          valueLabelDisplay="auto"
          marks={marks}
          onChange={(e) => onChange(e.target.value)}
          style={{ height: "13px" }}
        />
      </Box>
    </Container>
  );
}

const Container = styled.div`
    margin-block-start: 56px;
    margin-block-end: 56px;
    @media (min-width: 1000px) {
        padding-inline-start: 72px;
    }
`;


export default YearSlider;