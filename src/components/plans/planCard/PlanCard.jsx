import {
  Button,
  Card,
  Check,
  Detail,
  Divider,
  Feature,
  Features,
  Name,
  PopularTag,
  Price,
} from "./styles";

function PlanCard({ plan, onSelect }) {
  return (
    <Card $featured={plan.featured}>
      {plan.featured && <PopularTag>✦ Mais Escolhido</PopularTag>}

      <Name $featured={plan.featured}>{plan.name}</Name>
      <Price $featured={plan.featured}>{plan.price}</Price>
      <Detail $featured={plan.featured}>{plan.detail}</Detail>

      <Divider $featured={plan.featured} />

      <Features>
        {plan.features.map((feature) => (
          <Feature key={feature} $featured={plan.featured}>
            <Check $featured={plan.featured}>✓</Check>
            {feature}
          </Feature>
        ))}
      </Features>

      <Button $featured={plan.featured} onClick={() => onSelect(plan)}>
        Escolher Plano
      </Button>
    </Card>
  );
}

export default PlanCard;
