import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';
import styled from 'styled-components';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';

export const SUPPORT_EMAIL = 'suporte@timedobairro.com.br';
export const LAST_UPDATE = '8 de novembro de 2026';

const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 76px;
  }

  a.back {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  a.back:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Article = styled.article`
  max-width: 760px;
  margin: 0 auto;
  padding: 56px 0 96px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.7;
  font-size: 16px;

  h1 {
    font-size: clamp(30px, 5vw, 42px);
    line-height: 1.15;
    margin: 0 0 8px;
  }

  .updated {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 14px;
    margin-bottom: 40px;
  }

  h2 {
    font-size: 22px;
    margin: 44px 0 12px;
    scroll-margin-top: 24px;
  }

  h3 {
    font-size: 17px;
    margin: 24px 0 8px;
  }

  p,
  li {
    color: ${({ theme }) => theme.colors.text};
  }

  ul,
  ol {
    padding-left: 22px;
  }

  li + li {
    margin-top: 6px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }

  nav.toc {
    background: ${({ theme }) => theme.colors.beige};
    border-radius: ${({ theme }) => theme.radius.sm};
    padding: 20px 24px;
  }

  nav.toc ol {
    margin: 8px 0 0;
  }
`;

export function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Header>
        <Container>
          <Logo href="/" />
          <a className="back" href="/">
            <ArrowLeft size={18} /> Voltar ao site
          </a>
        </Container>
      </Header>
      <main>
        <Container>
          <Article>
            <h1>{title}</h1>
            <p className="updated">Última atualização: {LAST_UPDATE}</p>
            {children}
          </Article>
        </Container>
      </main>
    </>
  );
}
