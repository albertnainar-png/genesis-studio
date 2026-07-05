/**
 * ==========================================================
 * Genesis Studio
 * Video Project Model
 * ==========================================================
 */

class VideoProject {
  constructor() {
    this.id = crypto.randomUUID();

    this.name = "Untitled Project";

    this.description = "";

    this.genre = "Cinematic";

    this.style = "Photorealistic";

    this.status = "Draft";

    this.createdAt = new Date();

    this.updatedAt = new Date();

    this.scenes = [];

    this.characters = [];

    this.environments = [];

    this.assets = [];

    this.settings = {
      resolution: "4K",
      fps: 24,
      aspectRatio: "16:9",
      duration: 0,
    };
  }

  rename(name) {
    this.name = name;
    this.touch();
  }

  addScene(scene) {
    this.scenes.push(scene);
    this.touch();
  }

  removeScene(id) {
    this.scenes = this.scenes.filter(
      scene => scene.id !== id
    );

    this.touch();
  }

  touch() {
    this.updatedAt = new Date();
  }

  summary() {
    return {
      id: this.id,
      name: this.name,
      scenes: this.scenes.length,
      assets: this.assets.length,
      updated: this.updatedAt,
    };
  }
}

export default VideoProject;