import styled from '@emotion/styled'


const ProfileCard = styled.div`
        margin-left: auto;
        margin-right: auto;
        max-width: 300px;
        border: 1px solid #9e9e9e;
        border-radius: 4px;
        background-color: white;
    `
const Description = styled.div`
        font-size: 15px;
        text-align: center;
        display: block;
        border-bottom: 1px solid #9e9e9e;
        `

const Avatar = styled.img`
    margin: 35px auto 0px auto;
    background-color: #9e9e9e;
    border-radius: 50%;
    max-width: 120px;
    `
const Name = styled.p`
    // text-align: center
    font-size: 18px;
    font-weight: 600;
    color: #212121;
    `
const Tag = styled.p`
        // text-align: center
    margin: 1px auto 10px auto;
    font-size: 14px;
    color: #535353;
    `
const Location = styled.p`
    margin: 10px auto 20px auto;
    font-size: 14px;
    color: #535353;
    `
const Stats = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    text-align: center;
    li{
        display: flex;
        flex-direction: column;
        padding: 15px 0px;
        width: 82px;
        font-size: 12px;
        color: #9e9e9e;
        :nth-of-type(2n) {
            border-right: 1px solid #9e9e9e;
            border-left: 1px solid #9e9e9e;
    };
}
    `
const Label = styled.span`
        text-align: center
    `
const Quantity = styled.p`
    margin-top: 4px;
    margin-bottom: 0px;
    font-size: 15px;
    font-weight: 700;
    color: #212121;
    `

export {ProfileCard, Avatar, Description, Name, Tag, Location, Stats, Label, Quantity}