export interface Article {
id: string;
data: Data;
}

export interface Data {
  title: string;
  description: string;
  date: Date;
  updatedDate: Date;
  banner: string;
  author: string;
  authorlink: string;
  unsplashlink: string;
  isArticle: boolean;
  tags: string[];
}