import ky from 'ky';

export const publicFaxios = ky.create({
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 50000,
  retry: 1,
  credentials: 'include',
});
