import type Hero from "./Hero";

export default interface Project {
	title: string;
	client: string;
	description: string;
	publishDate: string;
	tags: string[];
  hero: Hero;
  category: string
  draft: boolean;
  type: string;
}