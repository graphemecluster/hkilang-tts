import { useState } from "react";
import "./index.css";
import Radio from "./Radio";
import { Genre, Language, Sentence } from "./types";
import parse from "./parse";
import SentenceCard from "./SentenceCard";

export default function App() {
	const [language, setLanguage] = useState<Language>("waitau");
	const [genre, setGenre] = useState<Genre>("lit");
	const [text, setText] = useState("");
	const [sentences, setSentences] = useState<Sentence[]>([]);
	function addSentence() {
		setSentences([
			...text.split("\n").flatMap(line => (line.trim() ? [{ language, genre, sentence: parse(language, line) }] : [])),
			...sentences,
		]);
		setText("");
	}
	return (
		<div className="m-auto p-8 max-w-7xl">
			<h1>香港本土語言文字轉語音朗讀器（Prototype）</h1>
			<p className="text-slate-500 my-2">香港本土語言保育協會（2023 年 8 月 22 日）</p>
			<div>
				<div className="mt-3">
					<div className="join me-3" role="group" aria-label="Language Selection">
						<Radio name="btnlanguage" className="btn-primary" state={language} setState={setLanguage} value="waitau" label="圍頭話" />
						<Radio name="btnlanguage" className="btn-primary" state={language} setState={setLanguage} value="hakka" label="客家話" />
					</div>
					<div className="join me-3" role="group" aria-label="Genre Selection">
						<Radio name="btngenre" className="btn-secondary" state={genre} setState={setGenre} value="lit" label="文言" />
						<Radio name="btngenre" className="btn-secondary" state={genre} setState={setGenre} value="swc" label="現代白話文" />
						<Radio name="btngenre" className="btn-secondary" state={genre} setState={setGenre} value="col" label="口語材料" />
					</div>
				</div>
				<div className="join w-full mt-4">
					<textarea
						className="textarea textarea-accent textarea-lg text-xl min-h-16 flex-grow join-item"
						placeholder="【輸入文字】"
						rows={1}
						value={text}
						onChange={event => setText(event.target.value)}
					/>
					<button type="button" className="btn btn-success btn-lg h-full join-item" onClick={addSentence}>
						加入句子
					</button>
				</div>
			</div>
			<div className="mt-5">
				{sentences.map((sentence, i) => (
					<SentenceCard key={sentences.length - i} sentence={sentence} />
				))}
			</div>
		</div>
	);
}
