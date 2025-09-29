// ============================================
// COMPONENT PATTERN: App Component (Parent)
// ============================================
// This is the ROOT/PARENT component that uses (composes) child components.
// 
// KEY CONCEPTS DEMONSTRATED:
// 1. COMPONENT COMPOSITION: Using ProfileCard multiple times
// 2. PARENT-CHILD RELATIONSHIP: App is parent, ProfileCard is child
// 3. DATA FLOW: Parent passes data DOWN to children via props (one-way data flow)
// 4. REUSABILITY IN ACTION: Same component, different data = different results!

// IMPORTING THE CHILD COMPONENT
// This is how we bring in other components to use them
import ProfileCard from "./components/ProfileCard";

// IMPORTING ASSETS
// In React, we import images like JavaScript modules
import profileImg from "./assets/image-victor.jpg";

function App() {
  return (
    <>
      {/* ============================================
          COMPONENT REUSABILITY DEMONSTRATION
          ============================================
          
          Below, we use the SAME ProfileCard component TWICE
          but with DIFFERENT data. This is the power of the Component Pattern!
          
          Each ProfileCard is a separate instance with its own props.
          They look similar but display different information.
      */}
      
      {/* FIRST PROFILE CARD: Victor Crest */}
      <ProfileCard
        // PROPS: We pass data to the component using attributes
        // Think of props like function arguments - they customize behavior
        name="Victor Crest"
        age={26}
        location="London"
        image={profileImg}
        
        // COMPLEX PROP: "stats" is an ARRAY OF OBJECTS
        // This demonstrates how props can be any JavaScript data type
        stats={[
          { label: "Followers", value: "80K" },
          { label: "Likes", value: "803K" },
          { label: "Photos", value: "1.4K" },
        ]}
      />

      {/* SECOND PROFILE CARD: Rhoda Korantemaa */}
      {/* 
        NOTICE: Same component, different data!
        This is REUSABILITY - write once, use many times.
        
        COMPONENT PATTERN BENEFIT:
        - We don't duplicate code
        - If we need to change how cards look, we only edit ProfileCard.jsx
        - Easy to add more cards by just adding more <ProfileCard /> tags
      */}
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
      
      {/* 
        TRY THIS YOURSELF:
        Copy-paste another <ProfileCard /> here with your own data!
        Change the name, age, location, and stats to see how easy it is
        to create multiple cards without writing more component code.
      */}
    </>
  );
}

export default App;

// ============================================
// COMPONENT PATTERN SUMMARY (App Component):
// ============================================
// ✅ COMPOSITION: App "composes" multiple ProfileCard components
// ✅ PARENT COMPONENT: Controls what data goes to child components
// ✅ DATA FLOW: Passes props DOWN to children (unidirectional data flow)
// ✅ REUSABILITY DEMO: Uses ProfileCard twice with different data
// ✅ SEPARATION OF CONCERNS: App manages data, ProfileCard manages display