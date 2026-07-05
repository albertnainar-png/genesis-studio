class Application {

    constructor(id, name) {

        this.id = id;
        this.name = name;

        this.version = "1.0.0";

        this.status = "stopped";

    }

    start() {

        this.status = "running";

    }

    stop() {

        this.status = "stopped";

    }

}

export default Application;