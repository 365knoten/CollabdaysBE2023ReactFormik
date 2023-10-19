export default (item: any) => {
    const errors: any = {};
  
    if (!item.Title) {
      errors.Title = "Title is required";
    }
    if (!item.Description || item.Description.length<=20) {
      errors.Description = "Description must be at least 20 characters";
    }
    if (!item.DueDate || item.DueDate < new Date()) {
      errors.DueDate = "Due Date is required and must be in the future";
    }

    return errors;
  };
  