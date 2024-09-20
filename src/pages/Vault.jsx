import { vault } from "../data/vaultDetail";
import Card from "../features/card/Card";
function Vault() {
  return (
    <div className="flex justify-around p-4">
      <div>
        {vault.education.map((card, i) => (
          <Card card={card} key={i} />
        ))}
      </div>
      <div>
        {vault.entertainment.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
}

export default Vault;
