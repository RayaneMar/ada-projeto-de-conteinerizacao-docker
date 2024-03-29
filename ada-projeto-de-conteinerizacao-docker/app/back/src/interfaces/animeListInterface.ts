export interface IAnimeList {
  id: number,
  url: string,
  imageUrl: string,
  title: string,
  titleJapanese: string,
  episodes: number | null,
  status: string,
  score: number,
  synopsis: string,
  year: number | null,
  producer: string,
  studio: string,
  genres: string,
}