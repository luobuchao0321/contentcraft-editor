# ContentCraft — Reuse WeChat SVG Layouts

<p align="center">
  <img src="./public/media/contentcraft-logo.png" alt="ContentCraft Logo" width="96" />
</p>

<p align="center">
  <strong>Import WeChat articles, extract SVG layout modules, replace images safely, and build a reusable local content library.</strong>
</p>

<p align="center">
  Most WeChat editors help you write Markdown. ContentCraft helps you reuse real WeChat layout modules.
</p>

<p align="center">
  <a href="https://github.com/luobuchao0321/wechat-article-editor/releases/tag/v1.0.1">Download Desktop App</a> ·
  <a href="#why-contentcraft">Why ContentCraft</a> ·
  <a href="#demos">Demos</a> ·
  <a href="#quick-start">Quick Start</a> ·
  <a href="./README.md">中文</a>
</p>

---

![ContentCraft brand card](./docs/assets/contentcraft-brand-card.png)

## Why ContentCraft

ContentCraft is not another Markdown editor. It is an open-source tool to extract, replace, and reuse WeChat SVG layout blocks.

Paste a WeChat article, extract SVG layout modules, replace images safely, and build your own local content library.

## Demos

| Import | Replace | Reuse |
| --- | --- | --- |
| ![Import a WeChat article](./docs/assets/demo-import.gif) | ![Replace images inside SVG layout blocks](./docs/assets/demo-replace-image.gif) | ![Save layout blocks to local library](./docs/assets/demo-library.gif) |

## Features

- **WeChat Article Import** — import text, images, SVGs, and layout modules
- **SVG Layout Reuse** — save title blocks, footer blocks, separators, GIFs, and image cards
- **Safe Image Replacement** — replace images inside modules with dimension hints
- **Module Editing** — move, duplicate, delete, and add spacing around layout blocks
- **AI Writing Assistant** — connect your own model provider for polishing, titles, summaries, and risk checks
- **One-click HTML Copy** — export inline HTML for WeChat editors, 135-style editors, CMS systems, and KindEditor-like backends
- **Multi-format Import** — supports HTML, Word, PDF, Excel, and more
- **Local-first Workflow** — drafts and reusable materials are stored locally by default
- **Desktop Builds** — macOS, Windows, and Linux installers are available from GitHub Releases

## Examples

Copyright-safe fixtures are included:

```text
examples/
  sample-articles/
  svg-blocks/
  wechat-layouts/
  before-after/
```

Start here: [examples/README.md](./examples/README.md)

## Quick Start

### Requirements

- Node.js >= 18.0.0
- npm >= 9.0.0

### Install and Run

```bash
git clone https://github.com/luobuchao0321/wechat-article-editor.git
cd wechat-article-editor
npm install
npm run dev
```

Default local URL:

```text
http://localhost:3001
```

### Production Build

```bash
npm run build
npm start
```

## Desktop App

Download the latest installers:

[ContentCraft v1.0.1 Release](https://github.com/luobuchao0321/wechat-article-editor/releases/tag/v1.0.1)

## Supported Platforms

| Platform | Status | Notes |
| --- | --- | --- |
| Web | Supported | Chrome / Edge / Safari / Firefox |
| macOS | Supported | DMG for Apple Silicon and Intel |
| Windows | Supported | NSIS installers for x64 and 32-bit |
| Linux | Supported | AppImage and deb |

## Tech Stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS
- Electron

## Compliance

- No paid/VIP assets from third-party editors are included.
- No scraping or bypassing paid template restrictions.
- Import only content and assets you have permission to process.

## Contributing

Issues and Pull Requests are welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) and [Roadmap](./docs/ROADMAP.md).

## License

[MIT](./LICENSE) © ContentCraft
