import { LegalLayout, SUPPORT_EMAIL } from './LegalPage';

/** /excluir-conta: how to delete the account (required by Google Play). */
export function DeleteAccountPage() {
  return (
    <LegalLayout title="Excluir conta do Time do Bairro">
      <p>
        Você pode excluir sua conta do <strong>Time do Bairro</strong> e os dados ligados a ela a qualquer momento,
        direto pelo app.
      </p>

      <h2>Pelo app</h2>
      <ol>
        <li>Abra o Time do Bairro e entre na sua conta.</li>
        <li>Vá em <strong>Perfil</strong> e toque em <strong>Configurações Gerais</strong>.</li>
        <li>Toque em <strong>Excluir conta</strong>.</li>
        <li>Enviaremos um código para o seu e-mail. Digite o código no app para confirmar.</li>
      </ol>
      <p>Você recebe um e-mail confirmando que a conta foi excluída.</p>

      <h2>Sem acesso ao app</h2>
      <p>
        Envie um e-mail para <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> a partir do endereço cadastrado
        na conta, com o assunto “Excluir conta”. Confirmamos a identidade e excluímos a conta em até 15 dias.
      </p>

      <h2>O que é apagado</h2>
      <ul>
        <li>dados da conta: nome, nome de usuário, e-mail e senha;</li>
        <li>perfil de jogador, foto, participação em times e estatísticas;</li>
        <li>notificações e códigos de verificação;</li>
        <li>cadastro de dono de quadra, se houver.</li>
      </ul>
      <p>
        A exclusão é imediata e não pode ser desfeita. Os registros dos outros jogadores dos times de que você
        participou continuam com eles.
      </p>

      <p>
        Saiba mais na nossa <a href="/termos#privacidade">Política de Privacidade</a>.
      </p>
    </LegalLayout>
  );
}
