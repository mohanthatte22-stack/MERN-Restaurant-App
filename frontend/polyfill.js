const buffer = require('buffer');
if (!buffer.SlowBuffer) {
  buffer.SlowBuffer = class SlowBuffer {};
}
