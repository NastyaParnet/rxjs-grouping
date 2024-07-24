# Task for theme RxJS. 
## Work with grouping  
<br>

Please, write the code of getGroupStatistics function (in statistscs.js file).  
This function should take an observable that emits students.  
Each student is an object with name, group and rating fields, for example:  
```  
{ "name": "Sophia", "rating": 9.0, "group": "Physics" },
{ "name": "Oliver", "rating": 8.3, "group": "Chemistry" }
```
getGroupStatistics should return transformed observable, that emits objects with information about groups: 
```
{ group: 'Physics', avgRating: 5.75 }
{ group: 'Chemistry', avgRating: 8.875 }
```

Set of groups is defined by emitted students.  
avgRating for each group should be evaluated as average value of rating field of all students that belong to this group.  

Please, use only RxJX functionality for this task. Do not use loops, conditions or array functions.