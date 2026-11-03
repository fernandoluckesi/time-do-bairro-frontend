import { Menu, PhoneCall, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
];

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
`;

const Bar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 22px 32px;
  background: ${({ theme }) => theme.colors.black};
  border-radius: 0 0 ${({ theme }) => theme.radius.md} ${({ theme }) => theme.radius.md};
  box-shadow: 0 16px 40px -24px rgba(0, 0, 0, 0.6);
`;

const Links = styled.ul<{ $open: boolean }>`
  display: flex;
  gap: 36px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    position: absolute;
    top: calc(100% + 8px);
    left: 24px;
    right: 24px;
    flex-direction: column;
    gap: 20px;
    padding: 24px 32px;
    background: ${({ theme }) => theme.colors.black};
    border-radius: ${({ theme }) => theme.radius.md};
  }
`;

const NavLink = styled.a<{ $active: boolean }>`
  position: relative;
  font-size: 16px;
  color: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.white)};
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    transform: translateX(-50%) scale(${({ $active }) => ($active ? 1 : 0)});
    transition: transform 0.2s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    ${Button} {
      display: none;
    }
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  padding: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: grid;
  }
`;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#inicio');

  // Highlights the link of the section currently in view.
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <Header>
      <Container style={{ position: 'relative' }}>
        <Bar aria-label="Navegação principal">
          <Logo light />
          <Links $open={open}>
            {links.map((l) => (
              <li key={l.href}>
                <NavLink href={l.href} $active={active === l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </Links>
          <Actions>
            <Button href="#contato">
              <PhoneCall /> Contato
            </Button>
            <MenuToggle
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </MenuToggle>
          </Actions>
        </Bar>
      </Container>
    </Header>
  );
}
