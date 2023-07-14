import { useLocation } from "react-router-dom";
import "./Character.css";
import CharacterItem from "./CharacterItem";

export interface iCharacter {
  name: string;
  age: number;
  keywords: number[];
  description: string;
}
export default function Character() {
  const state = useLocation().state;
  const name = state.name;

  const characters: iCharacter[] = [
    {
      name: "name 1",
      age: 21,
      description: "des 1",
      keywords: [1, 2, 3],
    },
    {
      name: "name 2",
      age: 2122,
      description: "des 2",
      keywords: [3, 4, 6],
    },
    {
      name: "name 3",
      age: 60,
      description: "des 3",
      keywords: [5, 7],
    },
  ];

  return (
    <div className="character">
      <div className="header">fixed</div>
      <div className="body">
        {characters.map((v) => {
          return (
            <>
              <CharacterItem item={v} />
            </>
          );
        })}
      </div>
    </div>
  );
}
