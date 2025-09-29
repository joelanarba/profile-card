// ============================================
// COMPONENT PATTERN: ProfileCard Component
// ============================================
// This is a REUSABLE component - the heart of the Component Pattern!
// It encapsulates all the logic and UI for displaying a profile card.
// 
// KEY CONCEPTS DEMONSTRATED:
// 1. SINGLE RESPONSIBILITY: This component has ONE job - render a profile card
// 2. REUSABILITY: Can be used multiple times with different data (see App.jsx)
// 3. PROPS: Receives data from parent component, making it flexible and dynamic
// 4. COMPOSABILITY: Made up of smaller HTML elements working together

import "./ProfileCard.css";
import cardBg from "../assets/bg-pattern-card.svg";

// PROPS DESTRUCTURING: Instead of receiving one "props" object, we extract
// the specific values we need: name, age, location, image, and stats
// This makes the code cleaner and shows exactly what data this component needs
export default function ProfileCard({ name, age, location, image, stats }) {
  return (
    <div className="container">
      <div className="wrapper">
        {/* BACKGROUND IMAGE: Decorative pattern at the top of the card */}
        <img src={cardBg} alt="Card Background" />
        
        <div className="content">
          {/* PROFILE IMAGE: The user's avatar/photo */}
          {/* Using the "image" prop passed from parent component */}
          <img src={image} alt={name} />
          
          {/* USER INFORMATION SECTION */}
          <h2>
            {/* Dynamic content using props - displays the user's name */}
            {name} <span>{age}</span>
            {/* Age is wrapped in a span so it can be styled differently */}
          </h2>
          
          {/* Location displays below the name */}
          <p>{location}</p>
          
          {/* STATS SECTION: Followers, Likes, Photos */}
          <div className="footer">
            {/* 
              ARRAY MAPPING: The "stats" prop is an array of objects
              We use .map() to loop through each stat and create a div for it
              
              WHY THIS IS POWERFUL (Component Pattern benefit):
              - The parent component controls what stats to show
              - This component doesn't care about the data structure
              - We can easily add/remove stats without changing this component
            */}
            {stats.map((stat, index) => (
              // KEY PROP: React needs a unique "key" for each item in a list
              // We use the index here (though in real apps, use unique IDs)
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

// ============================================
// COMPONENT PATTERN SUMMARY (ProfileCard):
// ============================================
// ✅ ENCAPSULATION: All profile card logic is in one place
// ✅ REUSABILITY: Can create multiple cards with different data
// ✅ PROPS: Receives data from parent, making it flexible
// ✅ SINGLE RESPONSIBILITY: Only handles profile card rendering
// ✅ COMPOSABILITY: Made of smaller elements (img, h2, p, div)