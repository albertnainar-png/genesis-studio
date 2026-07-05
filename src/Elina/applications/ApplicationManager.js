import ApplicationRegistry from "./ApplicationRegistry";

class ApplicationManager {

    constructor() {

        this.registry = new ApplicationRegistry();

    }

    launch(app) {

        app.start();

        this.registry.register(app);

    }

}

export default ApplicationManager;