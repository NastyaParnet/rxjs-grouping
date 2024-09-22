const { groupBy, mergeMap, reduce, map } = require("rxjs");

module.exports = function getGroupStatistics(students$) {
  return students$
    .pipe(
      groupBy(p => p.group),
      mergeMap(group$ => group$.pipe(
        reduce((acc, cur) => (
          {group: cur.group, sumRatings: acc.sumRatings + cur.rating, count: acc.count + 1}
        ), {group: '', sumRatings: 0, count: 0})
      )),
      map(({group, sumRatings, count}) => ({group, avgRating: sumRatings / count }))
    )
};
