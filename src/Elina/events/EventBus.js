/**
 * ELINA OS
 * Global Event Bus
 *
 * Every Engine communicates through events.
 */

class EventBus {
  constructor() {
    this.listeners = new Map();
    this.history = [];
  }

  /**
   * Subscribe to an Event
   */
  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event).push(callback);
  }

  /**
   * Publish an Event
   */
  emit(event, payload = {}) {
    this.history.push({
      event,
      payload,
      timestamp: new Date(),
    });

    console.log(`📡 EVENT → ${event}`);

    const callbacks = this.listeners.get(event);

    if (!callbacks) return;

    callbacks.forEach((callback) => {
      callback(payload);
    });
  }

  /**
   * Remove Listener
   */
  off(event, callback) {
    if (!this.listeners.has(event)) return;

    this.listeners.set(
      event,
      this.listeners
        .get(event)
        .filter((item) => item !== callback)
    );
  }

  /**
   * Event History
   */
  events() {
    return this.history;
  }

  /**
   * Registered Events
   */
  registered() {
    return [...this.listeners.keys()];
  }

  clear() {
    this.history = [];
  }
}

export default new EventBus();