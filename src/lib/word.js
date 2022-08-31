const allLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
/**
 *  @typedef {{[key: string]: string|number}} Moves
 */
/**
 *  @typedef {{[key: string]: string|number|Moves}} Tree
 */
/**
 * @typedef {Object} Solution
 * @property {string | null} grade
 * @property {string} solution
 */
/**
 * @typedef {Object} Branch
 * @property {string} word
 * @property {string} grade
 * @property {boolean} canBeSolution
 * @property {number} size
 * @property {Solution[]} children
 */

export default class Word {
  /**
   * @param {string} word
   */
  constructor(word) {
    this.word = word;
    this.letters = word.split('');
    /** @type {{[key: string]: string}} */
    this.scorecache = {};
    const letterSet = new Set(this.letters);

    /**
     * @param {{[key: string]: boolean}} prev
     * @param {string} curr
     */
    const reducer = (prev, curr) => {
      prev[curr] = letterSet.has(curr);
      return prev;
    };

    this.hasLetter = allLetters.reduce(reducer, {});
  }

  /**
   * @param {string} letter
   */
  has(letter) {
    return {
      /**
       * @param {number} index
       * @returns boolean
       */
      at: (index) => this.letters[index] === letter,
      /**
       * @param {number} index
       * @returns boolean
       */
      notAt: (index) =>
        this.hasLetter[letter] && this.letters[index] !== letter,
    };
  }
  /**
   *  @param {string} entry
   *  @returns {string}
   */
  grades(entry) {
    if (!this.scorecache[entry]) {
      this.scorecache[entry] = entry
        .split('')
        .map((letter, index) => {
          if (this.hasLetter[letter]) {
            return this.letters[index] === letter ? 'P' : 'p';
          }
          return 'a';
        })
        .join('');
    }
    return this.scorecache[entry];
  }
  /**
   *  @param {string[]} entries
   *  @returns {{[key: string]: string[]}}
   */
  groups(entries) {
    /**
     * @type {{[key: string]: string[]}}
     */
    const init = {};
    return entries.reduce((prev, curr) => {
      const grade = this.grades(curr);
      prev[grade] = prev[grade] || [];
      prev[grade].push(curr);
      return prev;
    }, init);
  }
  /**
   *  @param {string[]} entries
   *  @returns {number}
   */
  scores(entries) {
    const groups = this.groups(entries);
    return (
      Object.values(groups).filter((group) => group.length === 1).length +
      0.5 * Number(entries.includes(this.word))
    );
  }
}
