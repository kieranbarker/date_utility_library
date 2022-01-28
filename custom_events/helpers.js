/**
 * Emit a custom event.
 * @param {string} type The event type.
 * @param {*} detail Custom data to be associated with the event.
 * @param {EventTarget} target The event target.
 * @returns {boolean} Whether the event was canceled.
 */
export function emitEvent(type, detail = null, target = window) {
  if (typeof type !== 'string') {
    throw new TypeError('Expected a name for the custom event.');
  }

  const event = new CustomEvent(type, {
    detail,
    bubbles: true,
    cancelable: true
  });

  return target.dispatchEvent(event);
}
