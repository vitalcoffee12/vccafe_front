import { useLocation } from "react-router-dom";
import "./Character.css";
import { iCharacter } from "./Character";

export default function CharacterItem(props: { item: iCharacter }) {
  return (
    <div className="character-item">
      <div
        className="image"
        style={{ background: "black", backgroundRepeat: "no-repeat" }}
      ></div>
      <div className="inner">
        {props.item.name}
        {props.item.age}
        {props.item.description}
      </div>
    </div>
  );
}
