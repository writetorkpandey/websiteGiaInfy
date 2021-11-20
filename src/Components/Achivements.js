import React, { useState, useEffect } from "react";
import db from "../firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";


export default function Achivements() {

  const [achivementsData, setAchivementsData] = useState();

  useEffect(
    () =>
      onSnapshot(collection(db, "achivements"), (snapshot) =>
        {setAchivementsData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      console.log(achivementsData)}
      ),
    []
  );

  // const achivementsData = [
  //   {
  //     achivementsName: "Taming the Talents:",
  //     achivementsDescription: `Our School offers a wide range of activities to provide a joyful
  //       learning environment that empowers children to reach their
  //       educational and personal potential. The prime objective is that
  //       the students can apply the classroom teachings and knowledge to
  //       real-life situations.`,
  //   },
  //   {
  //     achivementsName: "Creme De la Creme:",
  //     achivementsDescription: `Originating from France it means"" Very best”. The school
  //       organizes an Inter-school Competition where various renowned
  //       schools of Jaipur participate and the student who ""delivers the
  //       best performance"" wins. This gives students a wide exposure to
  //       compete with students of similar age groups.`,
  //   },
  //   {
  //     achivementsName: "CCMUN:",
  //     achivementsDescription: `The MUN hosted by Gramarshi Academy Group aims to give a real-time
  //       experience of the working of the United Nations to the students.
  //       In this, the students of prestigious schools and colleges of
  //       Jaipur and outside participate. It enhances the oratory skills of
  //       the students and their knowledge about how the international
  //       issues are taken care of at the United Nations.`,
  //   },
  //   {
  //     achivementsName: "Igniting Minds:",
  //     achivementsDescription: `The annual science exhibition of the school, which is aimed to
  //       provide a platform to the students, for sharping shaping their
  //       innovative ideas into existence and for turning their learning
  //       into physical form proves to be experiential learning for them.`,
  //   },
  //   {
  //     achivementsName: "Intra school activities:",
  //     achivementsDescription: `A school life is beyond textbooks and classrooms, it's about
  //       learning through various ways. Learning with fellow mates is the
  //       most easiest and effective way. CCHS provides an opportunity where
  //       pupils compete with each other and learn a lot of skills.`,
  //   },
  //   {
  //     achivementsName: "Public Speaking and Literary activities:",
  //     achivementsDescription: `Building self-esteem &amp; confidence to put forth our ideas in
  //       public we need outstanding oration skills which is imbibed at a
  //       young age by participation in competitions such as debates,
  //       speech, declamation, poem recitation, narration, elocution,
  //       extempore are organized. It would help to enhance the general
  //       knowledge base also. The school has various Language labs and
  //       literary club.`,
  //   },
  //   {
  //     achivementsName: "Performing arts and Visual arts:",
  //     achivementsDescription: `It includes dance, music, theatre, mime, etc. where students are
  //       skilled to express their ideas and creativity to a live audience.
  //       To invoke an amazing artist, contests of face painting, T-shirt
  //       painting, tattoo making, English - Hindi calligraphy, pencil
  //       shading, Rangoli making, Rakhi making, Paper Mache, clay modeling,
  //       Ikebana, and Mehandi designing are also actively encouraged.`,
  //   },
  //   {
  //     achivementsName: "Club events:",
  //     achivementsDescription: `We At Gramarshi offer a plethora of activities in the clubs where
  //       students get to explore their interests in the clubs of their
  //       choice like Literary, Robotics, Eco, Math, Science, Theater, G.K.,
  //       Photography, IT.`,
  //   },
  //   {
  //     achivementsName: "Social activities in collaboration with various NGOs:",
  //     achivementsDescription: `To bring about a sense of responsibility in our Cambridgians, CCHS
  //       organizes many social concern activities such as visits to blind
  //       schools, deaf and dumb institutions, orphanages, old age homes,
  //       traffic parks, book fair, literature festivals, fire brigade
  //       office, etc. Cambridgians are forerunners in social reform
  //       campaigns as well and actively participate in anti-tobacco
  //       rallies, anti-pollution drives, and anti-corruption missions. They
  //       have started their protests and are creating awareness amongst the
  //       masses about not burning firecrackers, wastage of water, paper,
  //       electricity, and food.`,
  //   },
  //   {
  //     achivementsName: "Sports Utsav:",
  //     achivementsDescription: `Playground is the best place to teach a child the meaning of
  //       sportsmanship. It is here that the child experiences the thrill of
  //       victory and takes failures as a stepping stone to success. Keeping
  //       this in mind every year the school along with its zestful
  //       enthusiastic athletes celebrates its Sports day.`,
  //   },
  // ];
  return (
    <div className="activity-div-container py-5">
      {achivementsData?achivementsData.map((item) => {

        return (
          <>
            <h1 className="h5 text-primary">{item.achivementsName}</h1>
            <p className="text-secondary">{item.achivementsDescription}</p>
          </>
        );
      }) : <div>Loading... please wait</div>
      }
    </div>
  );
}
