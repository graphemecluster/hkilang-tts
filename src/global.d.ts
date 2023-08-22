declare module "*Chars.csv" {
	type CharsFile = import("./types").CharsFile;
	const CharsFile: CharsFile;
	export default CharsFile;
}

declare module "*Words.csv" {
	type WordsFile = import("./types").WordsFile;
	const WordsFile: WordsFile;
	export default WordsFile;
}

declare module "eastasianwidth" {
	export function eastAsianWidth(character: string): "N" | "Na" | "H" | "A" | "W" | "F";
}
