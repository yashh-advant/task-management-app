export const createGroup = (groupBy, array) => {
  if (groupBy == 'no_group') {
    return { tasks: array };
  }

  let output = {};
  if (groupBy == 'category') {
    output = {
      todo: [],
      pending: [],
      completed: [],
    };
  } else if (groupBy == 'priority') {
    output = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
    };
  }

  array.forEach(element => {
    console.log(element[groupBy]);
    output[element[groupBy]].push(element);
  });

  // console.log(output);

  return output;
};
