import type { ReactNode } from 'react';
import styled from 'styled-components';

// Every size inside the phone is in `em`, so the whole mockup scales with `width`.
const BASE_WIDTH_EM = 26;

const Frame = styled.div<{ $width: number }>`
  font-size: ${({ $width }) => $width / BASE_WIDTH_EM}px;
  width: ${BASE_WIDTH_EM}em;
  aspect-ratio: 9 / 19.2;
  padding: 0.55em;
  border-radius: 4.2em;
  background: #0b0b0b;
  box-shadow:
    0 0 0 0.12em #2a2a2a inset,
    0 3em 5em -2em rgba(0, 0, 0, 0.35);
  position: relative;
  flex-shrink: 0;
`;

const Screen = styled.div`
  position: relative;
  height: 100%;
  border-radius: 3.7em;
  overflow: hidden;
  background: #faf8f6;
  display: flex;
  flex-direction: column;
`;

const StatusBar = styled.div`
  height: 4.4em;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.4em 0 2.8em;
  font-size: 1em;
  font-weight: 600;
  color: #111;
`;

const Island = styled.div`
  position: absolute;
  top: 1.1em;
  left: 50%;
  transform: translateX(-50%);
  width: 8.4em;
  height: 2.4em;
  border-radius: 2em;
  background: #0b0b0b;
`;

const Indicators = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4em;

  i {
    display: block;
    background: #111;
    border-radius: 0.15em;
  }
`;

const HomeBar = styled.div`
  position: absolute;
  bottom: 0.7em;
  left: 50%;
  transform: translateX(-50%);
  width: 9em;
  height: 0.4em;
  border-radius: 1em;
  background: #111;
`;

export function PhoneFrame({
  width = 260,
  children,
  className,
}: {
  width?: number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Frame $width={width} className={className} role="img" aria-label="Tela ilustrativa do app">
      <Screen>
        <Island />
        <StatusBar>
          <span>9:41</span>
          <Indicators aria-hidden="true">
            <i style={{ width: '0.3em', height: '0.5em' }} />
            <i style={{ width: '0.3em', height: '0.7em' }} />
            <i style={{ width: '0.3em', height: '0.9em' }} />
            <i style={{ width: '2em', height: '0.95em', borderRadius: '0.3em' }} />
          </Indicators>
        </StatusBar>
        {children}
        <HomeBar />
      </Screen>
    </Frame>
  );
}
