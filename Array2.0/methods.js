// Array Methods.
let cities = ["Karachi", "Mumbai", "Dubai", "Dhaka", "Lahore", "New York"]
cities.push("Beijing", "Moscow", "Tokyo")
console.log(cities)

cities.pop()
console.log(cities)

// Slice;
console.log(cities.slice(0, 6))

// Practice:
let companies = ["Bloomberg", "Mircrosoft", "Uber", "Google", "IBM", "Netflix"]
companies.shift()
console.log(companies)

companies.push("Amazon")
console.log(companies)

companies.splice(1, 1, "DHA")
console.log(companies)