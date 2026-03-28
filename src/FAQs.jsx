import { useState } from "react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who are you and what do you do?",
      answer:
        "I’m Dre, a full-stack developer focused on building scalable web and desktop applications. I handle everything from development to deployment in the cloud.",
    },
    {
      question: "Can you handle both frontend and backend development?",
      answer:
        "Yes. I develop complete full-stack solutions—from user interfaces to backend logic, databases, and deployment.",
    },
    {
      question: "Do you rely on A.I to develop applications?",
      answer:
        "Yes. I use AI as a tool, mainly for debugging and improving efficiency. I don’t rely on it blindly.",
    },
    {
      question: "Do you work solo or in a team?",
      answer:
        "I’m comfortable working independently or as part of a team. I have experience collaborating in Agile environments using tools like Git, Jira, and version control workflows.",
    },
    {
      question: "How can I contact you?",
      answer: "You can reach me via my LinkedIn account or through my email.",
    },
  ];

  return (
    <section id="faqs" className="landing-section" aria-label="FAQs">
      <h1 className="title">FAQs</h1>
      <div className="FAQs-items" aria-label="Frequently asked questions">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          const answerId = `faq-answer-${index}`;

          return (
            <div className={`FAQs-item${isOpen ? " is-open" : ""}`} key={item.question}>
              <button
                className="FAQs-question"
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="FAQs-questionText">{item.question}</span>
                <span className="FAQs-icon" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div
                className="FAQs-answerWrapper"
                id={answerId}
                role="region"
                aria-hidden={!isOpen}
              >
                <div className="FAQs-answer">{item.answer}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="footer">
        <p>&copy; {new Date().getFullYear()} Dre. All rights reserved.</p>
      </div>
    </section>
  );
}
