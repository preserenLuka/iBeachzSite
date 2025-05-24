import React from "react";

const reviews = [
  {
    name: "PlayerOne",
    comment: "Great coaching session! Learned a lot about positioning.",
    rating: 5,
  },
  {
    name: "GamerGirl",
    comment: "Very helpful and patient coach. Highly recommend.",
    rating: 4,
  },
  {
    name: "NoobMaster",
    comment: "Improved my gameplay significantly. Thanks!",
    rating: 5,
  },
];

const CoachingReviews: React.FC = () => (
  <div
    style={{
      width: "60%",
      margin: "2rem auto",
      background: "#23272f",
      borderRadius: "12px",
      padding: "2rem",
      color: "#fff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    }}
  >
    <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
      Coaching Reviews
    </h2>
    {reviews.map((review, idx) => (
      <div
        key={idx}
        style={{
          borderBottom: idx !== reviews.length - 1 ? "1px solid #444" : "none",
          padding: "1rem 0",
        }}
      >
        <strong>{review.name}</strong>
        <span style={{ marginLeft: 10, color: "#ffd700" }}>
          {"★".repeat(review.rating)}
        </span>
        <p style={{ margin: "0.5rem 0 0 0" }}>{review.comment}</p>
      </div>
    ))}
  </div>
);

export default CoachingReviews;
