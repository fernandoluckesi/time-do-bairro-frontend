import { Bell, CalendarDays, Crown, MapPin, Search, Shuffle, SlidersHorizontal, Trophy, Users, Wallet } from 'lucide-react';
import styled from 'styled-components';
import { images } from '../../data/images';
import { initials } from './initials';
import {
  Avatar,
  Body,
  Card,
  Muted,
  Pill,
  PrimaryButton,
  Row,
  ScreenHeader,
  Stack,
  Strong,
} from './parts';

// Mocked app screens used only as illustrations on the landing page.

/* ---------- Draw (hero) ---------- */

const ConfigRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6em;
  text-align: center;

  div {
    background: #fff;
    border-radius: 1em;
    padding: 0.7em 0.2em;
    box-shadow: 0 0.2em 0.8em rgba(0, 0, 0, 0.05);
  }

  b {
    display: block;
    font-size: 1.4em;
    color: #ff5a00;
  }
`;

const SquadTitle = styled(Row)`
  justify-content: space-between;
  margin-bottom: 0.6em;
`;

const PlayerLine = styled(Row)`
  padding: 0.45em 0;

  & + & {
    border-top: 0.08em solid #f1eeeb;
  }
`;

const Rating = styled.span`
  margin-left: auto;
  font-weight: 600;
  color: #111;
`;

type MockPlayer = { name: string; position: string; rating: string; captain?: boolean };

const squadA: MockPlayer[] = [
  { name: 'Rafael Souza', position: 'Atacante', rating: '9.3', captain: true },
  { name: 'Luiz Fernando', position: 'Goleiro', rating: '6.5' },
  { name: 'Diego Alves', position: 'Zagueiro', rating: '7.1' },
];
const squadB: MockPlayer[] = [
  { name: 'Bruno Lima', position: 'Atacante', rating: '8.8', captain: true },
  { name: 'Caio Mendes', position: 'Goleiro', rating: '7.0' },
  { name: 'Pedro Rocha', position: 'Zagueiro', rating: '7.4' },
];

function Squad({ name, players, offset }: { name: string; players: MockPlayer[]; offset: number }) {
  return (
    <Card>
      <SquadTitle>
        <Strong>{name}</Strong>
        <Pill $tone="orange">{players.length} jogadores</Pill>
      </SquadTitle>
      {players.map((p, i) => (
        <PlayerLine key={p.name}>
          <Avatar $index={i + offset} $size={2.4}>
            {initials(p.name)}
          </Avatar>
          <Stack>
            <Row style={{ gap: '0.4em' }}>
              <Strong style={{ fontSize: '1em' }}>{p.name}</Strong>
              {p.captain && (
                <Pill $tone="dark" style={{ fontSize: '0.7em', padding: '0.2em 0.6em' }}>
                  <Crown size="1em" /> Líder
                </Pill>
              )}
            </Row>
            <Muted>{p.position}</Muted>
          </Stack>
          <Rating>{p.rating}</Rating>
        </PlayerLine>
      ))}
    </Card>
  );
}

export function DrawScreen() {
  return (
    <Body>
      <ScreenHeader title="Sortear jogo" />
      <ConfigRow>
        <div>
          <b>2</b>
          <Muted>Equipes</Muted>
        </div>
        <div>
          <b>6</b>
          <Muted>Jogadores</Muted>
        </div>
        <div>
          <b>3</b>
          <Muted>Por equipe</Muted>
        </div>
      </ConfigRow>
      <Squad name="Equipe A" players={squadA} offset={0} />
      <Squad name="Equipe B" players={squadB} offset={3} />
      <PrimaryButton>Sortear novamente</PrimaryButton>
    </Body>
  );
}

/* ---------- Team details (about) ---------- */

const Cover = styled.div`
  position: relative;
  height: 12em;
  border-radius: 1.6em;
  background: url(${images.aerialCourt}) center / cover;

  ${Avatar} {
    position: absolute;
    left: 1em;
    bottom: -1.6em;
    border: 0.3em solid #faf8f6;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;

  b {
    display: block;
    font-size: 1.5em;
    color: #111;
  }
`;

export function TeamScreen() {
  return (
    <Body>
      <ScreenHeader title="Detalhes do time" />
      <Cover>
        <Avatar $index={0} $size={4}>
          IM
        </Avatar>
      </Cover>
      <Row style={{ justifyContent: 'space-between', marginTop: '1em' }}>
        <Stack>
          <Strong style={{ fontSize: '1.4em' }}>Inter de Meião</Strong>
          <Muted>@inter.meiao</Muted>
        </Stack>
        <Pill $tone="green">Administrador</Pill>
      </Row>
      <Card>
        <Stats>
          <div>
            <b>25</b>
            <Muted>Jogadores</Muted>
          </div>
          <div>
            <b>105</b>
            <Muted>Gols</Muted>
          </div>
          <div>
            <b>33</b>
            <Muted>Jogos</Muted>
          </div>
        </Stats>
      </Card>
      <Card>
        <Strong style={{ fontSize: '1em' }}>Onde e quando joga</Strong>
        <Row style={{ marginTop: '0.6em' }}>
          <MapPin size="1.2em" color="#FF5A00" />
          <Muted>Sport Gaúcho · São Paulo, SP</Muted>
        </Row>
        <Row style={{ marginTop: '0.4em' }}>
          <CalendarDays size="1.2em" color="#FF5A00" />
          <Muted>Toda segunda-feira às 18h</Muted>
        </Row>
      </Card>
      <PrimaryButton>Solicitar para entrar</PrimaryButton>
    </Body>
  );
}

/* ---------- Home (how it works) ---------- */

const SearchBox = styled(Row)`
  background: #fff;
  border-radius: 2em;
  padding: 0.9em 1.2em;
  box-shadow: 0 0.2em 0.8em rgba(0, 0, 0, 0.05);

  svg {
    width: 1.2em;
    height: 1.2em;
    color: #8a817c;
  }
`;

const Categories = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;

  i {
    display: grid;
    place-items: center;
    width: 3.6em;
    height: 3.6em;
    margin: 0 auto 0.4em;
    border-radius: 50%;
    background: #fff1ea;
    color: #ff5a00;
  }

  svg {
    width: 1.5em;
    height: 1.5em;
  }
`;

const Banner = styled.div`
  position: relative;
  height: 9.5em;
  border-radius: 1.6em;
  overflow: hidden;
  padding: 1.2em;
  color: #fff;
  background:
    linear-gradient(90deg, rgba(10, 10, 10, 0.85) 30%, rgba(10, 10, 10, 0.1)),
    url(${images.futsalMatch}) center / cover;

  p {
    font-size: 1.3em;
    font-weight: 600;
    line-height: 1.25;
    max-width: 10em;
  }

  ${Pill} {
    margin-top: 0.8em;
    background: #fff;
    color: #ff5a00;
  }
`;

const TeamCards = styled.div`
  display: flex;
  gap: 0.8em;
`;

const TeamCard = styled(Card)<{ $image: string }>`
  flex: 0 0 15em;
  padding: 0.6em;

  div {
    height: 7em;
    border-radius: 1em;
    background: url(${({ $image }) => $image}) center / cover;
    margin-bottom: 0.6em;
  }
`;

export function HomeScreen() {
  return (
    <Body>
      <Row style={{ justifyContent: 'space-between' }}>
        <Row>
          <Avatar $index={1}>LF</Avatar>
          <Stack>
            <Strong>Luiz Fernando</Strong>
            <Muted>Goleiro · nota 9.0</Muted>
          </Stack>
        </Row>
        <Avatar $index={5} style={{ background: '#fff', color: '#FF5A00' }}>
          <Bell size="1.2em" />
        </Avatar>
      </Row>
      <SearchBox>
        <Search />
        <Muted>Pesquisar times, quadras...</Muted>
        <SlidersHorizontal style={{ marginLeft: 'auto' }} />
      </SearchBox>
      <Categories>
        {[
          { icon: <Users />, label: 'Times' },
          { icon: <Shuffle />, label: 'Sorteio' },
          { icon: <Wallet />, label: 'Pagar' },
          { icon: <Trophy />, label: 'Ranking' },
        ].map((c) => (
          <div key={c.label}>
            <i>{c.icon}</i>
            <Muted>{c.label}</Muted>
          </div>
        ))}
      </Categories>
      <Banner>
        <p>Quem é o artilheiro da semana?</p>
        <Pill>Ver ranking</Pill>
      </Banner>
      <Row style={{ justifyContent: 'space-between' }}>
        <Strong>Times perto de você</Strong>
        <Muted>Ver todos</Muted>
      </Row>
      <TeamCards>
        <TeamCard $image={images.nightGame}>
          <div />
          <Strong style={{ fontSize: '1em' }}>Bigode Grosso FC</Strong>
          <br />
          <Muted>Quintas · 20h</Muted>
        </TeamCard>
        <TeamCard $image={images.friendsPlaying}>
          <div />
          <Strong style={{ fontSize: '1em' }}>Várzea Unida</Strong>
          <br />
          <Muted>Sábados · 9h</Muted>
        </TeamCard>
      </TeamCards>
    </Body>
  );
}

/* ---------- Ranking (download CTA) ---------- */

const Tabs = styled(Row)`
  background: #f1eeeb;
  border-radius: 2em;
  padding: 0.3em;
  gap: 0.2em;

  span {
    flex: 1;
    text-align: center;
    padding: 0.6em 0;
    border-radius: 2em;
    font-weight: 600;
    color: #5f5753;
  }

  span:first-child {
    background: #fff;
    color: #111;
  }
`;

const Position = styled.span`
  width: 1.4em;
  font-weight: 700;
  color: #ff5a00;
`;

const ranking = [
  { name: 'Rafael Souza', team: 'Inter de Meião', value: 32 },
  { name: 'Bruno Lima', team: 'Bigode Grosso', value: 27 },
  { name: 'Diego Alves', team: 'Inter de Meião', value: 21 },
  { name: 'Marina Lopes', team: 'Várzea Unida', value: 19 },
  { name: 'Pedro Rocha', team: 'Bigode Grosso', value: 15 },
  { name: 'Caio Mendes', team: 'Várzea Unida', value: 12 },
];

export function RankingScreen() {
  return (
    <Body>
      <ScreenHeader title="Ranking" />
      <Tabs>
        <span>Gols</span>
        <span>Dribles</span>
        <span>Assist.</span>
      </Tabs>
      {ranking.map((p, i) => (
        <Card key={p.name} style={{ padding: '0.8em 1em' }}>
          <Row>
            <Position>{i + 1}</Position>
            <Avatar $index={i} $size={2.6}>
              {initials(p.name)}
            </Avatar>
            <Stack>
              <Strong style={{ fontSize: '1em' }}>{p.name}</Strong>
              <Muted>{p.team}</Muted>
            </Stack>
            <Pill $tone={i === 0 ? 'orange' : 'gray'} style={{ marginLeft: 'auto' }}>
              {p.value} gols
            </Pill>
          </Row>
        </Card>
      ))}
    </Body>
  );
}

/* ---------- Payments (download CTA) ---------- */

const Summary = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6em;

  ${Card} b {
    display: block;
    font-size: 1.4em;
    margin-top: 0.2em;
  }
`;

const payments = [
  { name: 'Luiz Fernando', paid: true },
  { name: 'Rafael Souza', paid: true },
  { name: 'Bruno Lima', paid: false },
  { name: 'Diego Alves', paid: true },
  { name: 'Caio Mendes', paid: false },
];

export function PaymentsScreen() {
  return (
    <Body>
      <ScreenHeader title="Pagamentos" />
      <Row style={{ justifyContent: 'space-between' }}>
        <Stack>
          <Strong>Sport Gaúcho</Strong>
          <Muted>Julho de 2026 · R$ 50,00 / jogador</Muted>
        </Stack>
      </Row>
      <Summary>
        <Card>
          <Muted>Pagos</Muted>
          <b style={{ color: '#169462' }}>R$ 150</b>
        </Card>
        <Card>
          <Muted>Pendentes</Muted>
          <b style={{ color: '#FF5A00' }}>R$ 100</b>
        </Card>
      </Summary>
      {payments.map((p, i) => (
        <Row key={p.name} style={{ padding: '0.2em 0' }}>
          <Avatar $index={i} $size={2.6}>
            {initials(p.name)}
          </Avatar>
          <Stack>
            <Strong style={{ fontSize: '1em' }}>{p.name}</Strong>
            <Muted>Julho/26</Muted>
          </Stack>
          <Pill $tone={p.paid ? 'green' : 'orange'} style={{ marginLeft: 'auto' }}>
            {p.paid ? 'Pago' : 'Pendente'}
          </Pill>
        </Row>
      ))}
      <PrimaryButton>Cobrar pendentes</PrimaryButton>
    </Body>
  );
}
