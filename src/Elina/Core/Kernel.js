class Kernel {

    constructor() {

        this.state = "idle";

        this.version = "0.1.0";

    }

    start() {

        this.state = "running";

    }

    stop() {

        this.state = "stopped";

    }

    status() {

        return {

            version: this.version,

            state: this.state

        };

    }

}

export default Kernel;
