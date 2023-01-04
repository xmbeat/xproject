var side = {
    hiddenBottom: {
        y: 200,
        opacity: 0
    },
    hiddenTop: {
        y: -200,
        opacity: 0
    },
    hiddenLeft:{
        x: -100,
        opacity: 0
    },
    hiddenRight: {
        y: 0,
        x: 100,
        opacity: 0
    },
    hidden:{
        opacity: 0
    },
    visible: {
        y: 0,
        X: 0,
        opacity: 1
    }
}

var zoom =  {
    zoomOut: {
        scale: 0.6,
        opacity: 0
    },
    zoomIn: {
        scale: 1.3,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1
    }
};

export {side, zoom}