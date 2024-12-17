import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./awards.css"; // Ensure to include this updated CSS file

function Awards() {
  const awards = [
    {
      title: "Pat on the Back Award",
      place: "Devangles Software Private Limited",
      year: 2023,
      details: "Awarded for outstanding performance and commitment to excellence.",
    },
    {
      title: "Project Competition Winner",
      place: "D Y Patil College of Engineering",
      year: 2019,
      details: "Won for developing an innovative web-based automation system.",
    },
    {
      title: "2nd Place in Project Competition",
      place: "D Y Patil Pratishthan College",
      year: 2019,
      details: "Secured 2nd place for creating a smart attendance tracking system.",
    },
  ];

  const [selectedAward, setSelectedAward] = useState(null);

  const handleCardClick = (index) => {
    setSelectedAward(selectedAward === index ? null : index);
  };

  return (
    <section className="awards">
      <h2 className="awards-title">Awards</h2>
      <div className="awards-container">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            className={`award-card ${selectedAward === index ? "active" : ""}`}
            onClick={() => handleCardClick(index)}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <div className="card-content">
              <h3>{award.title}</h3>
              <p>{award.place}</p>
              <span>{award.year}</span>
            </div>
            <AnimatePresence>
              {selectedAward === index && (
                <motion.div
                  className="card-details"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p>{award.details}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Awards;
