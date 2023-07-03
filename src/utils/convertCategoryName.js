import { categoryNames } from "../constants/categoryNames";

export const convertCategoryName = (categoryName) => {
  return categoryNames.get(categoryName).label;
};
