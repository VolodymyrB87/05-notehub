import axios from "axios";
import type { NewNote, Note } from "../types/note";
const myKey = import.meta.env.VITE_NOTEHUB_TOKEN;

axios.defaults.baseURL = "https://notehub-public.goit.study/api";
axios.defaults.headers.common["Authorization"] = `Bearer ${myKey}`;

export interface NotesResponse {
  notes: Note[];
  totalPages: number;
}

export async function fetchNotes(
  searchQuery: string,
  currentPage: number,
): Promise<NotesResponse> {
  const { data } = await axios.get<NotesResponse>(`/notes`, {
    params: {
      search: searchQuery,
      page: currentPage,
    },
  });
  return data;
}

export async function createNote(newNote: NewNote): Promise<Note> {
  const { data } = await axios.post<Note>(`/notes`, newNote);
  return data;
}

export async function deleteNote(noteId: string): Promise<Note> {
  const { data } = await axios.delete<Note>(`/notes/${noteId}`);
  return data;
}
