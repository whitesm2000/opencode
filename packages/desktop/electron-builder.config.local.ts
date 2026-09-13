// Local-only packaging config: unsigned, no notarization, unpacked .app output.
// Usage: CSC_IDENTITY_AUTO_DISCOVERY=false bunx electron-builder --mac --config electron-builder.config.local.ts
import base from "./electron-builder.config"
import type { Configuration } from "electron-builder"

const local: Configuration = {
  ...base,
  mac: {
    ...base.mac,
    notarize: false,
    target: ["dir"],
  },
  dmg: { sign: false },
  publish: undefined,
}

export default local
