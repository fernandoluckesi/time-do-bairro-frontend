import { ArrowRight } from 'lucide-react';
import styled from 'styled-components';
import { PhoneFrame } from '../phone/PhoneFrame';
import { TeamScreen } from '../phone/screens';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Lead, SectionTitle } from '../ui/Typography';

const Card = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 80px;
  padding: 64px 72px 0;
  background: ${({ theme }) => theme.colors.beige};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 48px;
    padding: 48px 28px 0;
  }
`;

/* Phone is cut by the bottom edge of the card, like in the reference. */
const PhoneSlot = styled.div`
  align-self: end;
  justify-self: center;
  height: 520px;
  overflow: hidden;
  order: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 1;
    height: 440px;
  }
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  padding-bottom: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-bottom: 0;
  }
`;

const Stats = styled.dl`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 16px 0 0;
  padding: 28px 8px;
  width: 100%;
  max-width: 480px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 20px 50px -30px rgba(0, 0, 0, 0.3);

  div {
    text-align: center;
  }

  div + div {
    border-left: 1px solid ${({ theme }) => theme.colors.border};
  }

  dt {
    font-size: clamp(26px, 3vw, 34px);
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }

  dd {
    margin: 6px 0 0;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export function About() {
  return (
    <section id="sobre">
      <Container>
        <Card>
          <PhoneSlot>
            <PhoneFrame width={250}>
              <TeamScreen />
            </PhoneFrame>
          </PhoneSlot>
          <Copy>
            <SectionTitle>
              Conheça o App Que Virou <br />o Dono da Bola da Sua Pelada
            </SectionTitle>
            <Lead style={{ maxWidth: 440 }}>
              O Time do Bairro nasceu na quadra alugada de toda semana. Juntamos tudo o que a
              organização da pelada pede: lista de jogadores, quem pagou, quem vai jogar e quem
              fez mais gols, num app simples que funciona como uma rede social da sua galera.
            </Lead>
            <Button href="#como-funciona">
              <ArrowRight /> Saiba mais
            </Button>
            <Stats>
              <div>
                <dt>10k+</dt>
                <dd>Jogos registrados</dd>
              </div>
              <div>
                <dt>25k</dt>
                <dd>Jogadores</dd>
              </div>
              <div>
                <dt>98%</dt>
                <dd>Quadras pagas</dd>
              </div>
            </Stats>
          </Copy>
        </Card>
      </Container>
    </section>
  );
}
