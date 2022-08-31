import Word from './word';

/**
 *  @param {Word} word
 * @param {string[]} entries
 * @params {Moves} moves
 * @returns Tree */
export default function makeTree(word, entries, moves) {
  const tree = { ...word.groups(entries) };
  let nbLeaves = 0;
  for (const [groupName, remainingWords] of Object.entries(tree)) {
    if (remainingWords.length > 1) {
      const secondMoveGroups = new Word(moves[groupName]).groups(
        remainingWords
      );
      const secondMoveWins = Object.entries(secondMoveGroups)
        .filter(([key, group]) => group.length === 1)
        .reduce((prev, [key, group]) => {
          prev[key] = group[0];
          nbLeaves++;
          return prev;
        }, {});
      const secondMoveLosses = Object.entries(secondMoveGroups)
        .filter(([key, group]) => group.length > 1)
        .reduce((prev, [key, group]) => {
          prev.others = (prev?.others || 0) + group.length;
          nbLeaves++;
          return prev;
        }, {});
      tree[groupName] = {
        move: moves[groupName],
        ...secondMoveWins,
        ...secondMoveLosses,
      };
    } else {
      tree[groupName] = remainingWords[0];
      nbLeaves++;
    }
  }
  return {
    word: word.word,
    tree,
    nbLeaves,
  };
}
