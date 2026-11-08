import { LegalLayout, SUPPORT_EMAIL } from './LegalPage';

/**
 * /termos and /privacidade: Terms of Use + Privacy Policy (LGPD), the page the
 * app links to from sign-up, login and "Sobre".
 */
export function TermsPage() {
  return (
    <LegalLayout title="Termos de Uso e Política de Privacidade">
      <p>
        Este documento explica as regras de uso do aplicativo <strong>Time do Bairro</strong> e como tratamos os seus
        dados pessoais, de acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018, “LGPD”). Ao criar uma conta
        ou usar o app, você concorda com estes termos.
      </p>

      <nav className="toc" aria-label="Sumário">
        <strong>Sumário</strong>
        <ol>
          <li><a href="#termos">Termos de Uso</a></li>
          <li><a href="#privacidade">Política de Privacidade</a></li>
          <li><a href="#exclusao">Exclusão de conta e de dados</a></li>
          <li><a href="#contato">Contato</a></li>
        </ol>
      </nav>

      <h2 id="termos">1. Termos de Uso</h2>
      <h3>1.1 O serviço</h3>
      <p>
        O Time do Bairro é um app para organizar times de futebol amador: cadastro de jogadores, sorteio de equipes,
        agendamento de jogos com lista de presença, registro de gols e resultados, cadastro de quadras e controle dos
        pagamentos entre os participantes.
      </p>
      <p>
        O app <strong>não processa pagamentos</strong>. Os valores exibidos servem apenas para o time controlar quem
        já pagou e quem está pendente; o pagamento em si é combinado diretamente entre as pessoas.
      </p>

      <h3>1.2 Conta</h3>
      <ul>
        <li>Para usar o app você precisa criar uma conta com nome, nome de usuário, e-mail e senha.</li>
        <li>Você é responsável por manter sua senha em sigilo e pelas ações feitas na sua conta.</li>
        <li>As informações que você cadastra precisam ser verdadeiras.</li>
      </ul>

      <h3>1.3 Administradores de times</h3>
      <p>
        Quem cria um time é o administrador dele. O administrador pode cadastrar jogadores que ainda não têm conta no
        app (nome, posição e, opcionalmente, e-mail), atribuir notas aos jogadores para equilibrar os sorteios e
        registrar presenças, gols e pagamentos. Ao cadastrar outra pessoa, o administrador declara que tem autorização
        dela para isso.
      </p>

      <h3>1.4 Uso permitido</h3>
      <p>Não é permitido usar o app para:</p>
      <ul>
        <li>publicar conteúdo ofensivo, discriminatório, ilegal ou que viole direitos de terceiros;</li>
        <li>se passar por outra pessoa ou cadastrar dados de terceiros sem autorização;</li>
        <li>tentar acessar contas ou dados de outras pessoas, ou prejudicar o funcionamento do serviço.</li>
      </ul>
      <p>Contas que descumprirem estas regras podem ser suspensas ou excluídas.</p>

      <h3>1.5 Disponibilidade e responsabilidade</h3>
      <p>
        Trabalhamos para manter o app disponível e correto, mas ele é oferecido “no estado em que se encontra”. Não nos
        responsabilizamos por acordos financeiros entre os participantes de um time, nem por eventos, lesões ou
        conflitos que aconteçam nos jogos organizados pelo app.
      </p>

      <h3>1.6 Alterações</h3>
      <p>
        Podemos atualizar estes termos. Quando a mudança for relevante, avisaremos pelo app ou por e-mail. A data da
        última atualização fica sempre no topo desta página.
      </p>

      <h2 id="privacidade">2. Política de Privacidade</h2>
      <h3>2.1 Dados que coletamos</h3>
      <ul>
        <li><strong>Dados da conta:</strong> nome completo, nome de usuário, e-mail e senha (guardada apenas de forma criptografada).</li>
        <li><strong>Perfil de jogador:</strong> foto de perfil (opcional) e posição em campo.</li>
        <li>
          <strong>Dados de uso dos times:</strong> times de que você participa, presenças e confirmações nos jogos,
          gols, pontos por drible, vitórias, empates e derrotas, notas atribuídas pelo administrador e o status dos
          pagamentos (pago ou pendente).
        </li>
        <li><strong>Dados de quadras:</strong> nome, endereço, horários e valores cadastrados pelo time.</li>
        <li>
          <strong>Donos de quadra:</strong> nome do estabelecimento, telefone e endereço informados no cadastro.
        </li>
        <li>
          <strong>Notificações:</strong> o identificador do aparelho para envio de notificações (push), se você
          permitir.
        </li>
        <li>
          <strong>Jogadores cadastrados pelo administrador:</strong> nome, posição e, opcionalmente, e-mail.
        </li>
      </ul>
      <p>
        Não coletamos sua localização, seus contatos, dados de cartão ou documentos como CPF. O app não exibe anúncios.
      </p>

      <h3>2.2 Para que usamos os dados</h3>
      <ul>
        <li>criar e manter sua conta e confirmar o seu e-mail;</li>
        <li>mostrar seus times, jogos, estatísticas e pagamentos para você e para os participantes dos mesmos times;</li>
        <li>montar sorteios de equipes equilibrados;</li>
        <li>enviar notificações e e-mails do serviço (check-in de jogo, cobranças do time, códigos de verificação);</li>
        <li>garantir a segurança da conta e cumprir obrigações legais.</li>
      </ul>
      <p>
        As bases legais são a execução do contrato (prestar o serviço que você pediu), o legítimo interesse (segurança
        e melhoria do app) e, quando aplicável, o seu consentimento (como as notificações push).
      </p>

      <h3>2.3 Quem vê os seus dados</h3>
      <p>
        Seu nome, nome de usuário, foto, posição e estatísticas ficam visíveis para quem participa dos mesmos times e
        podem aparecer na busca do app. A nota de cada jogador e os valores de pagamento ficam visíveis apenas para o
        administrador do time.
      </p>
      <p>
        <strong>Não vendemos seus dados.</strong> Compartilhamos apenas o necessário com os fornecedores que fazem o
        app funcionar:
      </p>
      <ul>
        <li>Railway: hospedagem do servidor e do banco de dados;</li>
        <li>Cloudflare: armazenamento das fotos de perfil e escudos dos times;</li>
        <li>Resend: envio dos e-mails do serviço;</li>
        <li>Expo, Apple e Google: entrega das notificações push.</li>
      </ul>
      <p>
        Alguns desses fornecedores podem armazenar dados fora do Brasil, sempre com as garantias exigidas pela LGPD.
      </p>

      <h3>2.4 Segurança e retenção</h3>
      <p>
        Os dados trafegam com criptografia (HTTPS) e as senhas são armazenadas com hash. Mantemos os dados enquanto a
        sua conta estiver ativa. Ao excluir a conta, seus dados são apagados, exceto o que precisarmos guardar por
        obrigação legal.
      </p>

      <h3>2.5 Seus direitos</h3>
      <p>
        Pela LGPD, você pode pedir a confirmação e o acesso aos seus dados, corrigir dados incompletos ou errados,
        pedir a exclusão, a portabilidade e informações sobre o compartilhamento, e revogar o consentimento. Boa parte
        disso pode ser feita no próprio app (editar perfil e excluir conta); o restante, pelo e-mail abaixo.
      </p>

      <h3>2.6 Crianças e adolescentes</h3>
      <p>
        O app não é direcionado a menores de 13 anos. Adolescentes devem usar o app com o acompanhamento dos pais ou
        responsáveis.
      </p>

      <h2 id="exclusao">3. Exclusão de conta e de dados</h2>
      <p>
        Você pode excluir sua conta a qualquer momento. Veja o passo a passo na página{' '}
        <a href="/excluir-conta">Excluir conta</a>.
      </p>

      <h2 id="contato">4. Contato</h2>
      <p>
        Dúvidas, pedidos sobre seus dados ou denúncias: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
