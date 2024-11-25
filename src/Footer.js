import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}> EANOK R | Connect with me:</p>
      <div style={styles.icons}>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/eanok-r-3470b2215"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
         
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/eanok07"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}

        > 
          <FaGithub />
        </a>

        {/* Email */}
        <a href="mailto:your-eanok072000.com" style={styles.icon}>
      
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

// Inline styles
const styles = {
  footer: {
    backgroundColor: "#282c34",
    color: "white",
    padding: "20px 0",
    textAlign: "center",
  },
  text: {
    margin: "0 0 10px 0",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  icon: {
    fontSize: "24px",
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s",
  },
};

export default Footer;
