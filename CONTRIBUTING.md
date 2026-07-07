# Contributing to openCCR

We welcome community contributions to help define the future of open-source rebreather standards and hardware modules.

---

## Safety First

Rebreathers are life-support equipment. All contributions must reflect this:

- Hardware design contributions must include a fail-safe analysis.
- Software changes affecting sensor reading, PO₂ control, or alarm logic require peer review by at least two contributors with CCR diving experience.
- Never submit changes that reduce safety margins without documented rationale and community consensus.

---

## The Legal Stuff (Important)

openCCR operates a dual-licensing model to fund ongoing development and ISO standardization efforts. To maintain this, we require all contributors to grant specific rights regarding their submissions.

**By submitting a Pull Request, issue, or any other contribution to this project, you agree that:**

1. Your contribution is governed by the [openCCR Contributor License Agreement v1.0](CLA.md).
2. You authorize the openCCR non-profit organization (and its authorized commercial partners) to utilize, modify, and dual-license your contributions without restriction.

You will be prompted to sign the CLA automatically on your first Pull Request via our CLA bot. Unsigned PRs cannot be merged.

Read the full CLA: [CLA.md](CLA.md)

---

## How to Contribute

1. **Fork** the relevant repository on GitHub.
2. **Sign the CLA** — you will be prompted automatically on your first Pull Request.
3. **Add the correct license header** to all new files (see below).
4. **Include safety documentation** for any changes touching sensor, control, or alarm code.
5. **Open a Pull Request** with a clear description of what changed and why.

---

## License Headers

### Hardware (CERN-OHL-S v2)

Add to schematic and PCB layout files:

```
Source: https://github.com/openccr/openccr-hardware
SPDX-License-Identifier: CERN-OHL-S-2.0
```

### Software / Firmware (GPLv3)

Add to all source files:

```
// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (c) 2026 openCCR contributors
```

### Documentation (CC BY 4.0)

Add to documentation files:

```
SPDX-License-Identifier: CC-BY-4.0
```

---

## Reporting Issues

Open an issue on the relevant GitHub repository. For security-sensitive issues, do not open a public issue — contact the maintainers directly via GitHub.

---

## Dual-Licensing Model

openCCR uses a dual-licensing model:

- **Open license** (CERN-OHL-S / GPLv3 / CC BY 4.0) — for community use, research, and non-commercial builds.
- **Commercial license** — available to commercial partners through the openCCR non-profit, funding continued development and ISO standardization work.

The CLA enables the non-profit to issue commercial licenses without requiring permission from every contributor individually. This is standard practice for open-source projects with a non-profit steward (examples: Eclipse Foundation, Linux kernel).
