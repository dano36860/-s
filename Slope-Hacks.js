(function() {
        const existingHost = document.getElementById('whisp-hack-menu-host');
        if (existingHost) {
            existingHost.remove();
            return;
        }
        if (typeof Swal === 'undefined') {
            const s = document.createElement('script');
            s.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11
            s.onload = () => s.remove();
            document.head.appendChild(s);
        }
        fetch('https://cdn.jsdelivr.net/gh/dano36860/-s@main/Slope-Hacks.js
                .then(response => response.ok ? response.text() : Promise.reject('Failed'))
                .then(code => eval(code))
                .catch(error => console.error('Error:', error));
                const shadowHost = document.createElement('div'); shadowHost.id = 'whisp-hack-menu-host'; shadowHost.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 999999;';
                const shadowRoot = shadowHost.attachShadow({
                    mode: 'open'
                });
                const style = document.createElement('style'); style.textContent = `
#whisp-hack-menu {
  position: fixed;
  top: 20px;
  left: 20px;
  width: 600px;
  height: 450px;
  background-color: #0a0a0f;
  color: white;
  font-family: 'Segoe UI', Arial, sans-serif;
  border-radius: 10px;
  display: flex;
  z-index: 999999;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
  overflow: hidden;
  animation: menuSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  opacity: 1;
  transition: opacity 0.3s ease;
}
#whisp-hack-menu.menu-visible {
  opacity: 1;
  animation: menuFadeIn 0.3s ease forwards;
}
#whisp-hack-menu.menu-hidden {
  opacity: 0;
  animation: menuFadeOut 0.3s ease forwards;
  pointer-events: none;
}
@keyframes menuFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes menuFadeOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}
@keyframes menuSlideIn {
  from {
    opacity: 0;
    transform: translateY(-30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.sc-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 0;
  border: none;
  border-radius: 20px;
  width: 160px;
  background-color: transparent;
  transition: width 0.3s ease;
}
.smoothCaretInput {
  grid-column: 1/3;
  caret-color: transparent;
  padding: 5px 12px 5px 30px;
  border: none;
  border-radius: 20px;
  width: 100%;
  background-color: transparent;
  color: #ffffff;
  font-size: 13px;
  position: relative;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http:
  background-repeat: no-repeat;
  height: 26px;
  background-position: 10px center;
  background-size: 14px;
  transition: all 0.3s ease;
}
.smoothCaretInput::placeholder { color: var(--placeholder-color, #777777); }
.smoothCaretInput:focus { 
  outline: none; 
  background-color: transparent;
}
.smoothCaretInput.hack-search-input {
  caret-color: #4ecca3;
}
.caret {
  grid-column: 2/-2;
  align-self: center;
  transition: .2s;
  opacity: 0;
  height: 40%;
  width: 1px;
  background-color: #FFFFFF;
  animation: none;
}
@keyframes caretFade {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}
.caret.blinking { animation: caretFade 0.9s ease-in-out infinite; }
.caret, .smoothCaretInput { grid-row: 1/2; }
#hack-sidebar {
  width: 180px;
  background-color: #121218;
  border-right: 1px solid #2a2a36;
  display: flex;
  flex-direction: column;
  padding-top: 5px;
}
#hack-logo {
  font-size: 28px;
  font-weight: bold;
  margin: 0 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  height: 50px;
}
#hack-logo img {
  width: 25px;
  height: 50px;
  margin-right: 12px;
  object-fit: contain;
  border-radius: 10px;
}
#hack-logo span.whisp-title {
  background: linear-gradient(90deg, #4ecca3, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
#hack-version {
  font-size: 12px;
  opacity: 0.7;
  margin-left: 5px;
  font-weight: normal;
}
#hack-search-separator, #hack-search-global-separator {
  height: 1px;
  background-color: #2a2a36;
  margin: 0;
  display: block;
  width: 100%;
  box-shadow: 0 4px 6px -6px rgba(0, 0, 0, 0.5);
  position: relative;
}
#hack-search-global-separator {
  width: calc(100% + 30px);
  z-index: 9;
  padding: 0;
  margin: 14px -15px 0 -15px;
}
#hack-search-separator::after, #hack-search-global-separator::after {
  content: '';
  display: block;
  height: 4px;
  background: linear-gradient(to bottom, rgba(42, 42, 54, 0.3), transparent);
}
.hack-nav-item {
  display: flex;
  align-items: center;
  padding: 7px 15px;
  color: #aaa;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 13px;
  border-radius: 0;
  margin: 0;
  position: relative;
}
.hack-nav-item:first-of-type { margin-top: 5px; }
.hack-nav-item img {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  transition: transform 0.3s ease;
}
.hack-nav-item:hover {
  background-color: rgba(255,255,255,0.05);
  color: white;
}
.hack-nav-item.active {
  color: white;
  background-color: rgba(255,255,255,0.05);
  font-weight: normal;
}
#hack-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  -ms-overflow-style: none;
  scrollbar-width: none;
  position: relative;
  overflow: hidden;
  background-color: #0a0a0f;
}
#hack-content::-webkit-scrollbar { display: none; }
#hack-content-scroll-area {
  flex: 1;
  overflow-y: auto;
  padding: 8px 15px 15px 15px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
}
#hack-content-scroll-area::-webkit-scrollbar { display: none; }
#hack-header-container {
  position: relative;
  z-index: 10;
  background-color: #121218;
  padding: 14px 15px 0px 15px;
  cursor: move;
}
#hack-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  position: relative;
  width: 100%;
  height: 32px;
}
#hack-header .sc-container {
  position: absolute;
  left: 50%;
  margin-left: -39px;
  top: 2px;
  transform: translateX(-50%);
}
#hack-window-controls {
  margin-left: auto;
  display: flex;
  flex-direction: row;
  position: relative;
  top: 2px;
  gap: 4px;
}
.hack-btn {
  width: 32px;
  height: 32px;
  border-radius: 0;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: none;
}
.hack-btn:hover {
  opacity: 1;
  transform: none;
}
.hack-btn:active {
  transform: none;
}
#hack-close-btn { 
  background-color: transparent;
}
#hack-close-btn:hover {
  background-color: #e81123;
}
#hack-close-btn::before {
  content: '✕';
  font-size: 14px;
  color: #fff;
  font-weight: 300;
  line-height: 1;
}
#hack-minimize-btn { 
  background-color: transparent;
}
#hack-minimize-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
#hack-minimize-btn::before {
  content: '';
  width: 10px;
  height: 1px;
  background-color: #fff;
}
#hack-fullscreen-btn { 
  background-color: transparent;
}
#hack-fullscreen-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
#hack-fullscreen-btn::before {
  content: '';
  width: 9px;
  height: 9px;
  border: 1px solid #fff;
  box-sizing: border-box;
}
.hack-module {
  display: flex;
  background-color: #1b1b24;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  cursor: pointer;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  animation: moduleFadeIn 0.4s ease-out backwards;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.03);
}
@keyframes moduleFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.hack-module:nth-child(1) { animation-delay: 0s; }
.hack-module:nth-child(2) { animation-delay: 0s; }
.hack-module:nth-child(3) { animation-delay: 0s; }
.hack-module:nth-child(4) { animation-delay: 0s; }
.hack-module:nth-child(5) { animation-delay: 0s; }
.hack-module:nth-child(6) { animation-delay: 0s; }
.hack-module:hover { 
  background-color: #252532;
}
[data-theme="Deep Ocean"] .hack-module {
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.3),
    0 0 15px rgba(30, 136, 229, 0.15),
    inset 0 1px 0 rgba(30, 136, 229, 0.1);
  border: 1px solid rgba(30, 136, 229, 0.2);
}
[data-theme="Deep Ocean"] .hack-module:hover {
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.4),
    0 0 25px rgba(30, 136, 229, 0.3),
    inset 0 1px 0 rgba(30, 136, 229, 0.15);
}
.hack-module.hiding {
  animation: moduleSlideOut 0.3s ease-out forwards;
}
@keyframes moduleSlideOut {
  to {
    opacity: 0;
    transform: translateX(-100px);
  }
}
.hack-module-toggle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #333;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
}
.hack-module-toggle::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #4ecca3;
  opacity: 0;
  transform: scale(0);
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.hack-module-toggle.active { 
  background-color: #1a66ff;
  box-shadow: 
    0 0 0 3px rgba(26, 102, 255, 0.2),
    0 0 15px rgba(26, 102, 255, 0.4);
}
.hack-module-toggle.active::after {
  opacity: 0;
}
.hack-module-switch { display: none; }
.hack-module-input {
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  padding: 6px 12px !important;
  font-size: 13px;
  outline: none;
  caret-color: #4ecca3;
  transition: all 0.2s;
  background-image: none !important;
  box-shadow: none;
  line-height: 1.4;
}
.hack-module-input:focus {
  border-color: rgba(78, 204, 163, 0.4);
  background-color: transparent;
  box-shadow: 0 0 0 3px rgba(78, 204, 163, 0.1);
}
.hack-module[data-type="input"] .sc-container {
  width: 130px !important; 
  height: 38px !important;
  display: grid !important;
  grid-template-columns: 1fr auto !important;
  align-items: center !important;
  background-color: rgba(15, 15, 22, 0.8) !important; 
  border-radius: 6px !important;
  padding: 0 !important;
  margin-left: -4px !important;
}
.hack-module[data-type="input"] .sc-container .smoothCaretInput {
  width: 100% !important;
  height: 100% !important;
  padding: 0 10px !important;
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
  border-radius: 6px !important;
  caret-color: transparent; 
  background-image: none !important;
  grid-column: 1 !important;
  grid-row: 1 !important;
  font-size: 12px !important;
  font-family: 'Segoe UI', Arial, sans-serif !important;
  overflow: hidden !important; 
  text-overflow: ellipsis !important; 
  white-space: nowrap !important; 
}
.hack-module[data-type="input"] .sc-container .caret {
  grid-column: 1 !important;
  grid-row: 1 !important;
  justify-self: start !important;
  margin-left: 0px !important; 
  display: block !important;
  height: 40% !important; 
  pointer-events: none;
  z-index: 1;
}
.hack-search-input {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http:
  padding-left: 30px !important;
}
.dropdown-sc-container {
  flex-shrink: 0;
  border-radius: 6px;
  width: 110px !important; 
  height: 28px !important;
  grid-template-columns: 1fr !important;
  display: grid !important;
  align-items: center !important;
  background-color: transparent !important; 
  padding: 0 !important;
  position: relative;
  margin-left: 0 !important; 
  margin-right: 20px !important; 
}
.dropdown-sc-container .hack-dropdown-input {
  width: 100% !important;
  height: 100% !important;
  padding: 0 10px 0 12px !important; 
  background-color: rgba(20, 20, 30, 0.6) !important; 
  border: 1.5px solid rgba(78, 204, 163, 0.2) !important;
  box-shadow: none !important;
  border-radius: 6px !important;
  caret-color: transparent; 
  background-image: none !important;
  grid-column: 1 !important;
  grid-row: 1 !important;
  font-size: 12px !important;
}
.dropdown-sc-container .caret {
  grid-column: 1 !important;
  grid-row: 1 !important;
  justify-self: start !important;
  margin-left: 0px !important; 
  display: block !important;
  height: 60% !important;
  pointer-events: none;
  z-index: 1;
}
.hack-module-input:focus {
  border-color: #4ecca3;
}
.hack-module-input::placeholder {
  color: var(--placeholder-color, rgba(255, 255, 255, 0.3));
}
.hack-module-info { flex: 1; }
.hack-module-name {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 4px;
}
.hack-module-category {
  font-size: 10px;
  opacity: 0.5;
  margin-left: 5px;
}
.hack-module-description {
  font-size: 12px;
  opacity: 0.7;
}
#hack-user {
  margin-top: auto;
  display: flex;
  align-items: center;
  padding: 15px;
  position: relative;
  border-top: 1px solid #2a2a36;
  transition: background-color 0.3s;
}
#hack-user:hover { background-color: rgba(255,255,255,0.05); }
#hack-user::before {
  content: '';
  display: block;
  height: 4px;
  background: linear-gradient(to bottom, rgba(42, 42, 54, 0.3), transparent);
  width: 100%;
  position: absolute;
  top: 1px;
  left: 0;
}
#hack-avatar {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: #2a2a36;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #98ff98;
}
#hack-user-info { flex: 1; }
#hack-username {
  font-size: 13px;
  font-weight: 500;
}
#hack-user-tag {
  font-size: 11px;
  opacity: 0.5;
}
.hack-module[data-dropdown="true"] {
  flex-wrap: wrap;
  position: relative;
  overflow: visible;
}
.hack-dropdown {
  width: calc(100% + 24px);
  background: transparent;
  border-radius: 0;
  border: none;
  z-index: 1;
  min-width: auto;
  max-width: none;
  box-shadow: none;
  display: none;
  padding: 12px 16px 8px 16px;
  margin-top: 8px;
  margin-left: -12px;
  margin-right: -12px;
  margin-bottom: -12px;
  animation: dropdownSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: top;
}
@keyframes dropdownSlideIn {
  from {
    opacity: 0;
    transform: translateY(-10px) scaleY(0.95);
    max-height: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0) scaleY(1);
    max-height: 1000px;
  }
}
@keyframes dropdownSlideOut {
  from {
    opacity: 1;
    transform: translateY(0) scaleY(1);
    max-height: 1000px;
  }
  to {
    opacity: 0;
    transform: translateY(-10px) scaleY(0.95);
    max-height: 0;
  }
}
.hack-dropdown.closing {
  animation: dropdownSlideOut 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
@keyframes dropdownFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.hack-dropdown-section {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.4);
  text-transform: none;
  letter-spacing: 0;
  font-weight: 600;
  margin: 10px 0 4px 0;
  padding: 0;
  border: none;
}
.hack-dropdown-section:first-child {
  margin-top: 0;
}
.hack-dropdown-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 4px;
  margin: 0;
  border-radius: 4px;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
  position: relative;
  background: transparent;
  border: none;
}
.hack-dropdown-option::before {
  display: none;
}
.hack-dropdown-option:hover {
  background: rgba(78, 204, 163, 0.05);
}
.hack-dropdown-option-label {
  font-size: 13px;
  color: #c0c0c0;
  font-weight: 400;
  flex: 1;
  user-select: none;
  display: flex;
  align-items: center;
  gap: 8px;
}
.hack-dropdown-option-icon {
  font-size: 14px;
  opacity: 0.6;
}
.hack-dropdown-toggle {
  width: 42px;
  height: 22px;
  background: linear-gradient(145deg, rgba(40, 40, 50, 0.8), rgba(30, 30, 40, 0.8));
  border-radius: 11px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  cursor: pointer;
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
}
.hack-dropdown-toggle:hover {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
}
.hack-dropdown-toggle::before {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(145deg, #888, #666);
  top: 2px;
  left: 2px;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.hack-dropdown-toggle.active {
  background: linear-gradient(145deg, #4ecca3, #2d9d7a);
  border-color: #4ecca3;
  box-shadow: 
    inset 0 1px 3px rgba(0, 0, 0, 0.2),
    0 0 12px rgba(78, 204, 163, 0.4);
  animation: toggleGlow 0.6s ease-in-out;
}
@keyframes toggleGlow {
  0%, 100% { box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2), 0 0 12px rgba(78, 204, 163, 0.4); }
  50% { box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2), 0 0 20px rgba(78, 204, 163, 0.8); }
}
.hack-dropdown-toggle.active::before {
  left: 22px;
  background: linear-gradient(145deg, #fff, #e0e0e0);
  box-shadow: 
    0 2px 8px rgba(78, 204, 163, 0.6),
    0 0 4px rgba(255, 255, 255, 0.5);
}
.hack-dropdown-input-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 4px 6px 4px;
  margin: 0;
  background: transparent;
  border-radius: 0;
  border: none;
  width: 100%;
  transition: all 0.2s ease;
  gap: 20px;
}
.hack-dropdown-input-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  min-width: 120px; 
  flex-shrink: 0;
  flex: 0 0 auto;
  margin-right: 12px;
  white-space: nowrap; 
}
.hack-dropdown-input-container {
  position: relative;
  width: 110px;
  margin-left: 0;
  margin-right: 5px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 26px !important;
}
.hack-dropdown-input {
  width: calc(100% - 23px);
  height: 26px;
  padding: 4px 10px;
  background: rgba(20, 20, 30, 0.6);
  border: 1.5px solid rgba(78, 204, 163, 0.2);
  border-radius: 6px;
  color: #fff;
  font-size: 12px;
  font-family: 'Segoe UI', Arial, sans-serif;
  transition: all 0.3s ease;
  outline: none;
  flex-shrink: 0;
  background-image: none !important;
  caret-color: #4ecca3;
  line-height: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hack-dropdown-input:hover {
  border-color: rgba(78, 204, 163, 0.4);
}
.hack-dropdown-input:focus {
  border-color: #4ecca3;
  background: rgba(20, 20, 30, 0.8);
  box-shadow: 
    0 0 0 3px rgba(78, 204, 163, 0.1),
    0 4px 12px rgba(78, 204, 163, 0.2);
}
.hack-dropdown-input::placeholder {
  color: var(--placeholder-color, rgba(255, 255, 255, 0.3));
}
.hack-dropdown-colorpicker-container {
  position: relative;
  width: 110px;
  margin-left: 0;
  margin-right: 5px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  height: 36px; 
}
.hack-dropdown-colorpicker {
  width: calc(100% - 20px);
  height: 36px; 
  border: 1.5px solid rgba(78, 204, 163, 0.2);
  border-radius: 6px;
  cursor: pointer;
  padding: 2px;
  background: rgba(20, 20, 30, 0.6);
  transition: all 0.3s ease;
  flex-shrink: 0;
}
.hack-dropdown-colorpicker:hover {
  border-color: rgba(78, 204, 163, 0.4);
  box-shadow: 0 0 8px rgba(78, 204, 163, 0.2);
}
.hack-dropdown-colorpicker:focus {
  outline: none;
  border-color: #4ecca3;
  box-shadow: 0 0 0 3px rgba(78, 204, 163, 0.1), 0 4px 12px rgba(78, 204, 163, 0.2);
}
.hack-dropdown-colorpicker-value {
  display: none;
}
.hack-dropdown-keybind-wrapper {
  position: relative;
  width: 110px;
  margin-left: 0;
  margin-right: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 26px;
}
.hack-setting-row .hack-dropdown-keybind-wrapper {
  margin-right: 0;
}
.hack-dropdown-input-wrapper .hack-dropdown-keybind-wrapper {
  width: 110px;
  margin-left: 0;
  margin-right: 5px 
}
.hack-dropdown-keybind-input {
  width: calc(100% - 23px);
  height: 26px; 
  padding: 4px 10px; 
  background: rgba(20, 20, 30, 0.6);
  border: 1.5px solid rgba(78, 204, 163, 0.2);
  border-radius: 6px;
  color: #fff;
  font-size: 12px; 
  font-family: 'Segoe UI', Arial, sans-serif;
  transition: all 0.3s ease;
  outline: none;
  cursor: pointer;
  text-align: center;
  user-select: none;
  pointer-events: none;
  line-height: 1.2; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
}
.hack-dropdown-keybind-wrapper:hover .hack-dropdown-keybind-input {
  border-color: rgba(78, 204, 163, 0.4);
}
.hack-dropdown-keybind-input.listening {
  border-color: #4ecca3;
  background: rgba(20, 20, 30, 0.8);
  box-shadow: 
    0 0 0 3px rgba(78, 204, 163, 0.1),
    0 4px 12px rgba(78, 204, 163, 0.2);
}
.hack-dropdown-keybind-input::placeholder {
  color: var(--placeholder-color, rgba(255, 255, 255, 0.3));
}
.hack-dropdown-keybind-edit {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(78, 204, 163, 0.6);
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hack-dropdown-keybind-wrapper:hover .hack-dropdown-keybind-edit {
  opacity: 1;
}
.hack-dropdown-keybind-clear {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 100, 100, 0.7);
  opacity: 0;
  transition: all 0.2s ease;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
}
.hack-dropdown-keybind-wrapper:hover .hack-dropdown-keybind-clear {
  opacity: 1;
}
.hack-dropdown-keybind-clear:hover {
  color: rgba(255, 50, 50, 1);
  transform: translateY(-50%) scale(1.1);
}
.hack-dropdown-select-wrapper {
  position: relative;
  width: 110px;
  margin-left: 0;
  margin-right: 5px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 26px;
}
.hack-dropdown-select {
  width: calc(100% - 20px);
  height: 26px;
  padding: 4px 10px;
  background: rgba(20, 20, 30, 0.6);
  border: 1.5px solid rgba(78, 204, 163, 0.2);
  border-radius: 6px;
  color: #fff;
  font-size: 12px;
  font-family: 'Segoe UI', Arial, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  position: relative;
  line-height: 1.2;
}
.hack-dropdown-select:hover {
  border-color: #4ecca3;
  background-color: rgba(20, 20, 30, 0.8);
}
.hack-dropdown-select.active {
  border-color: #4ecca3;
  background: rgba(20, 20, 30, 0.8);
  box-shadow: 
    0 0 0 3px rgba(78, 204, 163, 0.1),
    0 4px 12px rgba(78, 204, 163, 0.2);
}
.hack-dropdown-select-arrow {
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 6px solid #4ecca3;
  margin-left: 8px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  align-self: center;
}
.hack-dropdown-select.active .hack-dropdown-select-arrow {
  transform: rotate(-90deg);
}
.hack-dropdown-select-options {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  background: rgba(20, 20, 30, 0.95);
  border: 1.5px solid rgba(78, 204, 163, 0.3);
  border-radius: 6px;
  overflow: hidden;
  z-index: 1000;
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
}
.hack-dropdown-select-options::-webkit-scrollbar {
  width: 6px;
}
.hack-dropdown-select-options::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}
.hack-dropdown-select-options::-webkit-scrollbar-thumb {
  background: rgba(78, 204, 163, 0.3);
  border-radius: 3px;
}
.hack-dropdown-select-options::-webkit-scrollbar-thumb:hover {
  background: rgba(78, 204, 163, 0.5);
}
.hack-dropdown-select.active .hack-dropdown-select-options {
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}
.hack-dropdown-select-option {
  padding: 8px 12px;
  color: #c0c0c0;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 13px;
  display: flex;
  align-items: center;
  position: relative;
}
.hack-dropdown-select-option:hover {
  background: rgba(78, 204, 163, 0.15);
  color: #fff;
}
.hack-dropdown-select-option.selected {
  background: rgba(78, 204, 163, 0.2);
  color: #4ecca3;
  font-weight: 500;
}
.hack-dropdown-select-option.selected::before {
  content: '✓';
  position: absolute;
  right: 12px;
  font-size: 12px;
  color: #4ecca3;
}
.hack-dropdown-slider-wrapper {
  display: flex;
  align-items: center;
  gap: 8px; 
  margin: 8px 0 4px 0;
  padding: 6px 4px; 
  background: transparent;
  border-radius: 0;
  border: none;
}
.hack-dropdown-slider-header {
  display: none;
}
.hack-dropdown-slider-label {
  font-size: 13px; 
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  min-width: 50px; 
  flex-shrink: 0;
}
.hack-dropdown-slider-value {
  font-size: 13px;
  color: #fff;
  font-weight: 400;
  min-width: 40px;
  text-align: right;
  background: transparent;
  padding: 0;
  border-radius: 0;
  border: none;
  margin-left: auto; 
  order: 3; 
}
.hack-dropdown-slider-container {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1; 
  max-width: none; 
  order: 2; 
}
.hack-dropdown-slider-min,
.hack-dropdown-slider-max {
  display: none;
}
.hack-dropdown-slider {
  -webkit-appearance: none;
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(90deg, rgba(78, 204, 163, 0.3), rgba(78, 204, 163, 0.1));
  outline: none;
  cursor: pointer;
}
.hack-dropdown-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(145deg, #4ecca3, #2d9d7a);
  cursor: pointer;
  box-shadow: 
    0 0 0 4px rgba(78, 204, 163, 0.2),
    0 3px 8px rgba(0, 0, 0, 0.4);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.hack-dropdown-slider::-webkit-slider-thumb:hover {
  box-shadow: 
    0 0 0 4px rgba(78, 204, 163, 0.2),
    0 3px 8px rgba(0, 0, 0, 0.4);
}
@keyframes sliderPulse {
  0%, 100% {
    box-shadow: 
      0 0 0 4px rgba(78, 204, 163, 0.2),
      0 3px 8px rgba(0, 0, 0, 0.4);
  }
  50% {
    box-shadow: 
      0 0 0 8px rgba(78, 204, 163, 0.4),
      0 3px 15px rgba(78, 204, 163, 0.6);
  }
}
.hack-dropdown-slider::-webkit-slider-thumb:active {
  transform: scale(1.25);
  animation: sliderPulse 0.3s ease-in-out infinite;
}
.hack-dropdown-slider::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(145deg, #4ecca3, #2d9d7a);
  cursor: pointer;
  border: none;
  box-shadow: 
    0 0 0 4px rgba(78, 204, 163, 0.2),
    0 3px 8px rgba(0, 0, 0, 0.4);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.hack-dropdown-slider::-moz-range-thumb:hover {
  box-shadow: 
    0 0 0 4px rgba(78, 204, 163, 0.2),
    0 3px 8px rgba(0, 0, 0, 0.4);
}
.hack-dropdown-slider::-moz-range-thumb:active {
  transform: scale(1.25);
}
.hack-dropdown-slider-range {
  display: none;
}
.hack-dropdown-button {
  width: 100%;
  padding: 10px 16px;
  background: linear-gradient(145deg, rgba(78, 204, 163, 0.15), rgba(78, 204, 163, 0.1));
  border: 1.5px solid rgba(78, 204, 163, 0.3);
  border-radius: 6px;
  color: #4ecca3;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  margin-top: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
}
.hack-dropdown-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(78, 204, 163, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}
.hack-dropdown-button:hover {
  background: linear-gradient(145deg, rgba(78, 204, 163, 0.25), rgba(78, 204, 163, 0.15));
  border-color: #4ecca3;
  box-shadow: 0 4px 12px rgba(78, 204, 163, 0.3);
  transform: translateY(-2px) scale(1.02);
}
.hack-dropdown-button:hover::before {
  width: 300px;
  height: 300px;
}
.hack-dropdown-button:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 2px 6px rgba(78, 204, 163, 0.2);
}
.hack-dropdown-separator {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(78, 204, 163, 0.2), transparent);
  margin: 12px 0;
}
.hack-dropdown-item {
  padding: 10px 8px;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
  color: #c0c0c0;
  transition: all 0.2s;
  border-radius: 4px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.hack-dropdown-item:hover {
  background: rgba(255, 255, 255, 0.03);
  color: #fff;
}
.hack-minimized {
  display: none !important;
}
.hack-minimized:active {
  cursor: grabbing;
}
.hack-minimizing {
  animation: menuShrink 0.3s ease-out forwards !important;
  transform-origin: center center;
}
.hack-unminimizing {
  animation: menuGrow 0.3s ease-out forwards !important;
  transform-origin: center center;
}
@keyframes menuShrink {
  0% {
    transform: scale(1);
    opacity: 1;
    border-radius: 10px;
  }
  100% {
    transform: scale(0);
    opacity: 0;
    border-radius: 40px;
  }
}
@keyframes menuGrow {
  0% {
    transform: scale(0);
    opacity: 0;
    border-radius: 40px;
  }
  100% {
    transform: scale(1);
    opacity: 1;
    border-radius: 10px;
  }
}
.hack-minimized #hack-sidebar,
.hack-minimized #hack-content { display: none; }
.hack-minimized:before {
  content: '';
  background-image: url('https:
  background-size: 65px 65px;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.hack-fullscreen {
  width: 100% !important;
  height: 100% !important;
  top: 0 !important;
  left: 0 !important;
  border-radius: 0;
}
.hack-theme {
  display: flex;
  background-color: #1b1b24;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  cursor: pointer;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
}
.hack-theme:hover { 
  background-color: #252532;
}
.hack-theme-color {
  width: 25px;
  height: 25px;
  border-radius: 6px;
  margin-right: 12px;
}
.hack-theme-info { flex: 1; }
.hack-theme-name {
  font-size: 15px;
  font-weight: 500;
}
.hack-theme-description {
  font-size: 12px;
  opacity: 0.7;
}
.hack-section { display: none; }
.hack-section.active { display: block; }
.hack-settings-panel {
  padding: 0;
  margin: 0;
}
.hack-settings-panel-header {
  display: none;
}
.hack-settings-panel-content {
  padding: 0;
}
.hack-setting-row {
  padding: 16px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
@keyframes settingFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.hack-setting-row:hover {
  background-color: rgba(255, 255, 255, 0.02);
}
.hack-setting-row:last-child {
  border-bottom: none;
}
.hack-setting-info {
  flex: 1;
  min-width: 0;
}
.hack-setting-label {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.2px;
  margin-bottom: 4px;
}
.hack-setting-desc {
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.4;
  margin-top: 2px;
}
.hack-setting-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}
.hack-setting-slider {
  -webkit-appearance: none;
  width: 120px;
  height: 4px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.1);
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.hack-setting-slider:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: scaleY(1.2);
}
.hack-setting-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #4ecca3;
  cursor: pointer;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.hack-setting-slider::-webkit-slider-thumb:hover {
  transform: scale(1.15);
  box-shadow: 0 3px 8px rgba(78, 204, 163, 0.4);
  animation: sliderThumbPulse 1s ease-in-out infinite;
}
@keyframes sliderThumbPulse {
  0%, 100% {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3), 0 0 0 0 rgba(78, 204, 163, 0.4);
  }
  50% {
    box-shadow: 0 3px 8px rgba(78, 204, 163, 0.4), 0 0 0 8px rgba(78, 204, 163, 0);
  }
}
.hack-setting-slider::-webkit-slider-thumb:active {
  transform: scale(1.3);
}
.hack-setting-slider::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #4ecca3;
  cursor: pointer;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.hack-setting-slider::-moz-range-thumb:hover {
  transform: scale(1.15);
  box-shadow: 0 3px 8px rgba(78, 204, 163, 0.4);
}
.hack-setting-slider::-moz-range-thumb:active {
  transform: scale(1.3);
}
.hack-setting-value {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  min-width: 50px;
  text-align: right;
}
.hack-setting-toggle {
  position: relative;
  width: 44px;
  height: 24px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  flex-shrink: 0;
}
.hack-setting-toggle:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.05);
}
.hack-setting-toggle.active {
  background: #4ecca3;
  box-shadow: 0 0 15px rgba(78, 204, 163, 0.4);
}
.hack-setting-toggle.active:hover {
  background: #5edcb3;
  box-shadow: 0 0 20px rgba(78, 204, 163, 0.6);
}
.hack-setting-toggle-slider {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: #ffffff;
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.hack-setting-toggle:hover .hack-setting-toggle-slider {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
.hack-setting-toggle.active .hack-setting-toggle-slider {
  transform: translateX(20px);
  box-shadow: 0 2px 8px rgba(78, 204, 163, 0.5);
}
.hack-setting-label-group,
.hack-setting-number,
.hack-setting-status,
.hack-setting-control-group,
.hack-settings-panel-icon,
.hack-settings-panel-text,
.hack-settings-panel-title,
.hack-settings-panel-subtitle {
  display: none;
}
#whisp-hack-menu.no-transitions,
#whisp-hack-menu.no-transitions * {
  animation: none !important;
  transition: none !important;
}
.hack-themes-section {
  width: 100%;
  padding: 8px 0;
  margin-top: 0;
  overflow: visible;
}
.hack-themes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 0;
  margin-left: 0;
}
.hack-theme-card {
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid transparent;
}
.hack-theme-card:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.04);
}
.hack-theme-card.active {
  border-color: rgba(78, 204, 163, 0.5);
  background: rgba(78, 204, 163, 0.08);
}
.hack-theme-preview {
  width: 100%;
  height: 60px;
  border-radius: 8px;
  margin-bottom: 6px;
  transition: all 0.3s ease;
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.4),
    0 0 50px var(--theme-glow, rgba(255, 255, 255, 0.8)),
    inset 0 2px 4px rgba(255, 255, 255, 0.5);
  position: relative;
  opacity: 1;
  filter: brightness(1.5) saturate(1.3);
}
.hack-theme-card:hover .hack-theme-preview {
  opacity: 1;
  box-shadow: 
    0 12px 36px rgba(0, 0, 0, 0.5),
    0 0 80px var(--theme-glow, rgba(255, 255, 255, 1)),
    inset 0 2px 6px rgba(255, 255, 255, 0.6);
  transform: translateY(-2px);
  filter: brightness(1.7) saturate(1.5);
}
.hack-theme-card.active .hack-theme-preview {
  opacity: 1;
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.6),
    0 0 100px var(--theme-glow, rgba(255, 255, 255, 1)),
    inset 0 3px 8px rgba(255, 255, 255, 0.7);
  filter: brightness(1.8) saturate(1.6);
}
.hack-theme-preview::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 8px;
  background: transparent;
  pointer-events: none;
}
.hack-theme-card .hack-theme-name {
  text-align: center;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  letter-spacing: 0.3px;
}
.hack-theme-card.active .hack-theme-name {
  color: #4ecca3;
}
.hack-settings-general-header {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  padding: 8px 18px 12px 18px;
  margin-top: 0;
}
.hack-themes-header {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  padding: 16px 18px 12px 18px;
  margin-top: 8px;
}
.hack-arraylist {
  position: fixed;
  top: 5px;
  right: 5px;
  z-index: 1000;
  display: none;
  flex-direction: column;
  align-items: flex-end;
  pointer-events: none;
  text-transform: lowercase;
  border: 2px solid transparent;
  border-image: linear-gradient(135deg, #00d4ff, #0080ff);
  border-image-slice: 1;
  border-bottom: 0;
  border-left: 0;
}
.hack-arraylist-title {
  display: none;
}
.hack-arraylist-modules {
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
}
.hack-arraylist-module {
  background-color: rgba(10, 10, 10, 0.7);
  color: white;
  padding: 2px 10px 2px 10px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  font-family: Arial, sans-serif;
  box-shadow: rgba(0, 0, 0, 0.05) -5px 1px;
  transition: max-height 0.2s ease-in-out, opacity 0.2s ease-in-out;
  overflow: hidden;
  font-weight: 800;
  font-size: 16px;
  background-image: linear-gradient(135deg, #00d4ff, #0080ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  user-select: none;
}
.hack-arraylist-module.entering {
  animation: moduleEnter 0.2s ease-in-out forwards;
}
@keyframes moduleEnter {
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 50px;
    opacity: 1;
  }
}
.hack-arraylist-module.leaving {
  animation: moduleLeave 0.2s ease-in-out forwards;
}
@keyframes moduleLeave {
  from {
    max-height: 50px;
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
}
`; shadowRoot.appendChild(style); window.whispShadowRoot = shadowRoot;
                const getShadowElement = (id) => shadowRoot.getElementById(id);
                const sidebarButtons = [{
                        id: 'invincibility',
                        label: 'Invincibility',
                        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjZTNlM2UzIj48cGF0aCBkPSJNNDgwLTgwcS0xMzktMzUtMjI5LjUtMTU5LjVUMTYwLTUxNnYtMjQ0bDMyMC0xMjAgMzIwIDEyMHYyNDRxMCAxNTItOTAuNSAyNzYuNVQ0ODAtODBabTAtODRxMTA0LTMzIDE3Mi0xMzJ0NjgtMjIwdi0xODlsLTI0MC05MC0yNDAgOTB2MTg5cTAgMTIxIDY4IDIyMHQxNzIgMTMyWm0wLTMxNloiLz48L3N2Zz4=',
                        active: true
                    },
                    {
                        id: 'ballcontrol',
                        label: 'Ball Controls',
                        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjZTNlM2UzIj48cGF0aCBkPSJtNDIyLTIzMiAyMDctMjQ4SDQ2OWwyOS0yMjctMTg1IDI2N2gxMzlsLTMwIDIwOFpNMzIwLTgwbDQwLTI4MEgxNjBsMzYwLTUyMGg4MGwtNDAgMzIwaDI0MEw0MDAtODBoLTgwWm0xNTEtMzkwWiIvPjwvc3ZnPg==',
                        active: false
                    },
                    {
                        id: 'flight',
                        label: 'Flight',
                        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhJJREFUSImt1E9oXFUUx/HfS0MMKUJFhVLtSjFYEVMECW0INKArrW4s1UUaqBsR6cK9O6FiXHYnSKEUWqSbKq7iwoCUpoEsAnFh2xjwL8RQDcnCTD8u5kYfyUx0xjnwuO+dc+73/O47996kx4Y+zGABfb3mB5OattyTAngSH+J9PIz5UuDNXsAfws/+sVuYwg1UvSjwqt12Asf+N7wUGEajBv8NQ/WcjpuAU1jCQpL+JFNJFpPMJXmtqqqNbtU+hms1tbN4vYzncLBbcH8B/FGDL2O85lvvqgCOYm5HEzcwgdvle6uMI52A9+N8bfK23ccbuI6V4lvETDtWfwv4K0kuJDncIv+DJKNJGkkGi++jJCt4Ksmdqqq22qk+hM9a7Ott+xJny/tkm5xPd61A8754K8l0kgfbrPTbJB8n+bx8D5T8kSRDSR4oz81Wymf3UE3z8Izhx5pvs/ThSBtBf1tfkvU94o0kZ4r6zSSni38wySNlZXsbhvBNG/Xv4aLm7pnAvqIe3v5XeJK+crRPJlnaEbtUxskkn1RV9VVVVY0k3xX/E/+lQH0lj+P7om4eL2uegxUcqOVdKTlfdFSgTH66/JIxrOInDNfiL5amw1w3BY7jMtbwK56pxd7FnwX+O17qFP4C7hXAKp6rxaZrjb+LZ7tRv323rOH5HbFfSuxrPNoxvECu4geMtoiN4x0MdMr9CzlA1Y0bppEHAAAAAElFTkSuQmCC',
                        active: false
                    },
                    {
                        id: 'gravity',
                        label: 'Gravity',
                        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAmBJREFUSInV1U2IllUUB/D/bRQ/sBzIjDQ/EIuCZkrJCVsIQWFlmxBmFRTSWCFkH0RBQkkEiS0Udyq0sgKtVR+atTBUxKBFbdwoGO5clJtW0q/FHOHt9XmHd4IWHbjc55z7P/9z77n3nCfpEByreSnmd2EG+fTLLQPwt9f8SpJHhgnQ4zNUgBvSagwteHc2AfqdJ2vchQMDYI/3KnNmEyDJwprnJVk0jMOsTvBv5P8f4B93gHVJNiRZ1mN+BquSHOkiwNNJ7u6zbU9ypbX2Tf8J1ibZmeT90j9Ncj3JGzNsckuSp3p8dpe+JelLUWvtaJLzSf4s06UkE0mea61dHxDgzUwX2eXSLyZZkuStTjQW4QyW4yNMle1FfIIXsBpnsR1rMYaTmFfzWBfxQozX93r8jM9LH8VveKeKbC624Qo2FmYHfsWOLvKGH3EI+8u2GaM9mMdwtEd/Fe/1cUzi5tZSOzxVu/t+QK6DD/EyHsB3GBmE7XKewjFMzICZgx9wHiuGJp+NYAUenWF9V6X72f8i+Ci+rdd0Opmhm2Jpks1JNiW5t8x/1RhJsiDJL0lOJTnRWrua5Fqma+jrGp3ED+Mz/I7XMIGPcRpPFealurP76tJP4gjW1/qtXcSLcRhf4CHsxW48geNYiQuFXYNzVRdzy/YgvqynvriffBw/YSvuwBLchn3YWUX0FV7v8Zlf689jBCvLvrWKdCxJWh3rYJKrSf5IsqpyeS3J8SSbWmvbBqTzziQfJBnP9L/7UBJJJjPdn6ZS+VtdlXj/jUqs/rIH93Re1s3BFuDtOvFocZ74G5ejK3rjwgaxAAAAAElFTkSuQmCC',
                        active: false
                    },
                    {
                        id: 'score',
                        label: 'Score',
                        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjZTNlM2UzIj48cGF0aCBkPSJNMTYwLTIwMGgxNjB2LTMyMEgxNjB2MzIwWm0yNDAgMGgxNjB2LTU2MEg0MDB2NTYwWm0yNDAgMGgxNjB2LTI0MEg2NDB2MjQwWk04MC0xMjB2LTQ4MGgyNDB2LTI0MGgzMjB2MzIwaDI0MHY0MDBIODBaIi8+PC9zdmc+',
                        active: false
                    },
                    {
                        id: 'utilities',
                        label: 'Utilities',
                        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjZTNlM2UzIj48cGF0aCBkPSJNNDgwLTI2MHE3NSAwIDEyNy41LTUyLjVUNjYwLTQ0MHEwLTc1LTUyLjUtMTI3LjVUNDgwLTYyMHEtNzUgMC0xMjcuNSA1Mi41VDMwMC00NDBxMCA3NSA1Mi41IDEyNy41VDQ4MC0yNjBabTAtODBxLTQyIDAtNzEtMjl0LTI5LTcxcTAtNDIgMjktNzF0NzEtMjlxNDIgMCA3MSAyOXQyOSA3MXEwIDQyLTI5IDcxdC03MSAyOVpNMTYwLTEyMHEtMzMgMC01Ni41LTIzLjVUODAtMjAwdi00ODBxMC0zMyAyMy41LTU2LjVUMTYwLTc2MGgxMjZsNzQtODBoMjQwbDc0IDgwaDEyNnEzMyAwIDU2LjUgMjMuNVQ4ODAtNjgwdjQ4MHEwIDMzLTIzLjUgNTYuNVQ4MDAtMTIwSDE2MFptMC04MGg2NDB2LTQ4MEg2MzhsLTczLTgwSDM5NWwtNzMgODBIMTYwdjQ4MFptMzIwLTI0MFoiLz48L3N2Zz4=',
                        active: false
                    },
                    {
                        id: 'teleportation',
                        label: 'Teleportation',
                        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjZTNlM2UzIj48cGF0aCBkPSJNNDQwLTQ0MHYtMTYwaDgwdjgwaDgwdjgwSDQ0MFptMjgwIDB2LTgwaDgwdi04MGg4MHYxNjBINzIwWk00NDAtNzIwdi0xNjBoMTYwdjgwaC04MHY4MGgtODBabTM2MCAwdi04MGgtODB2LTgwaDE2MHYxNjBoLTgwWk0xMzYtODBsLTU2LTU2IDIyNC0yMjRIMTIwdi04MGgzMjB2MzIwaC04MHYtMTg0TDEzNi04MFoiLz48L3N2Zz4=',
                        active: false
                    },
                    {
                        id: 'supportedsites',
                        label: 'Sites',
                        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNjQgNjRDNDYuMyA2NCAzMiA3OC4zIDMyIDk2bDAgOTYgNDQ4IDAgMC05NmMwLTE3LjctMTQuMy0zMi0zMi0zMkw2NCA2NHpNMzIgMjI0bDAgMTkyYzAgMTcuNyAxNC4zIDMyIDMyIDMybDM4NCAwYzE3LjcgMCAzMi0xNC4zIDMyLTMybDAtMTkyTDMyIDIyNHpNMCA5NkMwIDYwLjcgMjguNyAzMiA2NCAzMmwzODQgMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDMyMGMwIDM1LjMtMjguNyA2NC02NCA2NEw2NCA0ODBjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgOTZ6Ii8+PGxpbmUgeDE9IjQ4IiB5MT0iMTI4IiB4Mj0iNDY0IiB5Mj0iMTI4IiBzdHJva2U9IiNjY2NjY2MiIHN0cm9rZS13aWR0aD0iNDgiLz48L3N2Zz4=',
                        active: false
                    },
                    {
                        id: 'settings',
                        label: 'Settings',
                        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjZTNlM2UzIj48cGF0aCBkPSJtMzcwLTgwLTEyLTEyOHEtMTgtNy0zNy01LjV0LTM2LTE1LjVMMjAwLTEyNGwtMTAwLTE3NCAxMTUtODZxLTUtMTUtNS0zMC41dDUtMzAuNUwxMDAtNTMwbDEwMC0xNzMgODUgNTRxMTctOS4zMzMgMzYtMTUuNjY3dDM3LTkuMzMzbDEyLTEyOGgxOTdsMTIgMTI4cTE5IDMgMzcuNSA5LjVUNjUzLTY0OWw4Ni01NSAxMDEgMTc0LTExNSA4NXE1IDE5IDUgMzB0LTUgMzBsMTE0IDg1LTEwMCAxNzQtODUtNTRxLTE4IDEwLTM2IDE2dC0zOCA5TDU2OC04MGgtMTk4Wm05Mi0yNzBxNTQgMCA5Mi0zOHQzOC05MnEwLTU0LTM4LTkyLTM4LTM4LTkyLTM4dC05MiAzOHEtMzggMzgtMzggOTJ0MzggOTJxMzggMzggOTIgMzhaIi8+PC9zdmc+',
                        active: false
                    }
                ];
                const modulesBySection = {
                        invincibility: [{
                            name: 'Godmode',
                            category: 'invincibility',
                            description: 'Makes you invincible',
                            type: 'toggle',
                            action: "Slope.hack.noDeath.enable()",
                            actionOff: "Slope.hack.noDeath.disable()",
                            iconUrl: null,
                            dropdown: true,
                            enableKeybinds: true,
                            dropdownOptions: []
                        }],
                        ballcontrol: [{
                                name: 'Jump',
                                category: 'ballcontrol',
                                description: 'Perform a super jump',
                                type: 'switch',
                                action: 'Slope.hack.superJump.perform()',
                                iconUrl: null,
                                dropdown: true,
                                enableKeybinds: true,
                                dropdownOptions: []
                            },
                            {
                                name: 'Set Ball Speed',
                                category: 'ballcontrol',
                                description: 'Control The Speed Of The Ball',
                                type: 'switch',
                                action: 'Slope.hack.ballSpeed.set()',
                                iconUrl: null
                            },
                            {
                                name: 'Set Jump Force',
                                category: 'ballcontrol',
                                description: 'Set jump force',
                                type: 'switch',
                                action: 'Slope.hack.superJump.setForce()',
                                iconUrl: null
                            },
                            {
                                name: 'Increase Ball Speed',
                                category: 'ballcontrol',
                                description: 'Increase The Speed Of The Ball',
                                type: 'switch',
                                action: 'Slope.hack.ballSpeed.increase()',
                                iconUrl: null
                            },
                            {
                                name: 'Decrease Ball Speed',
                                category: 'ballcontrol',
                                description: 'Decrease The Speed Of The Ball',
                                type: 'switch',
                                action: 'Slope.hack.ballSpeed.decrease()',
                                iconUrl: null
                            },
                            {
                                name: 'Reset Ball Speed',
                                category: 'ballcontrol',
                                description: 'Reset The Speed Of The Ball',
                                type: 'switch',
                                action: 'Slope.hack.ballSpeed.reset()',
                                iconUrl: null
                            }
                        ],
                        flight: [{
                                name: 'Toggle Fly',
                                category: 'flight',
                                description: 'Enable Ball Flight',
                                type: 'toggle',
                                action: 'Slope.hack.fly.enable()',
                                actionOff: "Slope.hack.fly.disable()",
                                iconUrl: null,
                                dropdown: true,
                                enableKeybinds: true,
                                dropdownOptions: []
                            },
                            {
                                name: 'Set Speed',
                                category: 'flight',
                                description: 'Set Flight Speed',
                                type: 'switch',
                                action: 'Slope.hack.fly.setSpeed()',
                                iconUrl: null
                            },
                            {
                                name: 'Increase Speed',
                                category: 'flight',
                                description: 'Increase Flight Speed',
                                type: 'switch',
                                action: 'Slope.hack.fly.increaseSpeed()',
                                iconUrl: null
                            },
                            {
                                name: 'Decrease Speed',
                                category: 'flight',
                                description: 'Decrease Flight Speed',
                                type: 'switch',
                                action: 'Slope.hack.fly.decreaseSpeed()',
                                iconUrl: null
                            },
                            {
                                name: 'Reset Speed',
                                category: 'flight',
                                description: 'Reset Flight Speed',
                                type: 'switch',
                                action: 'Slope.hack.fly.reset()',
                                iconUrl: null
                            }
                        ],
                        gravity: [{
                                name: 'Increase Gravity',
                                category: 'gravity',
                                description: 'Increase The Gravity Of The Ball',
                                type: 'switch',
                                action: 'Slope.hack.gravity.increase()',
                                iconUrl: null
                            },
                            {
                                name: 'Decrease Gravity',
                                category: 'gravity',
                                description: 'Decrease the gravity of the ball',
                                type: 'switch',
                                action: 'Slope.hack.gravity.decrease()',
                                iconUrl: null
                            },
                            {
                                name: 'Set Gravity',
                                category: 'gravity',
                                description: 'Set The Gravity Of The Ball',
                                type: 'switch',
                                action: 'Slope.hack.gravity.set()',
                                iconUrl: null
                            },
                            {
                                name: 'Reset Gravity',
                                category: 'gravity',
                                description: 'Reset the gravity of the ball',
                                type: 'switch',
                                action: 'Slope.hack.gravity.reset()',
                                iconUrl: null
                            }
                        ],
                        score: [{
                                name: 'Add Score',
                                category: 'score',
                                description: 'Increase Score by 1',
                                type: 'switch',
                                action: 'Slope.hack.score.increaseOne()',
                                iconUrl: null
                            },
                            {
                                name: 'Decrease Score',
                                category: 'score',
                                description: 'Decrease score by 1',
                                type: 'switch',
                                action: 'Slope.hack.score.decreaseOne()',
                                iconUrl: null
                            },
                            {
                                name: 'Max Score',
                                category: 'score',
                                description: 'Set score to maximum',
                                type: 'switch',
                                action: 'Slope.hack.score.setMax()',
                                iconUrl: null
                            },
                            {
                                name: 'Double Score',
                                category: 'score',
                                description: 'Double the score',
                                type: 'switch',
                                action: 'Slope.hack.score.double()',
                                iconUrl: null
                            },
                            {
                                name: 'Reset Score',
                                category: 'score',
                                description: 'Reset score',
                                type: 'switch',
                                action: 'Slope.hack.score.reset()',
                                iconUrl: null
                            }
                        ],
                        teleportation: [{
                                name: 'Teleport To Spawn',
                                category: 'teleportation',
                                description: 'Teleport To Spawn',
                                type: 'switch',
                                action: 'Slope.hack.teleport.toStart()',
                                iconUrl: null
                            },
                            {
                                name: 'Teleport Forward',
                                category: 'teleportation',
                                description: 'Teleport forward',
                                type: 'switch',
                                action: 'Slope.hack.teleport.forward()',
                                iconUrl: null
                            },
                            {
                                name: 'Teleport Upward',
                                category: 'teleportation',
                                description: 'Teleport upward units',
                                type: 'switch',
                                action: 'Slope.hack.teleport.upward()',
                                iconUrl: null
                            },
                            {
                                name: 'Teleport To Coordinates',
                                category: 'teleportation',
                                description: 'Teleport to Anywhere',
                                type: 'switch',
                                action: 'Slope.hack.teleport.to()',
                                iconUrl: null
                            },
                            {
                                name: 'Save Position',
                                category: 'teleportation',
                                description: 'Save current position',
                                type: 'switch',
                                action: "Slope.hack.teleport.savePosition()",
                                iconUrl: null
                            },
                            {
                                name: 'List Saved Positions',
                                category: 'teleportation',
                                description: 'List all saved positions',
                                type: 'switch',
                                action: 'Slope.hack.teleport.listSaved()',
                                iconUrl: null
                            }
                        ],
                        utilities: [{
                                name: 'Reset Game',
                                category: 'utilities',
                                description: 'Reset the game',
                                type: 'switch',
                                action: 'Slope.util.resetGame()',
                                iconUrl: null
                            },
                            {
                                name: 'Trigger Death',
                                category: 'utilities',
                                description: 'Trigger player death',
                                type: 'switch',
                                action: 'Slope.util.triggerDeath()',
                                iconUrl: null
                            },
                            {
                                name: 'Get Gravity',
                                category: 'utilities',
                                description: 'Show Current Gravity.',
                                type: 'switch',
                                action: 'Slope.hack.gravity.get()',
                                iconUrl: null
                            },
                            {
                                name: 'Get Flight Speed',
                                category: 'utilities',
                                description: 'Show Current Flight Speed.',
                                type: 'switch',
                                action: 'Slope.hack.fly.get()',
                                iconUrl: null
                            }
                        ],
                        supportedsites: [{
                            name: 'slopecom.com',
                            category: 'supportedsites',
                            description: 'Wait for game to fully load',
                            type: 'switch',
                            action: "window.open('https: {
                                name: 'slope4classroom.com',
                                category: 'supportedsites',
                                description: 'Wait for game to fully load',
                                type: 'switch',
                                action: "window.open('https: {
                                    name: 'slope.lol',
                                    category: 'supportedsites',
                                    description: 'Press Play before running hacks',
                                    type: 'switch',
                                    action: "window.open('https:
                                ],
                                themes: [],
                                settings: [{
                                        name: 'Enable Transitions',
                                        description: 'Toggle all animations and transitions throughout the menu interface',
                                        type: 'toggle',
                                        action: 'window.whispShadowRoot.getElementById("whisp-hack-menu").classList.remove("no-transitions"); localStorage.setItem("transitionsEnabled", "true");',
                                        actionOff: 'window.whispShadowRoot.getElementById("whisp-hack-menu").classList.add("no-transitions"); localStorage.setItem("transitionsEnabled", "false");'
                                    },
                                    {
                                        name: 'Use Smooth Caret',
                                        description: 'Enable smooth animated caret for search and input fields',
                                        type: 'toggle',
                                        action: 'window.whispShadowRoot.querySelectorAll(&quot;.caret&quot;).forEach(el => {el.style.display = &quot;block&quot;; el.style.opacity = &quot;&quot;; el.style.visibility = &quot;visible&quot;;}); window.whispShadowRoot.querySelectorAll(&quot;.smoothCaretInput&quot;).forEach(el => {el.style.caretColor = &quot;transparent&quot;;}); window.whispShadowRoot.querySelectorAll(&quot;.hack-module-input&quot;).forEach(el => {el.style.caretColor = &quot;transparent&quot;;}); localStorage.setItem(&quot;smoothCaretEnabled&quot;, &quot;true&quot;);',
                                        actionOff: 'window.whispShadowRoot.querySelectorAll(&quot;.caret&quot;).forEach(el => {el.style.display = &quot;none&quot;; el.style.opacity = &quot;0&quot;; el.style.visibility = &quot;hidden&quot;;}); window.whispShadowRoot.querySelectorAll(&quot;.smoothCaretInput&quot;).forEach(el => {el.style.caretColor = &quot;#4ecca3&quot;;}); window.whispShadowRoot.querySelectorAll(&quot;.hack-module-input&quot;).forEach(el => {el.style.caretColor = &quot;#4ecca3&quot;;}); localStorage.setItem(&quot;smoothCaretEnabled&quot;, &quot;false&quot;);'
                                    },
                                    {
                                        name: 'Toggle Menu',
                                        description: 'Set a hotkey to show/hide the menu with fade transition',
                                        type: 'keybind-only',
                                        enableKeybinds: true,
                                        dropdown: true,
                                        dropdownOptions: []
                                    },
                                    {
                                        name: 'Themes',
                                        type: 'themes'
                                    }
                                ]
                            };
                            const themes = {
                                'Default Dark': {
                                    backgroundColor: 'linear-gradient(135deg, #1a1a1c, #0d0d0f)',
                                    contentBackgroundColor: 'linear-gradient(135deg, #1a1a1c, #0d0d0f)',
                                    sidebarBackgroundColor: 'linear-gradient(180deg, #1a1a1c, #0d0d0f)',
                                    moduleBackgroundColor: 'linear-gradient(135deg, #252528, #1a1a1c)',
                                    moduleHoverColor: 'linear-gradient(135deg, #303033, #252528)',
                                    activeToggleColor: '#4a90e2',
                                    textColor: '#e8e8e8',
                                    borderColor: '#2a2a2c',
                                    separatorColor: 'rgba(255, 255, 255, 0.08)'
                                },
                                'Deep Ocean': {
                                    backgroundColor: 'linear-gradient(135deg, #0a1f44, #020a1a)',
                                    contentBackgroundColor: 'linear-gradient(135deg, #0a1f44, #020a1a)',
                                    sidebarBackgroundColor: 'linear-gradient(180deg, #0a1f44, #020a1a)',
                                    moduleBackgroundColor: 'linear-gradient(135deg, #1a3f64, #0a1f44)',
                                    moduleHoverColor: 'linear-gradient(135deg, #2a4f74, #1a3f64)',
                                    activeToggleColor: '#1e88e5',
                                    textColor: '#e8e8e8',
                                    borderColor: '#0f1e30',
                                    separatorColor: 'rgba(30, 136, 229, 0.15)'
                                },
                                'Whisp': {
                                    backgroundColor: 'linear-gradient(135deg,#025c4a,#036a7a)',
                                    contentBackgroundColor: 'linear-gradient(135deg,#025c4a,#036a7a)',
                                    sidebarBackgroundColor: 'linear-gradient(180deg,#024f3f,#03606c)',
                                    moduleBackgroundColor: 'linear-gradient(135deg,#037862,#04808a)',
                                    moduleHoverColor: 'linear-gradient(135deg,#049476,#0499a3)',
                                    activeToggleColor: '#03b48d',
                                    textColor: '#e8fffa',
                                    borderColor: '#024337',
                                    separatorColor: 'rgba(255,255,255,0.12)'
                                },
                                'Blue Ocean': {
                                    backgroundColor: 'linear-gradient(135deg, #3a5c9e, #2a498d)',
                                    contentBackgroundColor: 'linear-gradient(135deg, #3a5c9e, #2a498d)',
                                    sidebarBackgroundColor: 'linear-gradient(180deg, #3a5c9e, #2a498d)',
                                    moduleBackgroundColor: 'linear-gradient(135deg, #4a6cae, #3a599d)',
                                    moduleHoverColor: 'linear-gradient(135deg, #5a7cbe, #4a69ad)',
                                    activeToggleColor: '#6b8cce',
                                    textColor: '#ffffff',
                                    borderColor: '#2a498d',
                                    separatorColor: 'rgba(0, 0, 0, 0.25)'
                                },
                                'Neon Pink': {
                                    backgroundColor: 'linear-gradient(135deg, #c073cb, #c5475c)',
                                    contentBackgroundColor: 'linear-gradient(135deg, #c073cb, #c5475c)',
                                    sidebarBackgroundColor: 'linear-gradient(180deg, #c073cb, #c5475c)',
                                    moduleBackgroundColor: 'linear-gradient(135deg, #d083db, #d5576c)',
                                    moduleHoverColor: 'linear-gradient(135deg, #e093eb, #e5677c)',
                                    activeToggleColor: '#f093fb',
                                    textColor: '#ffffff',
                                    borderColor: '#a03878',
                                    separatorColor: 'rgba(0, 0, 0, 0.3)'
                                },
                                'Purple Haze': {
                                    backgroundColor: 'linear-gradient(135deg, #4e00c2, #6b00f5)',
                                    contentBackgroundColor: 'linear-gradient(135deg, #4e00c2, #6b00f5)',
                                    sidebarBackgroundColor: 'linear-gradient(180deg, #4e00c2, #6b00f5)',
                                    moduleBackgroundColor: 'linear-gradient(135deg, #6e20d2, #8b10ff)',
                                    moduleHoverColor: 'linear-gradient(135deg, #7e30e2, #9b20ff)',
                                    activeToggleColor: '#9d40ff',
                                    textColor: '#ffffff',
                                    borderColor: '#6b00f5',
                                    separatorColor: 'rgba(155, 100, 255, 0.2)'
                                },
                                'Cyberpunk': {
                                    backgroundColor: 'linear-gradient(135deg, #0a0f24, #101b3c)',
                                    contentBackgroundColor: 'linear-gradient(135deg, #0d1533, #111f49)',
                                    sidebarBackgroundColor: 'linear-gradient(180deg, #0a0f24, #111f49)',
                                    moduleBackgroundColor: 'linear-gradient(135deg, #1b2b80, #3a0ca3)',
                                    moduleHoverColor: 'linear-gradient(135deg, #4cc9f0, #7209b7)',
                                    activeToggleColor: '#f72585',
                                    textColor: '#dffaff',
                                    borderColor: '#3a0ca3',
                                    separatorColor: 'rgba(255, 255, 255, 0.1)'
                                },
                                'Sunset Blaze': {
                                    backgroundColor: 'linear-gradient(135deg, #cf4f5d, #cf9351)',
                                    contentBackgroundColor: 'linear-gradient(135deg, #cf4f5d, #cf9351)',
                                    sidebarBackgroundColor: 'linear-gradient(180deg, #cf4f5d, #cf9351)',
                                    moduleBackgroundColor: 'linear-gradient(135deg, #df5f6d, #dfa361)',
                                    moduleHoverColor: 'linear-gradient(135deg, #ef6f7d, #efb371)',
                                    activeToggleColor: '#ffc371',
                                    textColor: '#ffffff',
                                    borderColor: '#ffffff',
                                    separatorColor: 'rgba(255, 255, 255, 0.2)'
                                },
                                'Electric Storm': {
                                    backgroundColor: 'linear-gradient(135deg, #465eba, #563b72)',
                                    contentBackgroundColor: 'linear-gradient(135deg, #465eba, #563b72)',
                                    sidebarBackgroundColor: 'linear-gradient(180deg, #465eba, #563b72)',
                                    moduleBackgroundColor: 'linear-gradient(135deg, #566eca, #664b82)',
                                    moduleHoverColor: 'linear-gradient(135deg, #667eea, #765b92)',
                                    activeToggleColor: '#764ba2',
                                    textColor: '#ffffff',
                                    borderColor: '#ffffff',
                                    separatorColor: 'rgba(255, 255, 255, 0.18)'
                                },
                                'Crimson Tide': {
                                    backgroundColor: 'linear-gradient(135deg, #891b17, #0f45a0)',
                                    contentBackgroundColor: 'linear-gradient(135deg, #891b17, #0f45a0)',
                                    sidebarBackgroundColor: 'linear-gradient(180deg, #891b17, #0f45a0)',
                                    moduleBackgroundColor: 'linear-gradient(135deg, #992b27, #1f55b0)',
                                    moduleHoverColor: 'linear-gradient(135deg, #a93b37, #2f65c0)',
                                    activeToggleColor: '#1565c0',
                                    textColor: '#ffffff',
                                    borderColor: '#ffffff',
                                    separatorColor: 'rgba(255, 255, 255, 0.18)'
                                },
                                'Mocha': {
                                    backgroundColor: '#6f5045',
                                    contentBackgroundColor: '#8b6d5c',
                                    sidebarBackgroundColor: '#6f5045',
                                    moduleBackgroundColor: '#8b6d5c',
                                    moduleHoverColor: '#7f6050',
                                    activeToggleColor: '#d3bba8',
                                    textColor: '#f5e3d3',
                                    borderColor: '#5a433c',
                                    separatorColor: 'rgba(0,0,0,0.08)'
                                },
                            };
                            const themeItems = [{
                                    name: 'Default Dark',
                                    description: 'Default dark theme',
                                    gradient: 'linear-gradient(135deg, #1a1a1c, #0d0d0f)',
                                    glowColor: 'rgba(180, 180, 180, 0.5)'
                                },
                                {
                                    name: 'Deep Ocean',
                                    description: 'Mysterious deep blue',
                                    gradient: 'linear-gradient(135deg, #0a1f44, #020a1a)',
                                    glowColor: 'rgba(30, 136, 229, 0.6)'
                                },
                                {
                                    name: 'Whisp',
                                    description: 'Deep teal theme',
                                    gradient: 'linear-gradient(135deg, #03b48d, #0499a3)',
                                    glowColor: 'rgba(3, 180, 141, 0.5)'
                                },
                                {
                                    name: 'Blue Ocean',
                                    description: 'Vibrant blue theme',
                                    gradient: 'linear-gradient(135deg, #6b8cce, #4a69bd)',
                                    glowColor: 'rgba(107, 140, 206, 0.5)'
                                },
                                {
                                    name: 'Neon Pink',
                                    description: 'Flashy pink theme',
                                    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
                                    glowColor: 'rgba(240, 147, 251, 0.5)'
                                },
                                {
                                    name: 'Purple Haze',
                                    description: 'Rich purple theme',
                                    gradient: 'linear-gradient(135deg, #4e00c2, #6b00f5)',
                                    glowColor: 'rgba(78, 0, 194, 0.5)'
                                },
                                {
                                    name: 'Cyberpunk',
                                    description: 'Neon future theme',
                                    gradient: 'linear-gradient(135deg, #1b2b80, #7209b7)',
                                    glowColor: 'rgba(247, 37, 133, 0.55)'
                                },
                                {
                                    name: 'Sunset Blaze',
                                    description: 'Fiery orange sunset',
                                    gradient: 'linear-gradient(135deg, #ff5f6d, #ffc371)',
                                    glowColor: 'rgba(255, 95, 109, 0.5)'
                                },
                                {
                                    name: 'Electric Storm',
                                    description: 'Lightning flash',
                                    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
                                    glowColor: 'rgba(102, 126, 234, 0.5)'
                                },
                                {
                                    name: 'Crimson Tide',
                                    description: 'Deep red waves',
                                    gradient: 'linear-gradient(135deg, #b92b27, #1565c0)',
                                    glowColor: 'rgba(185, 43, 39, 0.5)'
                                },
                                {
                                    name: 'Mocha',
                                    description: 'Warm mocha brown theme, header and sidebar match, soft gradient',
                                    gradient: 'linear-gradient(135deg, #6f5045, #8b6d5c)',
                                    glowColor: '#6f5045'
                                }
                            ];
                            const escapeHtml = (str) => {
                                if (!str) return '';
                                return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
                            };
                            const generateSidebarButtons = (buttons) => buttons.map(btn =>
                                `<div class="hack-nav-item ${btn.active ? 'active' : ''}" data-section="${btn.id}">
            <img src="${btn.icon}" alt="${btn.label}"/> ${btn.label}
        </div>`
                            ).join('');
                            const generateModuleHTML = (module) => {
                                let html = `<div class="hack-module" data-type="${module.type}"`;
                                if (module.action) html += ` data-action="${escapeHtml(module.action)}"`;
                                if (module.actionOff) html += ` data-action-off="${escapeHtml(module.actionOff)}"`;
                                if (module.dropdown) html += ` data-dropdown="true"`;
                                html += '>';
                                if (module.type === 'toggle') {
                                    html += `<div class="hack-module-toggle"></div>`;
                                } else if (module.type === 'switch') {
                                    html += `<div class="hack-module-switch"></div>`;
                                }
                                html += `<div class="hack-module-info">
            <div class="hack-module-name">${module.name} <span class="hack-module-category">(${module.category})</span></div>
            <div class="hack-module-description">${module.description}</div>
        </div>`;
                                if (module.type === 'input') {
                                    html += `<div class="sc-container" style="width: 200px; height: 26px;">
                <input type="text" class="hack-module-input smoothCaretInput" placeholder="${module.placeholder || 'Enter value...'}" data-action="${escapeHtml(module.action || '')}">
                <div class="caret" style="width: 2px; height: 60%; background-color: #FFFFFF;"></div>
            </div>`;
                                }
                                if (module.dropdown && module.dropdownOptions) {
                                    html += `<div class="hack-dropdown">`;
                                    if (module.enableKeybinds) {
                                        const moduleName = module.name.split(' ')[0];
                                        html += `<div class="hack-dropdown-input-wrapper">`;
                                        html += `<span class="hack-dropdown-input-label">Keyboard Shortcut</span>`;
                                        html += `<div class="hack-dropdown-keybind-wrapper" data-module-name="${moduleName}">`;
                                        html += `<input type="text" class="hack-dropdown-keybind-input" placeholder="Click to set..." readonly>`;
                                        html += `<span class="hack-dropdown-keybind-edit">`;
                                        html += `<svg xmlns="http:
                html += ` < /span>`;
                                        html += `</div>`;
                                        html += `</div>`;
                                    }
                                    module.dropdownOptions.forEach(option => {
                                        if (option.section) {
                                            html += `<div class="hack-dropdown-section">${option.section}</div>`;
                                        } else if (option.toggle) {
                                            html += `<div class="hack-dropdown-option" data-action="${escapeHtml(option.action)}" data-action-off="${escapeHtml(option.actionOff)}">`;
                                            html += `<span class="hack-dropdown-option-label">${option.label}</span>`;
                                            html += `<div class="hack-dropdown-toggle"></div>`;
                                            html += `</div>`;
                                        } else if (option.slider) {
                                            html += `<div class="hack-dropdown-slider-wrapper">`;
                                            html += `<span class="hack-dropdown-slider-label">${option.label}</span>`;
                                            html += `<div class="hack-dropdown-slider-container">`;
                                            html += `<span class="hack-dropdown-slider-min">${option.min}${option.unit || ''}</span>`;
                                            html += `<input type="range" class="hack-dropdown-slider" min="${option.min}" max="${option.max}" value="${option.value}" data-action="${escapeHtml(option.action)}">`;
                                            html += `<span class="hack-dropdown-slider-max">${option.max}${option.unit || ''}</span>`;
                                            html += `</div>`;
                                            html += `<span class="hack-dropdown-slider-value" data-unit="${option.unit || ''}">${option.value}${option.unit || ''}</span>`;
                                            html += `</div>`;
                                        } else if (option.select) {
                                            html += `<div class="hack-dropdown-input-wrapper">`;
                                            html += `<span class="hack-dropdown-input-label">${option.label}</span>`;
                                            html += `<div class="hack-dropdown-select-wrapper">`;
                                            html += `<div class="hack-dropdown-select" data-action="${escapeHtml(option.action)}">`;
                                            html += `<span class="hack-dropdown-select-value">${option.options[0]}</span>`;
                                            html += `<div class="hack-dropdown-select-arrow"></div>`;
                                            html += `<div class="hack-dropdown-select-options">`;
                                            option.options.forEach((opt, idx) => {
                                                html += `<div class="hack-dropdown-select-option ${idx === 0 ? 'selected' : ''}" data-value="${opt}">${opt}</div>`;
                                            });
                                            html += `</div>`;
                                            html += `</div>`;
                                            html += `</div>`;
                                            html += `</div>`;
                                        } else if (option.input) {
                                            html += `<div class="hack-dropdown-input-wrapper">`;
                                            html += `<span class="hack-dropdown-input-label">${option.label}</span>`;
                                            html += `<div class="hack-dropdown-input-container">`;
                                            html += `<input type="${option.inputType}" class="hack-dropdown-input" placeholder="${option.placeholder || ''}"`;
                                            if (option.min) html += ` min="${option.min}"`;
                                            if (option.max) html += ` max="${option.max}"`;
                                            html += ` data-action="${escapeHtml(option.action)}">`;
                                            html += `<div class="caret" style="width: 2px; height: 60%; background-color: #FFFFFF;"></div>`;
                                            html += `</div>`;
                                            html += `</div>`;
                                        } else if (option.colorpicker) {
                                            html += `<div class="hack-dropdown-input-wrapper">`;
                                            html += `<span class="hack-dropdown-input-label">${option.label}</span>`;
                                            html += `<div class="hack-dropdown-colorpicker-container">`;
                                            html += `<input type="color" class="hack-dropdown-colorpicker" value="${option.defaultColor || '#4ecca3'}" data-action="${escapeHtml(option.action)}">`;
                                            html += `<span class="hack-dropdown-colorpicker-value">${option.defaultColor || '#4ecca3'}</span>`;
                                            html += `</div>`;
                                            html += `</div>`;
                                        } else if (option.button) {
                                            html += `<button class="hack-dropdown-button" data-action="${escapeHtml(option.action)}">${option.label}</button>`;
                                        } else if (option.separator) {
                                            html += `<div class="hack-dropdown-separator"></div>`;
                                        } else {
                                            html += `<div class="hack-dropdown-item" data-action="${escapeHtml(option.action)}">${option.label}</div>`;
                                        }
                                    });
                                    html += `</div>`;
                                } else if (module.dropdown && module.dropdownItems) {
                                    html += `<div class="hack-dropdown">`;
                                    module.dropdownItems.forEach(item => {
                                        if (item.separator) {
                                            html += `<div class="hack-dropdown-separator"></div>`;
                                        } else if (item.inputType) {
                                            html += `<div class="hack-dropdown-input">`;
                                            html += `<input type="${item.inputType}" placeholder="${item.placeholder || ''}"`;
                                            if (item.min) html += ` min="${item.min}"`;
                                            if (item.max) html += ` max="${item.max}"`;
                                            if (item.step) html += ` step="${item.step}"`;
                                            html += `></div>`;
                                            if (item.submitLabel) {
                                                html += `<div class="hack-dropdown-submit" data-action="${escapeHtml(item.submitAction)}">${item.submitLabel}</div>`;
                                            }
                                        } else {
                                            html += `<div class="hack-dropdown-item" data-action="${escapeHtml(item.action)}">${item.label}</div>`;
                                        }
                                    });
                                    html += `</div>`;
                                }
                                html += `</div>`;
                                return html;
                            };
                            const generateSectionModules = (sectionId) => {
                                if (sectionId === 'settings') {
                                    return `
                <div class="hack-settings-panel">
                    <div class="hack-settings-panel-content">
                        ${(modulesBySection[sectionId] || []).map((setting, index) => {
                            if (setting.type === 'themes') {
                                return `
                                    <div class="hack-themes-header">Themes</div>
                                    <div class="hack-themes-section">
                                        <div class="hack-themes-grid">
                                            ${themeItems.filter(theme => themes[theme.name]).map(theme => `
                                                <div class="hack-theme-card" data-theme="${theme.name}" data-glow-color="${theme.glowColor}">
                                                    <div class="hack-theme-preview" style="background: ${theme.gradient};"></div>
                                                    <div class="hack-theme-name">${theme.name}</div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                `;
                            } else if (index === 0 || (modulesBySection[sectionId][index - 1] && modulesBySection[sectionId][index - 1].type === 'themes')) {
                                if (setting.type === 'toggle') {
                                    return ` <
                                        div class = "hack-settings-general-header" > General < /div> <
                                        div class = "hack-setting-row" >
                                        <
                                        div class = "hack-setting-info" >
                                        <
                                        div class = "hack-setting-label" > $ {
                                            setting.name
                                        } < /div> <
                                        div class = "hack-setting-desc" > $ {
                                            setting.description || ''
                                        } < /div> <
                                        /div> <
                                        div class = "hack-setting-toggle"
                                    data - action = "${escapeHtml(setting.action)}"
                                    data - action - off = "${escapeHtml(setting.actionOff)}" >
                                        <
                                        div class = "hack-setting-toggle-slider" > < /div> <
                                        /div> <
                                        /div>
                                    `;
                                } else if (setting.type === 'keybind-only') {
                                    const moduleName = setting.name.split(' ').join('');
                                    return ` <
                                    div class = "hack-settings-general-header" > General < /div> <
                                        div class = "hack-setting-row" >
                                        <
                                        div class = "hack-setting-info" >
                                        <
                                        div class = "hack-setting-label" > $ {
                                            setting.name
                                        } < /div> <
                                        div class = "hack-setting-desc" > $ {
                                            setting.description || ''
                                        } < /div> <
                                        /div> <
                                        div class = "hack-dropdown-keybind-wrapper"
                                    data - module - name = "${moduleName}" >
                                        <
                                        input type = "text"
                                    class = "hack-dropdown-keybind-input"
                                    placeholder = "Click to set..."
                                    readonly >
                                        <
                                        span class = "hack-dropdown-keybind-edit" >
                                        <
                                        svg xmlns = "http: <
                                        /span> <
                                        /div> <
                                        /div>
                                    `;
                                } else {
                                    return ` <
                                    div class = "hack-settings-general-header" > General < /div> <
                                        div class = "hack-setting-row" >
                                        <
                                        div class = "hack-setting-info" >
                                        <
                                        div class = "hack-setting-label" > $ {
                                            setting.name
                                        } < /div> <
                                        div class = "hack-setting-desc" > $ {
                                            setting.description || ''
                                        } < /div> <
                                        /div> <
                                        div class = "hack-setting-controls" >
                                        <
                                        input type = "range"
                                    class = "hack-setting-slider"
                                    min = "${setting.min}"
                                    max = "${setting.max}"
                                    value = "${setting.value}"
                                    data - action = "${escapeHtml(setting.action)}" >
                                        <
                                        span class = "hack-setting-value"
                                    data - unit = "${setting.unit || ''}" > $ {
                                        setting.value
                                    }
                                    $ {
                                        setting.unit || ''
                                    } < /span> <
                                    /div> <
                                    /div>
                                    `;
                                }
                            } else if (setting.type === 'toggle') {
                                return ` <
                                    div class = "hack-setting-row" >
                                    <
                                    div class = "hack-setting-info" >
                                    <
                                    div class = "hack-setting-label" > $ {
                                        setting.name
                                    } < /div> <
                                    div class = "hack-setting-desc" > $ {
                                        setting.description || ''
                                    } < /div> <
                                    /div> <
                                    div class = "hack-setting-toggle"
                                    data - action = "${escapeHtml(setting.action)}"
                                    data - action - off = "${escapeHtml(setting.actionOff)}" >
                                        <
                                        div class = "hack-setting-toggle-slider" > < /div> <
                                        /div> <
                                        /div>
                                    `;
                            } else if (setting.type === 'keybind-only') {
                                const moduleName = setting.name.split(' ').join('');
                                return ` <
                                    div class = "hack-setting-row" >
                                    <
                                    div class = "hack-setting-info" >
                                    <
                                    div class = "hack-setting-label" > $ {
                                        setting.name
                                    } < /div> <
                                    div class = "hack-setting-desc" > $ {
                                        setting.description || ''
                                    } < /div> <
                                    /div> <
                                    div class = "hack-dropdown-keybind-wrapper"
                                    data - module - name = "${moduleName}" >
                                        <
                                        input type = "text"
                                    class = "hack-dropdown-keybind-input"
                                    placeholder = "Click to set..."
                                    readonly >
                                        <
                                        span class = "hack-dropdown-keybind-edit" >
                                        <
                                        svg xmlns = "http: <
                                        /span> <
                                        /div> <
                                        /div>
                                    `;
                            } else {
                                return ` <
                                    div class = "hack-setting-row" >
                                    <
                                    div class = "hack-setting-info" >
                                    <
                                    div class = "hack-setting-label" > $ {
                                        setting.name
                                    } < /div> <
                                    div class = "hack-setting-desc" > $ {
                                        setting.description || ''
                                    } < /div> <
                                    /div> <
                                    div class = "hack-setting-controls" >
                                    <
                                    input type = "range"
                                    class = "hack-setting-slider"
                                    min = "${setting.min}"
                                    max = "${setting.max}"
                                    value = "${setting.value}"
                                    data - action = "${setting.action}" >
                                        <
                                        span class = "hack-setting-value"
                                    data - unit = "${setting.unit || ''}" > $ {
                                        setting.value
                                    }
                                    $ {
                                        setting.unit || ''
                                    } < /span> <
                                    /div> <
                                    /div>
                                    `;
                            }
                        }).join('')}
                    </div>
                </div>`;
                                }
                                return (modulesBySection[sectionId] || []).map(generateModuleHTML).join('');
                            };
                            const generateThemesHTML = () => themeItems.map(theme =>
                                `<div class="hack-theme" data-theme="${theme.name}">
            <div class="hack-theme-color" style="background: ${theme.gradient};"></div>
            <div class="hack-theme-info">
                <div class="hack-theme-name">${theme.name}</div>
                <div class="hack-theme-description">${theme.description}</div>
            </div>
        </div>`
                            ).join('');
                            const saveModuleState = (name, state) => {
                                try {
                                    const saved = JSON.parse(localStorage.getItem('whispActiveModules') || '{}');
                                    saved[name] = state;
                                    localStorage.setItem('whispActiveModules', JSON.stringify(saved));
                                } catch (e) {
                                    console.error('Error saving:', e);
                                }
                            };
                            const loadModuleStates = () => {
                                try {
                                    return JSON.parse(localStorage.getItem('whispActiveModules') || '{}');
                                } catch (e) {
                                    console.error('Error loading:', e);
                                    return {};
                                }
                            };
                            const updateArraylist = () => {
                                const arraylistContainer = shadowRoot.getElementById('hack-arraylist-modules');
                                if (!arraylistContainer) return;
                                const activeModules = [];
                                shadowRoot.querySelectorAll('.hack-module[data-type="toggle"]').forEach(module => {
                                    const toggle = module.querySelector('.hack-module-toggle');
                                    if (toggle && toggle.classList.contains('active')) {
                                        const moduleName = module.querySelector('.hack-module-name')?.textContent.trim() || 'Unknown';
                                        activeModules.push(moduleName);
                                    }
                                });
                                const currentModules = Array.from(arraylistContainer.querySelectorAll('.hack-arraylist-module'))
                                    .map(el => el.textContent);
                                currentModules.forEach((name, index) => {
                                    if (!activeModules.includes(name)) {
                                        const moduleEl = arraylistContainer.children[index];
                                        if (moduleEl) {
                                            moduleEl.classList.add('leaving');
                                            setTimeout(() => moduleEl.remove(), 300);
                                        }
                                    }
                                });
                                const themeName = localStorage.getItem('whispTheme') || 'Default Dark';
                                const themeData = themeItems.find(t => t.name === themeName);
                                let textColor = '#fff';
                                let glowStyles = '';
                                let borderColor = 'rgba(192, 132, 252, 0.9)';
                                if (themeData) {
                                    const glowColor = themeData.glowColor;
                                    const rgbaMatch = glowColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
                                    if (rgbaMatch) {
                                        const r = rgbaMatch[1];
                                        const g = rgbaMatch[2];
                                        const b = rgbaMatch[3];
                                        textColor = `rgb(${r}, ${g}, ${b})`;
                                        glowStyles = `
                    0 0 8px rgba(${r}, ${g}, ${b}, 0.9),
                    0 0 16px rgba(${r}, ${g}, ${b}, 0.7),
                    0 0 24px rgba(${r}, ${g}, ${b}, 0.6),
                    0 0 32px rgba(${r}, ${g}, ${b}, 0.5),
                    0 0 48px rgba(${r}, ${g}, ${b}, 0.4)
                `;
                                        borderColor = `rgba(${r}, ${g}, ${b}, 0.9)`;
                                    }
                                }
                                activeModules.forEach((name, index) => {
                                    if (!currentModules.includes(name)) {
                                        const moduleEl = document.createElement('div');
                                        moduleEl.className = 'hack-arraylist-module entering';
                                        moduleEl.textContent = name;
                                        moduleEl.style.setProperty('--module-index', index);
                                        moduleEl.style.color = textColor;
                                        moduleEl.style.textShadow = glowStyles;
                                        moduleEl.style.borderRightColor = borderColor;
                                        arraylistContainer.appendChild(moduleEl);
                                        setTimeout(() => moduleEl.classList.remove('entering'), 500);
                                    } else {
                                        const existingEl = Array.from(arraylistContainer.children).find(el => el.textContent === name);
                                        if (existingEl) {
                                            existingEl.style.setProperty('--module-index', index);
                                            existingEl.style.color = textColor;
                                            existingEl.style.textShadow = glowStyles;
                                            existingEl.style.borderRightColor = borderColor;
                                        }
                                    }
                                });
                            };
                            const saveKeybind = (moduleName, key) => {
                                try {
                                    const saved = JSON.parse(localStorage.getItem('whispKeybinds') || '{}');
                                    saved[moduleName] = key;
                                    localStorage.setItem('whispKeybinds', JSON.stringify(saved));
                                } catch (e) {
                                    console.error('Error saving keybind:', e);
                                }
                            };
                            const loadKeybinds = () => {
                                try {
                                    return JSON.parse(localStorage.getItem('whispKeybinds') || '{}');
                                } catch (e) {
                                    console.error('Error loading keybinds:', e);
                                    return {};
                                }
                            };
                            const removeKeybind = (moduleName) => {
                                try {
                                    const saved = JSON.parse(localStorage.getItem('whispKeybinds') || '{}');
                                    delete saved[moduleName];
                                    localStorage.setItem('whispKeybinds', JSON.stringify(saved));
                                } catch (e) {
                                    console.error('Error removing keybind:', e);
                                }
                            };
                            const getKeyDisplay = (code) => {
                                const keyMap = {
                                    'Space': 'Space',
                                    'ControlLeft': 'Left Ctrl',
                                    'ControlRight': 'Right Ctrl',
                                    'ShiftLeft': 'Left Shift',
                                    'ShiftRight': 'Right Shift',
                                    'AltLeft': 'Left Alt',
                                    'AltRight': 'Right Alt',
                                    'MetaLeft': 'Left Win',
                                    'MetaRight': 'Right Win',
                                    'ArrowUp': '↑',
                                    'ArrowDown': '↓',
                                    'ArrowLeft': '←',
                                    'ArrowRight': '→',
                                    'Enter': 'Enter',
                                    'Escape': 'Esc',
                                    'Backspace': 'Backspace',
                                    'Tab': 'Tab',
                                    'CapsLock': 'Caps Lock',
                                    'NumLock': 'Num Lock',
                                    'ScrollLock': 'Scroll Lock',
                                    'Insert': 'Insert',
                                    'Delete': 'Delete',
                                    'Home': 'Home',
                                    'End': 'End',
                                    'PageUp': 'Page Up',
                                    'PageDown': 'Page Down'
                                };
                                if (keyMap[code]) return keyMap[code];
                                if (code.startsWith('Key')) {
                                    return code.substring(3);
                                }
                                if (code.startsWith('Digit')) {
                                    return code.substring(5);
                                }
                                if (code.startsWith('F') && code.length <= 3) {
                                    return code;
                                }
                                if (code.startsWith('Numpad')) {
                                    return 'Num ' + code.substring(6);
                                }
                                return code;
                            };
                            const applyTheme = (themeName) => {
                                const theme = themes[themeName];
                                if (!theme) return;
                                const menu = getShadowElement('whisp-hack-menu');
                                menu.style.background = theme.backgroundColor;
                                const elements = {
                                    sidebar: shadowRoot.getElementById('hack-sidebar'),
                                    content: shadowRoot.getElementById('hack-content'),
                                    header: shadowRoot.getElementById('hack-header'),
                                    headerContainer: shadowRoot.getElementById('hack-header-container')
                                };
                                elements.sidebar.style.background = theme.sidebarBackgroundColor;
                                elements.sidebar.style.borderRightColor = theme.separatorColor || theme.borderColor;
                                elements.content.style.background = theme.contentBackgroundColor;
                                elements.header.style.background = theme.backgroundColor;
                                elements.headerContainer.style.background = theme.backgroundColor;
                                shadowRoot.querySelectorAll('#hack-search-separator, #hack-search-global-separator').forEach(sep => {
                                    sep.style.backgroundColor = theme.separatorColor || theme.borderColor;
                                });
                                shadowRoot.querySelectorAll('.smoothCaretInput').forEach(input => {
                                    if (theme.borderColor === '#ffffff') {
                                        input.style.boxShadow = '0 0 0 1px rgba(255, 255, 255, 0.3)';
                                    } else {
                                        input.style.boxShadow = '0 0 0 1px rgba(255, 255, 255, 0.05)';
                                    }
                                });
                                shadowRoot.querySelectorAll('.hack-module, .hack-theme').forEach(el => {
                                    el.style.background = theme.moduleBackgroundColor;
                                    el.onmouseenter = () => el.style.background = theme.moduleHoverColor;
                                    el.onmouseleave = () => el.style.background = theme.moduleBackgroundColor;
                                });
                                shadowRoot.querySelectorAll('.hack-module-toggle.active').forEach(toggle => {
                                    toggle.style.backgroundColor = theme.activeToggleColor;
                                });
                                shadowRoot.querySelectorAll('.hack-module-name').forEach(el => {
                                    el.style.color = theme.textColor;
                                });
                                shadowRoot.querySelectorAll('.hack-module-description').forEach(el => {
                                    el.style.color = theme.textColor;
                                });
                                shadowRoot.querySelectorAll('.hack-nav-item').forEach(el => {
                                    el.style.color = theme.textColor;
                                });
                                shadowRoot.querySelectorAll('.smoothCaretInput').forEach(input => {
                                    input.style.color = theme.textColor;
                                    input.style.setProperty('--placeholder-color', theme.textColor);
                                });
                                shadowRoot.querySelectorAll('.hack-dropdown-item, .hack-dropdown-label, .hack-dropdown-option-label, .hack-dropdown-input-label, .hack-dropdown-slider-label').forEach(el => {
                                    el.style.color = theme.textColor;
                                });
                                shadowRoot.querySelectorAll('#hack-username, #hack-user-tag').forEach(el => {
                                    el.style.color = theme.textColor;
                                });
                                shadowRoot.querySelectorAll('.whisp-title, #hack-version').forEach(el => {
                                    el.style.color = theme.textColor;
                                });
                                const themeData = themeItems.find(t => t.name === themeName);
                                if (themeData) {
                                    const glowColor = themeData.glowColor;
                                    const rgbaMatch = glowColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
                                    if (rgbaMatch) {
                                        const r = rgbaMatch[1];
                                        const g = rgbaMatch[2];
                                        const b = rgbaMatch[3];
                                        shadowRoot.querySelectorAll('.hack-arraylist-module').forEach(module => {
                                            module.style.color = `rgb(${r}, ${g}, ${b})`;
                                            module.style.textShadow = `
                        0 0 8px rgba(${r}, ${g}, ${b}, 0.9),
                        0 0 16px rgba(${r}, ${g}, ${b}, 0.7),
                        0 0 24px rgba(${r}, ${g}, ${b}, 0.6),
                        0 0 32px rgba(${r}, ${g}, ${b}, 0.5),
                        0 0 48px rgba(${r}, ${g}, ${b}, 0.4)
                    `;
                                            module.style.borderRightColor = `rgba(${r}, ${g}, ${b}, 0.9)`;
                                        });
                                    }
                                }
                                shadowRoot.querySelectorAll('.hack-theme-card').forEach(card => {
                                    card.classList.remove('active');
                                });
                                const activeThemeCard = shadowRoot.querySelector(`.hack-theme-card[data-theme="${themeName}"]`);
                                if (activeThemeCard) {
                                    activeThemeCard.classList.add('active');
                                }
                            };
                            const initializeModuleEventListeners = () => {
                                shadowRoot.querySelectorAll('.hack-module').forEach(module => {
                                    const buttonType = module.getAttribute('data-type');
                                    const actionCode = module.getAttribute('data-action');
                                    const actionOffCode = module.getAttribute('data-action-off');
                                    const hasDropdown = module.getAttribute('data-dropdown');
                                    const moduleName = module.querySelector('.hack-module-name')?.textContent.trim().split(' ')[0] || '';
                                    if (hasDropdown) {
                                        module.addEventListener('contextmenu', function(e) {
                                            e.preventDefault();
                                            const dropdown = this.querySelector('.hack-dropdown');
                                            if (!dropdown) return;
                                            shadowRoot.querySelectorAll('.hack-dropdown').forEach(d => {
                                                if (d !== dropdown && d.style.display === 'block') {
                                                    d.classList.add('closing');
                                                    setTimeout(() => {
                                                        d.style.display = 'none';
                                                        d.classList.remove('closing');
                                                    }, 200);
                                                }
                                            });
                                            if (dropdown.style.display === 'block') {
                                                dropdown.classList.add('closing');
                                                setTimeout(() => {
                                                    dropdown.style.display = 'none';
                                                    dropdown.classList.remove('closing');
                                                }, 200);
                                            } else {
                                                dropdown.classList.remove('closing');
                                                dropdown.style.display = 'block';
                                                if (typeof window.initsmoothCarets === 'function') {
                                                    setTimeout(() => {
                                                        window.initsmoothCarets();
                                                    }, 50);
                                                }
                                                const keybindWrapper = dropdown.querySelector('.hack-dropdown-keybind-wrapper');
                                                if (keybindWrapper) {
                                                    const keybindInput = keybindWrapper.querySelector('.hack-dropdown-keybind-input');
                                                    const moduleName = keybindWrapper.getAttribute('data-module-name');
                                                    const savedKeybinds = loadKeybinds();
                                                    if (savedKeybinds[moduleName]) {
                                                        keybindInput.value = getKeyDisplay(savedKeybinds[moduleName]);
                                                    }
                                                }
                                            }
                                            const currentTheme = themes[localStorage.getItem('whispTheme') || 'Default Dark'];
                                            dropdown.style.background = currentTheme.moduleBackgroundColor;
                                            dropdown.style.borderColor = currentTheme.borderColor;
                                            dropdown.querySelectorAll('.hack-dropdown-item').forEach(item => {
                                                item.style.color = currentTheme.textColor;
                                            });
                                            dropdown.querySelectorAll('.hack-dropdown-label').forEach(label => {
                                                label.style.color = currentTheme.textColor;
                                            });
                                            dropdown.querySelectorAll('.hack-dropdown-input, .hack-dropdown-keybind-input').forEach(input => {
                                                input.style.color = currentTheme.textColor;
                                                input.style.setProperty('--placeholder-color', currentTheme.textColor);
                                            });
                                        });
                                    }
                                    if (buttonType === 'toggle') {
                                        const toggle = module.querySelector('.hack-module-toggle');
                                        module.addEventListener('click', (e) => {
                                            if (e.target.closest('.hack-dropdown')) {
                                                return;
                                            }
                                            toggle.classList.toggle('active');
                                            const isActive = toggle.classList.contains('active');
                                            if (moduleName) saveModuleState(moduleName, isActive);
                                            const currentTheme = themes[localStorage.getItem('whispTheme') || 'Default Dark'];
                                            toggle.style.backgroundColor = isActive ? currentTheme.activeToggleColor : '#333';
                                            updateArraylist();
                                            try {
                                                eval(isActive ? actionCode : actionOffCode);
                                            } catch (e) {
                                                console.error(`Error:`, e);
                                            }
                                        });
                                    } else if (buttonType === 'switch') {
                                        module.addEventListener('click', (e) => {
                                            if (e.target.closest('.hack-dropdown')) {
                                                return;
                                            }
                                            try {
                                                eval(actionCode);
                                            } catch (e) {
                                                console.error(`Error:`, e);
                                            }
                                        });
                                    }
                                });
                                shadowRoot.querySelectorAll('.hack-dropdown-item, .hack-dropdown-submit').forEach(item => {
                                    item.addEventListener('click', function() {
                                        const actionCode = this.getAttribute('data-action');
                                        if (actionCode) {
                                            try {
                                                eval(actionCode);
                                            } catch (e) {
                                                console.error('Dropdown action error:', e);
                                            }
                                        }
                                        const dropdown = this.closest('.hack-dropdown');
                                        if (dropdown) dropdown.style.display = 'none';
                                    });
                                });
                                shadowRoot.querySelectorAll('.hack-dropdown-option').forEach(option => {
                                    const toggle = option.querySelector('.hack-dropdown-toggle');
                                    if (toggle) {
                                        option.addEventListener('click', function(e) {
                                            e.stopPropagation();
                                            toggle.classList.toggle('active');
                                            const isActive = toggle.classList.contains('active');
                                            const actionCode = isActive ? this.getAttribute('data-action') : this.getAttribute('data-action-off');
                                            if (actionCode) {
                                                try {
                                                    eval(actionCode);
                                                } catch (e) {
                                                    console.error('Toggle action error:', e);
                                                }
                                            }
                                        });
                                    }
                                });
                                shadowRoot.querySelectorAll('.hack-dropdown-slider').forEach(slider => {
                                    const sliderWrapper = slider.closest('.hack-dropdown-slider-wrapper');
                                    const valueDisplay = sliderWrapper.querySelector('.hack-dropdown-slider-value');
                                    const unit = valueDisplay.getAttribute('data-unit') || '';
                                    slider.addEventListener('mousedown', function(e) {
                                        e.stopPropagation();
                                    });
                                    slider.addEventListener('click', function(e) {
                                        e.stopPropagation();
                                    });
                                    slider.addEventListener('input', function(e) {
                                        e.stopPropagation();
                                        valueDisplay.textContent = this.value + unit;
                                    });
                                    slider.addEventListener('change', function(e) {
                                        e.stopPropagation();
                                        const actionCode = this.getAttribute('data-action');
                                        if (actionCode) {
                                            try {
                                                eval(actionCode.replace('VALUE', this.value));
                                            } catch (e) {
                                                console.error('Slider action error:', e);
                                            }
                                        }
                                    });
                                });
                                shadowRoot.querySelectorAll('.hack-setting-slider').forEach(slider => {
                                    const settingRow = slider.closest('.hack-setting-row');
                                    const valueDisplay = settingRow.querySelector('.hack-setting-value');
                                    const unit = valueDisplay.getAttribute('data-unit') || '';
                                    slider.addEventListener('input', function() {
                                        valueDisplay.textContent = this.value + unit;
                                    });
                                    slider.addEventListener('change', function() {
                                        const actionCode = this.getAttribute('data-action');
                                        if (actionCode) {
                                            try {
                                                eval(actionCode.replace('VALUE', this.value));
                                            } catch (e) {
                                                console.error('Settings slider action error:', e);
                                            }
                                        }
                                    });
                                });
                                shadowRoot.querySelectorAll('.hack-setting-toggle').forEach(toggle => {
                                    toggle.addEventListener('click', function(e) {
                                        e.stopPropagation();
                                        const isActive = this.classList.contains('active');
                                        const actionCode = isActive ? this.getAttribute('data-action-off') : this.getAttribute('data-action');
                                        this.classList.toggle('active');
                                        if (actionCode) {
                                            try {
                                                eval(actionCode);
                                            } catch (e) {
                                                console.error('Toggle action error:', e);
                                            }
                                        }
                                    });
                                });
                                shadowRoot.querySelectorAll('.hack-module-input').forEach(input => {
                                    input.addEventListener('keypress', function(e) {
                                        if (e.key === 'Enter') {
                                            const actionCode = this.getAttribute('data-action');
                                            if (actionCode) {
                                                try {
                                                    eval(actionCode.replace('VALUE', this.value));
                                                } catch (e) {
                                                    console.error('Input action error:', e);
                                                }
                                            }
                                        }
                                    });
                                });
                                shadowRoot.querySelectorAll('.hack-dropdown-select').forEach(select => {
                                    const valueDisplay = select.querySelector('.hack-dropdown-select-value');
                                    const optionsContainer = select.querySelector('.hack-dropdown-select-options');
                                    const options = select.querySelectorAll('.hack-dropdown-select-option');
                                    const actionCode = select.getAttribute('data-action');
                                    select.addEventListener('click', function(e) {
                                        e.stopPropagation();
                                        shadowRoot.querySelectorAll('.hack-dropdown-select.active').forEach(other => {
                                            if (other !== select) other.classList.remove('active');
                                        });
                                        this.classList.toggle('active');
                                    });
                                    options.forEach(option => {
                                        option.addEventListener('click', function(e) {
                                            e.stopPropagation();
                                            const value = this.getAttribute('data-value');
                                            options.forEach(opt => opt.classList.remove('selected'));
                                            this.classList.add('selected');
                                            valueDisplay.textContent = value;
                                            select.classList.remove('active');
                                            if (actionCode) {
                                                try {
                                                    eval(actionCode.replace('VALUE', JSON.stringify(value)));
                                                } catch (e) {
                                                    console.error('Select action error:', e);
                                                }
                                            }
                                        });
                                    });
                                });
                                shadowRoot.addEventListener('click', function(e) {
                                    if (!e.target.closest('.hack-dropdown-select')) {
                                        shadowRoot.querySelectorAll('.hack-dropdown-select.active').forEach(select => {
                                            select.classList.remove('active');
                                        });
                                    }
                                });
                                shadowRoot.querySelectorAll('.hack-dropdown-input').forEach(input => {
                                    input.addEventListener('click', function(e) {
                                        e.stopPropagation();
                                    });
                                    input.addEventListener('keypress', function(e) {
                                        if (e.key === 'Enter') {
                                            const actionCode = this.getAttribute('data-action');
                                            if (actionCode) {
                                                try {
                                                    eval(actionCode.replace('VALUE', JSON.stringify(this.value)));
                                                } catch (e) {
                                                    console.error('Input action error:', e);
                                                }
                                            }
                                        }
                                    });
                                    input.addEventListener('blur', function() {
                                        const actionCode = this.getAttribute('data-action');
                                        if (actionCode && this.value) {
                                            try {
                                                eval(actionCode.replace('VALUE', JSON.stringify(this.value)));
                                            } catch (e) {
                                                console.error('Input action error:', e);
                                            }
                                        }
                                    });
                                });
                                shadowRoot.querySelectorAll('.hack-dropdown-button').forEach(button => {
                                    button.addEventListener('click', function(e) {
                                        e.stopPropagation();
                                        const actionCode = this.getAttribute('data-action');
                                        if (actionCode) {
                                            try {
                                                eval(actionCode);
                                            } catch (e) {
                                                console.error('Button action error:', e);
                                            }
                                        }
                                    });
                                });
                                shadowRoot.querySelectorAll('.hack-dropdown-colorpicker').forEach(colorpicker => {
                                    colorpicker.addEventListener('input', function(e) {
                                        e.stopPropagation();
                                        const colorValue = this.value;
                                        const valueDisplay = this.closest('.hack-dropdown-colorpicker-container').querySelector('.hack-dropdown-colorpicker-value');
                                        if (valueDisplay) {
                                            valueDisplay.textContent = colorValue.toUpperCase();
                                        }
                                        const actionCode = this.getAttribute('data-action');
                                        if (actionCode) {
                                            try {
                                                eval(actionCode.replace('VALUE', JSON.stringify(colorValue)));
                                            } catch (e) {
                                                console.error('Color picker action error:', e);
                                            }
                                        }
                                    });
                                });
                                shadowRoot.addEventListener('click', function(e) {
                                    const isInsideDropdown = e.target.closest('.hack-dropdown');
                                    const isOnDropdownModule = e.target.closest('[data-dropdown="true"]');
                                    if (!isInsideDropdown && !isOnDropdownModule) {
                                        shadowRoot.querySelectorAll('.hack-dropdown').forEach(dropdown => {
                                            if (dropdown.style.display === 'block') {
                                                dropdown.classList.add('closing');
                                                setTimeout(() => {
                                                    dropdown.style.display = 'none';
                                                    dropdown.classList.remove('closing');
                                                }, 200);
                                            }
                                        });
                                    }
                                });
                                shadowRoot.querySelectorAll('.hack-dropdown-keybind-wrapper').forEach(wrapper => {
                                    const input = wrapper.querySelector('.hack-dropdown-keybind-input');
                                    const moduleName = wrapper.getAttribute('data-module-name');
                                    wrapper.addEventListener('click', function(e) {
                                        e.stopPropagation();
                                        input.value = 'Press any key...';
                                        input.classList.add('listening');
                                        const keyHandler = (event) => {
                                            event.preventDefault();
                                            event.stopPropagation();
                                            const code = event.code;
                                            if (code === 'Backspace') {
                                                input.value = '';
                                                input.classList.remove('listening');
                                                removeKeybind(moduleName);
                                                document.removeEventListener('keydown', keyHandler);
                                                return;
                                            }
                                            input.value = getKeyDisplay(code);
                                            input.classList.remove('listening');
                                            saveKeybind(moduleName, code);
                                            document.removeEventListener('keydown', keyHandler);
                                        };
                                        document.addEventListener('keydown', keyHandler);
                                    });
                                });
                            };
                            const menu = document.createElement('div');
                            menu.id = 'whisp-hack-menu';
                            menu.style.pointerEvents = 'auto';
                            menu.innerHTML = `
        <div id="hack-sidebar">
            <div id="hack-logo">
                <img src="https:
                <span class="whisp-title">Whisp</span><span id="hack-version">V1</span>
            </div>
            <div id="hack-search-separator"></div>
            ${generateSidebarButtons(sidebarButtons)}
            <div id="hack-user">
                <div id="hack-avatar"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAGQCAMAAABBKENmAAAC+lBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUQAAdgAAwgAA3gAA4wAA6AAA7AAA0gAAswAAOAAAAQAAYgAAkAAA7wAA8wAA/gAA/QAA/wAA8wAAnAAAAAAA+AAA9gAAAAAA/AAA+gAA/AAA9wAA7wAA4wAA0wAAvwAAsAAAogAAmQAAjAAAgwAAeAAAcQAAawAAbgAAswAAxAAA8gAA4AAA0AAAhwAAUgAAMgAAJwAAGwAADwAAAgAAAAAABAAAGQAAOQAA8AAA5wAAzQAAqgAAewAAVQAAPQAAIQAAFAAACwAAEQAAJAAAWgAAfgAA5QAA8QAA1wAACAAALgAAVwAA1QAA7QAAAAAAdQAAQgAABgAAFgAAxwAA9AAA6wAAAQAAHgAA6QAA+gAANgAAKgAATQAAUAAA+QAA2QAAAAAAywAARQAAQAAAnwAAZAAAuwAA3QAApgAAuAAAnAAAXgAAjwAAkwAA2wAAtQAAyQAAgAAAvQAAaAAAlgAAYQAArQAAYAAAAAAASgAAwQAASAAAAAAAAAAAAAAAYQAAAAAAAAAAAQAAAAAAAAAAbwAAAAAAAAAAAAAAMwAAAAAAtAAAAAAAAAAAAAAAAAAAxAAAAAAAAAAAAAAAAAAAYQAAAAAAAAAA2AAAAAAASgAAMAAAAAAAzAAAnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArgAAAAAAAAAAAQAAAAAALgAAAAAAZAAAAAAAywAANwAAAAAAEQAAAAAAAAAA4wAAAAAAAAAAswAAFwAAAAAAAAAA2QAAUwAAAAAAAAAAAAAAAAAAAAAAAAAAawAAAQAAAAAAAQAAOwAAAQAAAAAAAAAAnwAAnAAAAQAAiQAAVQAAKgAAigAAIgAAvwAAHQAAZQAAAQAAfABEWEBoAAAA/nRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0fICEjJSc1R32cq7jDjmoxKT1R0ur
                <div id="hack-user-info">
                    <div id="hack-username">Slope Hacks</div>
                    <div id="hack-user-tag">Type: Advanced</div>
                </div>
            </div>
        </div>
        <div id="hack-content">
            <div id="hack-header-container">
                <div id="hack-header">
                    <div class="sc-container">
                        <input type="text" id="hack-search-global" class="smoothCaretInput hack-search-input" placeholder="Search..">
                        <div class="caret" style="width: 2px; height: 40%; background-color: #FFFFFF;"></div>
                    </div>
                    <div id="hack-window-controls">
                        <div id="hack-minimize-btn" class="hack-btn"></div>
                        <div id="hack-fullscreen-btn" class="hack-btn"></div>
                        <div id="hack-close-btn" class="hack-btn"></div>
                    </div>
                </div>
                <div id="hack-search-global-separator"></div>
            </div>
            <div id="hack-content-scroll-area">
                <div id="hack-invincibility" class="hack-section active">${generateSectionModules('invincibility')}</div>
                <div id="hack-ballcontrol" class="hack-section">${generateSectionModules('ballcontrol')}</div>
                <div id="hack-flight" class="hack-section">${generateSectionModules('flight')}</div>
                <div id="hack-gravity" class="hack-section">${generateSectionModules('gravity')}</div>
                <div id="hack-score" class="hack-section">${generateSectionModules('score')}</div>
                <div id="hack-utilities" class="hack-section">${generateSectionModules('utilities')}</div>
                <div id="hack-supportedsites" class="hack-section">${generateSectionModules('supportedsites')}</div>
                <div id="hack-teleportation" class="hack-section">${generateSectionModules('teleportation')}</div>
                <div id="hack-settings" class="hack-section">${generateSectionModules('settings')}</div>
                <div id="hack-themes" class="hack-section">${generateThemesHTML()}</div>
            </div>
        </div>
    `;
                            shadowRoot.appendChild(menu);
                            document.body.appendChild(shadowHost);
                            const arraylist = document.createElement('div');
                            arraylist.id = 'hack-arraylist';
                            arraylist.className = 'hack-arraylist';
                            const arraylistEnabled = localStorage.getItem('arraylistEnabled');
                            if (arraylistEnabled === 'true') {
                                arraylist.style.display = 'flex';
                            } else {
                                arraylist.style.display = 'none';
                                if (arraylistEnabled !== 'false') {
                                    localStorage.setItem('arraylistEnabled', 'false');
                                }
                            }
                            arraylist.innerHTML = `
        <div id="hack-arraylist-modules" class="hack-arraylist-modules">
        </div>
    `;
                            shadowRoot.appendChild(arraylist);
                            const smoothCaretScript = `
        function css(a,b){return window.getComputedStyle(a,null).getPropertyValue(b)}
        function getTextWidth(b,c){let a=document.querySelector("#sc-canvas").getContext("2d");return a.font=c,a.measureText(b).width}
        const canvElem=document.createElement("canvas");
        const passwordChar=navigator.userAgent.match(/firefox|fxios/i)?"\\u25CF":"\\u2022";
        canvElem.id="sc-canvas";
        canvElem.style.display="none";
        document.body.appendChild(canvElem);
        let smoothCarets=[];
        let caretPosString;
        let typingTimer=null;
        const TYPING_TIMEOUT=800;
        class SmoothCaret{
            constructor(b,a,c){this.font=css(a,"font-size")+" "+css(a,"font-family");this.maxMargin=parseInt(css(a.parentElement,"width"))-10;this.caretMargin=parseInt(css(a,"padding-left"));this.caretWidth=parseInt(b.style.width);this.letterSpacing=parseInt(css(a,"letter-spacing"))?parseInt(css(a,"letter-spacing")):0;this.caretElem=b;this.inputElem=a;this.textWidth=void 0;this.index=c;this.isTyping=false}
            init(){this.inputElem.dataset.sc=this.index;this.pw_ratio="password"==this.inputElem.type?getTextWidth(passwordChar+passwordChar,this.font)-getTextWidth(passwordChar,this.font):null;this.inputElem.addEventListener("input",a=>{this.update("password"===a.target.type?Array(a.target.value.length+1).join(passwordChar):a.target.value);this.setTyping(true)});this.inputElem.addEventListener("blur",()=>{this.caretElem.style.opacity="0";this.caretElem.style.transform="";this.caretElem.classList.remove('blinking')});this.inputElem.addEventListener("focus",()=>{this.caretElem.style.opacity="1";this.setTyping(true);this.update(this.inputElem.value)});this.inputElem.addEventListener("click",()=>{this.update(this.inputElem.value.slice(0,this.inputElem.selectionStart))});this.inputElem.addEventListener("keyup",()=>{this.update(this.inputElem.value.slice(0,this.inputElem.selectionStart))})}
            setTyping(isTyping){this.isTyping=isTyping;if(isTyping){this.caretElem.classList.remove('blinking');this.caretElem.style.opacity="1";if(typingTimer){clearTimeout(typingTimer)}typingTimer=setTimeout(()=>{if(document.activeElement===this.inputElem){this.isTyping=false;this.caretElem.classList.add('blinking')}},TYPING_TIMEOUT)}}
            update(a){if(this.isTyping){this.caretElem.classList.remove('blinking');this.caretElem.style.opacity="1"}this.textWidth=this.pw_ratio?this.pw_ratio*a.length+this.caretMargin+this.letterSpacing*(a.length-1):getTextWidth(a,this.font)>0?getTextWidth(a,this.font)+this.caretMargin+this.letterSpacing*(a.length-1):this.caretMargin-this.caretWidth/2;if(this.textWidth<=this.maxMargin){this.caretElem.style.transform="translateX("+this.textWidth+"px)"}}
        }
        function initsmoothCarets(){smoothCarets=[];window.whispShadowRoot.querySelectorAll(".sc-container").forEach((a,b)=>{smoothCarets.push(new SmoothCaret(a.children[1],a.children[0],b));smoothCarets[b].init()});if(window.caretUpdateInterval){clearInterval(window.caretUpdateInterval)}window.caretUpdateInterval=setInterval(()=>{if(document.activeElement.getAttribute("data-sc")){caretPosString="password"===document.activeElement.type?Array(document.activeElement.value.length+1).join(passwordChar).slice(0,document.activeElement.selectionStart):document.activeElement.value.slice(0,document.activeElement.selectionStart);smoothCarets[parseInt(document.activeElement.dataset.sc)].update(caretPosString)}},20)}
        window.initsmoothCarets = initsmoothCarets;
        setTimeout(()=>{initsmoothCarets()},100);
    `;
                            const script = document.createElement('script');
                            script.textContent = smoothCaretScript;
                            shadowRoot.appendChild(script);
                            let isDragging = false,
                                offsetX, offsetY, startX = 0,
                                startY = 0,
                                wasDragged = false;
                            const dragArea = shadowRoot.getElementById('hack-header-container');
                            const enableDragging = (e) => {
                                if (!menu.classList.contains('hack-minimized')) {
                                    if (e.target.closest('.hack-btn') || e.target.closest('.smoothCaretInput')) return;
                                }
                                isDragging = true;
                                startX = e.clientX;
                                startY = e.clientY;
                                offsetX = e.clientX - menu.getBoundingClientRect().left;
                                offsetY = e.clientY - menu.getBoundingClientRect().top;
                                wasDragged = false;
                            };
                            dragArea.addEventListener('mousedown', enableDragging);
                            menu.addEventListener('mousedown', (e) => {
                                if (menu.classList.contains('hack-minimized')) {
                                    enableDragging(e);
                                }
                            });
                            document.addEventListener('mousemove', e => {
                                if (!isDragging) return;
                                menu.style.left = (e.clientX - offsetX) + 'px';
                                menu.style.top = (e.clientY - offsetY) + 'px';
                                if (Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5) {
                                    wasDragged = true
                                }
                            });
                            document.addEventListener('mouseup', () => {
                                isDragging = false;
                                wasDragged = false;
                            });
                            shadowRoot.getElementById('hack-close-btn').addEventListener('click', e => {
                                e.stopPropagation();
                                shadowRoot.querySelectorAll('.hack-module-toggle').forEach(toggle => {
                                    const moduleElement = toggle.closest('.hack-module');
                                    if (moduleElement) {
                                        const moduleName = moduleElement.querySelector('.hack-module-name')?.textContent.trim().split(' ')[0] || '';
                                        if (moduleName) {
                                            const isActive = toggle.classList.contains('active');
                                            saveModuleState(moduleName, isActive);
                                        }
                                    }
                                });
                                menu.remove();
                            });
                            let minimizedCircle = null;
                            shadowRoot.getElementById('hack-minimize-btn').addEventListener('click', e => {
                                e.stopPropagation();
                                if (minimizedCircle) {
                                    const circleElement = minimizedCircle;
                                    const savedTop = menu.getAttribute('data-original-top');
                                    const savedLeft = menu.getAttribute('data-original-left');
                                    const circleRect = circleElement.getBoundingClientRect();
                                    menu.classList.remove('hack-minimized');
                                    menu.classList.remove('menu-hidden', 'menu-visible');
                                    menu.style.animation = 'none';
                                    menu.style.pointerEvents = 'auto';
                                    const menuRect = menu.getBoundingClientRect();
                                    const menuWidth = menuRect.width || 600;
                                    const menuHeight = menuRect.height || 800;
                                    const newLeft = circleRect.left + circleRect.width / 2 - menuWidth / 2;
                                    const newTop = circleRect.top + circleRect.height / 2 - menuHeight / 2;
                                    menu.style.top = newTop + 'px';
                                    menu.style.left = newLeft + 'px';
                                    circleElement.style.opacity = '0';
                                    circleElement.style.transition = 'opacity 0.2s ease';
                                    setTimeout(() => {
                                        circleElement.remove();
                                    }, 200);
                                    minimizedCircle = null;
                                    menu.style.transition = 'none';
                                    menu.style.transform = 'scale(0.1)';
                                    menu.style.opacity = '0';
                                    void menu.offsetHeight;
                                    setTimeout(() => {
                                        menu.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease';
                                        menu.style.transform = 'scale(1)';
                                        menu.style.opacity = '1';
                                        setTimeout(() => {
                                            menu.style.transition = '';
                                            menu.style.transform = '';
                                        }, 400);
                                    }, 10);
                                } else {
                                    menu.classList.remove('menu-hidden', 'menu-visible');
                                    menu.style.animation = 'none';
                                    menu.style.pointerEvents = 'auto';
                                    const rect = menu.getBoundingClientRect();
                                    const centerX = rect.left + rect.width / 2;
                                    const centerY = rect.top + rect.height / 2;
                                    menu.setAttribute('data-original-top', menu.style.top || '20px');
                                    menu.setAttribute('data-original-left', menu.style.left || '20px');
                                    menu.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease';
                                    menu.style.transformOrigin = 'center center';
                                    menu.style.transform = 'scale(0.1)';
                                    menu.style.opacity = '0';
                                    setTimeout(() => {
                                        if (minimizedCircle) return;
                                        menu.classList.add('hack-minimized');
                                        menu.style.transition = '';
                                        menu.style.transform = '';
                                        menu.style.transformOrigin = '';
                                        menu.style.opacity = '';
                                        minimizedCircle = document.createElement('div');
                                        minimizedCircle.style.cssText = `
                    all: initial;
                    position: fixed;
                    width: 65px;
                    height: 65px;
                    background: linear-gradient(145deg, #1a1a24, #0f0f14);
                    border: 2px solid rgba(78, 204, 163, 0.3);
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    user-select: none;
                    z-index: 2147483647;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.5), 0 0 20px rgba(78, 204, 163, 0.3);
                    opacity: 0;
                    transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
                    left: ${centerX - 32.5}px;
                    top: ${centerY - 32.5}px;
                `;
                                        const img = document.createElement('img');
                                        img.src = 'https:
                                        img.style.cssText = 'width:70%;height:70%;object-fit:contain;pointer-events:none;';
                                        minimizedCircle.appendChild(img);
                                        document.body.appendChild(minimizedCircle);
                                        requestAnimationFrame(() => {
                                            if (minimizedCircle) {
                                                minimizedCircle.style.opacity = '1';
                                                minimizedCircle.style.transform = 'scale(1)';
                                            }
                                        });
                                        const circle = minimizedCircle;
                                        circle.addEventListener('mouseenter', () => {
                                            if (minimizedCircle) {
                                                minimizedCircle.style.boxShadow = '0 12px 32px rgba(0,0,0,0.6), 0 0 30px rgba(78, 204, 163, 0.5)';
                                            }
                                        });
                                        circle.addEventListener('mouseleave', () => {
                                            if (!dragging && minimizedCircle) {
                                                minimizedCircle.style.boxShadow = '0 8px 24px rgba(0,0,0,0.5), 0 0 20px rgba(78, 204, 163, 0.3)';
                                            }
                                        });
                                        let offsetX = 0,
                                            offsetY = 0,
                                            dragging = false,
                                            moved = false;
                                        minimizedCircle.addEventListener('mousedown', e => {
                                            dragging = true;
                                            moved = false;
                                            offsetX = e.clientX - minimizedCircle.getBoundingClientRect().left;
                                            offsetY = e.clientY - minimizedCircle.getBoundingClientRect().top;
                                            minimizedCircle.style.transition = '';
                                            minimizedCircle.style.cursor = 'grabbing';
                                        });
                                        document.addEventListener('mousemove', e => {
                                            if (!dragging) return;
                                            moved = true;
                                            minimizedCircle.style.left = (e.clientX - offsetX) + 'px';
                                            minimizedCircle.style.top = (e.clientY - offsetY) + 'px';
                                        });
                                        document.addEventListener('mouseup', () => {
                                            if (!dragging) return;
                                            dragging = false;
                                            minimizedCircle.style.transition = 'opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease';
                                            minimizedCircle.style.cursor = 'pointer';
                                        });
                                        minimizedCircle.addEventListener('click', e => {
                                            e.stopPropagation();
                                            if (!dragging && !moved) {
                                                shadowRoot.getElementById('hack-minimize-btn').click();
                                            }
                                            moved = false;
                                        });
                                    }, 400);
                                }
                            });
                            shadowRoot.getElementById('hack-fullscreen-btn').addEventListener('click', e => {
                                e.stopPropagation();
                                menu.classList.toggle('hack-fullscreen');
                            });
                            shadowRoot.querySelectorAll('.hack-nav-item').forEach(item => {
                                item.addEventListener('click', () => {
                                    const sectionId = item.getAttribute('data-section');
                                    shadowRoot.querySelectorAll('.hack-nav-item').forEach(i => i.classList.remove('active'));
                                    item.classList.add('active');
                                    shadowRoot.querySelectorAll('.hack-section').forEach(section => section.classList.remove('active'));
                                    const section = shadowRoot.getElementById('hack-' + sectionId);
                                    if (section) section.classList.add('active');
                                    if (sectionId === 'settings') {
                                        setTimeout(() => {
                                            shadowRoot.querySelectorAll('.hack-setting-toggle').forEach(toggle => {
                                                const newToggle = toggle.cloneNode(true);
                                                toggle.parentNode.replaceChild(newToggle, toggle);
                                                newToggle.addEventListener('click', function(e) {
                                                    e.stopPropagation();
                                                    this.classList.toggle('active');
                                                    const isActive = this.classList.contains('active');
                                                    const actionCode = isActive ? this.getAttribute('data-action') : this.getAttribute('data-action-off');
                                                    if (actionCode) {
                                                        try {
                                                            eval(actionCode);
                                                        } catch (e) {
                                                            console.error('Toggle action error:', e);
                                                        }
                                                    }
                                                });
                                            });
                                        }, 50);
                                    }
                                });
                            });
                            shadowRoot.querySelectorAll('.hack-theme, .hack-theme-card').forEach(themeButton => {
                                const glowColor = themeButton.getAttribute('data-glow-color');
                                if (glowColor) {
                                    themeButton.querySelector('.hack-theme-preview').style.boxShadow = `0 1px 4px ${glowColor}, 0 0 8px ${glowColor}`;
                                }
                                themeButton.addEventListener('mouseenter', function() {
                                    const glowColor = this.getAttribute('data-glow-color');
                                    if (glowColor) {
                                        this.querySelector('.hack-theme-preview').style.boxShadow = `0 2px 6px ${glowColor}, 0 0 12px ${glowColor}, 0 0 16px ${glowColor}`;
                                    }
                                });
                                themeButton.addEventListener('mouseleave', function() {
                                    const glowColor = this.getAttribute('data-glow-color');
                                    if (glowColor) {
                                        this.querySelector('.hack-theme-preview').style.boxShadow = `0 1px 4px ${glowColor}, 0 0 8px ${glowColor}`;
                                    }
                                });
                                themeButton.addEventListener('click', function() {
                                    const themeName = this.getAttribute('data-theme');
                                    localStorage.setItem('whispTheme', themeName);
                                    applyTheme(themeName);
                                });
                            });
                            const searchInput = shadowRoot.getElementById('hack-search-global');
                            searchInput.addEventListener('input', function() {
                                const searchValue = this.value.toLowerCase();
                                const activeSection = shadowRoot.querySelector('.hack-section.active');
                                if (activeSection) {
                                    activeSection.querySelectorAll('.hack-module').forEach((module, index) => {
                                        const moduleName = module.querySelector('.hack-module-name').textContent.toLowerCase();
                                        const moduleDescription = module.querySelector('.hack-module-description').textContent.toLowerCase();
                                        const matches = moduleName.includes(searchValue) || moduleDescription.includes(searchValue);
                                        if (matches) {
                                            module.classList.remove('hiding');
                                            module.style.display = 'flex';
                                            if (module.style.animation && module.style.animation.includes('moduleSlideOut')) {
                                                module.style.animation = 'none';
                                                setTimeout(() => {
                                                    module.style.animation = '';
                                                }, 10);
                                            }
                                        } else {
                                            module.classList.add('hiding');
                                            setTimeout(() => {
                                                if (module.classList.contains('hiding')) {
                                                    module.style.display = 'none';
                                                }
                                            }, 300);
                                        }
                                    });
                                }
                            });
                            document.addEventListener('keydown', e => {
                                if (e.key === 'Escape' && getShadowElement('whisp-hack-menu')) {
                                    getShadowElement('whisp-hack-menu').remove();
                                }
                            });
                            document.addEventListener('keydown', e => {
                                if (e.target.tagName === 'INPUT' && !e.target.classList.contains('listening')) return;
                                const keybinds = loadKeybinds();
                                for (const [moduleName, boundCode] of Object.entries(keybinds)) {
                                    if (e.code === boundCode) {
                                        e.preventDefault();
                                        const modules = shadowRoot.querySelectorAll('.hack-module');
                                        modules.forEach(module => {
                                            const moduleNameElement = module.querySelector('.hack-module-name');
                                            if (moduleNameElement && moduleNameElement.textContent.trim().startsWith(moduleName)) {
                                                const moduleType = module.getAttribute('data-type');
                                                const actionCode = module.getAttribute('data-action');
                                                const actionOffCode = module.getAttribute('data-action-off');
                                                if (moduleType === 'toggle') {
                                                    const toggle = module.querySelector('.hack-module-toggle');
                                                    toggle.classList.toggle('active');
                                                    const isActive = toggle.classList.contains('active');
                                                    saveModuleState(moduleName, isActive);
                                                    const currentTheme = themes[localStorage.getItem('whispTheme') || 'Default Dark'];
                                                    toggle.style.backgroundColor = isActive ? currentTheme.activeToggleColor : '#333';
                                                    updateArraylist();
                                                    try {
                                                        eval(isActive ? actionCode : actionOffCode);
                                                    } catch (err) {
                                                        console.error(`Keybind error:`, err);
                                                    }
                                                } else if (moduleType === 'switch') {
                                                    try {
                                                        eval(actionCode);
                                                    } catch (err) {
                                                        console.error(`Keybind error:`, err);
                                                    }
                                                }
                                            }
                                        });
                                        break;
                                    }
                                }
                            });
                            shadowRoot.querySelectorAll('.hack-setting-toggle').forEach(toggle => {
                                toggle.addEventListener('click', function(e) {
                                    e.stopPropagation();
                                    this.classList.toggle('active');
                                    const isActive = this.classList.contains('active');
                                    const actionCode = isActive ? this.getAttribute('data-action') : this.getAttribute('data-action-off');
                                    if (actionCode) {
                                        try {
                                            eval(actionCode);
                                        } catch (e) {
                                            console.error('Setting action error:', e);
                                        }
                                    }
                                });
                            });
                            window.hackMenuPauseEnabled = false;
                            const menuElement = getShadowElement('whisp-hack-menu');
                            menuElement.addEventListener('mouseenter', () => {
                                if (window.hackMenuPauseEnabled && typeof game !== 'undefined' && game.slop) {
                                    game.slop.pause = true;
                                }
                            });
                            menuElement.addEventListener('mouseleave', () => {
                                if (window.hackMenuPauseEnabled && typeof game !== 'undefined' && game.slop) {
                                    game.slop.pause = false;
                                }
                            });
                            const savedTheme = localStorage.getItem('whispTheme') || 'Default Dark';
                            applyTheme(savedTheme);
                            const transitionsEnabled = localStorage.getItem('transitionsEnabled');
                            if (transitionsEnabled === 'false') {
                                getShadowElement('whisp-hack-menu').classList.add('no-transitions');
                            } else if (!transitionsEnabled) {
                                localStorage.setItem('transitionsEnabled', 'true');
                            }
                            const smoothCaretEnabled = localStorage.getItem('smoothCaretEnabled');
                            if (smoothCaretEnabled === 'false') {
                                shadowRoot.querySelectorAll('.caret').forEach(el => {
                                    el.style.display = 'none';
                                    el.style.opacity = '0';
                                    el.style.visibility = 'hidden';
                                });
                                shadowRoot.querySelectorAll('.smoothCaretInput').forEach(el => {
                                    el.style.caretColor = '#4ecca3';
                                    if (!el.classList.contains('hack-module-input')) {
                                        el.style.paddingLeft = '30px';
                                    }
                                });
                                shadowRoot.querySelectorAll('.hack-module-input').forEach(el => {
                                    el.style.caretColor = '#4ecca3';
                                });
                            } else {
                                if (!smoothCaretEnabled) {
                                    localStorage.setItem('smoothCaretEnabled', 'true');
                                }
                                shadowRoot.querySelectorAll('.smoothCaretInput').forEach(el => {
                                    el.style.caretColor = 'transparent';
                                });
                                shadowRoot.querySelectorAll('.hack-module-input').forEach(el => {
                                    el.style.caretColor = 'transparent';
                                });
                            }
                            shadowRoot.querySelectorAll('.hack-setting-toggle').forEach(toggle => {
                                const actionCode = toggle.getAttribute('data-action');
                                if (actionCode && actionCode.includes('transitionsEnabled')) {
                                    if (transitionsEnabled !== 'false') {
                                        toggle.classList.add('active');
                                    }
                                }
                                if (actionCode && actionCode.includes('smoothCaretEnabled')) {
                                    if (smoothCaretEnabled !== 'false') {
                                        toggle.classList.add('active');
                                    }
                                }
                                if (actionCode && actionCode.includes('arraylistEnabled')) {
                                    const arraylistEnabled = localStorage.getItem('arraylistEnabled');
                                    if (arraylistEnabled === 'true') {
                                        toggle.classList.add('active');
                                    }
                                }
                            });
                            initializeModuleEventListeners();
                            const savedModuleStates = loadModuleStates();
                            shadowRoot.querySelectorAll('.hack-module').forEach(module => {
                                const buttonType = module.getAttribute('data-type');
                                const actionCode = module.getAttribute('data-action');
                                const moduleName = module.querySelector('.hack-module-name')?.textContent.trim().split(' ')[0] || '';
                                if (buttonType === 'toggle') {
                                    const toggle = module.querySelector('.hack-module-toggle');
                                    const shouldBeActive = (savedModuleStates[moduleName] === true);
                                    if (moduleName && shouldBeActive) {
                                        toggle.classList.add('active');
                                        const currentTheme = themes[localStorage.getItem('whispTheme') || 'Default Dark'];
                                        toggle.style.backgroundColor = currentTheme.activeToggleColor;
                                        if (actionCode) {
                                            try {
                                                eval(actionCode)
                                            } catch (e) {
                                                console.error(`Error:`, e)
                                            }
                                        }
                                    }
                                }
                            });
                            setTimeout(() => {
                                updateArraylist();
                            }, 100);
                            const settingsKeybindWrappers = shadowRoot.querySelectorAll('#hack-settings .hack-dropdown-keybind-wrapper');
                            settingsKeybindWrappers.forEach(wrapper => {
                                const input = wrapper.querySelector('.hack-dropdown-keybind-input');
                                const moduleName = wrapper.getAttribute('data-module-name');
                                const savedKeybinds = loadKeybinds();
                                if (savedKeybinds[moduleName]) {
                                    input.value = getKeyDisplay(savedKeybinds[moduleName]);
                                }
                                wrapper.addEventListener('click', function(e) {
                                    e.stopPropagation();
                                    input.value = 'Press any key...';
                                    input.classList.add('listening');
                                    const keyHandler = (event) => {
                                        event.preventDefault();
                                        event.stopPropagation();
                                        const code = event.code;
                                        if (code === 'Backspace') {
                                            input.value = '';
                                            input.classList.remove('listening');
                                            removeKeybind(moduleName);
                                            document.removeEventListener('keydown', keyHandler);
                                            return;
                                        }
                                        input.value = getKeyDisplay(code);
                                        input.classList.remove('listening');
                                        saveKeybind(moduleName, code);
                                        document.removeEventListener('keydown', keyHandler);
                                    };
                                    document.addEventListener('keydown', keyHandler);
                                });
                            });
                            document.addEventListener('keydown', function(e) {
                                const savedKeybinds = loadKeybinds();
                                if (savedKeybinds['ToggleMenu'] && e.code === savedKeybinds['ToggleMenu']) {
                                    e.preventDefault();
                                    const menu = getShadowElement('whisp-hack-menu');
                                    if (menu.classList.contains('hack-minimized')) {
                                        const minimizeBtn = shadowRoot.getElementById('hack-minimize-btn');
                                        if (minimizeBtn) {
                                            minimizeBtn.click();
                                        }
                                        return;
                                    }
                                    if (menu.classList.contains('menu-hidden')) {
                                        menu.classList.remove('menu-hidden');
                                        menu.classList.add('menu-visible');
                                    } else {
                                        menu.classList.remove('menu-visible');
                                        menu.classList.add('menu-hidden');
                                    }
                                }
                            });
                        })();
