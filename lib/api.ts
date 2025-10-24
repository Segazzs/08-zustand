import axios from "axios";

import type { Note, FormValues } from "../types/note";

interface FetchItem {
  notes: Note[];
  totalPages: number;
}

const API_URL = "https://notehub-public.goit.study/api/notes";
const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const headers = {
  Authorization: `Bearer ${myKey}`,
};

export const noteFetch = async (
  text: string,
  tag?: string,
  page?: number
): Promise<FetchItem> => {
  let url = `${API_URL}?search=${text}&page=${page}&perPage=20&sortBy=created`;

  if (tag && tag !== "all") {
    url += `&tag=${tag}`;
  }

  const res = await axios.get<FetchItem>(url, { headers });

  return res.data;
};

export const noteDelete = async (id: string): Promise<Note> => {
  const res = await axios.delete<Note>(`${API_URL}/${id}`, { headers });

  return res.data;
};

export const noteCreate = async ({
  title,
  content,
  tag,
}: FormValues): Promise<Note> => {
  const newNote = { title, content, tag };

  const res = await axios.post<Note>(API_URL, newNote, { headers });
  return res.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await axios.get<Note>(`${API_URL}/${id}`, { headers });
  return data;
};
