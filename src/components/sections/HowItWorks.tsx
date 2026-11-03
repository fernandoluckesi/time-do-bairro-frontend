import { Shuffle, Trophy, UserPlus, Users } from 'lucide-react';
import type { ComponentType } from 'react';
import styled from 'styled-components';
import { PhoneFrame } from '../phone/PhoneFrame';
import { HomeScreen } from '../phone/screens';
import { Container } from '../ui/Container';
import { Lead, SectionTitle } from '../ui/Typography';

type Step = {
  title: string;
  text: string;
  icon: ComponentType;
  color: string;
  area: 'a' | 'b' | 'c' | 'd';
};

// Clockwise, starting top-left (same order as the reference).
const steps: Step[] = [
  {
    area: 'a',
    title: 'Crie Seu Time em Minutos',
    text: 'Dê um nome, um @ e cadastre a quadra onde vocês jogam. Pronto, o time está no ar.',
    icon: Users,
    color: '#FFC527',
  },
  {
    area: 'b',
    title: 'Chame a Galera Pro Jogo',
    text: 'Convide os amigos pelo app ou adicione quem ainda não baixou. Quando entrarem, o histórico vai junto.',
    icon: UserPlus,
    color: '#FF5A00',
  },
  {
    area: 'c',
    title: 'Sorteie Equipes Equilibradas',
    text: 'Considere notas e posições, divida os goleiros e acabe com a briga na hora de tirar o time.',
    icon: Shuffle,
    color: '#22B07D',
  },
  {
    area: 'd',
    title: 'Ranking & Quadra em Dia',
    text: 'Registre gols e dribles, veja quem é o artilheiro e controle quem já pagou a quadra.',
    icon: Trophy,
    color: '#7CC520',
  },
];

const Section = styled.section`
  padding: 130px 0 120px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 560px;
  margin: 0 auto 64px;
`;

const Layout = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas:
    'a phone b'
    'd phone c';
  gap: 40px 64px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    grid-template-areas: 'phone' 'a' 'b' 'c' 'd';
  }
`;

const PhoneSlot = styled.div`
  grid-area: phone;
  justify-self: center;
  position: relative;
  z-index: 1;
`;

const StepCard = styled.article<{ $color: string; $area: string }>`
  grid-area: ${({ $area }) => $area};
  position: relative;
  z-index: 1;
  max-width: 270px;
  justify-self: ${({ $area }) => ($area === 'a' || $area === 'd' ? 'start' : 'end')};
  align-self: ${({ $area }) => ($area === 'a' || $area === 'b' ? 'start' : 'end')};
  padding: 28px 24px;
  text-align: center;
  background: ${({ theme }) => theme.colors.white};
  border: 1.5px solid ${({ $color }) => $color};
  border-radius: ${({ theme }) => theme.radius.md};

  span {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    margin: 0 auto 18px;
    border-radius: 10px;
    background: ${({ $color }) => $color};
    color: ${({ theme }) => theme.colors.white};
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.35;
    margin-bottom: 12px;
  }

  p {
    font-size: 14px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-self: stretch;
    max-width: none;
  }
`;

/* Faded circular arrows connecting the four cards around the phone. */
const Arrows = styled.svg`
  position: absolute;
  inset: -40px 0;
  width: 100%;
  height: calc(100% + 80px);
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export function HowItWorks() {
  return (
    <Section id="como-funciona">
      <Container>
        <Header>
          <SectionTitle $center>Como o Time do Bairro Organiza a Sua Pelada</SectionTitle>
          <Lead $center style={{ maxWidth: 420 }}>
            Do convite ao apito final: o app conecta organizadores, jogadores e quadras para
            montar, sortear e acertar as contas do jogo sem dor de cabeça.
          </Lead>
        </Header>
        <Layout>
          <Arrows viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              {steps.map((s) => (
                <marker
                  key={s.area}
                  id={`arrow-${s.area}`}
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="5"
                  markerHeight="5"
                  orient="auto-start-reverse"
                >
                  <path d="M0 0 L10 5 L0 10 z" fill={s.color} opacity="0.35" />
                </marker>
              ))}
            </defs>
            <path d="M300 70 Q500 -30 700 70" stroke="#FF5A00" {...arrowProps('b')} />
            <path d="M960 260 Q1010 380 960 500" stroke="#22B07D" {...arrowProps('c')} />
            <path d="M700 650 Q500 740 300 650" stroke="#7CC520" {...arrowProps('d')} />
            <path d="M40 500 Q-10 380 40 260" stroke="#FFC527" {...arrowProps('a')} />
          </Arrows>
          <PhoneSlot>
            <PhoneFrame width={250}>
              <HomeScreen />
            </PhoneFrame>
          </PhoneSlot>
          {steps.map(({ area, title, text, icon: Icon, color }) => (
            <StepCard key={area} $area={area} $color={color}>
              <span>
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </StepCard>
          ))}
        </Layout>
      </Container>
    </Section>
  );
}

function arrowProps(area: Step['area']) {
  return {
    fill: 'none',
    strokeWidth: 3,
    strokeOpacity: 0.25,
    strokeLinecap: 'round' as const,
    vectorEffect: 'non-scaling-stroke',
    markerEnd: `url(#arrow-${area})`,
  };
}
