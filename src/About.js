import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>
      To work in a challenging and dynamic environment and to keep adding value to the organization that  
      represent and serve, while also concurrently improving my skills and knowledge. 
      </p>
      <a
        href="/Eanok_resume_update.pdf" 
        download="C:\Users\eanok\Desktop\portfolio\my-portfolio\public\Eanok_resume_update.pdf" // Suggested filename for download
        style={styles.downloadButton}
      >
        Download My Resume
      </a>
    </div>
  );
};
const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  downloadButton: {
    display: "inline-block",
    padding: "10px 20px",
    marginTop: "20px",
    backgroundColor: "#007BFF", // Button color
    color: "#FFFFFF",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  },
};

export default About;
