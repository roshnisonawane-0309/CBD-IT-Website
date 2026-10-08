import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { educationData } from "../data/content";

export default function Education() {
  return (
    <section className="light-section light-section-white" id="education">
      <div className="container">
        <div className="center-header">
          <span className="section-eyebrow">Professional Training</span>
          <h2 className="section-headline">Tally Education Programs</h2>
          <p className="section-subtext">
            Build certified accounting expertise with structured courses taught by authorized professionals from CBD IT Solutions.
          </p>
        </div>

        <div className="education-cards-grid">
          {educationData.map((course, idx) => (
            <div
              className={`course-card-modern ${course.isPopular ? "is-popular" : ""}`}
              key={idx}
            >
              {course.isPopular && <div className="popular-badge-pill">Most Popular</div>}

              <div className="course-level-tag">{course.level}</div>
              <h3>{course.title}</h3>
              <div className="course-audience-text">Audience: {course.target}</div>
              <p>{course.description}</p>

              <div className="course-curriculum-list">
                {course.topics.map((topic, tIdx) => (
                  <div className="curriculum-row" key={tIdx}>
                    <Check
                      size={16}
                      color="var(--accent-blue)"
                      style={{ flexShrink: 0, marginTop: "3px" }}
                    />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>

              <a
                href={course.enrollUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-pill ${
                  course.isPopular ? "btn-pill-primary" : "btn-pill-outline-dark"
                }`}
                style={{ marginTop: "auto" }}
              >
                Enroll in {course.level} <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
