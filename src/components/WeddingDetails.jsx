function WeddingDetails() {
  return (
    <section className="details-section">
      <p className="details-label">THE WEDDING DAY</p>

      <h2 className="details-heading">Join Us in Celebration</h2>

      <div className="details-container">
        <div className="detail-item">
          <span className="detail-icon">♡</span>
          <h3>Date</h3>
          <p>Sunday, 24 October 2027</p>
        </div>

        <div className="detail-item">
          <span className="detail-icon">◷</span>
          <h3>Time</h3>
          <p>4:00 PM onwards</p>
        </div>

        <div className="detail-item">
          <span className="detail-icon">⌖</span>
          <h3>Venue</h3>
          <p>The Garden Venue</p>
          <small>Beautiful Garden, Your City</small>
        </div>
      </div>
    </section>
  );
}

export default WeddingDetails;