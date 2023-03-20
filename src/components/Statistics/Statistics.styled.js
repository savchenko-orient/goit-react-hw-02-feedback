import styled from "@emotion/styled";

export const Title = styled.h2`
text-align: center;
  color: #099481;
`

export const Section = styled.section`
  background-color: #ecd6d6;
`;

export const List = styled.ul`
    width: 100%;
  display: flex;
`;

export const ListItem = styled.li`
width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-top: 1px solid #000;
  &:not(:last-child) {
    border-right: 1px solid #000;
  }
`;

export const Span = styled.span`
text-align: center;
    align-items: center;
    justify-content: center;
`;