import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import bgSobre from '../img/bg-sobre.png';
import bgPalestrantes from '../img/bg-palestrantes.png';
import bgProgramacao from '../img/schedule-bg-style.png';
import bgRodape from '../img/footer-bg.png';

const GlobalStyle = createGlobalStyle`

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

    .react-multiple-carousel__arrow{
        z-index: 998 !important;
    }

    .hidden{
        display: none;
    }


    #menu {
        background: #333;
        font-family: 'Montserrat', sans-serif;
        z-index: 999;
        padding: 2px 0;
            a {
                color: #fff !important;
                font-weight: 500;
                margin-left: 10px;
            }
            a:hover {
                opacity: 0.6; 
            }

            .navbar-nav{
                align-items: center;
                padding: 5px; 
            }
            .logo-menu-mobile{
                display: none;
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
    .navbar{ 
        padding:0;
    }

   .btn-padrao {
        border-radius: 0;
        padding: 10px;
        background: #40739e;
        border: none;
        color: #fff;
            :hover{
                color: #fff;
                opacity: 0.8;
            }
    }

    .btn-patrocinio{
        color: #fff !important;
        text-transform: uppercase;
        margin: 80px 0;
        padding: 20px;
        :hover{
            cursor: pointer;
        }
    }
    
    .btn-inativo{
        cursor: not-allowed !important;
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
        background: url(${bgProgramacao}) #fff bottom no-repeat;
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

        #abas-superiores, #abas-inferiores{
            display: flex;
                h1 {
                    padding: 0;
                    font-size: 1rem;
                    margin-bottom:0;
                }
                h2 {
                    font-size: 15px;
                    color: #fff
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
        }

        .item-palestra{ 
            background: #fff;
            padding: 1rem;
            margin: 10px 0;
            border-radius: 5px;
        }

        .foto-autor{
            max-width: 70%;
            border-radius: 50%;
        }

        .horario-palestra{
            text-align: left;
            color: #f00;
            font-size: 25px;
            font-weight: bold;
        }

        .titulo-palestra{ 
            font-size: 25px;
            text-align: justify;
            font-weight: 600;
            margin-bottom: 5px;
        }

        .autor-palestra{
            font-size: 1.3rem; 
            text-align: justify;
            font-size: 20px;
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
        background: url(${bgRodape}) #333 bottom no-repeat;
        background-size: cover;
        color: #fff;
        padding: 50px 0;
        
            h2 {
                text-align: center;
                font-size: 20px;
            }
            p { 
                text-align: justify;
                font-size: 14px;
                margin: 0;
            }
            a{
                color: #fff;
            }

         .form-control {
            border: none;
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

    .carousel-caption { 
        flex-direction: column;
    }

    .titulo-slider, .caption-slider{
        font-family: 'Oswald', sans-serif;
        text-transform: uppercase;
    }

    .titulo-slider { 
        font-size: 70px;
        font-weight: bold;
        text-shadow: 2px 2px 2px #000;
        margin: 0;
    }

    .caption-slider {
         font-size: 35px;
         margin: 0;
         line-height: 35px;
         border: 3px solid;
         padding: 7px;
    }

    .local-evento, .data-evento{
        font-size: 23px;
        color: #fff;
    }

    .local-evento{
        margin: 10px 0 5px 0;
    }

    .data-evento{
        text-align: left;
    }

    .fa-map-marker, .fa-calendar{
        color: #fcc600;
    }


    #sobre{
        background-image: url(${bgSobre});
        background-size: cover;
            .titulo-secao{
                color: #fff;
                margin-bottom: 10px;
                font-size: 28px;
                text-shadow: 0 1px #333;
            }
            .p-40{
                padding: 0 40px;
            }
            p{
                text-align: justify;
                color: #fff;
                font-size: 20px;
                line-height: 25px;
            }
        }
        
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

    .cv-autor {
            margin: 10px;
            font-size: 18px;
    }

    #form-newsletter{
        padding: 40px 0;
        background: #333;
        img{
            margin: 20px 0;
        }
        h2{
            color: #fff;
            text-align: center;
            text-transform: uppercase;
            margin: 20px 20px;
            font-size: 22px;
        }
        .form-control {
            border: none;
            border-radius: 0;
            padding: 1.7rem .75rem;
            
        }

        .btn-padrao{
            padding: 15px;
            text-transform: uppercase;
        }

        .erro-validacao{
            color: #ddd;
        }
    }    

    #palestrantes{ 
        background: url(${bgPalestrantes} ) #333 top left no-repeat fixed;

        .titulo-secao{
            color: #fff;
        }

        .card { 
            background-color: transparent !important;
            border: 0;
            padding: 0;
            margin: 0;
         }

         .palestrante-item {
            margin-bottom: 1rem;
         }

        .foto-palestrante {
            border-radius: 1rem;
        }

        .nome-palestrante{
           color: #fff;
           font-size: 18px;
        }

        .cargo-palestrante{
            color: #008ebc;
            font-size: 15px;
        }

        .palestrante-info { 
            position: absolute;
            top: 0;
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
            text-transform: uppercase;
            font-weight: bold;
        }

        .palestrante-info:hover{
            background: rgba(51, 51, 51, 0.8);
            max-width: 100%;
            height: 100%;
            opacity: 1;
            transition: opacity 0.1s linear;
            cursor: pointer;
            border-radius: 1rem;
            padding: 1rem;
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
        background: #fff;

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
            margin: 50px 0;
        }

        .subtitulo-secao { 
            margin-bottom: 1rem;
            text-align: center;
            font-size: 20px;
        }

        .logo-patrocinio{
            padding: 10px;
            display: flex;
            justify-content: center;
            border-radius: 5px;

            :hover {
                box-shadow: 0 1px 15px 1px rgba(52, 40, 104, 0.38);
                transition: all .1s ease-in-out 0s;
                border-radius: 10px;
            }

        .realizadores { 
            width: 95%;
        }

       
    }
    .patrocinadores-ouro{ 
            max-width: 85% !important;
        }

    .patrocinadores-prata { 
        max-width: 75%;
    }

    .patrocinadores-bronze{
        max-width: 65%;
    }

    .patrocinadores-apoio{
        max-width: 55%;
    }
        
    }

    #inscricoes{
        background: #008ebc;

        .titulo-secao{
            color: #fff;
            text-shadow: 1px 1px 2px #333;
        }

        .info-secao{
            color: #fff;
        }

        .valorSegundoLote{ 
            color: #333;
            font-size: 30px;
        }

        .form-control{
            text-transform: uppercase;
            text-align-last:center;
            font-size: 17px;
            margin: 15px 0;
            background: #fed330;
            border-radius: 0;
            height: 50px;
            color: #333;
        }

        .desconto{
            font-size: 18px;
            font-weight: bold;
        }

        .itens-inclusos{
            font-size: 17px;
            text-align: justify;
            line-height: 22px;
            font-family: 'Montserrat',sans-serif;
            margin-bottom: 10px;
            padding: 0 5px;
        }

        .lblSelecao{
            text-align: center;
            margin: 10px 0;
            font-size: 18px;
        }
    }

    .card{
        background: #fff;
        margin: 2rem 0;
        padding: 20px 10px;
        border-radius: 10px;
        align-items: center;
    }
    .lote{ 
        font-size: 35px;
        text-transform: uppercase;
        margin: 10px 0 0 0;
        font-weight: 700;
        text-align: center;
        color: #333;
    }
    .vencimento-lote{ 
        text-align: center;
        color: #333;
        margin: 0 0 20px 0;
            font-size: 18px;
    }
    
    .evento{ 
        font-size: 20px;
        text-transform: uppercase;
        font-weight: bold;
        text-align: center;
        color: #333;
     }

    .btn-tipo-ingresso{ 
        padding: 0.8rem 0;
        margin-right: 0.5rem;
        background: #fed330;
        color: #333;
        width: 100%;
        border-radius: 0;
            :hover{
                background: #333;
                color: #fff !important;
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
        margin: 20px 0;
            p{ 
                margin: 0.5rem 0;
                font-size: 1.8rem;
                font-weight: 700;
                color: #333;
            }
            .rs{ 
                font-size: 20px;
                color: #2196F3;
                font-weight: bolder;
            }
            span{
                font-size: 32px;
                color: #333;
            }
    }

    .tipo-ingresso{ 
        display: flex;
        justify-content: space-between;
    }
    
    .react-multi-carousel-list {
        border-top: 4px solid #333;
    }

    #form-contato{
        .erro-validacao{
            color: #ddd;
            font-size: 15px;
        }
    }

    #politica-cancelamento{
        background: #fff;
        p{
            font-size: 22px;
            text-align: justify;
         }
         .fa{
             font-size: 50px; color: #333;
         }
         a{
             color: #333;
         }
    }

    /* mobile */
    @media only screen and (min-width: 230px) and (max-width: 990px){
        #abas-superiores, #abas-inferiores{ flex-direction: column;}
        #rodape p{ text-align:center; }
        #menu img{ margin: 10px; }
        #form-newsletter h2 { font-size: 20px;}
        #sobre{ 
            background: #158ebd;
            .titulo-secao {
                font-size: 23px;
                margin: 20px 0;
            }
            p{
                font-size: 20px;
            }
            
        }
        html { scroll-behavior:initial; } 
        #menu .navbar-nav{ align-items: flex-start; padding: 0; }
        #menu .logo-menu{ display: none; }
        #menu .logo-menu-mobile{ display: flex; justify-content: flex-start; }
        #menu img{ max-width: 70%; }
        .local-evento, .data-evento{ font-size:15px; }
        .titulo-slider{ font-size:25px !important; margin-top:50px; }
        .titulo-painel{ font-size:20px !important; }
        .caption-slider{ font-size:20px !important; line-height:20px; }
        .cont{ padding:110px 0 30px 0; }
        .horario-palestra{ text-align:center !important; font-size:1.5rem; margin: 1rem 0 1rem 0;   }
        .info-secao{ font-size: 100%;}
        .titulo-palestra{ text-align:center !important; font-size: 20px !important;}
        .autor-palestra{ text-align:center !important; font-size: 18px !important;}
        .item-palestra{ flex-direction:column;}
        .foto-autor{ max-width:100% !important;}
        .palestra-sem-palestrante{ margin-left:16px; }
        .horario-palestra{ margin:1rem 0 0rem 0 !important;}
        .caption-slider{ display:none; }
        .cv-autor{ font-size: 15px; }
        .modal-body { padding: 0 !important;} 
        .nome-palestrante{ font-size: 15px; }
        .descricao-palestrante{ font-size: 15px; }
        .itens-inclusos{ margin-bottom: 0;}
        .valor-ingresso{ margin: 0;}
    }
`
export default GlobalStyle;