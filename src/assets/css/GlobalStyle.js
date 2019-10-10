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
        font-family: 'Oswald', sans-serif;
    }
 
    /* menu */
    #menu {
        background: #333;
        padding: 10px 0;
        font-family: 'Montserrat', sans-serif;
        z-index: 999;
            a {
                color: #fff !important;
                font-weight: 500;
                margin-left: 10px;
            }
            a:hover {
                opacity: 0.6; 
            }
    }

    #progress-bar {
        height: 4px;
        background: linear-gradient(to right,#008ebc 25%,#0000FF 25%,#8cb916 25%,#88b61a 25%,#fbc300 57.2%,#f9bf00 71.5%,#bb3235 71.5%);
        width: 0;
        position: absolute;
        bottom: 0;
    }
    
    .navbar-toggler{
        margin-right: 10px;
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
            :hover{
                color: #fff;
                opacity: 0.8;
            }
    }

    .cont{
        padding: 150px 0;
    }

    .titulo-secao{
        text-align: center;
        text-transform: uppercase;
        font-size: 30px;
        font-weight: 900;
        margin: 5px 0;
        color: #333;
    }

    .info-secao{
        font-size: 20px;
        text-align: center;
        margin: 0;
    }

    #programacao{
        background: url(http://www.dairyvision.com.br/assets/img/schedule-bg-style.png) #fff bottom no-repeat;
        background-size: auto auto, cover;

        .aba-programacao{
            display: block;
            padding: 20px;
                h1{
                    font-size: 20px; 
                    text-align: center;
                    text-transform: uppercase;
                    color: #fff;
                    margin-bottom: 0;
                }
                h2{
                    font-size: 15px;
                    color: #ddd;
                    text-align: center;
                }
                a:hover{
                    text-decoration: none;
                }
        }

        .aba-primeiro-dia{
            background: #333;
        }

        .aba-segundo-dia{
            background: #487eb0;
        }
        .titulo-palestra{ 
            font-size: 2rem;
        }
        .autor-palestra{ 
            font-size: 1.5rem;
        }

        .menu-programacao{ 
            margin: 2rem 0 0 0;
        }

        .primeiro-dia{
            background: #008ebc;
         }

         .primeiro-dia, .segundo-dia{
            padding: 2rem 0 2rem 0;
            text-transform: uppercase;
            font-weight: bold; text-align: center;
        }
    
        .segundo-dia{
            background: #333;
        }

        #conteudo-programacao span{
            color: #5352ed;
        }

        #abas-superiores{
            display: flex;
                h1 {
                    padding: 0;
                    font-size: 1rem;
                    margin-bottom:0;
                }
                h2 {
                    font-size: 15px;
                    color: #ddd
                }
                span {
                    color: #fff;
                }
                span:hover{
                    cursor: pointer;
                    color: #fff;
                    display: block;
                }
        }

        .conteudo-programacao{
            padding: 1rem; 
            background: rgba(97, 100, 101, 0.14);
            margin: 0 0 1.5rem 0;
        }

        .item-palestra{ 
            background: #fff;
            padding: 1rem;
            margin: 1rem 0 1rem 0;
            border-radius: 5px;
        }

        .foto-autor{
            max-width: 50%;
        }

        .horario-palestra{
            text-align: left;
            color: #f00;
            font-size: 25px;
            font-weight: bold;
        }

        .titulo-palestra{ 
            font-size: 25px;
            text-align: justify
        }

        .autor-palestra{
            font-size: 1.3rem; 
            text-align: justify
        }

        .item-palestra span{
            color: #008ebc;
        }

        .prog-dia-inativo{
            display: none;
        }

        .palestra-sem-palestrante{
            margin-left: 1rem
        }

        .titulo-painel{ 
            padding: 10px;
            color: red;
            margin: 0;
            text-align: center;
            text-transform: uppercase;
         }
    }

    #rodape { 
        font-family: 'Montserrat', sans-serif;
        display: flex;
        align-items: center;
        width: 100%;
        position: relative;
        bottom: 0;
        background: url(http://www.agripoint.com.br/imagens/footer-bg.png) bottom no-repeat #333;
        background-size: cover;
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
        text-shadow: 2px 2px 2px #000;
        margin: 0;
    }

    .caption-slider {
        font-family: 'Oswald', sans-serif;
         font-size: 25px;
         margin: 0;
         line-height: 20px;
    }

    #sobre{
        background: #008ebc;
        p{
            text-align: justify;
            color: #fff;
            font-size: 18px;
        }
        .titulo-secao{
            color: #fff;
        }
    } 

    /* mobile */
    @media only screen and (min-width: 230px) and (max-width: 767px){
        #abas-superiores{ flex-direction: column; }
        .titulo-slider{ font-size: 30px !important }
        .caption-slider{ font-size: 25px !important }
        .cont{ padding: 10px 0; }
        .horario-palestra{ text-align: center; font-size: 1.5rem; margin: 1rem 0 1rem 0;   }
        .info-secao{ font-size: 100%;}
        .titulo-palestra{ font-size: 1.5rem;}
        .autor-palestra{ font-size: 1rem;}
        .item-palestra{ flex-direction: column;}
        .foto-autor{ max-width: 100% !important;}
        .palestra-sem-palestrante{ margin-left: 16px; }
    }

    .btn-circle {
        width: 45px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        padding: 0;
        border-radius: 50%;
            i {
                position: relative;
                top: -1px;
                color: #fff;
            }
    }

    .btn-circle-sm {
    width: 35px;
    height: 35px;
    line-height: 35px;
    font-size: 0.9rem;
    }

    .btn-circle-lg {
    width: 55px;
    height: 55px;
    line-height: 55px;
    font-size: 1.1rem;
    }

    .btn-circle-xl {
    width: 70px;
    height: 70px;
    line-height: 70px;
    font-size: 1.3rem;
    }

    .btn-toolbar{
        justify-content: center;
    }

    #palestrantes{ 
        background: #fff;

        .card { 
            background-color: transparent !important;
            border: 0;
         }

         .palestrante-item {
            margin-bottom: 1rem;
         }

        .foto-palestrante {
            border-radius: 1rem;
        }

        .palestrante-info { 
            position: absolute;
            opacity: 0;
            transition: visibility 0s 0.1s, opacity 0.1s linear;
            height: 100%;
            width: 100%;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
            display: flex;
         }

         .palestrante-info p{
            text-align: center;
            margin: 0;
            color: #fff;
            font-size: 1rem;
            text-transform: uppercase;
            font-weight: bold;
        }

        .palestrante-info:hover{
            background: rgba(51, 51, 51, 0.70);
            padding: 10px;
            max-width: 100%;
            height: 100%;
            opacity: 1;
            transition: opacity 0.1s linear;
            cursor: pointer;
            border-radius: 1rem;
        }

        .palestrante-item {
            margin: 1rem 0 1rem 0;
         }
    }

    .nome-palestrante {
        font-size: 22px;
        margin: 15px 0 0 0;
        text-transform: uppercase;
        font-weight: 700;
    }

    .descricao-palestrante {
        font-size: 18px;
        margin: 5px 0 5px 0;
        color: #40739e
    }

    .curriculo-palestrante {
        text-align: justify;
        font-size: 1.2rem;
        color: #545b62;
    }

    .foto-palestrante-modal{ 
        max-width: 30%;
        border-radius: 50%;
    }

    .modal-header { 
        border: none !important;
        padding-bottom: 0 !important
    }

    .modal-body {
        padding: 0 2rem 0 2rem !important;
    }

    .modal-footer {
        border: none !important;
    }

    
    #patrocinadores {
        
        .patrocinadores{
             padding: 0 0 2rem 0;
        }
        .center {
            display: flex;
            justify-content: center;
        }
        
        .cota { 
            text-transform: uppercase;
            font-size: 2rem;
            text-align: center;
            font-weight: 700;
            margin: 50px 0 10px 0;
        }

        .subtitulo-secao { 
            margin-bottom: 4rem;
            text-align: center;
            font-size: 20px;
        }

        .logo-patrocinio{
            padding: 10px;
            display: flex;
            justify-content: center;

            :hover {
            box-shadow: 0 1px 15px 1px rgba(52, 40, 104, 0.38);
            transition: all .1s ease-in-out 0s;
            border-radius: 10px;
        }
       

        .realizadores { 
            width: 95%;
        }

        .patrocinadores-ouro { 
            width: 85%;
        }

        .patrocinadores-prata { 
            width: 75%;
        }

        .patrocinadores-bronze{
            width: 65%;
        }

        .patrocinadores-apoio{
            width: 55%; 
        }
    }
    
    }

    #inscricoes{
        background: url(http://www.dairyvision.com.br/assets/img/schedule-bg-style.png) #fff bottom no-repeat;
        background-size: auto auto,cover;
    }

    .card{
        margin: 2rem 0;
        padding: 50px 30px;
        border-radius: 5px;
        border: 2px solid #ddd;
        align-items: center;
    }
    .lote{ 
        font-size: 2rem;
        text-transform: uppercase;
        margin-bottom: 0;
        font-weight: 700;
        text-align: center;
    }
    .vencimento-lote{ 
        text-align: center;
    }
    
    .evento{ 
        font-size: 1.6rem;
        text-transform: uppercase;
        font-weight: bold;
        text-align: center;
     }

    .btn-tipo-ingresso{ 
        padding: 0.8rem 0;
        margin-right: 0.5rem;
        background: #333;
        color: #fff !important;
        width: 100%;
            :hover{
                background: #007bff;
                transition: 0.5s;
                cursor: pointer;
            }

            :active{
                background: #f1c40f;
            }
     }

    .btn-comprar{ 
        padding: 0.8rem;
        margin-right: 0.5rem;
        width: 100%;
        background: #ff4757;
        color: #fff;
            :hover{ 
                background: #c0392b;
                transition: 0.5s;
            }
    }

    .valor-ingresso{ 
        display: flex;
        justify-content: space-around;
            p{ 
                margin: 0.5rem 0;
                font-size: 1.8rem; font-weight: 700;
            }
            .rs{ 
                font-size: 1rem;
                color: #2196F3;
                font-weight: bolder;
            }
    }

    .tipo-ingresso{ 
        display: flex;
        justify-content: space-between;
    }

    #form-contato{
        .erro-validacao{
            color: #ddd;
            font-size: 15px;
        }
    }
`
export default GlobalStyle;