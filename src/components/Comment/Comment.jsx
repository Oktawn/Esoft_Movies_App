import Logo from "/avatar.svg";

function Comment({ text }) {
  const data = new Date().toLocaleString();
  return (
    <article>
      <div className="comment-container">
        <img src={Logo} className="logo" alt="avatar" aria-hidden="true" />
        <p>Пользователь скрыт</p>
        <p>{data}</p>
      </div>
      <p className="comment-text">{text}</p>
    </article>
  );
}

export default Comment;
