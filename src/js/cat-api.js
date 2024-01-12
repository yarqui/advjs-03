import axios from 'axios';

const routes = {
  fetchAll: '/breeds',
  fetchByBreedId: '/images/search',
};

axios.defaults.headers.common['x-api-key'] =
  'live_8TsNZUhy5iYCK9WChJmZgi01iIAI2KzPJncbfC1OOay2wDsfjyjytcNtUNPWpqPi';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

export const fetchBreeds = () => {
  return axios.get(routes.fetchAll);
};

export const fetchCatByBreed = breedId => {
  const searchParams = new URLSearchParams({
    breed_ids: breedId,
  });
  return axios.get(`${routes.fetchByBreedId}?${searchParams}`);
};
