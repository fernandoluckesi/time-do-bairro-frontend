import { ChevronLeft, Share2 } from 'lucide-react';
import styled from 'styled-components';

// Building blocks shared by the mocked app screens. All sizes in `em` (see PhoneFrame).

export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  padding: 0.4em 1.6em 2.6em;
  overflow: hidden;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.35em;
  font-weight: 600;
  color: #111;
`;

const RoundIcon = styled.span`
  display: grid;
  place-items: center;
  width: 2.2em;
  height: 2.2em;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0.2em 0.8em rgba(0, 0, 0, 0.08);

  svg {
    width: 1em;
    height: 1em;
  }
`;

export function ScreenHeader({ title }: { title: string }) {
  return (
    <HeaderRow>
      <RoundIcon>
        <ChevronLeft />
      </RoundIcon>
      {title}
      <RoundIcon>
        <Share2 />
      </RoundIcon>
    </HeaderRow>
  );
}

const avatarColors = ['#FF5A00', '#22B07D', '#FFC527', '#4F7DF3', '#D6457B', '#7CC520'];

export const Avatar = styled.span<{ $index?: number; $size?: number }>`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: ${({ $size = 2.8 }) => $size}em;
  height: ${({ $size = 2.8 }) => $size}em;
  border-radius: 50%;
  background: ${({ $index = 0 }) => avatarColors[$index % avatarColors.length]};
  color: #fff;
  font-size: 1em;
  font-weight: 600;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 1.4em;
  padding: 1.1em 1.2em;
  box-shadow: 0 0.3em 1.2em rgba(0, 0, 0, 0.05);
`;

export const Muted = styled.span`
  color: #8a817c;
  font-size: 0.9em;
`;

export const Strong = styled.span`
  font-weight: 600;
  color: #111;
  font-size: 1.1em;
`;

export const Pill = styled.span<{ $tone?: 'orange' | 'green' | 'gray' | 'dark' }>`
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
  padding: 0.35em 0.8em;
  border-radius: 1em;
  font-size: 0.85em;
  font-weight: 600;
  white-space: nowrap;
  ${({ $tone = 'gray' }) =>
    ({
      orange: 'background:#FFF1EA;color:#FF5A00;',
      green: 'background:#E7F7EF;color:#169462;',
      gray: 'background:#F1EEEB;color:#5F5753;',
      dark: 'background:#111;color:#fff;',
    })[$tone]}
`;

export const PrimaryButton = styled.div`
  margin-top: auto;
  padding: 1.1em;
  border-radius: 2em;
  background: #ff5a00;
  color: #fff;
  font-weight: 600;
  font-size: 1.1em;
  text-align: center;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8em;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  min-width: 0;
`;
