import { Download, Play, Shuffle, Wallet } from 'lucide-react';
import styled from 'styled-components';
import { images } from '../../data/images';
import { PhoneFrame } from '../phone/PhoneFrame';
import { DrawScreen } from '../phone/screens';
import { Button, TextButton } from '../ui/Button';
import { Container } from '../ui/Container';
import { Lead } from '../ui/Typography';

const Section = styled.section`
  position: relative;
  padding: 48px 0 96px;
  overflow: hidden;
`;

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  align-items: center;
  gap: 40px;
  min-height: 620px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const Copy = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Title = styled.h1`
  font-size: clamp(38px, 5vw, 56px);
  line-height: 1.18;
  font-weight: 500;
  letter-spacing: -1.6px;
`;

/* Thin orange ellipse drawn around the highlighted word, like a hand-drawn circle. */
const Circled = styled.span`
  position: relative;
  display: inline-block;

  &::before {
    content: '';
    position: absolute;
    inset: -6px -10px -16px -18px;
    border: 1.5px solid ${({ theme }) => theme.colors.primary};
    border-right-color: transparent;
    border-top-color: transparent;
    border-radius: 50%;
    transform: rotate(-6deg);
    opacity: 0.85;
    pointer-events: none;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
`;

const Highlights = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 24px;
`;

const Highlight = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 22px 12px 12px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  box-shadow: 0 10px 30px -18px rgba(0, 0, 0, 0.25);

  span {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }

  svg {
    width: 18px;
    height: 18px;
  }

  strong {
    display: block;
    font-weight: 500;
    font-size: 16px;
  }

  small {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 13px;
  }
`;

const Visual = styled.div`
  position: relative;
  height: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 560px;
  }
`;

/* Photo bleeds to the right edge of the viewport, rounded only on the left. */
const Photo = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 110px;
  right: calc((100vw - min(100vw, ${({ theme }) => theme.container})) / -2 - 24px);
  border-radius: ${({ theme }) => theme.radius.lg} 0 0 ${({ theme }) => theme.radius.lg};
  background: url(${images.heroPlayer}) 35% center / cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    left: 80px;
  }
`;

const Phone = styled(PhoneFrame)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;

export function Hero() {
  return (
    <Section id="inicio">
      <Grid>
        <Copy>
          <Title>
            Monte Seu Time,
            <br />
            <Circled>Sorteie</Circled> as Equipes
            <br />E Bora Jogar Hoje
          </Title>
          <Lead style={{ maxWidth: 440 }}>
            Chega de planilha e grupo bagunçado. Organize a pelada, chame a galera, divida as
            equipes de forma justa e deixe o pagamento da quadra em dia, tudo em um só app.
          </Lead>
          <Actions>
            <Button href="#baixar">
              <Download /> Baixar o app
            </Button>
            <TextButton href="#como-funciona">
              <span>
                <Play />
              </span>
              Ver como funciona
            </TextButton>
          </Actions>
          <Highlights>
            <Highlight>
              <span>
                <Shuffle />
              </span>
              <div>
                <strong>Sorteio justo</strong>
                <small>Por nota e posição</small>
              </div>
            </Highlight>
            <Highlight>
              <span>
                <Wallet />
              </span>
              <div>
                <strong>Quadra em dia</strong>
                <small>Pagamentos organizados</small>
              </div>
            </Highlight>
          </Highlights>
        </Copy>
        <Visual>
          <Photo role="img" aria-label="Jogadores disputando a bola em uma quadra de futsal" />
          <Phone width={250}>
            <DrawScreen />
          </Phone>
        </Visual>
      </Grid>
    </Section>
  );
}
