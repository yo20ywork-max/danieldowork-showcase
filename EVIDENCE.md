# Evidence and Technical Scope

## Runnable source excerpt

`examples/classify.ts` is derived from `overpower-app/src/lib/import/classify.ts` in the private DanielDoWork web repository (source blob `24ca3064e53096d2af7b3fac13357d424b45a1f3`). The only adaptation replaces its application-specific type import with the equivalent output union needed by this standalone example. It contains header-matching rules, not customer spreadsheet rows.

The original module chooses a template from spreadsheet headers, then falls back to the sheet name. The example makes those deterministic decisions inspectable without exposing the application's data or service connections.

```bash
npm ci
npm run demo
```

The newly added demonstration inputs are synthetic. See [validation](VALIDATION.md) for the actual execution result. This example validates the selected module only; it does not validate spreadsheet authorization, full import/export, AI integrations, or the deployed product.

[Public product](https://www.danieldowork.com) · [Companion AI infrastructure presentation](https://github.com/yo20ywork-max/danieldowork-ai-showcase)

## Product relationship

DanielDoWork is my first major software project and largest investment of personal effort and self-funded development. The web application and AI services are two technical components of that same product.

## Architecture walkthrough

The [README](README.md) explains the product concept, request flow, task execution, and component boundaries. The [source review map](SOURCE_REVIEW.md) identifies the fixed implementation snapshots used for that explanation. This additional documentation does not expand the scope of the executable validation recorded above.
