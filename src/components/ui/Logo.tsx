import styled from 'styled-components';

const Wrapper = styled.a<{ $light?: boolean }>`
  font-size: 26px;
  font-weight: 600;
  letter-spacing: -0.5px;
  color: ${({ theme, $light }) => ($light ? theme.colors.white : theme.colors.text)};
  white-space: nowrap;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Wrapper href="#inicio" $light={light} aria-label="Time do Bairro - início">
      Time do <span>Bairro</span>
    </Wrapper>
  );
}
