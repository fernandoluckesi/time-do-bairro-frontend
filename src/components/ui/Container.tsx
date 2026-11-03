import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.container};
  margin: 0 auto;
  padding: 0 24px;
`;
