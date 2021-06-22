import React, { useMemo, useState } from "react";

const sum = (n) => {
  console.log(n);
  return n + n;
};

const Post = ({ title, body, name, email }) => {
  const [num, setNum] = useState(0);
  const [isGreen, setIsGreen] = useState(false);

  const countSum = useMemo(() => sum(num), [num]);

  return (
    <div className="article-content">
      <div className="article-title">
        <a href="/">{title}</a>
        <a href="/">{name}</a>
      </div>
      <p
        className="article-text"
        style={{ color: isGreen ? "green" : "red" }}
        onClick={() => setIsGreen(!isGreen)}
      >
        {body}
        {email}
      </p>
      {countSum}
      <button onClick={() => setNum((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default React.memo(Post);
