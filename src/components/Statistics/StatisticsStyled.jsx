
import { generateDarkColorHex } from "helpers/randomColor";
import styled from "styled-components";

export const Section = styled.section`
    padding: ${(props) => props.theme.spacing(10)} 0;
`;

export const Card = styled.div`
   width: 500px;
   height: auto;
    display: block;
    margin: 0 auto;
    text-align: center;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: ${(props) => props.theme.spacing(1)};
    box-shadow: ${(props) => props.theme.colors.boxShadow};
    overflow: hidden;
`;


export const Title = styled.h2`
font-size: 24px;
font-weight: 600;
line-height: 1.17;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.primaryText};
    padding: ${(props) => props.theme.spacing(6)} 0;
`;

export const StatsList = styled.ul`
   display: flex;
   align-items: center;
   justify-content: center;
width: 100%;
heigth: auto;
`


export const StatsItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: calc(100% / 5);
    padding: ${(props) => props.theme.spacing(5)};
    background-color: ${generateDarkColorHex};
`;

export const Label = styled.span`
font-size: 16px;
font-weight: 400;
line-height: 1.13;
    color: ${(props) => props.theme.colors.white};
    margin-bottom: ${(props) => props.theme.spacing(2)};
`;

export const Value = styled.span`
font-size: 24px;
font-weight: 500;
line-height: 1.17;
    color: ${(props) => props.theme.colors.white};
`;