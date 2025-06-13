export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "NoteStorageApp",
    year: 2021,
    description: "Angular web app for creating/saving/searching notes.",
    url: "https://github.com/ArtDesa/NoteStorageApp",
  },
  {
    title: "OrderFood App",
    year: 2021,
    description: "Angular web app for ordering food.",
    url: "https://github.com/ArtDesa/OrderFood",
  },
  {
    title: "WebNewsApplication",
    year: 2021,
    description: "EJS web app that provides both current news and weather.",
    url: "https://github.com/ArtDesa/WebNewsApplication",
  }
];
