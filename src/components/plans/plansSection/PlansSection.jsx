import { useState } from "react";

import { plans } from "../../../data/plans";
import PlanCard from "../planCard/PlanCard";
import PlanModal from "../planModal/PlanModal";
import {
  BottomBox,
  BottomText,
  Grid,
  Header,
  OutlineButton,
  Section,
  Subtitle,
  Tag,
  Title,
} from "./styles";

function PlansSection() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleSelectPlan(plan) {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <Section>
      <Header>
        <Tag>Invista em Você</Tag>
        <Title>
          Escolha seu <em>plano</em> ideal
        </Title>
        <Subtitle>
          Todos os planos incluem avaliação inicial, treino personalizado e suporte dedicado. Sem
          taxas escondidas.
        </Subtitle>
      </Header>

      <Grid>
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} onSelect={handleSelectPlan} />
        ))}
      </Grid>

      <BottomBox>
        <BottomText>Quer um plano online ou sessão avulsa? Fale comigo.</BottomText>

        <OutlineButton
          href="https://wa.me/558598677116?text=Olá! Quero um plano personalizado."
          target="_blank"
          rel="noreferrer"
        >
          Plano Personalizado
        </OutlineButton>
      </BottomBox>

      <PlanModal open={isModalOpen} plan={selectedPlan} onClose={handleCloseModal} />
    </Section>
  );
}

export default PlansSection;
