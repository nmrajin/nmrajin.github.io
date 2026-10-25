# Portfolio content audit

Reviewed 2026-10-25. Includes the owner-selected private repositories, made available in this workspace and explicitly authorized for portfolio use. No connected app data tools were available in this session.

## Sources used

- [GitHub profile](https://github.com/nmrajin) and [profile README](https://github.com/nmrajin/nmrajin): name, engineering focus, stack, interests, email, Dhaka location, and LinkedIn/X links. These are self-described capabilities, not verified employment or project outcomes.
- [All 15 public repository listings](https://github.com/nmrajin?tab=repositories): reviewed descriptions and fork attribution. No publicly documented professional case studies were identified. The subsequently selected private repositories were cloned and reviewed locally; see the professional work audit below.

## Repository classification

| Repository                                                        | Finding                                                                        |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| nmrajin                                                           | Profile README; current self-description                                       |
| nmrajin.github.io                                                 | This portfolio                                                                 |
| Radom-Tests                                                       | README contains only repository name; insufficient project details             |
| test                                                              | README contains only repository name; insufficient project details             |
| mihon                                                             | Fork of mihonapp/mihon; not evidence of authored professional work             |
| StableCascade-NMR                                                 | Fork of Stability-AI/StableCascade; not evidence of authored professional work |
| extensions                                                        | Fork of keiyoushi/extensions                                                   |
| tachiyomi                                                         | Fork of starfish23/mangafeed                                                   |
| Web-Lab-Project                                                   | Explicit university lab project                                                |
| ADV-Networking-Lab-Project                                        | University networking coursework                                               |
| Computer_Graphics_Project_Building_City_of_Gold_using_OPENGL_glut | University project; fork                                                       |
| Automatic_Water_Dispenser_System_Using_Arduino                    | Existing university showcase; fork                                             |
| ALG-LAB-CSE266.3-Fall-2022                                        | Explicit coursework                                                            |
| PETROL_PUMP_MANAGEMENT_SYSTEM                                     | Existing university showcase; fork                                             |
| Bone-Fracture-Detection                                           | Fork; upstream README explicitly describes degree final project                |

## Social source limitations

GitHub links LinkedIn, X, and Facebook. Direct requests to these social sites were blocked by the environment's network policy (403); no employment details were inferred from them. LinkedIn and X are retained as contact links based on the GitHub profile. GitHub API access was also blocked; the public HTML listings and raw profile README were accessible.

## Editorial decisions

Removed the university project gallery, outdated student/expected-graduation introduction, percentage-like skill bars, unsupported current research claim, and link to the old resume. Existing resume and image assets remain in the repository, but are not linked from the new site.

No employer relationships, employment dates, ownership percentages, performance results, experience durations, availability claims, or graduation status were invented. Expertise remains separate from the repository-backed project summaries.

The owner has authorized using the added repositories for the portfolio. Their README files, package manifests, route structure, and representative implementation files support the summaries below. No private repository links, internal hostnames, customer records, credentials, operational screenshots, or source code are included in the site. Diagrams are conceptual flows, not screenshots. Project descriptions describe implemented capabilities without claiming independent production validation or sole authorship.

## Professional work audit

| Portfolio entry            | Evidence reviewed                                                                                | Scope retained                                                                                                                          |
| -------------------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| Mizala                     | README; frontend/package.json; catalog, order, payment, courier modules; storefront/admin routes | Storefront, CMS, checkout, bKash, courier integration, background tasks                                                                 |
| Goti · Vehicle Diagnostics | AGENTS.md (takes precedence over README); package.json; battery service; vehicle routes          | Source-aware battery data, GPS, fuel, PWA, bilingual UI; no claim that upstream sources are interchangeable failovers                   |
| GOTI ERP                   | AGENTS.md; CLAUDE.md; README; module navigation and service clients                              | Frontend for five modules; does not imply the Django backends were authored in this repo                                                |
| FloorSight                 | README; package.json; live/reports routes                                                        | Floor plans, BLE data, cold-chain telemetry, workforce reports; no deployment scale or outcome claim                                    |
| Facility Control Dashboard | README; package.json; module routes; switches API service                                        | AC, switches, temperature, energy, last-known state and confirmation patterns; customer name and facility identifiers omitted           |
| Toron                      | README; backend inventory/sync implementations; mobile/package.json                              | Distribution, warranty, serial lifecycle, mobile SQLite, delta sync; no copied test-count or production-readiness claims                |
| Asik’s World               | readme.md; package.json; admin Astro page; Worker                                                | Static catalog, owner admin, Supabase, WhatsApp workflow; no claim of production launch or measurable conversion uplift                 |
| Omilique IT                | README; package.json; i18n files and Astro page structure                                        | Bangla/English studio site, content schemas, storefront demos, contact fallback; does not claim email/storage integrations are complete |
| Smart Home Dashboard       | README; package.json; device/energy/settings routes                                              | Related dashboard entry                                                                                                                 |
| Vehicle Battery Analytics  | README; package.json; vehicle routes                                                             | Related battery analytics entry                                                                                                         |
| Smart Lighting Control     | README; package.json; dashboard/location routes                                                  | Related device-control entry; no deployment-status claim; framework version omitted because README is stale                             |
| AC Power & Temperature     | README; package.json                                                                             | Related React dashboard entry; no copied customer/site specifics                                                                        |
| Asset Tracker              | README; package.json; dashboard routes                                                           | Explicitly labeled prototype with simulated data, not a live fleet deployment                                                           |
| Profile                    | README                                                                                           | Personal bio and self-described technology interests, not a project                                                                     |
| Omitted                    | Verified empty repository with unborn main                                                       | No project claims can be established                                                                                                    |

### Validation boundary

The portfolio itself is browser-tested. The source projects are inspected as evidence only: their servers, private APIs, hardware controls, payments, deployment workflows, and test suites were not executed. Do not read this audit as independent certification of those systems. Employment history and exact contribution roles would require additional owner-provided information before adding those claims.

## Public naming and contact protection

Internal project identifiers are omitted from project labels and this audit. Descriptive titles are used for the smart home, battery analytics, and lighting-control projects.

The contact address is absent from initial HTML and stored obfuscated in the client script. It becomes a usable email link only after the visitor activates the reveal button. Keyboard users receive focus on the revealed link; without JavaScript, the page offers LinkedIn as a fallback. This deters basic source-only scrapers, not determined crawlers or browser automation. It cannot retract an address already available in prior commits, an old resume, or other public profiles. No server-side bot challenge or hosted contact form is configured.
