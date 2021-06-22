import React, { useEffect, useState, useContext } from "react";
import { Header } from "./Header";
import { PostList } from "./PostList";
import { Footer } from "./Footer";
import ThemeContext from "./context";

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [check, setCheck] = useState(true);
  const [type, setType] = useState("posts");

  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, [type]);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setCheck(!check);
  };

  const changeType = (type) => setType(type);

  return (
    <div className={`app ${theme}`}>
      <Header check={check} changeTheme={changeTheme} changeType={changeType} />
      <PostList posts={posts} />
      <Footer />
    </div>
  );
};
