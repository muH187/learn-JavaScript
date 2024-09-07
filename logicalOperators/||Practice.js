function shouldGoPicnic(temperature, isSunny) {
    if(temperature >= 25 || isSunny) {
        console.log("Let's go to picnic.")
    } else {
        console.log("Stay home.")
    }
}

shouldGoPicnic(30, false)
shouldGoPicnic(29, true)