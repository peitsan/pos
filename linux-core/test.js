let a = {n:2}, ref = a;
a.x = a;
a.x.x = a.x;
a.x.x.x = a;
a = {n : 2}
console.log(a.x);
console.log(a.x.x.n);
console.log(a.x.x.x.x.x.x.x.x.x.x === ref.x.x.x.x.x);
console.log(ref.x);