const BF16_BASE_URL = 'https://api.bf16.ai/v1';

const BF16_MODELS = [
  {
    id: 'moonshotai/kimi-k3.1-pro-uncensored',
    label: 'Kimi K3.1 Pro 2.8T (1M · $2.90/$9.90)',
  },
  {
    id: 'deepseek/deepseek-v4.1-flash-uncensored-fast',
    label: 'DeepSeek V4.1 Flash Fast (1M · $0.28/$1.12)',
  },
  {
    id: 'deepseek/deepseek-v4.1-flash-uncensored',
    label: 'DeepSeek V4.1 Flash (1M · $0.26/$1.00)',
  },
  {
    id: 'zai-org/glm-5.3-uncensored',
    label: 'GLM-5.3 Flagship (1M · $1.35/$4.20)',
  },
  {
    id: 'zai-org/glm-5.3-flash-uncensored',
    label: 'GLM-5.3 Flash (1M · $0.30/$1.12)',
  },
];

function applyBf16Preset(modelId) {
  const sourceSelect = document.querySelector('#chat_completion_source');
  if (sourceSelect) {
    sourceSelect.value = 'custom';
    sourceSelect.dispatchEvent(new Event('change', { bubbles: true }));
  }

  const endpointInput = document.querySelector('#custom_api_url_text');
  if (endpointInput) {
    endpointInput.value = BF16_BASE_URL;
    endpointInput.dispatchEvent(new Event('input', { bubbles: true }));
    endpointInput.dispatchEvent(new Event('change', { bubbles: true }));
  }

  const modelInput = document.querySelector('#custom_model_id');
  if (modelInput) {
    modelInput.value = modelId;
    modelInput.dispatchEvent(new Event('input', { bubbles: true }));
    modelInput.dispatchEvent(new Event('change', { bubbles: true }));
  }

  const statusEl = document.querySelector('#bf16_st_status');
  if (statusEl) {
    statusEl.textContent = `Applied ${modelId} → ${BF16_BASE_URL}. Paste your sk-bf16-v1-... key and click Connect.`;
  }
}

function mountPanel() {
  const container =
    document.querySelector('#extensions_settings2') ||
    document.querySelector('#extensions_settings');
  if (!container || document.querySelector('#bf16_st_drawer')) return;

  const wrapper = document.createElement('div');
  wrapper.id = 'bf16_st_drawer';
  wrapper.className = 'inline-drawer';
  wrapper.innerHTML = `
    <div class="inline-drawer-toggle inline-drawer-header">
      <b>bf16.ai — 1M Context Uncensored Models</b>
      <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
    </div>
    <div class="inline-drawer-content bf16-st-panel">
      <div class="bf16-st-status" id="bf16_st_status">
        One-click preset for Custom (OpenAI-compatible) at <code>https://api.bf16.ai/v1</code> (1M context · Strict ZDR).
      </div>
      <div class="bf16-st-models" id="bf16_st_buttons"></div>
      <div class="bf16-st-status">
        Need an API key? <a href="https://bf16.ai/docs/clients/sillytavern" target="_blank" rel="noopener">Get $0.20 free starter credit at bf16.ai</a>
      </div>
    </div>
  `;

  const btnRow = wrapper.querySelector('#bf16_st_buttons');
  for (const model of BF16_MODELS) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'bf16-st-btn';
    btn.textContent = model.label;
    btn.addEventListener('click', () => applyBf16Preset(model.id));
    btnRow.appendChild(btn);
  }

  container.appendChild(wrapper);
}

if (typeof jQuery !== 'undefined') {
  jQuery(() => mountPanel());
} else {
  document.addEventListener('DOMContentLoaded', mountPanel);
}
