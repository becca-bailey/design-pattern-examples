interface Song {
    play(title: string): void;
}

class Theme implements Song {
    play(title: string): void {
        console.log(`Now playing "${title}"`);
    }
}

class Variation implements Song {
    constructor(protected song: Theme) { }

    play(title: string): void {
      this.song.play(title);
    }
}

class Minor extends Variation {
    play(title: string): void {
        title = `a minor variation on ${title}`;
        this.song.play(title);
    }
}

class Classical extends Variation {
    play(title): void {
        title = `a classical variation on ${title}`;
        this.song.play(title);
    }
}

 const variation = new Classical(new Minor(new Theme()));
 variation.play("Twinkle Twinkle Little Star");
