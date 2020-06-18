import getFeed, { sortFeedData } from "../get-feed";
import {
  mockRawFeed,
  mockFormattedPosts,
  mockComments,
} from "../../__mocks__/mock-feed";

describe("get-feed tests", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("should return feed sorted into posts and comments on success", () => {
    const mockResponse = {
      feed: { posts: mockFormattedPosts, comments: mockComments },
    };
    fetch.mockResponseOnce(JSON.stringify({ feed: mockRawFeed }));

    return getFeed().then((result) => {
      expect(result).toEqual(mockResponse);
    });
  });

  it("should return error on fail", () => {
    const mockResponse = {
      feed: { posts: mockFormattedPosts, comments: mockComments },
    };
    fetch.mockReject(new Error("fake error message"));

    return getFeed().then((result) => {
      expect(result).toEqual({
        errorMessage:
          "Sorry, there was a problem getting posts. Please refresh and try again!",
      });
    });
  });
});
