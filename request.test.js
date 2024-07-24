const Observable = require("rxjs");

const getStatistics$ = require("./statistics");

describe("statistics", () => {
  it.each([
    [
      Observable.of(
        { name: "Tom", rating: 9.1, group: "Physics" },
        { name: "Emily", rating: 9.3, group: "Chemistry" },
        { name: "Tom", rating: 9.1, group: "Physics" },
        { name: "Michael", rating: 9.5, group: "Biology" },
        { name: "Emma", rating: 8.4, group: "Biology" },
        { name: "Alice", rating: 8.5, group: "Physics" },
        { name: "John", rating: 8.9, group: "Chemistry" },
        { name: "Sarah", rating: 8.7, group: "Chemistry" },
        { name: "Bob", rating: 8.8, group: "Physics" },
        { name: "David", rating: 8.6, group: "Chemistry" },
        { name: "Daniel", rating: 8.2, group: "Biology" }
      ),
      [
        { group: "Physics", avgRating: 8.875 },
        { group: "Chemistry", avgRating: 8.875 },
        { group: "Biology", avgRating: 8.7 },
      ],
    ],
    [
      Observable.of(
        { name: "Tom", rating: 6.6, group: "Physics" },
        { name: "Emily", rating: 9.3, group: "Chemistry" },
        { name: "Tom", rating: 9.1, group: "Physics" },
        { name: "Michael", rating: 3.5, group: "Biology" },
        { name: "Emma", rating: 8.4, group: "Biology" },
        { name: "Alice", rating: 6.5, group: "Physics" },
        { name: "John", rating: 8.9, group: "Chemistry" },
        { name: "Sarah", rating: 4.7, group: "Chemistry" },
        { name: "Bob", rating: 8.8, group: "Physics" },
        { name: "David", rating: 8.6, group: "Chemistry" },
        { name: "Daniel", rating: 8.2, group: "Biology" }
      ),
      [
        { group: "Physics", avgRating: 7.75 },
        { group: "Chemistry", avgRating: 7.875 },
        { group: "Biology", avgRating: 6.7 },
      ],
    ],
  ])("returns correct data", (testData$, expected, done) => {
    const actual = [];

    getStatistics$(testData$).subscribe({
      next: (result) => {
        actual.push(result);
      },
      complete: () => {
        expect(actual).toEqual(expected);
        done();
      },
    });
  });
});
