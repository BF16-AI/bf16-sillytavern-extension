# bf16.ai Extension for SillyTavern

One-click preset extension connecting **SillyTavern** to [**bf16.ai**](https://bf16.ai) — 1M-context uncensored frontier models with strict Zero Data Retention (ZDR) and pay-as-you-go pricing below official rates.

## Install in SillyTavern (10 Seconds)

1. Open **SillyTavern** → **Extensions** (stacked blocks icon) → **Install Extension**.
2. Paste this repository URL:
   ```
   https://github.com/BF16-AI/bf16-sillytavern-extension
   ```
3. Reload SillyTavern, open **Extensions → bf16.ai — 1M Context Uncensored Models**, and click any model preset.
4. Paste your `sk-bf16-v1-...` API key under **API Connections → Custom API Key** and click **Connect**.

## Supported 1M-Context Models

| Model ID | Context | Input / Cached / Output (per 1M) | Best For |
| :--- | :---: | :---: | :--- |
| `moonshotai/kimi-k3.1-pro-uncensored` | 1M | `$2.90 / $0.45 / $9.90` | 2.8T MoE literary prose & deep world-building |
| `deepseek/deepseek-v4.1-flash-uncensored-fast` | 1M | `$0.28 / $0.055 / $1.12` | Ultra-fast interactive multi-turn prototyping |
| `deepseek/deepseek-v4.1-flash-uncensored` | 1M | `$0.26 / $0.045 / $1.00` | High-volume long-lorebook continuity |
| `zai-org/glm-5.3-uncensored` | 1M | `$1.35 / $0.25 / $4.20` | Structured dialogue & multi-step reasoning |
| `zai-org/glm-5.3-flash-uncensored` | 1M | `$0.30 / $0.065 / $1.12` | Fast multimodal text + image turns |

## Manual Configuration (Without Extension)

- **API**: Chat Completion
- **Chat Completion Source**: `Custom (OpenAI-compatible)`
- **Custom Endpoint (Server URL)**: `https://api.bf16.ai/v1` (do **not** append `/chat/completions`)
- **Full Illustrated Guide**: https://bf16.ai/docs/clients/sillytavern

## Privacy & Security

- Zero prompt logging or retention on bf16.ai (strict ZDR).
- All character cards, lorebooks, and chat logs stay strictly on your local machine.
- License: MIT
