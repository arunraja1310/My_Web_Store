export const category = [
  { _id: "Cate18", name: "vegetables" },
  { _id: "Cate14", name: "fruits" },
  { _id: "Cate20", name: "nuts" }
];

export function getCategory() {
  return category.filter(g => g);
}
