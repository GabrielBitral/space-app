import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleryContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const FluidSection = styled.section`
    flex-grow: 1;
`;

const ImagesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`;

const Galeria = ({ fotos = [], setTag, aoFotoSelecionada, aoAlternarFavorito }) => {
    return (
        <>
            <Tags setTag={setTag} />
            <GaleryContainer>
                <FluidSection>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagesContainer>
                        {fotos.map(foto =>
                            <Imagem
                                key={foto.id}
                                foto={foto}
                                aoZoomSolicitado={aoFotoSelecionada}
                                aoAlternarFavorito={aoAlternarFavorito}
                            />
                        )}
                    </ImagesContainer>
                </FluidSection>
                <Populares />
            </GaleryContainer>
        </>
    );
};

export default Galeria;