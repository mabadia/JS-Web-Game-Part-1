function lands(url, left, bottom, width, height) {
    for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {
            newImage(url, left + w * 100, bottom + h * 100)
        }
    }
}
function newImage(url, left, bottom) {
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(url, left, bottom) {
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', function () {
        object.remove()
    })
}
// You will need to render both images multiple times to cover the entire screen.
// Remember that for-loops can be used to repeat blocks of code.
// You can use the window.innerWidth1536 and window.innerHeight716 variables if you want to know the size of your screen.
// Both the sky and grass tiles are exactly 100px wide and 100px tall.// 
// let sky = document.createElement('img')
// sky.src = 'assets/sky.png'
// sky.style.position = 'fixed'
// sky.style.left = '0px'
// sky.style.bottom = '490px'
// document.body.append(sky)
// let grass = document.createElement('img')
// grass.src = 'assets/grass.png'
// grass.style.position = 'fixed'
// grass.style.left = '0px'
// grass.style.bottom = '390px'
// document.body.append(grass)

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight - horizon
let heightOfGrass = horizon

lands('assets/sky.png', 0, horizon, window.innerWidth / 100, heightOfSky / 100)
lands('assets/grass.png', 0, 0, window.innerWidth / 100, heightOfGrass / 100)

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)
newImage('assets/red-character.gif', 1000, 175)
newImage('assets/log.png', 700, 0)
newImage('assets/rock.png', 950, 175)
newImage('assets/boulder.png', 875, 300)
newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)