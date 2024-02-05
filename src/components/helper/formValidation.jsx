export const FormValidation = (taskName, dueDate, taskDetails) => {
  let taskNameError = "";
  let dueDateError = "";
  let taskDetailsError = "";
  let isValidError = true;

  if (taskName.length === 0) {
    taskNameError = "This field is required";
    isValidError = false;
  } else if (taskName.length <= 3) {
    taskNameError = "This field need more then 3 characters";
    isValidError = false;
  }

  if (dueDate.length === 0) {
    dueDateError = "This field is required";
    isValidError = false;
  } else if (new Date(dueDate).getTime() < new Date().getTime()) {
    dueDateError = "The due date cannot be less then current date";
    isValidError = false;
  }

  if (taskDetails.length <= 10) {
    taskDetailsError = "This field need more then 10 characters";
    isValidError = false;
  }

  return {
    taskName: taskNameError,
    dueDate: dueDateError,
    taskDetails: taskDetailsError,
    isValid: isValidError,
  };
};
