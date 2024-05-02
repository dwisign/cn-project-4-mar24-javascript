var text = 'HELLO WORLD'
console.log(text)

//document.writeln(text)
/*
ini baris satu
ini baris 2
*/

console.log('Hello world')//string
console.log(5+2)//number & aritmetic
console.log(true)//boolean
console.log(false)//boolean

//variable
var fullname = "Dwi Pamungkas"
var fullname = "Dwi"
console.log(fullname)


//aritmetika
const result = 3 + 5
console.log('INI ADALAH HASIL PENJUMLAHAN:', result)

const resultKurang = 10 - 5
console.log('Ini pengurangan', resultKurang)

const resultPerkalian = 8 * 5
console.log('Ini Perkalian', resultPerkalian)

const resultBagi = 8 / 5
console.log('Ini Perkalian', resultBagi)

const resultSisa = 9 % 4
console.log('Sisa', resultSisa)


//prompt
/*
const num1 = prompt('Number 1')
const num2 = prompt('Number 2')
const result2 = num1 * num2
alert('Hasil perkalian = ' + result2)
*/


//perbandingan
const result3 = 5 == '5'
console.log(result3)

const result4 = 5 === '5'
console.log(result4)

const result5 = 5 > 3
console.log(result5)

const x = 11
const result6 = x >= 5 && x <= 10
console.log('range', result6) 


//logika
const nilaiUjian = 80
const nilaiAbsen = 70

const lulusUjian = nilaiUjian >= 75
const lulusAbsen = nilaiAbsen >= 75

const lulusTipe1 = lulusUjian && lulusAbsen
console.log('LULUS TIPE 1', lulusTipe1)

const lulusTipe2 = lulusUjian || lulusAbsen
console.log('LULUS TIPE 2', lulusTipe2)


//ternery operator
const result7 = nilaiUjian >= 75 && nilaiAbsen >= 75 ? 'LULUS' : 'TIDAK LULUS'
console.log('LULUS TIPE 3', result7)

const result8 = nilaiUjian >= 75 || nilaiAbsen >= 75 ? 'LULUS' : 'TIDAK LULUS'
console.log('LULUS TIPE 4', result8)


//string template
const nama = 'Dwi'
const age = 38
console.log('Nama : '+ nama + ' Usia: '+ age)
console.log(`Nama : ${nama}, Usia : ${age}`)


//ARRAY
const cars = [
    'Ayla',
    'Calya',
    'Agya',
    'Avanza'
]

const motorCycle = [
    'Nmax',
    'PCX',
    'ADV',
    'BMW',
    'Royal Endfield'
]

console.log('DATA MOBIL: ', cars)
console.table(cars)
document.writeln(cars)

//get data index ke n
console.log(cars[3])

//find length
console.log('Banyaknya Data ada : ', cars.length)


//array methods
console.log(cars.toString())
document.writeln(cars.toString()) //toString

console.log(cars.join(' / ')) //Join

cars.pop() //remove data terakhir
console.log(cars)

cars.push('Kijang') //add data terakhir
console.log(cars)

cars.shift()
console.log(cars) //remove data pertama

delete cars[2]
console.log(cars)
console.log(cars[2])

const groupVehicle = cars.concat(motorCycle)
console.log(groupVehicle)


//LOOPING

//for
for(i = 0; i < groupVehicle.length; i++){
    console.log(groupVehicle[i])
    document.writeln(groupVehicle[i])
}

//for in
const users = {
    fullName : 'Jhon Doe',
    email : 'jhondoe@gmail.com',
    age : '25'
}

let data = ''
for(let a in users){
    data += users[a] + ' '
}
console.log(data)
document.writeln(data)

//for of
var motorX
for(motorX of motorCycle){
    document.writeln(motorX + '<br>')
}

//for Each
const food = [
    {
        id: 1,
        rasa: 'Manis',
        warna: 'Merah',
        bentuk: 'Bulat'
    },
    {
        id: 2,
        rasa: 'Pahit',
        warna: 'Kuning',
        bentuk: 'Kotak'
    },
    {
        id: 3,
        rasa: 'Asam',
        warna: 'Hijau',
        bentuk: 'Lonjong'
    }
]

food.forEach(foods => {
    for(let value in foods){
        document.writeln(`${foods[value]} <br>`)
    }
})

//Conditional IF Else
const score = 80
if(score <= 60){
    document.writeln('TIDAK LULUS')
}else{
    document.writeln('LULUS')
}

if(score < 60){
    document.writeln('TIDAK LULUS')
}else if(score >= 60 && score <= 75){
    document.writeln('CUKUP')
}else{
    document.writeln('SANGAT MEMUASKAN')
}

const hasilUjian = score < 60 ? 'TIDAK LULUS' : score >= 60 && score <= 75 ? 'CUKUP' : 'SANGAT MEMUASKAN'
document.writeln('Hasil Ujian:', hasilUjian)

//COnditional Switch Case
const role = 'DESIGNER'
switch(role){
    case 'PROGRAMER' :
        document.writeln('Coding')
        break
    case 'DESIGNER' :
        document.writeln('Mendesign')
        break
    case 'PM' :
        document.writeln('Lead')
        break
    default:
        document.writeln('ERROR')
}


//FUNCTION
//declaration
function user(fullname, email){
    document.writeln(`<br><br> Full Name: ${fullname}, Email: ${email}`)
}
user('Dwi Pamungkas', 'dwi@mail.com')

//expression
const user2 = function(fullname, email){
    const resultUser = `<br><br> Full Name: ${fullname}, Email: ${email}`
    return resultUser
}
document.writeln(user2('Dwi Pamungkas', 'dwi@mail.com'))

const user3 = (fullname, email) => {
    const resultUser = `<br><br> Full Name: ${fullname}, Email: ${email}`
    return resultUser
}
document.writeln(user2('Dwi Pamungkas', 'dwi@mail.com'))