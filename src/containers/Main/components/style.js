import styled from 'styled-components'
import { Typography, CardContent, MenuItem } from '../../../components'

export const LabelStyled = styled(Typography)`
  font-weight: 500;
  font-size: 1.5rem;
`;

export const ValueStyled = styled(Typography)`
  font-weight: 400;
  font-size: 2.5rem;
`;

export const CardContentStyled = styled(CardContent)`
  border-left: 8px solid ${({color}) => color || '#5d78ff'};
`;

export const CardPanelContentStyled = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  padding: 25px;

  @media(max-width: 385px){
      flex-direction: column;
      gap: 1rem;
  }
`;

export const Menuitem = styled(MenuItem)`
 display: block;
`;

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 160px;

  img {
      margin-left: 10px;
  }
`;

export const PanelControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;