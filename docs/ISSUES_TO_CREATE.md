# Suggested GitHub Issues

Use these to seed the project with clear contribution paths.

## Good First Issues

### Add a real demo GIF for importing WeChat articles

Replace or supplement `docs/assets/demo-import.gif` with a real 20-30 second recording: paste a WeChat article link or HTML, import it, and show extracted text/images/SVG modules.

Labels: `good first issue`, `documentation`

### Add a real demo GIF for replacing images inside SVG blocks

Record the workflow: select an image inside a SVG/layout block, show the recommended dimensions, replace the image, and confirm surrounding elements remain stable.

Labels: `good first issue`, `documentation`

### Add a real demo GIF for saving and reusing local layout blocks

Record the local library workflow: select a title/footer/separator module, save it, then insert it into a new article.

Labels: `good first issue`, `documentation`

### Add sample WeChat layout template pack

Add more copyright-safe examples under `examples/wechat-layouts/` and `examples/svg-blocks/`: title blocks, quote cards, dividers, footer cards, and event cards.

Labels: `good first issue`, `documentation`

### Write a Vercel online demo deployment guide

Add a step-by-step guide for deploying ContentCraft to Vercel and updating the README Try Online link after deployment.

Labels: `good first issue`, `documentation`

## Help Wanted

### Improve SVG block selection hit testing

Make it easier to precisely select nested SVG/image/module elements in imported WeChat layouts. Focus on reducing accidental selection of the wrong parent block.

Labels: `help wanted`, `enhancement`

### Add more image replacement test cases for SVG/HTML modules

Add synthetic fixtures that cover multiple images in one module, nested image wrappers, SVG foreignObject layouts, GIFs, and remote image URLs. Do not include copyrighted third-party templates.

Labels: `help wanted`, `enhancement`

### Improve compatibility with WeChat Official Account editor paste behavior

Collect edge cases where copied inline HTML loses spacing, images, or SVG styles after pasting into the WeChat Official Account editor. Add fixes and fixtures when possible.

Labels: `help wanted`, `enhancement`

## Roadmap

### Local template packs and import/export

Design a local template pack format so users can export/import saved SVG/layout modules across machines or teams.

Labels: `enhancement`

### AI-assisted layout cleanup

Explore AI-assisted cleanup for imported layouts: remove noisy wrappers, suggest block names, simplify inline styles, and preserve WeChat-compatible output.

Labels: `enhancement`
