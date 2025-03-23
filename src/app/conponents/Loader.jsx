import React from "react";

const Loader = () => {
  const styles = {
    pyramidLoader: {
      position: "relative",
      width: "300px",
      height: "300px",
      display: "block",
      marginLeft:"200px",
      transformStyle: "preserve-3d",
      transform: "rotateX(-20deg)",
    },
    wrapper: {
      position: "relative",
      width: "100%",
      height: "100%",
      transformStyle: "preserve-3d",
      animation: "spin 4s linear infinite",
    },
    side: {
      width: "350px",
      height: "350px",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      margin: "auto",
      transformOrigin: "center top",
      clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
    },
    side1: {
      transform: "rotateZ(-30deg) rotateY(90deg)",
      background: "conic-gradient(#2BDEAC, #F028FD, #D8CCE6, #2F2585)",
    },
    side2: {
      transform: "rotateZ(30deg) rotateY(90deg)",
      background: "conic-gradient(#2F2585, #D8CCE6, #F028FD, #2BDEAC)",
    },
    side3: {
      transform: "rotateX(30deg)",
      background: "conic-gradient(#2F2585, #D8CCE6, #F028FD, #2BDEAC)",
    },
    side4: {
      transform: "rotateX(-30deg)",
      background: "conic-gradient(#2BDEAC, #F028FD, #D8CCE6, #2F2585)",
    },
    shadow: {
      width: "60px",
      height: "60px",
      background: "#8B5AD5",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      margin: "auto",
      transform: "rotateX(90deg) translateZ(-40px)",
      filter: "blur(12px)",
    },
    spinAnimation: `
      @keyframes spin {
        100% {
          transform: rotateY(360deg);
        }
      }
    `,
  };

  return (
    <div>
      {/* Add the animation keyframes */}
      <style>{styles.spinAnimation}</style>

      {/* Pyramid Loader */}
      <div style={styles.pyramidLoader}>
        <div style={styles.wrapper}>
          <span style={{ ...styles.side, ...styles.side1 }}></span>
          <span style={{ ...styles.side, ...styles.side2 }}></span>
          <span style={{ ...styles.side, ...styles.side3 }}></span>
          <span style={{ ...styles.side, ...styles.side4 }}></span>
          <span style={styles.shadow}></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;