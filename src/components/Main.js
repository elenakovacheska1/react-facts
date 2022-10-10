import React from "react";

let Main = (props) => {
  const mode = props.dark ? "dark" : "light";
  const prevBodyClass = document.body.classList.value;
  if (prevBodyClass && prevBodyClass !== mode) {
    document.body.classList.remove(prevBodyClass);
    document.body.classList.add(mode);
  }
  if (!prevBodyClass) {
    document.body.classList.add(mode);
  }

  return (
    <div className={`main ${mode}`}>
      <div className="container">
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
