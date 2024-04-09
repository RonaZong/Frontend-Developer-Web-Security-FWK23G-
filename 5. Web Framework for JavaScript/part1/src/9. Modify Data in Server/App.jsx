import axios from "axios";

const url = "http://localhost:3000/notes";

const getAll = async () => {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (err) {
    console.error(err.message);
    return [];
  }
};

const create = async (note) => {
  try {
    const resp = await axios.post(url, newNote);
    return resp.data;
  } catch (err) {
    console.error(err.message);
    return null;
  }
};

const remove = async (id) => {
  try {
    const resp = await axios.delete(`${url}/${id}`);
    return resp.data;
  } catch (err) {
    console.error(err.message);
    return null;
  }
};

const change = async (id, noteData) => {
  try {
    const resp = await axios.put(`${url}/${id}`, noteData);
    return resp.data;
  } catch (err) {
    console.error(err.message);
    return null;
  }
};

export default { getAll, create, remove, change };
