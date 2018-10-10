export class User {
  id: number;
  username: string;
  email: string;
}

export class Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export class Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export class Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export class Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export class Album {
  userId: number;
  id: number;
  title: string;
}
