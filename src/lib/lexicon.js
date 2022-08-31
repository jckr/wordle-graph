import Word from './word';

export default class Lexicon {
  constructor(solutions, validWords) {
    this.allWords = [...solutions, ...validWords].map((w) => new Word(w));
    this.solutions = solutions;
    this.ready = false;
  }
  async init() {
    console.log('bonjbonj la gentillesse');
    let i = 0;
    for (const solution of this.solutions) {
      for (const word of this.allWords) {
        i++;
        if (i % 1000 === 0) {
          console.log(i);
        }
        try {
          word.grades(solution);
        } catch (e) {
          console.log('error on', word.word);
        }
      }
    }
  }
}
