import React from "react";
import { Star } from "lucide-react";
import { testimonialsData } from "../data/content";

export default function Testimonials() {
  return (
    <section className="light-section light-section-white" id="testimonials">
      <div className="container">
        <div className="center-header">
          <span className="section-eyebrow">Client Feedback</span>
          <h2 className="section-headline">Trusted by Industry Leaders</h2>
          <p className="section-subtext">
            Read what corporate leaders and business owners say about partnering with CBD IT Solutions.
          </p>
        </div>

        <div className="reviews-grid-modern">
          {testimonialsData.map((item, idx) => (
            <div className="review-card-modern" key={idx}>
              <div>
                <div className="star-rating-row">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p className="review-quote-body">"{item.quote}"</p>
              </div>

              <div className="review-author-wrap">
                <div className="author-circle-avatar">
                  {item.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="author-meta-info">
                  <h5>{item.author}</h5>
                  <span>{item.role}, {item.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
