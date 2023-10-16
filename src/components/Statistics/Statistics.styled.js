import styled from "@emotion/styled"



const StatisticsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ghostwhite;
    border: 1px solid #9e9e9e;
    border-radius: 4px;
    background-color: white;
`
const Title = styled.h2`
    text-align: center;
`
const StatList = styled.ul`
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
`
const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 60px;
    border-top: 1px solid #9e9e9e;
    background-color: ${props => props.bgColor};
    :nth-of-type(2n) {
            border-right: 1px solid #9e9e9e;
            border-left: 1px solid #9e9e9e;
        }
    ;
    
`

const Label = styled.span`
    margin-bottom: 7px;
    font-size: 12px;
    color: #000
`
const Percentage = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: #000;
`
export {StatisticsSection, Title ,StatList ,Item ,Label ,Percentage}