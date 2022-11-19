
export function sortMDByDate(posts = []) {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.publishDate).valueOf() -
      new Date(a.frontmatter.publishDate).valueOf()
  );
}

export function getAllHashtags(contents = []) {
  const tags = new Set<string>();

  contents.forEach((content) => {
    content.frontmatter.tags?.map((tag: string) => tags.add(tag.toLowerCase()));
  });

  return [...tags];
}