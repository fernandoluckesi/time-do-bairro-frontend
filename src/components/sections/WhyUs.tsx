import { ArrowRight, Shuffle, Trophy, Wallet } from 'lucide-react';
import type { ComponentType } from 'react';
import styled from 'styled-components';
import { images } from '../../data/images';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Lead, SectionTitle } from '../ui/Typography';

const features: { title: string; text: string; icon: ComponentType; color: string; tint: string }[] = [
  {
    title: 'Sorteio Rápido e Equilibrado',
    text: 'Equipes divididas por nota e posição em segundos. Não gostou? Sorteie de novo com um toque.',
    icon: Shuffle,
    color: '#22B07D',
    tint: '#EEF8F3',
  },
  {
    title: 'Rankings de Gols e Dribles',
    text: 'Cada jogo alimenta as estatísticas: artilharia, dribles e os destaques da temporada da galera.',
    icon: Trophy,
    color: '#FFC527',
    tint: '#F8F6F2',
  },
  {
    title: 'Pagamento da Quadra Sem Dor',
    text: 'Valor dividido por jogador, filtro de pagos e pendentes e histórico mês a mês da quadra.',
    icon: Wallet,
    color: '#FF5A00',
    tint: '#FDF3F0',
  },
];

const Section = styled.section`
  padding: 0 0 130px;
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
`;

const Photo = styled.img`
  width: 100%;
  aspect-ratio: 450 / 312;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.lg};
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled.article<{ $color: string; $tint: string }>`
  padding: 32px 28px;
  text-align: center;
  background: ${({ $tint }) => $tint};
  border-radius: ${({ theme }) => theme.radius.md};
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-4px);
  }

  span {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    margin: 0 auto 18px;
    border-radius: 10px;
    background: ${({ $color }) => $color};
    color: ${({ theme }) => theme.colors.white};
  }

  svg {
    width: 20px;
    height: 20px;
  }

  h3 {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 14px;
  }

  p {
    font-size: 14px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export function WhyUs() {
  return (
    <Section id="vantagens">
      <Container>
        <Top>
          <Copy>
            <SectionTitle>Por Que a Galera Escolhe o Time do Bairro Toda Semana</SectionTitle>
            <Lead style={{ maxWidth: 420 }}>
              Do grupo de amigos da firma ao racha de sábado de manhã: o app cuida da parte chata
              para vocês só se preocuparem em jogar. Times, sorteio, ranking e quadra paga, tudo
              no mesmo lugar e sempre atualizado.
            </Lead>
            <Button href="#baixar">
              <ArrowRight /> Saiba mais
            </Button>
          </Copy>
          <Photo
            src={images.friendsPlaying}
            alt="Amigos jogando futebol em uma quadra"
            loading="lazy"
          />
        </Top>
        <Cards>
          {features.map(({ title, text, icon: Icon, color, tint }) => (
            <Feature key={title} $color={color} $tint={tint}>
              <span>
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Feature>
          ))}
        </Cards>
      </Container>
    </Section>
  );
}
