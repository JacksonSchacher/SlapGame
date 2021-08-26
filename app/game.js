let currentFighter = {}

let fighters = {
    Bob: {
        name: "Bob",
        health: 100,
        hits: 0,
        attacks: {
            kick: 20,
            punch: 15,
            slap: 30,
        }
    },
    Tom: {
        name: "Tom",
        health: 100,
        hits: 0,
        attacks: {
            kick: 20,
            punch: 15,
            slap: 30,
        }
    }
}

let Computer = {
    Bowser: {
        name: "Bowser",
        health: 100,
        hits: 0,
        attacks: {
            Kick: 20,
            Punch: 15,
            Uppercut: 30,
        }
    }
}
let damageDealt = 0

function getFighter(player) {
    if (player == "Bob") {
        currentFighter = fighters.Bob
        console.log(currentFighter)
        update()
        return currentFighter
    }
    if (player == "Tom") {
        currentFighter = fighters.Tom
        console.log(currentFighter)
        update()
        return currentFighter
    }
}




function attack(type) {
    // hits++
    // if (type == 'slap') {
    //     health -= 1
    //     return update()
    // }
    // if (type == 'punch') {
    //     health -= 5
    //     return update()
    // }
    // if (type == 'kick') {
    //     health -= 10
    //     return update()
    // } else {
    //     return console.log("TYPE not found")
    // }v
    if (type == 'slap') {

        let slapDamage = currentFighter.attacks.slap

        damageDealt += slapDamage

    }

    if (type == 'punch') {

        let punchDamage = currentFighter.attacks.punch

        damageDealt += punchDamage

    }

    if (type == 'kick') {

        let kickDamage = currentFighter.attacks.kick

        damageDealt += kickDamage

    }
    damageCalc()
    cpuAttack()


}


function damageCalc() {

    Computer.Bowser.health -= damageDealt
    damageDealt = 0


}

function cpuAttack() {
    let playerHealth = currentFighter.health
    let att = ['Kick', 'Punch', 'Uppercut']

    let i = att[Math.floor(Math.random() * 3)]

    playerHealth -= Computer.Bowser.attacks[i]

    currentFighter.health = playerHealth
    update()


}

function update() {
    document.getElementById('my-health').innerText = currentFighter.health
    document.getElementById('cpu-health').innerText = Computer.Bowser.health
    document.getElementById('hits').innerText = hits
}


function test() {
    console.log(Computer.Bowser.health)

}