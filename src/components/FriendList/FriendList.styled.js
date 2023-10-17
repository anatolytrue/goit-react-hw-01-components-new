import styled from "@emotion/styled"

const List = styled.ul`
    padding: 0;
    list-style-type: none;
`

const Item = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 360px;
    height: 130px;
    margin: 7px;
    border: 1px solid #858585;
    border-radius: 3px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.4);
    background-color: ghostwhite;
}
`

// const setColor = ({isOnline}) => {
//     (isOnline ? "green" : "red")
// }

const Status = styled.span`
    margin: 15px;
    font-size: 55px;
    color: ${({isOnline}) => isOnline ? "green" : "red"}}
`

const Avatar = styled.img`
    width: 100px;
    height: 100px;
    background-color: #858585;
    border-radius: 10px;

`
const Name = styled.p`
    margin-left: 18px;
    font-size: 28px;
    font-weight: 500;
`
export {Item, Status, Avatar, Name, List}