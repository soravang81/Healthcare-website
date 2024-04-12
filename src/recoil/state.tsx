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
export const errormsg = atom({
  key: 'errormsg',
  default: false,
});
export const deletebtn = atom({
  key: 'deletebtn',
  default: false,
});
export const loggedin = atom({
  key: 'loggedin',
  default: false,
});
export const CommentPopup = atom({
  key: 'CommentPopup',
  default: false,
});
export const currentUserEmail = atom({
  key: 'currentUserEmail',
  default: "default"
});

interface Comment {
  id: number;
  user: {
    name :string
  };
  rating: number |null;
  comment: string | null;
  updatedAt: Date;
}
export const comments = atom<Comment[]>({
  key: 'comments',
  default: [],
});
export const userComments = atom<Comment|null>({
  key: 'userComments',
  default: null
});