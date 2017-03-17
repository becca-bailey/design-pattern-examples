interface InstrumentStrategy {
    play();
}

class Clarinet implements InstrumentStrategy {
    play() {
        console.log("squeeeeeak!!");
    }
}

class Drum implements InstrumentStrategy {
    play() {
        console.log("thump.");
    }
}

function makeMusic(instrument: InstrumentStrategy) {
    instrument.play();
}

makeMusic(new Drum());
