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
export const CommentPopup = atom({
  key: 'CommentPopup',
  default: false,
});
export const Curremail = atom({
  key: 'Curremail',
  default: "sourav"
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