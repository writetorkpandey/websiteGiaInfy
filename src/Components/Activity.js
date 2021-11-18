import React from "react";

export default function Activity() {
  const activityData = [
    {
      activityName: "ARCHERY CLUB",
      activityDescription:
        "A trained Coach shall teach the basics of the sport, first ensuring safety and skills. Indian, recurve and compound Archery formats shall be taught and practised.",
    },
    {
      activityName: "ART CLUB",
      activityDescription:
        "The purpose of the Art Club is to provide extra opportunities for students to experience art activities that go beyond the regular curriculum. Among the projects of the Art Club are an annual Art Exhibition and designing and contribution to College publications. Students learn extra art skills and the ability to work as a team on broad projects. Superior art talent is not required.",
    },
    {
      activityName: "BADMINTON CLUB",
      activityDescription:
        "Basic skills in Badminton, the rules of the game and motivation for competition are provided. Class-wise tournaments are organized after some degree of proficiency is achieved. The College badminton team, to represent the College at city level tournaments is selected from among the members of this Club.",
    },
    {
      activityName: "BASKETBALL CLUB",
      activityDescription:
        "Basic skills in Basketball, the rules of the game and motivation for competition are provided. Class-wise/ League tournaments are organized after some degree of proficiency is achieved.",
    },
    {
      activityName: "COMPUTER CLUB",
      activityDescription:
        "The Computer Club members work on understanding the keyboard, using PowerPoint, creating cards, taking digital pictures, uploading pictures, among other skills. The Club also contributes to the development of web pages and in maintaining and updating the official web page of the College.",
    },
  ];
  return (
    <div className="activity-div-container py-5">
      {activityData.map((item) => {
        return (
          <>
            <h1 className="h5 text-primary">{item.activityName}</h1>
            <p className="text-secondary">{item.activityDescription}</p>
          </>
        );
      })}
    </div>
  );
}
