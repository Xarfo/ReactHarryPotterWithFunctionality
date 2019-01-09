import React from "react";
import "./StudentProfile.css";

class StudentProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0
    };
  }

  addPoints = () => {
    this.setState({ points: this.state.points + 5 });
  };

  render() {
    console.log(this.props);

    return (
      <div className="student-profile">
        <img src={this.props.student.image} alt="" />
        <h1>
          My name is {this.props.student.name}, also known as{" "}
          {this.props.student.identity}.
        </h1>
        <h2>I am {this.props.student.age}.</h2>
        <h2>My best friends are {this.props.student.bestFriend}</h2>
        <h2>I have contributed {this.state.points} points to Gryffindor.</h2>
        <button onClick={this.addPoints} />
      </div>
    );
  }
}

export default StudentProfile;
