const key = "cards_delete";

export const addBannedCard = (name) => {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, name);
  } else {
    localStorage.setItem(key, `${localStorage.getItem(key)}, ${name}`);
  }
};

export const getBannedCard = () => {
  const collection = localStorage.getItem(key);

  return collection ? collection.split(", ") : [];
};

export const cleanBannedCard = () => {
  if (localStorage.getItem(key)) {
    localStorage.removeItem(key);
  }
};
