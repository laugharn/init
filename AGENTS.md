# AGENTS.md

This is an extremely modern Next.js application, using experimental features and always on the latest canary release. It is a very controlled, minimal codebase.

## Organization

- Do not generate example pages, routes, or components, unless asked
- Use components/component-name/(client|index).tsx based on if a component uses "use client" or not
- Use lib/lib-name/(client|index|server).ts based on if the file is for clients, servers, or both. Anything used in a component is a lib, including hooks.
- All types go in types/index.ts unless that's not possible
- Alphabetically sort when possible. Including function names, props, and imports. Sort imports by multiple imports first, follow by single imports

## Code Style

- Move `"use client"` as far from the server as possible. Use smaller components and precise props to do so.
- When adding a dependency, always using an exact version
- Prefer named functions over consts when possible
- Unless required by the framework, don't use default exports
