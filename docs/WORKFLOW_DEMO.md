# Recorded Workflow: LINE to Meta Post Preparation

[Back to the README](../README.md#recorded-workflow-demo) · [Open the recording](../assets/danieldowork-workflow-demo-2026-05-18.mp4?raw=true)

## Scenario

The user asks through LINE for four social posts about DanielDoWork's website and AI services, with scheduling. The recording follows the visible browser workflow and progress messages.

The source recording's metadata and desktop clock identify 18 May 2026. Its exact source-code commit was not established. It therefore supplements the architecture walkthrough as historical UI evidence rather than proving which current source snapshot or production deployment was used.

## Visible sequence

| Time | Observation | Evidence boundary |
|---|---|---|
| 00:00–00:10 | The LINE request appears and a corresponding task prompt is visible in the ChatGPT conversation | Shows the request and planning context; internal transport is not visible |
| Around 01:40 | ChatGPT displays structured content with post topics, image prompts, captions, and related fields | A visible planning output, not a measurement of parser correctness |
| Around 03:00 | Multiple image-generation browser windows are open; LINE reports four queued image tasks | The queue count is a system-reported status; no scheduler trace is shown |
| Around 04:20 | Meta Business Suite post editors open | Demonstrates interaction with the destination interface |
| Around 05:20 | A composer shows populated caption text and an image preview begins loading | Directly visible preparation of post material |
| 05:30–05:54 | Image previews, scheduling controls, and LINE messages requesting review are visible | The recording ends before a confirmed final publish/schedule action |

The original request, model response, browser windows, post previews, and LINE feedback form the visible workflow. The recording is consistent with the product's conversation-to-execution concept. It does not identify every internal adapter or prove that a particular DOM implementation handled each action.

## What this contributes

- A concrete business task connected to the product architecture.
- Browser-based planning and image generation followed by preparation in a separate destination application.
- Progress feedback and an explicit human-review boundary before final submission.
- Historical implementation evidence alongside the public code excerpts and source review map.

## What remains unverified by this recording

Final publication, persistence of all four schedules, date/time conversion correctness, repeated-run reliability, and recovery after failures are not established here. The recording does not demonstrate a Claude or Gemini fallback executing, and it does not establish the account tier or cost of provider access.

AI-generated marketing copy appears inside the demonstration. Statements in that copy about product functionality, privacy, or security are generated content, not independent validation of those claims.

## Public video preparation

| Property | Public copy |
|---|---|
| Duration | Approximately 5 minutes 54 seconds |
| Resolution | 1594 × 640 |
| Video | H.264, 12 frames per second |
| Audio | Omitted; the source track has no audible narration |
| Size | 3,741,948 bytes |
| Spatial edit | Removed the top browser/address-bar area and bottom desktop taskbar |
| Temporal edit | No sections removed or sped up; normal frame-rate resampling and compression |
| Preview image | Frame at approximately 05:30 from the public copy |

The original uploaded recording remains separate from this public copy.

Public video SHA-256:

```text
06b8ef1d9ec9797f4cd96f58082a6d65fd5c63821f4f06c471e244d216bd585a
```

[Source excerpt validation](../VALIDATION.md) · [Architecture source review](../SOURCE_REVIEW.md)
