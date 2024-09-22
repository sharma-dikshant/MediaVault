import { useState } from "react";
import { useDispatch } from "react-redux";

import { addCard } from "../bucket/bucketSlice";

import styles from "./CreateCardForm.module.css";

function CreateCardForm({ bucketName }) {
  const dispatch = useDispatch();
  const [cardName, setCardName] = useState("");
  const [cardVideoLink, setCardVideoLink] = useState("");

  function handleAddCard() {
    if (!cardName || !cardVideoLink) return;
    const newCard = {
      id: crypto.randomUUID(),
      name: cardName,
      videoLink: cardVideoLink,
    };
    // dispatch action to add card
    dispatch(addCard({ bucketName, card: newCard }));
    setCardName("");
    setCardVideoLink("");
  }
  return (
    <div className={styles["form-container"]}>
      <input
        type="text"
        className={styles["form-input"]}
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
        placeholder="Card Name"
      />
      <input
        type="text"
        className={styles["form-input"]}
        value={cardVideoLink}
        onChange={(e) => setCardVideoLink(e.target.value)}
        placeholder="Card Video Link"
      />
      <button className={styles["submit-btn"]} onClick={handleAddCard}>
        CREATE CARD
      </button>
    </div>
  );
}

export default CreateCardForm;
