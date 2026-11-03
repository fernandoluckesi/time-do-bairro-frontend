import styled from 'styled-components';

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 28px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 10px 24px -10px rgba(255, 90, 0, 0.7);
  transition:
    transform 0.2s ease,
    background 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primarySoft};
    outline-offset: 3px;
  }
`;

export const TextButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  span {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    color: ${({ theme }) => theme.colors.primary};
    transition: transform 0.2s ease;
  }

  svg {
    width: 14px;
    height: 14px;
    fill: currentColor;
  }

  &:hover span {
    transform: scale(1.1);
  }
`;
