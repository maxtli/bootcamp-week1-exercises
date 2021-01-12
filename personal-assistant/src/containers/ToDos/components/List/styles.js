import styled from 'styled-components'

export const EdImgButton = styled.button`
    outline:none;
    border: none;
    background-color: transparent;
    width: 20px;
    height: 20px;
    img {
        width: 20px;
        height: 20px;
    }
`

export const GTable = styled.table`
    background-color: #FFF;
    border:3px solid var(--shade3);
    border-radius:10px;
    border-spacing: 0;
    margin:10px auto;
    position:relative;
    overflow: hidden;
    & td {
        padding: 2px
    }
`
