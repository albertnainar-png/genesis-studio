import ELINA from "../elina";

class GenesisStudio {

    constructor() {

        this.name = "Genesis Studio";

        this.version = "Alpha 2.1";

    }

    async ask(goal) {

        return ELINA.plan(goal);

    }

}

export default new GenesisStudio();