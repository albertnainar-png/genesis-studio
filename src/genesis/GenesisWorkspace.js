class GenesisWorkspace {

    constructor() {

        this.currentProject = null;

    }

    open(project) {

        this.currentProject = project;

    }

    current() {

        return this.currentProject;

    }

}

export default GenesisWorkspace;