import ELINA from "../../elina";

class ELINAService {

    async plan(goal) {

        return ELINA.plan(goal);

    }

    async status() {

        return ELINA.status();

    }

}

export default new ELINAService();