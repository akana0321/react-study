import { Profile } from "./Profile";
import type { ScientistProfile } from "./Profile";

export default function Gallery() {
  const scientistProfileList: Array<ScientistProfile> = [
    {
      name: 'Maria Skłodowska-Curie',
      imageId: 'szV5sdG',
      imageWidth: 70,
      imageHeight: 70,
      profession: 'physicist and chemist',
      awardCount: 4,
      awardDetailList: [
        'Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal'
      ],
      descovered: 'polonium (chemical element)'
    },
    {
      name: 'Katsuko Saruhashi',
      imageId: 'YfeOqp2',
      imageWidth: 70,
      imageHeight: 70,
      profession: 'geochemist',
      awardCount: 2,
      awardDetailList: [
        'Miyake Prize for geochemistry', 'Tanaka Prize'
      ],
      descovered: 'a method for measuring carbon dioxide in seawater'
    }
  ]

  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        profileProps={scientistProfileList[0]}
      />
      <Profile
        profileProps={scientistProfileList[1]}
      />
    </div>
  );
}
