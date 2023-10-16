import styled from "@emotion/styled"

export const Container = styled.div`
    padding: 40px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #010101;
    background-color: azure;

    {:not(:last-child) {
        margin-bottom: 20px;}}
`
export const SectionHomework = styled.div`
    padding: 10px;
`