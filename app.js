console.log("Hello World!");
const blogPost = {
  title: "My first blog post",
  Author: {
    name: "Bob",
    age: 30,
    favouriteColour: "Red",
    tags: ["coding", "javascript", "objects", "arrays"],
    content: "This is my first blog post learning objects and arrays",
  },
};
console.log(blogPost.Author.name);
console.log(blogPost.tags[0]);

console.log(
  `There are ${blogPost.tags.length} tags for post "${blogPost.title}":`
);
for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]);
}
