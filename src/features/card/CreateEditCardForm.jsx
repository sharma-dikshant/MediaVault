import { useState } from "react";
import { useDispatch } from "react-redux";

import { addCard, updateCard } from "../bucket/bucketSlice";

import styles from "./CreateEditCardForm.module.css";

function CreateCardForm({ bucketName, edit = false, card = null }) {
  const dispatch = useDispatch();
  const [cardName, setCardName] = useState(edit ? card?.name : "");
  const [cardVideoLink, setCardVideoLink] = useState(
    edit ? card?.videoLink : ""
  );

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

  function handleUpdateCard() {
    if (!cardName || !cardVideoLink) return;
    const updatedCard = {
      ...card,
      name: cardName,
      videoLink: cardVideoLink,
    };
    // dispatch action to update card
    dispatch(updateCard({ bucketName, card: updatedCard }));
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
      {!edit ? (
        <button className={styles["submit-btn"]} onClick={handleAddCard}>
          CREATE CARD
        </button>
      ) : (
        <button className={styles["submit-btn"]} onClick={handleUpdateCard}>
          UPDATE CARD
        </button>
      )}
    </div>
  );
}

export default CreateCardForm;
