---
'@mado/oxlint': minor
---

Include the Unicorn preset in the default Oxlint configuration. It reports errors for recursive getters and setters, filling an array with a shared object, sending a request body with GET or HEAD, and removing an event listener with a new callback. Timer calls must specify a delay, and lint suppression comments must name the rules they disable.

The preset also warns about array callbacks that receive unintended arguments, errors created without a message, and Node.js built-in imports that omit the `node:` prefix.
