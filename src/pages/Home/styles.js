import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    
    @media (max-width: 1200px) {
        padding: 0 60px;
    }

    @media (max-width: 768px) {
        padding: 0 20px;
    }

    @media (max-width: 500px) {
        padding: 0 15px;
    }
    `;

export const CardContainer = styled.div`
    width: 1157px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1200px) {
        width: 100%;
    }
    `;

export const GridCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px 10px;
    width: 100%;
    margin-bottom: 80px;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 600px) {
        margin-bottom: 50px;
    }
`;

export const MainContainer = styled.div`
    width: 1157px;
    /* display: flex;
    align-items: start;
    justify-content: space-between; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 30px;

    @media (max-width: 1200px) {
        width: 100%;
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
`;