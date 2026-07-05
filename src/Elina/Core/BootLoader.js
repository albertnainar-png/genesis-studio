class BootLoader {
  constructor(kernel) {
    this.kernel = kernel;
    this.version = "0.1.0";
    this.bootTime = null;
  }

  boot() {
    this.bootTime = new Date();

    console.clear();

    console.log("=================================================");
    console.log("              ELINA OS BOOT SEQUENCE             ");
    console.log("=================================================");
    console.log(`Version : ${this.version}`);
    console.log(`Started : ${this.bootTime.toLocaleString()}`);
    console.log("");

    this.kernel.initialize();

    console.log("");
    console.log("Registered Engines");

    this.kernel.enginesList().forEach((engine) => {
      console.log(`✔ ${engine}`);
    });

    console.log("");
    console.log("System Health");

    const health = this.kernel.health();

    health.engines.forEach((engine) => {
      console.log(
        `${engine.healthy ? "🟢" : "🔴"} ${engine.engine}`
      );
    });

    console.log("");
    console.log("ELINA OS Ready");
    console.log("=================================================");
  }

  shutdown() {
    console.log("");
    console.log("Shutting down ELINA OS...");

    this.kernel.shutdown();

    console.log("Shutdown complete.");
  }
}

export default BootLoader;