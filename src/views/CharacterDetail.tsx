import { useLocation } from "react-router-dom";
import { iCharacter } from "./Character";

export default function CharacterDetail(props: { character: iCharacter }) {
  const state = useLocation().state;
  const name = state.name;

  return <>{}</>;
}
