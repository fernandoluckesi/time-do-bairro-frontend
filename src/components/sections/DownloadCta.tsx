import { Download } from 'lucide-react';
import styled from 'styled-components';
import { PhoneFrame } from '../phone/PhoneFrame';
import { PaymentsScreen, RankingScreen } from '../phone/screens';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Lead, SectionTitle } from '../ui/Typography';

const Section = styled.section`
  padding: 60px 0 140px;
`;

const Box = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  min-height: 380px;
  padding: 64px 56px;
  background: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.radius.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr);
    padding: 48px 28px 0;
    overflow: hidden;
  }
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
`;

/* Two phones overflowing the box: one above the top edge, one below the bottom edge. */
const Phones = styled.div`
  position: relative;
  align-self: stretch;

  > :first-child {
    position: absolute;
    left: 6%;
    top: 20px;
  }

  > :last-child {
    position: absolute;
    right: 2%;
    top: -110px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
    gap: 16px;
    height: 360px;
    margin-top: 40px;

    > :first-child,
    > :last-child {
      position: static;
    }

    > :last-child {
      margin-top: 60px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    > :last-child {
      display: none;
    }
  }
`;

export function DownloadCta() {
  return (
    <Section id="baixar">
      <Container>
        <Box>
          <Copy>
            <SectionTitle $light>
              Baixe o App e Marque <br />a Próxima Pelada Agora
            </SectionTitle>
            <Lead $light style={{ maxWidth: 400 }}>
              Times, sorteio, ranking e pagamentos na palma da mão. Grátis para iOS e Android,
              chama a galera e bora pro jogo.
            </Lead>
            <Button href="#baixar">
              <Download /> Baixar agora
            </Button>
          </Copy>
          <Phones aria-hidden="true">
            <PhoneFrame width={190}>
              <RankingScreen />
            </PhoneFrame>
            <PhoneFrame width={190}>
              <PaymentsScreen />
            </PhoneFrame>
          </Phones>
        </Box>
      </Container>
    </Section>
  );
}
