import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    `;

export const TableHeader = styled.th`
    height: 40px;
    padding: 15px 0;
    text-align: center;
    color: rgba(0, 0, 0, 0.80);
    font-size: 14px;
    background-color: #f2f2f2;
`;

export const TableCell = styled.td`
    text-align: center;
    height: 40px;
    border-bottom: 1px solid #ccc;
    padding: 20px 0;
    color: rgba(0, 0, 0, 0.87);
    font-size: 14px;

    #update-icon {
        color: #3D8FE7;
        cursor: pointer;
    }

    #delete-icon {
        color: #F44336;
        cursor: pointer;
    }
`;