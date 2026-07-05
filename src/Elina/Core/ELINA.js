import Kernel from "./Kernel";
import BootLoader from "./BootLoader";

import MemoryManager from "../memory/MemoryManager";
import Planner from "../planner/Planner";
import SkillRegistry from "../skills/SkillRegistry";
import Journal from "../journal/Journal";
import Governance from "../governance/Governance";
import ContextBuilder from "../context/ContextBuilder";

class ELINA {
  constructor() {
    this.kernel = new Kernel();
    this.bootloader = new BootLoader();

    this.memory = new MemoryManager();
    this.planner = new Planner();
    this.skills = new SkillRegistry();
    this.journal = new Journal();
    this.governance = new Governance();
    this.context = new ContextBuilder();

    this.initialized = false;
  }

  initialize() {
    if (this.initialized) {
      return;
    }

    this.bootloader.boot();
    this.kernel.start();

    this.initialized = true;

    this.journal.log("ELINA OS initialized.");
  }

  status() {
    return {
      initialized: this.initialized,
      kernel: this.kernel.status(),
      skills: this.skills.all().length,
      memories: this.memory.recall().length,
      journal: this.journal.history().length,
    };
  }

  remember(item) {
    this.memory.remember(item);

    this.journal.log("Memory stored.");

    return {
      success: true,
    };
  }

  plan(goal) {
    const context = this.context.build();

    const plan = this.planner.plan(goal);

    this.journal.log(`Plan created: ${goal}`);

    return {
      goal,
      context,
      plan,
    };
  }

  registerSkill(skill) {
    this.skills.register(skill);

    this.journal.log(`Skill registered: ${skill.name}`);

    return skill;
  }

  skillsList() {
    return this.skills.all();
  }

  journalHistory() {
    return this.journal.history();
  }

  approve(action) {
    return this.governance.approve(action);
  }
}

export default new ELINA();