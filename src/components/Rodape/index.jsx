import { styled } from 'styled-components';

const RodapeEstilizado = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: transparent;
    padding: 22px;
    box-sizing: border-box;
`;

const IconeContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`;

const RodapeTexto = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
`;

function Rodape() {
    return (
        <RodapeEstilizado>
            <IconeContainer>
                <li>
                    <a href="https://github.com/GabrielBitral" target='_blank'>
                        <img src="/img/sociais/gi.png" alt="Logo do GitHub" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/gabriel-fabiano-ch/" target='_blank'>
                        <img src="/img/sociais/li.png" alt="Logo do LinkedIn" />
                    </a>
                </li>
            </IconeContainer>
            <RodapeTexto>Desenvolvido por Gabriel.</RodapeTexto>
        </RodapeEstilizado>
    );
}

export default Rodape;