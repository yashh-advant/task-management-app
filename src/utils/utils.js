export const filterTasks = (filterOptions, tasks) => {
  return tasks.filter(task => {
    const categoryMatch =
      !filterOptions.category.length || filterOptions.category.includes(task.category);
    const priorityMatch =
      !filterOptions.priority.length || filterOptions.priority.includes(task.priority);

    return categoryMatch && priorityMatch;
  });
};

export const sortTasks = (orderBy, tasks, ascOrder = false) => {
  Object.keys(tasks).forEach(key => {
    tasks[key] = [...tasks[key]].sort((a, b) => {
      let valA = a[orderBy];
      let valB = b[orderBy];

      if (valA == null) valA = '';
      if (valB == null) valB = '';

      if (orderBy.includes('date') || orderBy.includes('created_at')) {
        valA = new Date(valA).getTime() || 0;
        valB = new Date(valB).getTime() || 0;
      }

      if (typeof valA === 'string' && typeof valB === 'string') {
        return ascOrder ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }

      if (orderBy == 'priority') {
        return ascOrder ? valB - valA : valA - valB;
      }

      return ascOrder ? valA - valB : valB - valA;
    });
  });
};

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
    // console.log(element[groupBy]);
    output[element[groupBy]].push(element);
  });

  // console.log(output);

  return output;
};
