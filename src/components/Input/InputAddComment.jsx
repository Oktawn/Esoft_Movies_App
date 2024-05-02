import { useState } from "react";
import { useCard } from "../store/store";

function InputAddComment({ id, comments }) {
  const [inputComment, setComment] = useState("");
  const add = useCard((state) => state.addComment);

  const handleTextComm = (e) => {
    setComment(e.target.value);
  };

  const handleAddComm = () => {
    comments.push(inputComment);
    add(id, comments);

    setComment("");
  };

  return (
    <div className="navigate-comment">
      <input type="text" value={inputComment} onChange={handleTextComm}></input>
      <button className="button" onClick={handleAddComm}>
        Оставить комментарий
      </button>
    </div>
  );
}

export default InputAddComment;
