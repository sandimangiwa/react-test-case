import { SourceType } from '../types/source'

export interface IArticle {
  author?: string;
  source: SourceType;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content: string;
}