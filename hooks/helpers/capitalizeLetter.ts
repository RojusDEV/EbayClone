export default function capitalizeLetter(word: string) {
  const firstLetter = word.charAt(0);
  const capitalizeWord = firstLetter.toUpperCase();
  return capitalizeWord + word.slice(1, word.length);
} 
