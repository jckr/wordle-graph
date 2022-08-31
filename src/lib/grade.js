/**
 * @param {string} grade
 * @returns {number} */
export const gradeToNumber = (grade) => {
  const letters = grade.split('');
  return letters.reverse().reduce((prev, letter, index) => {
    if (letter === 'P') {
      return prev + 1000 + 10 * index;
    }
    if (letter === 'p') {
      return prev + 100 + index;
    }
    return prev;
  }, 0);
};
