import styled from "@emotion/styled"

const Table = styled.table`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #858585;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.4);
`
// const TableHead = styled.thead`
//     // width: 200px;
//     height: 40px;
//     padding: 10px 20px;
//     border-style: solid;
//     border-width: 0 1px 1px 0;
//     text-align: center;
//     font-weight: 600;
//     color: #ffffff;
//     border-color: #ffffff;
//     background: #07aecc;
// `
const TableHeadItem = styled.th`
    width: 200px;
    height: 40px;
    padding: 10px 20px;
    border-style: solid;
    border-width: 0 1px 1px 0;
    text-align: center;
    font-weight: 600;
    color: #ffffff;
    border-color: #ffffff;
    background: #07aecc;
    `

const TableRaw = styled.tr`
    background: ghostwhite;

    &:nth-of-type(even) {
        background: lightcyan;
    }
`

const TableDescr = styled.td`
    width: 200px;
    height: 40px;
    padding: 10px 20px;
    border-left: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    // border: 1px solid gray;
    color: #4d4d4df1;
    // background-color: ghostwhite;
    text-align: center;
`



export { Table, TableHeadItem, TableDescr, TableRaw}