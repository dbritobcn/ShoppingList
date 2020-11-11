import {database} from './../../../Setup';

export const addProduct = (id, title) => {
  return new Promise((resolve, reject) => {
    let key;
    if (id != null) {
      key = id;
    } else {
      key = database()
        .ref()
        .push().key;
    }
    let dataToSave = {
      id: key,
      title,
    };
    database()
      .ref(`groceryList/${key}`)
      .update(dataToSave)
      .then(snapshot => {
        resolve(snapshot);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const deleteProduct = itemId => {
  return new Promise((resolve, reject) => {
    database()
      .ref(`groceryList/${itemId}`)
      .remove()
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
};
