const MessageText = ({ content, type, time }) => {
  const getClassName = () => {
    return `message-line left ${type === 1 ? "left" : "right"} `;
  };
  return (
    <div className={getClassName()}>
      <p className="message">{content}</p>
      <small className="time">{time}</small>
    </div>
  );
};

export default MessageText;
