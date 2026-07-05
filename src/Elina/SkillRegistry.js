class SkillRegistry {

    constructor() {

        this.skills = [];

    }

    register(skill) {

        this.skills.push(skill);

    }

    all() {

        return this.skills;

    }

}

export default SkillRegistry;