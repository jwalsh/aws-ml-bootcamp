const csv=require('csvtojson');
const stochastic=require('@jwalsh/stochastic');

// const csvFilePath='stats.csv';
// csv()
// .fromFile(csvFilePath)
// .then((jsonObj)=>{
//     console.log(jsonObj);
//     /**
//      * [
//      * 	{a:"1", b:"2", c:"3"},
//      * 	{a:"4", b:"5". c:"6"}
//      * ]
//      */
// });
const stats = [
  { field: 'sepal-length',
    mean: '5.843333333333333',
    stddev: '0.8253012917851416' },
  { field: 'sepal-width',
    mean: '3.053999999999999',
    stddev: '0.43214658007054363' },
  { field: 'petal-length',
    mean: '3.758666666666667',
    stddev: '1.7585291834055208' },
  { field: 'petal-width',
    mean: '1.1986666666666665',
    stddev: '0.760612618588172' },
  // { field: 'class', mean: '', stddev: '' }
];

// Header
console.log(stats
            .map(e => e.field)
            .join(','));

// Mock
(new Array(20))
  .fill(null)
  .map(e => {
    const mock = stats.map(e => {
      const result = stochastic.norm(e.mean, e.stddev, 2)[0];
      //   console.log(e.field, result);
      return result;
    });
    console.log(
      Object.values(mock)
        .map(e => e < 0.1 ? 0.1 : e)
        .map(e => e.toPrecision(3))
        .join(','));

  });
