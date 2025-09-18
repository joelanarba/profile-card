import "./ProfileCard.css";
import cardBg from "../assets/bg-pattern-card.svg";

export default function ProfileCard({ name, age, location, image, stats }) {
  return (
    <div className="container">
      <div className="wrapper">
        <img src={cardBg} alt="Card Background" />
        <div className="content">
          <img src={image} alt={name} />
          <h2>
            {name} <span>{age}</span>
          </h2>
          <p>{location}</p>
          <div className="footer">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="reaches">{stat.value}</p>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
