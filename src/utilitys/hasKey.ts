// https://dev.to/mapleleaf/indexing-objects-in-typescript-1cgi
const hasKey = <O>(obj: O, key: string | number | symbol): key is keyof O => {
  return key in obj;
};

export default hasKey;
