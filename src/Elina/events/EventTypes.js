/**
 * ELINA Event Definitions
 */

const EventTypes = {

  /* Kernel */

  ELINA_BOOT: "elina.boot",

  ELINA_READY: "elina.ready",

  ELINA_SHUTDOWN: "elina.shutdown",

  /* Memory */

  MEMORY_STORE: "memory.store",

  MEMORY_RECALL: "memory.recall",

  /* Planner */

  PLAN_CREATED: "planner.created",

  PLAN_COMPLETED: "planner.completed",

  /* Skills */

  SKILL_REGISTERED: "skill.registered",

  SKILL_EXECUTE: "skill.execute",

  /* Journal */

  JOURNAL_ENTRY: "journal.entry",

  /* Dashboard */

  DASHBOARD_REFRESH: "dashboard.refresh",

  /* Genesis Studio */

  PROJECT_OPENED: "genesis.project.opened",

  PROJECT_CREATED: "genesis.project.created",

  VIDEO_RENDER_STARTED:
    "video.render.started",

  VIDEO_RENDER_FINISHED:
    "video.render.finished",

};

export default EventTypes;