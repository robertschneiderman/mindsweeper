import { axioss, ROOT_URL } from '../../common/config';

export const fetchTemplates = (success) => {
  axioss.get(`games`)
  .then(success)
  .catch(function(error) {
    console.log(error);
  });
};

export const fetchTemplate = (id, success) => {
  axioss.get(`games/${id}`)
  .then(success)
  .catch(function(error) {
    console.log(error);
  });
};

export const createTemplate = (game, success, error) => {
  axioss.post(`games`)
  .then(success)
  .catch(function (error) {
    console.log(error);
  });
};

export const updateTemplate = (game, success) => {
  axioss.patch(`games/${game.id}`)
  .then(success)
  .catch(function (error) {
    console.log(error);
  });
};

export const destroyTemplate = (game, success) => {
  axioss.delete(`games/${game.id}`)
  .then(success)
  .catch(function (error) {
    console.log(error);
  });
};