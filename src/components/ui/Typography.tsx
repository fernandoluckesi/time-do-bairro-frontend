import styled, { css } from 'styled-components';

export const SectionTitle = styled.h2<{ $center?: boolean; $light?: boolean }>`
  font-size: clamp(30px, 4vw, 42px);
  line-height: 1.22;
  font-weight: 500;
  letter-spacing: -1px;
  color: ${({ theme, $light }) => ($light ? theme.colors.white : theme.colors.text)};
  ${({ $center }) =>
    $center &&
    css`
      text-align: center;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    br {
      display: none;
    }
  }
`;

export const Lead = styled.p<{ $center?: boolean; $light?: boolean }>`
  font-size: 16px;
  line-height: 1.65;
  color: ${({ theme, $light }) => ($light ? 'rgba(255,255,255,0.8)' : theme.colors.textMuted)};
  ${({ $center }) =>
    $center &&
    css`
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    `}
`;
