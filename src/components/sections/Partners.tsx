import { Flame, Goal, Medal, Shield, Star, Trophy, Volleyball, Zap } from 'lucide-react';
import styled, { keyframes } from 'styled-components';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/Typography';

// Fictional arenas/leagues used as placeholder "logos".
const partners = [
  { name: 'Arena Gol', icon: Goal },
  { name: 'Society 10', icon: Shield },
  { name: 'Liga Várzea', icon: Trophy },
  { name: 'Bola Cheia', icon: Volleyball },
  { name: 'Futsal Club', icon: Zap },
  { name: 'Copa do Bairro', icon: Medal },
  { name: 'Quadra do Zé', icon: Star },
  { name: 'Racha FC', icon: Flame },
];

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const Section = styled.section`
  padding: 40px 0 110px;
`;

const Viewport = styled.div`
  margin-top: 56px;
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
`;

const Track = styled.div`
  display: flex;
  gap: 72px;
  width: max-content;
  animation: ${scroll} 30s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: #b9b3ae;
  white-space: nowrap;

  svg {
    width: 30px;
    height: 30px;
    stroke-width: 2.4;
  }
`;

export function Partners() {
  // Rendered twice so the marquee loops seamlessly.
  const items = [...partners, ...partners];
  return (
    <Section aria-label="Quem já joga com o Time do Bairro">
      <Container>
        <SectionTitle $center style={{ fontSize: 'clamp(24px, 3vw, 30px)' }}>
          Mais de 1.000 peladas já organizadas
        </SectionTitle>
      </Container>
      <Viewport>
        <Track>
          {items.map(({ name, icon: Icon }, i) => (
            <Brand key={i} aria-hidden={i >= partners.length}>
              <Icon /> {name}
            </Brand>
          ))}
        </Track>
      </Viewport>
    </Section>
  );
}
