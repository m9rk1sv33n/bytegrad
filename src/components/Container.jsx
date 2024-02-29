import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import {
  INSTAGRAM_MAX_CHARACTERS,
  FACEBOOK_MAX_CHARACTERS,
} from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");
  const numberOfCharacters = text.length;
  const instagramCharatersLeft = INSTAGRAM_MAX_CHARACTERS - numberOfCharacters;
  const facebookCharatersLeft = FACEBOOK_MAX_CHARACTERS - numberOfCharacters;
  const numberOfWords = text.split(" ").filter((word) => word !== "").length;
  const stats = {
    numberOfWords,
    numberOfCharacters,
    instagramCharatersLeft,
    facebookCharatersLeft,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
