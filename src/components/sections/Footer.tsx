import { Mail, MapPin, Phone } from 'lucide-react';
import styled from 'styled-components';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';
import { FacebookIcon, InstagramIcon, WhatsappIcon } from '../ui/SocialIcons';

const CURRENT_YEAR = new Date().getFullYear();

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.4fr;
  gap: 40px;
  padding-top: 72px;
  padding-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  p {
    max-width: 260px;
    font-size: 15px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.75);
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 10px;

  a {
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
    transition: transform 0.2s ease;
  }

  a:hover {
    transform: translateY(-2px);
  }
`;

const Column = styled.div`
  h4 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 24px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  li,
  a {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.75);
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`;

const Bottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding: 22px 24px;
  text-align: center;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
`;

export function Footer() {
  return (
    <Wrapper id="contato">
      <Grid>
        <Brand>
          <Logo light />
          <p>Monte o time, sorteie as equipes e deixe a quadra paga. A pelada da semana organizada de verdade.</p>
          <Socials>
            <a href="#" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="WhatsApp">
              <WhatsappIcon />
            </a>
          </Socials>
        </Brand>
        <Column>
          <h4>Links rápidos</h4>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#como-funciona">Como funciona</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
          </ul>
        </Column>
        <Column>
          <h4>Suporte</h4>
          <ul>
            <li><a href="#">Perguntas frequentes</a></li>
            <li><a href="#">Privacidade</a></li>
            <li><a href="#">Termos de uso</a></li>
            <li><a href="#">Central de ajuda</a></li>
          </ul>
        </Column>
        <Column>
          <h4>Contato</h4>
          <ul>
            <li><MapPin /> São Paulo, SP - Brasil</li>
            <li><Phone /> (11) 90000-0000</li>
            <li><Mail /> contato@timedobairro.app</li>
          </ul>
        </Column>
      </Grid>
      <Bottom>© {CURRENT_YEAR} Time do Bairro. Todos os direitos reservados.</Bottom>
    </Wrapper>
  );
}
