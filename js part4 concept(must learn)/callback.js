const Firstperson = (friend) => {
    console.log(`I am busy right now.I am talking to ${friend}.I will callback you soon`)
    Secondperson()
}

const Secondperson = () => {
    console.log(`Hey whatsupp, what happen`)
}

Firstperson("Aditya",Secondperson)