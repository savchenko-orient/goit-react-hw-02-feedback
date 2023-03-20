import styled from "@emotion/styled";

export const List = styled.ul`
padding: 10px;
  max-width: 100%;
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
`;
export const ListItem = styled.li`
display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 5px;
  width: 200px;
  padding: 5px;
  border: 1px solid burlywood;
  border-radius: 5px;
`;
export const IsOffline = styled.span`
content: '';
  border-radius: 50%;
  background-color: red;
  width: 10px;
  height: 10px;
`;
export const IsOnline = styled.span`
content: '';
  border-radius: 50%;
  background-color: green;
  width: 10px;
  height: 10px;
`;
export const Avatar = styled.img`
width:48px;
`;
export const Name = styled.p`

`;
