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

const PrettoSlider = styled(Slider)({
    color: 'rgba(224, 237, 249, 1)',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#ffffff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
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
  });
  

const YearSlider = ({onChange}) => {

    return (
        <Container>
            <Box sx={{ width: 500, height: 13 }}>
                <PrettoSlider
                    aria-label="Restricted values"
                    defaultValue={20}
                    valueLabelFormat={valueLabelFormat}
                    getAriaValueText={valuetext}
                    step={null}
                    max={40}
                    valueLabelDisplay="auto"
                    marks={marks}
                    onChange={(e)=>{
                        console.log('e::::::',e);
                        onChange(e.target.value)}}
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