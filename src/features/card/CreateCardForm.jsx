import { useState } from "react";
import { useDispatch } from "react-redux";

import { addCard } from "../bucket/bucketSlice";

import Button from "../../ui/Button";

function CreateCardForm({ bucketName }) {
  const dispatch = useDispatch();
  const [cardName, setCardName] = useState("");
  const [cardVideoLink, setCardVideoLink] = useState("");

  function handleAddCard() {
    if (!cardName || !cardVideoLink) return;
    const newCard = {
      name: cardName,
      videoLink: cardVideoLink,
    };
    // dispatch action to add card
    dispatch(addCard({ bucketName, card: newCard }));
    setCardName("");
    setCardVideoLink("");
  }
  return (
    <div className="flex">
      <input
        type="text"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
        placeholder="Card Name"
      />
      <input
        type="text"
        value={cardVideoLink}
        onChange={(e) => setCardVideoLink(e.target.value)}
        placeholder="Card Video Link"
      />
      <Button styleType="submitBtn" onClick={handleAddCard}>
        CREATE CARD
      </Button>
    </div>
  );
}

export default CreateCardForm;
