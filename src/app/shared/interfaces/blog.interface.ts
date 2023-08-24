export interface IBlogRequest {
    image: string;
    author: string;
    title: string;
    text: string;
  }
  export interface IBlogResponse extends IBlogRequest {
    id: number;
  }