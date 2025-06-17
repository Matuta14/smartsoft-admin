import axios from './axios.ts';
import {
  allWordUrl,
  countriesUrl,
  deleteWordUrl,
  editWordUrl,
  loginUrl,
  registerUrl,
  wordUrl,
} from './endpoints';

import type { wordType, loginType, registerType } from './types';

export const loginUser = async ({ username, password }: loginType) => {
  return axios.post(`${loginUrl}`, {
    username,
    password,
  });
};

export const registerUser = async ({
  username,
  password,
  confirm_password,
}: registerType) => {
  return axios
    .post(`${registerUrl}`, {
      username,
      password,
      confirm_password,
    })
    .then((response) => response);
};

export const addWord = async (word: wordType) => {
  return axios.post(`${wordUrl}`, word);
};

export const getAllWords = async () => {
  return axios.get(`${allWordUrl}`);
};

export const editWord = async (id: string, word: wordType) => {
  return axios.put(`${editWordUrl}/${id}`, word);
};

export const deleteWord = async (id: string) => {
  return axios.delete(`${deleteWordUrl}/${id}`);
};

export const getCountries = async () => {
  return axios.get(countriesUrl);
};
