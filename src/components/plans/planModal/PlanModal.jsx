import {
  Actions,
  CancelButton,
  CloseButton,
  Description,
  InfoBox,
  Modal,
  Overlay,
  Title,
  WhatsButton,
} from "./styles";

function PlanModal({ open, plan, onClose }) {
  if (!plan) return null;

  const message = encodeURIComponent(
    `Olá! Tenho interesse no plano ${plan.name} (${plan.price} - ${plan.detail}). ${plan.description}`,
  );

  return (
    <Overlay $open={open} onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>✕</CloseButton>

        <Title>
          Ótima <em>escolha!</em>
        </Title>

        <Description>
          Você selecionou um plano incrível. Vamos conversar para confirmar sua matrícula e tirar
          suas dúvidas.
        </Description>

        <InfoBox>
          <strong>Plano:</strong> {plan.name}
          <br />
          <strong>Valor:</strong> {plan.price}
          <br />
          <strong>Detalhes:</strong> {plan.detail}
          <br />
          <strong>Resumo:</strong> {plan.description}
        </InfoBox>

        <Actions>
          <WhatsButton
            href={`https://wa.me/558598677116?text=${message}`}
            target="_blank"
            rel="noreferrer"
          >
            Confirmar pelo WhatsApp
          </WhatsButton>

          <CancelButton onClick={onClose}>Voltar e continuar navegando</CancelButton>
        </Actions>
      </Modal>
    </Overlay>
  );
}

export default PlanModal;
