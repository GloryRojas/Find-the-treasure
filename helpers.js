const getRandomNumber = size => Math.floor(Math.random() * size);

const getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX*diffX) + (diffY * diffY));
};

const getDistanceHint = (distance) => {
    if(distance < 30) {
        return 'Estas bien caliente';
    } else if ( distance < 40) {
        return 'Muy caliente';
    } else if ( distance < 60) {
        return 'Caliente';
    } else if ( distance < 100) {
        return 'Tibio';
    } else if ( distance < 180) {
        return 'Frio';
    } else if ( distance < 360) {
        return 'Muy Frio';
    } else {
        return 'Congelado';
    }
};