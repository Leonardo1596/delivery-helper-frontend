import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 25px;
    box-shadow: 
    0px 2px 1px -1px rgba(0,0,0,0.2),
    0px 1px 1px 0px rgba(0,0,0,0.14),
    0px 1px 3px 0px rgba(0,0,0,0.12);
    padding: 30px;
    font-family: 'Nunito Sans';
    background-color: #fff;
    `;

export const Container = styled.div`
    width: 500px;
    min-height: 280px;

    @media (max-width: 1200px) {
        width: 37vw;
    }

    @media (max-width: 1024px) {
        width: 35vw;
    }

    @media (max-width: 840px) {
        width: 33vw;
    }

    @media (max-width: 768px) {
        width: 36vw;
    }

    @media (max-width: 600px) {
        width: 75vw;
    }
`;

export const Header = styled.h2`
    color: rgba(0, 0, 0, 0.54);
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 50px;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 25px 0;
    /* background-color: red; */
`;

export const Item = styled.li`
    list-style: none;
    /* font-size: 18px; */

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: rgba(0, 0, 0, 0.87);
    padding: 0 20px;
    padding-bottom: 5px;
`;

export const Title = styled.span`
    @media (max-width: 600px) {
        font-size: 14px;
    }
`;

export const Value = styled.span`
    color: rgba(0, 0, 0, 0.54);
    font-size: 18px;

    @media (max-width: 600px) {
        font-size: 16px;
    }
`;