import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

:focus{
    outline:0;
    
}

body{
    background:${(props) => props.theme["gray-900"]};
    -webkit-font-smoothing: antialiased;
}

body,input,button,a{
    color: ${(props) => props.theme["gray-100"]};
    font-family: "Roboto",sans-serif;
    font-weight:400;
    font-size:1rem;
}

.mainContainer{
    margin: auto;
    max-width:1440px;
    display: flex;
    flex-direction: column;
    padding: 2rem;
}

`;
