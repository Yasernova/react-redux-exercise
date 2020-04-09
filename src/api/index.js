import { heroes } from "./db";

export const search = query => {
  console.log({ query })
  const results = heroes.filter(hero => {
    let keep = false;

    Object.keys(hero).forEach(key => {
      const val = hero[key].toString();

      if (val.toLowerCase().includes(query.toLowerCase())) {
        keep = true;
      }
    });

    return keep;
  });

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(results);
    }, Math.ceil(Math.random() * 1000));
  });
};
