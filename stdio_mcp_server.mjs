#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "devtooljobs",
  boardId: "devtooljobs-official",
  domain: "devtooljobs.com",
  npmName: "zc-devtooljobs-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
