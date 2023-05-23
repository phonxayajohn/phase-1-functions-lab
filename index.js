function distanceFromHqInBlocks(blocks) {
    return blocks <= 42?(42-blocks): (blocks-42)
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks)*264
}

function distanceTravelledInFeet(start, destination){
    if (start >= destination){
        return (start - destination) * 264
    } else {
        return (destination - start) * 264
    }
}

function calculatesFarePrice(start, destination){
    const feetTraveled = distanceTravelledInFeet(start, destination)

    if (feetTraveled < 400) {
        return 0
    } else if (feetTraveled >= 400 && feetTraveled <= 2000){
        return ((feetTraveled - 400) * 0.02)       
    } else if (feetTraveled >= 2001 && feetTraveled <= 2500){
        return 25
    } else { 
        return `cannot travel that far`
    }
            
}
