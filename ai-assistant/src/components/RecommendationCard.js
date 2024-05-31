import React from 'react';

function RecommendationCard({ recommendation }) {
  // If using state management, remove the recommendation prop and access recommendations from state

  return (
    <div className="recommendation-card">
      <h3>Recommendation</h3>
      <p>{recommendation.text}</p>
      {recommendation.link && <a href={recommendation.link}>Learn More</a>}
    </div>
  );
}

export default RecommendationCard;
