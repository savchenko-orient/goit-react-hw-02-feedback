import styled from "@emotion/styled";

const tdStyle = `width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;`;

export const Table = styled.table`
    width: 100%;
`;
export const Tr = styled.tr`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const Td = styled.td`${tdStyle}`;
export const Th = styled.th`${tdStyle}`;