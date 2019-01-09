import React from "react";
import ReactDOM from "react-dom";
import StudentProfile from "./components/StudentProfile";
import "./components/StudentProfile.css";
import "./styles.css";

const HarryProfile = {
  name: "Harry Potter",
  identity: "The Chosen One",
  age: 11,
  bestFriend: "Ron Weasley and Hermione Granger",
  image: "https://timedotcom.files.wordpress.com/2014/07/301386_full1.jpg"
};

const RonProfile = {
  name: "Ron Weasley",
  identity: "Youngest Weasley brother, Harry's best friend",
  age: 11,
  bestFriend: "Harry Potter and Hermione Granger",
  image:
    "https://images.pottermore.com/bxd3o8b291gf/4kRGmTOvVYmIwsOikwcuUw/8b8f2e4ffcc1a5218bafe615f976abb0/Ron_Weasley_WB_F1_Ron_with_Scabbers_on_shoulder_00393692.jpg?w=1200"
};

const HermioneProfile = {
  name: "Hermione Granger",
  identity: "Smarty McSmart pants, Harry's best friend",
  age: 11,
  bestFriend: "Harry Potter and Ron Weasley",
  image:
    "http://images6.fanpop.com/image/photos/40000000/hermione-hermione-granger-40088488-1087-1509.jpg"
};

function App() {
  // *********************The below destructuring fails*****************************
  // const {name, identity, age, bestFriend} = {HarryProfile, RonProfile, HermioneProfile};
  // console.log({ HarryProfile, RonProfile, HermioneProfile });
  return (
    <div className="App">
      <StudentProfile student={HarryProfile} />
      <StudentProfile student={HermioneProfile} />
      <StudentProfile student={RonProfile} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
