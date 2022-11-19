import type Hero from "./Hero";

export default interface Blog {
	title: string;
	description: string;
	publishDate: string;
	tags: string[];
  hero: Hero;
  draft: boolean;
  type: string;
}