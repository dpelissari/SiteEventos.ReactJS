import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyle = createGlobalStyle`

/* fonts  */
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
  
    html {
            scroll-behavior: smooth;
    }

    body {
        background: #ddd;
        overflow-x: hidden;
    }
 
    /* menu */
    #menu {
        background: #40739e;
        padding: 10px;
        font-family: 'Montserrat', sans-serif;
        z-index: 999;
            a {
                color: #fff !important;
                font-weight: 500;
            }
            a:hover {
                opacity: 0.6; 
            }
    }

    #menu:after {
        background: linear-gradient(to right,#008ebc 25%,#0000FF 25%,#8cb916 25%,#88b61a 25%,#fbc300 57.2%,#f9bf00 71.5%,#bb3235 71.5%);
        position: absolute;
        content: '';
        height: 4px;
        right: 0;
        left: 0;
        bottom: 0;
    }

    .navbar-light .navbar-toggler {
         border-color: #fff;
         background: #fff;
    }

   @media (min-width: 992px){
        .navbar-expand-lg {
            flex-flow: column; 
        }
    }

   .btn-padrao {
        padding: 10px;
        background: #40739e;
        border: none;
        color: #fff;
    }

    #rodape { 
        font-family: 'Montserrat', sans-serif;
        display: flex;
        align-items: center;
        width: 100%;
        position: relative;
        bottom: 0;
        background: #333;
        color: #fff;
        padding: 40px 0;
        
            h2 {
                text-align: center;
                font-size: 20px;
            }
            p { 
                text-align: justify;
                font-size: 14px;
                margin: 0;
            }

         .form-control {
            border-radius: 0;
            padding: 1.3rem .75rem;
                input:focus {
                    outline: 0;
                }
         }

        ul {
            padding-left: 0px;
            display: flex;
            justify-content: center;
                li {
                    font-size: 50px;
                    margin-left: 15px;
                    list-style: none;
                }
         }

         .icons-redes-sociais a {
            color: #fff; 
        }
    }

    #rodape:after {
        background: linear-gradient(to right,#008ebc 25%,#0000FF 25%,#8cb916 25%,#88b61a 25%,#fbc300 57.2%,#f9bf00 71.5%,#bb3235 71.5%);
        position: absolute;
        content: '';
        height: 4px;
        right: 0;
        left: 0;
        top: 0;
    }

    /* slider  */
    .carousel-caption { 
        flex-direction: column;
    }

    .titulo-slider { 
        text-transform: uppercase;
        font-family: 'Oswald', sans-serif;
        font-size: 50px;
        font-weight: bold;
        margin: 0;
    }

    .caption-slider {
         font-size: 35px;
         margin: 0;
         line-height: 20px;
    }

    /* mobile */
    @media only screen and (min-width: 230px) and (max-width: 767px){
        .titulo-slider{ font-size: 30px !important }
        .caption-slider{ font-size: 25px !important }
    }

`
export default GlobalStyle;