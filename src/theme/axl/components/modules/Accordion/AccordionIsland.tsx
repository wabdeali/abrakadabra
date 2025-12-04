import { useState } from "react";
import styles from "./Accordion.module.css";

export default function AccordionIsland({ accordion_items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!accordion_items || accordion_items.length === 0) {
    return null;
  }

  return (
    <div className={styles.accordion}>
      {accordion_items.map((item, index) => (
        <div key={index} className={styles.accordion__item}>
          <button
            className={styles.accordion__header}
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
            aria-controls={`accordion-content-${index}`}
          >
            <span className={styles.accordion__title}>{item.title}</span>
            <span
              className={`${styles.accordion__icon} ${
                openIndex === index ? styles.accordion__icon_open : ""
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 12L2 6L3.4 4.6L8 9.2L12.6 4.6L14 6L8 12Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </button>
          {openIndex === index && (
            <div
              id={`accordion-content-${index}`}
              className={styles.accordion__content}
            >
              <div
                className={styles.accordion__body}
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
