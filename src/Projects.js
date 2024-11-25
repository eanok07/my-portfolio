import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <ul>
        <li style={{listStyleType:"none"}}> <span style={{ fontWeight: "bold" }}>CANTEEN AUTOMATION SYSTEM</span>

        <div style={{ textAlign: "justify" }}>
  
 The Canteen Automation System is a web-based solution designed to optimize the canteen   
ordering process. It enables users to register online, view an electronic menu, and place orders directly 
through the application. Orders are instantly transmitted to the chef's screen, enhancing preparation 
efficiency and accuracy. 
      The user-friendly interface ensures ease of use for both customers and staff, requiring minimal training. 
Economically, the system is cost-effective by reducing labour costs and increasing order throughput, thus 
boosting revenue. 
      The implementation involves meticulous system design, development with modern web technologies, 
rigorous testing, and deployment on a reliable server. The system modernizes canteen operations, 
providing a faster, more efficient, and error-free ordering experience.</div></li>
        <li style={{listStyleType:"none"}}>  <span style={{ fontWeight: "bold" }}>VEHICLE CARE SYSTEM</span>
        <div style={{ textAlign: "justify" }}>
The Vehicle Care System is a global platform designed to assist users in locating mechanical engineers during vehicle breakdowns, especially in areas without nearby repair shops.
Users register and add their breakdown location, while administrators allocate specific engineers to users. 
The system enhances user-engineer communication and organizes their relationship.
The Android application features real-time tracking of engineers, their location, and estimated time of arrival using location sharing.
This system streamlines the process of vehicle care, providing convenience and assistance during emergencies.</div></li>
        
      </ul>
    </div>
  );
};

export default Projects;
