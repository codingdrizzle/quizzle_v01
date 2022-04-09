import styled from 'styled-components'

export const CardHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px 40px;
    box-shadow: 0px 3px 5px 1px rgba(0,0,0,0.1);
    @media only screen and (max-width: 650px){
        flex-direction: column-reverse;
    }
`

export const QuestionNumber = styled.h3`
    font-size: 23px;
    color: rgb(0, 20, 40);
    margin: 0;
    font-weight: 700;
    @media only screen and (max-width: 650px){
        font-size: 18px;
        margin-top: 10px;
    }
`

export const TimeBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 150px;
    heigth: 45px;
    background: #cce5ff;
    border: 1px solid #b8daff;
    border-radius: 5px;
    padding: 10px;
    @media only screen and (max-width: 650px){
        padding: 5px;
    }
    @media only screen and (max-width: 250px){
        width: 120px;
    }
`

export const TimerText = styled.h3`
    font-weight: 500;
    font-size: 17px;
    user-select: none;
    margin: 0;
    @media only screen and (max-width: 650px){
        font-size: 16px;
    }
`

export const TimerSec = styled.h3`
    font-size: 18px;
    font-weight: 600;
    background: #343a40;
    height: 30px;
    width: 45px;
    color: #fff;
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
    border: 1px solid #343a40;
    user-select: none;
    overflow: hidden !important;
    margin: 0;
    @media only screen and (max-width: 650px){
        font-size: 17px
    }
`