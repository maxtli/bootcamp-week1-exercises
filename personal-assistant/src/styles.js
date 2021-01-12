import styled, { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
body {
    background-color: lightgoldenrodyellow;
    font-family: Nunito;
    font-size: 14px;
    padding: none;
    height: 100%;
    margin:0;
    text-align: center
}
:root {
    --offwhite: #F0F0F0;
    --red1: #FCEDE8;
    --red2: #FA919C;
    --red3: #CC0F37;
    --yellow1: #FAFAD2;
    --yellow2: #FBEE93;
    --yellow3: #EDB400;
    --green1: #E6FDDA;
    --green2: #ACF188;
    --green3: #4EB617;
    --blue1: #DEFCFE;
    --blue2: #6FEBF3;
    --blue3: #17ACB6;
    --purple1: #f2e3fa;
    --purple2: #d27dee; 
    --purple3: #bb43e3; 
    --success: #00B85C;
    --warning: var(--purple3);
    --fail: #FF5733;
    --disabledgrey: #AAAAAA;
    --menugrey: #676449;
    --shade1: var(--green1);
    --shade2: var(--green2);
    --shade3: var(--green3);
}
`

export const TitleStrip = styled.div`
    background-color: var(--yellow3);
    box-sizing:border-box;
    color: var(--yellow1);
    font-size:25px;
    font-weight:700;
    margin:100px 0 0;
    padding:10px 0 10px 0;
    position:relative;
    text-align:center;
    text-shadow:2px 2px 10px #D2691E;
    width:100%;
`

const gtext = css`
    border:1px solid #000;
    border-radius:5px;
    box-sizing:border-box;
    font-family:Nunito;
    font-size:14px;
    margin:0;
    padding:3px 6px;

    &:focus {
        box-shadow: 0 0 7px 3px var(--shade3);
    }
`

export const Input = styled.input`${gtext}`
export const Select = styled.select`${gtext}`

export const Button = styled.button`
    background-color: var(--shade3, var(--blue3));
    border:2px solid #FFF;
    border-radius:5px;
    color:#FFF;
    font-family:Overlock;
    font-size:18px;
    padding:5px 20px;
    text-align:left;
`

export const ErrLabel = styled.a`
    color: red;
    font-size: 14px;
    font-weight: 700;
    font-family: Nunito;
`
