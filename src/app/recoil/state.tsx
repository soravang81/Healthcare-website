import { atom } from 'recoil';

export const isLoading = atom({
  key: 'isLoading',
  default: false,
});
export const DeleteCommentbtn = atom({
  key: 'DeleteCommentbtn',
  default: false,
});
export const reFetch = atom({
  key: 'reFetch',
  default: false,
});
export const deletebtn = atom({
  key: 'deletebtn',
  default: false,
});
interface Comment {
  id: number;
  user: {
    firstName: string;
    lastName: string;
  };
  rating: number |null;
  comment: string | null;
  updatedAt: Date;
}
export const comments = atom<Comment[]>({
  key: 'comments',
  default: [],
});