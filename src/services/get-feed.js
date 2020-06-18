import { POST, COMMENT } from "../common/constants";

// Separate comments from posts and rename `image` to `images`
export const sortFeedData = (data) => {
  return data.reduce(
    (feed, item) => {
      if (item.type === POST) {
        // Note: Found it easier to remember image contained post/profile if I renamed it to plural form!
        const { image: images, ...rest } = item;

        feed.posts.push({ ...rest, images });
      } else if (item.type === COMMENT) {
        feed.comments.push(item);
      }

      return feed;
    },
    {
      posts: [],
      comments: [],
    }
  );
};

export default function getFeed() {
  return fetch("https://staging-app.figure1.com/mock/feed")
    .then((response) => response.json())
    .then((json) => {
      return {
        feed: sortFeedData(json.feed),
      };
    })
    .catch(() => {
      // Note: Placeholder error message. It should be localized and come from the backend.
      return {
        errorMessage:
          "Sorry, there was a problem getting posts. Please refresh and try again!",
      };
    });
}
