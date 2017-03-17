type SongParams = {
    key?: "major" | "minor",
    style?: "classical" | "jazz",
};

class MusicFactory {
    theme: Theme = new Theme();
    composeVariation(params: SongParams) {
        if (params.key === "minor") {
            this.theme = new Minor(this.theme);
        }
        if (params.style === "classical") {
            this.theme = new Classical(this.theme);
        }
        /// etc.
        return this.theme;
    }
}

const factory = new MusicFactory();

const params: SongParams = {
     key: "minor",
     style: "classical",
};

const variation = factory.composeVariation(params);
variation.play("Twinkle Twinkle Little Star");
