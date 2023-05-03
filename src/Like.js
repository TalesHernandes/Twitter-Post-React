import { useState } from "react";

export default function Like({ likes }) {
  const [isShowing, setShowing] = useState(false);

  function clickHandler() {
    setShowing(!isShowing);
  }

  var content = (
    <div className="likeDiv" onClick={clickHandler}>
      <img
        src="heart-on.png"
        alt="visibilitade"
        style={{ transition: "0.25s ease-in", opacity: "1", width: "20px" }}
      />
      <img
        src="heart-off.png"
        alt="visibilitade"
        style={{
          transition: "0.25s ease-out",
          opacity: "0",
          position: "absolute",
          width: "20px"
        }}
      />
      <p style={{ color: "#ff4c4c" }}>{likes + 1}</p>
    </div>
  );
  if (!isShowing) {
    content = (
      <div className="likeDiv" onClick={clickHandler}>
        <img
          src="heart-on.png"
          alt="visibilitade"
          style={{ transition: "0.25s ease-out", opacity: "0", width: "20px" }}
        />
        <img
          src="heart-off.png"
          alt="visibilitade"
          style={{
            transition: "0.25s ease-in",
            opacity: "1",
            position: "absolute",
            width: "20px"
          }}
        />
        <p>{likes}</p>
      </div>
    );
  }
  return <>{content}</>;
}
