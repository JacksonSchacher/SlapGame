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
    document.getElementById('my-health').innerHTML = /*html*/ `<div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="${currentFighter.health}" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
  </div>`
    document.getElementById("my-health").style.width = currentFighter.health + "%"
    document.getElementById('cpu-health').innerHTML = `<div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="${Computer.Bowser.health}" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
  </div>`
    document.getElementById("cpu-health").style.width = Computer.Bowser.health + "%"
}

function popupChoose() {
    Swal.fire({
        title: 'Choose Your Character',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Tom`,
        denyButtonText: `Bob`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire(currentFighter = fighters.Tom)
            update()
            return currentFighter
        } else if (result.isDenied) {
            Swal.fire(currentFighter = fighters.Bob)
            update()
            return currentFighter
        }
    })
}



function test() {
    console.log(Computer.Bowser.health)

}

popupChoose()