function mileToKm(mile) {
    var km = 1.609344;
    var conversion = mile * km;
    return conversion + " KM";
}

var result = mileToKm(100);
console.log(result);