import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { images } from '../../data/images';
import { Container } from '../ui/Container';
import { Lead, SectionTitle } from '../ui/Typography';

// Fictional testimonials (placeholders).
const testimonials = [
  {
    name: 'Rafael Souza',
    role: 'Organizador da pelada de quinta',
    text: 'Antes eu passava a semana cobrando no grupo. Agora vejo quem pagou a quadra num toque e o sorteio acabou com a discussão.',
    photo: images.nightGame,
  },
  {
    name: 'Marina Lopes',
    role: 'Capitã do Várzea Unida',
    text: 'O ranking virou a resenha do time. Todo mundo abre o app depois do jogo pra ver quem subiu na artilharia.',
    photo: images.orangeVest,
  },
  {
    name: 'Diego Alves',
    role: 'Goleiro do Inter de Meião',
    text: 'Finalmente os goleiros são divididos entre as equipes. Os jogos ficaram muito mais equilibrados e divertidos.',
    photo: images.footOnBall,
  },
  {
    name: 'Camila Rocha',
    role: 'Joga no Bigode Grosso FC',
    text: 'Fui adicionada pelo admin antes de baixar o app e, quando criei a conta, todos os meus gols já estavam lá.',
    photo: images.ballKick,
  },
];

const Section = styled.section`
  padding: 0 0 130px;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 560px;
  margin: 0 auto 56px;
`;

const Track = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding: 8px 4px 24px;
  margin-right: calc((100vw - min(100vw, ${({ theme }) => theme.container})) / -2 - 24px);

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.article`
  flex: 0 0 min(450px, 86vw);
  scroll-snap-align: start;
  display: grid;
  grid-template-columns: 1fr 176px;
  gap: 20px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 16px 40px -30px rgba(0, 0, 0, 0.35);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h3 {
    font-size: 17px;
    font-weight: 500;
    margin-top: 6px;
  }

  small {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  p {
    margin-top: 8px;
    font-size: 13px;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > svg {
    color: #f4d6c6;
    fill: #f4d6c6;
  }
`;

const Stars = styled.div`
  display: flex;
  gap: 3px;
  color: ${({ theme }) => theme.colors.yellow};

  svg {
    width: 15px;
    height: 15px;
    fill: currentColor;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  min-height: 150px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.sm};
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
`;

const Arrow = styled.button<{ $primary?: boolean }>`
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: ${({ theme, $primary }) => ($primary ? theme.colors.black : theme.colors.beige)};
  color: ${({ theme, $primary }) => ($primary ? theme.colors.white : theme.colors.textMuted)};
  transition: transform 0.2s ease;

  &:hover:not(:disabled) {
    transform: scale(1.06);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    track.scrollBy({ left: direction * (card.offsetWidth + 24) });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft <= 4);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4);
  };

  return (
    <Section id="depoimentos">
      <Container>
        <Header>
          <SectionTitle $center>O Que a Galera da Pelada Está Dizendo</SectionTitle>
          <Lead $center style={{ maxWidth: 420 }}>
            Organizadores, goleiros e artilheiros de fim de semana já trocaram a planilha pelo
            app. Veja o que eles contam sobre a experiência.
          </Lead>
        </Header>
        <Track ref={trackRef} onScroll={onScroll}>
          {testimonials.map((t) => (
            <Card key={t.name}>
              <Content>
                <TopRow>
                  <Quote size={26} />
                  <Stars aria-label="5 de 5 estrelas">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} />
                    ))}
                  </Stars>
                </TopRow>
                <h3>{t.name}</h3>
                <small>{t.role}</small>
                <p>{t.text}</p>
              </Content>
              <Photo src={t.photo} alt="" loading="lazy" />
            </Card>
          ))}
        </Track>
        <Controls>
          <Arrow aria-label="Depoimento anterior" onClick={() => scrollBy(-1)} disabled={atStart}>
            <ChevronLeft />
          </Arrow>
          <Arrow $primary aria-label="Próximo depoimento" onClick={() => scrollBy(1)} disabled={atEnd}>
            <ChevronRight />
          </Arrow>
        </Controls>
      </Container>
    </Section>
  );
}
