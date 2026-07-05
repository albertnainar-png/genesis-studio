/**
 * ELINA Engine Contract
 *
 * Every ELINA subsystem extends this class.
 * Examples:
 *  - Planner
 *  - Memory
 *  - Journal
 *  - Skill Registry
 *  - Governance
 *  - Context
 */

class Engine {
  constructor(name) {
    this.name = name;
    this.version = "1.0.0";
    this.state = "stopped";
    this.initializedAt = null;
  }

  initialize() {
    this.state = "running";
    this.initializedAt = new Date();

    console.log(`${this.name} initialized.`);
  }

  shutdown() {
    this.state = "stopped";

    console.log(`${this.name} stopped.`);
  }

  status() {
    return {
      name: this.name,
      version: this.version,
      state: this.state,
      initializedAt: this.initializedAt,
    };
  }

  health() {
    return {
      engine: this.name,
      healthy: this.state === "running",
      timestamp: new Date(),
    };
  }
}

export default Engine;