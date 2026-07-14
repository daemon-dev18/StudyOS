import "./StatsCard.css";

function StatsCard({ icon, title, value, subtitle }) {
  return (
    <div className="card">
      <h3>
        {icon} {title}
      </h3>

      <h2>{value}</h2>

      <p>{subtitle}</p>
    </div>
  );
}

export default StatsCard;