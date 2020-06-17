import { POST, COMMENT } from "../common/constants";

// Separate comments from posts.
const sortFeedData = (data) => {
  return data.reduce(
    (feed, item) => {
      if (item.type === POST) {
        feed.posts.push(item);
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
