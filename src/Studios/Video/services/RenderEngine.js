/**
 * ==========================================================
 * ELINA Render Engine
 * Handles rendering requests.
 * ==========================================================
 */

class RenderEngine {
  constructor() {
    this.queue = [];
  }

  render(project) {
    const job = {
      id: crypto.randomUUID(),

      project: project.name,

      status: "Queued",

      progress: 0,

      startedAt: new Date(),
    };

    this.queue.push(job);

    return job;
  }

  updateProgress(jobId, progress) {
    const job = this.queue.find(
      item => item.id === jobId
    );

    if (!job) return null;

    job.progress = progress;

    if (progress >= 100) {
      job.status = "Completed";
    } else {
      job.status = "Rendering";
    }

    return job;
  }

  queueList() {
    return this.queue;
  }
}

export default new RenderEngine();