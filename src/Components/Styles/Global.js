import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;290;300;400&family=Trispace:wght@300;400&display=swap'); */

*{
    box-sizing: border-box ;

} 
body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192,100%,9%);
    font-family: 'Inconsolata', monospace;
    font-size: 1.15em ;
    margin:0 ;

}

`

export default GlobalStyles
