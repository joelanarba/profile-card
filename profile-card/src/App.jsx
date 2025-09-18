import ProfileCard from "./components/ProfileCard";
import profileImg from "./assets/image-victor.jpg";

function App() {
  return (
    <>
      <ProfileCard
        name="Victor Crest"
        age={26}
        location="London"
        image={profileImg}
        stats={[
          { label: "Followers", value: "80K" },
          { label: "Likes", value: "803K" },
          { label: "Photos", value: "1.4K" },
        ]}
      />

      {/* Example: Adding another card with different data */}
      <ProfileCard
        name="Rhoda Korantemaa"
        age={23}
        location="Accra"
        image={profileImg}
        stats={[
          { label: "Followers", value: "15K" },
          { label: "Likes", value: "40K" },
          { label: "Photos", value: "500" },
        ]}
      />
    </>
  );
}

export default App;
