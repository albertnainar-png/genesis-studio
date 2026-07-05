class ApplicationRegistry {

    constructor() {

        this.apps = [];

    }

    register(app) {

        this.apps.push(app);

    }

    list() {

        return this.apps;

    }

}

export default ApplicationRegistry;