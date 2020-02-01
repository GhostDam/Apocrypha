// const BASE_URL = 'http://localhost:3001';
const BASE_URL = 'http://192.168.0.7:3001';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  walls: {
    list() {
      return callApi('/walls');
    },
    create(wall) {
      return callApi(`/walls`, {
        method: 'POST',
        body: JSON.stringify({
               "nombre": wall.nombre,
               "grito": wall.grito,
               "ubicacion": "placeholder",
               "linea1": {
                           "dovah": wall.l1dovah,
                           "español": wall.l1español
                        },
               "linea2": {
                           "dovah": wall.l2dovah,
                           "español": wall.l2español
                        },
               "linea3": {
                           "dovah": wall.l3dovah,
                           "español": wall.l3español
                        },
               "linea4": {
                           "dovah": wall.l4dovah,
                           "español": wall.l4español
                     }
                  }),
    });
    },
    read(badgeId) {
      return callApi(`/walls/${badgeId}`);
    },
    update(wallId, updates) {
      return callApi(`/walls/${wallId}`, {
        method: 'PUT',
        body: JSON.stringify({
          "nombre": updates.nombre,
          "grito": updates.grito,
          "ubicacion": "placeholder",
          "linea1": {
                      "dovah": updates.l1dovah,
                      "español": updates.l1español
                   },
          "linea2": {
                      "dovah": updates.l2dovah,
                      "español": updates.l2español
                   },
          "linea3": {
                      "dovah": updates.l3dovah,
                      "español": updates.l3español
                   },
          "linea4": {
                      "dovah": updates.l4dovah,
                      "español": updates.l4español
                }
             }),
 });
    },
    remove(wallId) {
      return callApi(`/walls/${wallId}`, {
        method: 'DELETE',
      });
    },
  },
  potions:{
    list() {
      return callApi('/potions');
    },
    create(potion) {
      return callApi(`/walls`, {
        method: 'POST',
        body: JSON.stringify(potion),
    });
    },
    read(potion) {
      return callApi(`/walls/${potion}`);
    },
    update(potion, updates) {
      return callApi(`/walls/${potion}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    remove(potion) {
      return callApi(`/walls/${potion}`, {
        method: 'DELETE',
      });
    },

  },
};

export default api;