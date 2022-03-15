// Arrays (Diziler)

let names = ['Kıvanç', 'Ayşe', 'Mahmut', 'Selin', 'Sevda'];
let years = [2001, 1999, 1996, 1992, 1991];
let mix = ['Kıvanç', 'Türkmen', 1991, null, undefined, ['Sinema', 'Spor']];

// get array item

console.log(names[0])
console.log(names[3])


// set array items

names[4] = 'Çınar';

// Add items
years.push(1990);
years.unshift(1986);


// Remove items
years.pop();
years.shift(); // En baştakı Elemanı Siler


// indexOff

let index = names.indexOf('ada');
console.log(' index : ' + index);

// revers  (Verileri ters çevirme)
names.reverse();


// sort (Sıralama)
years.sort();


// concate (Birleştirme)
let val = years.concat(names);
console.log(val);




console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years);
console.log(mix);