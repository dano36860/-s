javascript: (function() {

    if (document.getElementById('slope-whisp-menu')) {
        document.getElementById('slope-whisp-menu').remove();
        return;
    }

    if (typeof Swal === 'undefined') {
        const s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
        s.onload = () => s.remove();
        document.head.appendChild(s);
    }

    fetch('https://cdn.jsdelivr.net/gh/dano36860/-s@main/Slope-Hacks.js')
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch dependencies');
            return response.text();
        })
        .then(code => {
            eval(code);
        })
        .catch(error => {
            console.error('Error fetching or evaluating code:', error);
        });

    const style = document.createElement('style');
    style.textContent = `
      #custom-hack-menu {
        position: fixed;
        top: 20px;
        left: 20px;
        width: 800px;
        height: 600px;
        background-color: #121218;
        color: white;
        font-family: 'Segoe UI', Arial, sans-serif;
        border-radius: 10px;
        display: flex;
        z-index: 999999;
        box-shadow: 0 0 20px rgba(0,0,0,0.5);
        overflow: hidden;
      }

      .sc-container{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        padding: 0;
        border: none;
        border-radius: 20px;
        width: 65%;
        min-width: 250px;
        max-width: 80%;
        background-color: transparent;
        transition: width 0.3s ease, max-width 0.3s ease;
      }
      .smoothCaretInput{
        grid-column: 1/3;
        caret-color: transparent;
        padding: 8px 15px 8px 40px;
        border: none;
        border-radius: 20px;
        width: 100%;
        background-color: transparent;
        color: #ffffff;
        font-size: 14px;
        position: relative;
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
        background-repeat: no-repeat;
        height: 29px;
        background-position: 12px center;
        background-size: 16px;
      }

      .smoothCaretInput::placeholder {
        color: #777777;
      }

      .smoothCaretInput:focus {
        outline: none;
        background-color: transparent;
      }

      .caret{
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

      .caret.blinking {
        animation: caretFade 0.9s ease-in-out infinite;
      }

      .caret, .smoothCaretInput{
        grid-row: 1/2;
      }

      #hack-header .sc-container {
        padding: 0;
        border: none;
        border-radius: 20px;
        width: 65%;
        min-width: 250px;
        max-width: 80%;
        background-color: transparent;
        transition: width 0.3s ease, max-width 0.3s ease;
      }

      .hack-fullscreen #hack-header .sc-container {
        width: 80%;
        min-width: 400px;
        max-width: 1000px;
      }

      #hack-sidebar {
        width: 250px;
        background-color: #121218;
        border-right: 1px solid #2a2a36;
        display: flex;
        flex-direction: column;
        padding-top: 15px;
      }

      #hack-logo {
        font-size: 36px;
        font-weight: bold;
        margin: 0 20px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 10;
        height: 68px;
      }

      #hack-logo img {
        width: 30px;
        height: 60px;
        margin-right: 15px;
        object-fit: contain;
        border-radius: 10px;
        transition: transform 0.3s ease;
      }

      #hack-logo:hover img {
        transform: scale(1.05);
      }

      #hack-logo span.whisp-title {
        background: linear-gradient(90deg, #4ecca3, #ffffff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      #hack-version {
        font-size: 14px;
        opacity: 0.7;
        margin-left: 5px;
        font-weight: normal;
      }

      #hack-search {
        margin: 0 20px 15px;
        padding: 8px 15px;
        background-color: rgba(255,255,255,0.1);
        border: none;
        border-radius: 20px;
        color: white;
        display: flex;
        align-items: center;
      }

      #hack-search input {
        background: transparent;
        border: none;
        color: white;
        width: 100%;
        outline: none;
        margin-left: 10px;
        font-size: 14px;
      }

      #hack-search-separator {
        height: 1px;
        background-color: #2a2a36;
        margin: 0;
        display: block;
        width: 100%;
        box-shadow: 0 4px 6px -6px rgba(0, 0, 0, 0.5);
        position: relative;
      }

      #hack-search-separator::after {
        content: '';
        display: block;
        height: 4px;
        background: linear-gradient(to bottom, rgba(42, 42, 54, 0.3), transparent);
      }

      #hack-search-global-separator {
        height: 1px;
        background-color: #2a2a36;
        margin: 0;
        display: block;
        width: calc(100% + 40px);
        position: relative;
        left: -20px;
        z-index: 9;
        padding: 0;
        box-shadow: 0 4px 6px -6px rgba(0, 0, 0, 0.5);
        position: absolute;
        bottom: 0;
      }

      #hack-search-global-separator::after {
        content: '';
        display: block;
        height: 4px;
        background: linear-gradient(to bottom, rgba(42, 42, 54, 0.3), transparent);
      }

      .hack-nav-item {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        color: #aaa;
        cursor: pointer;
        transition: 0.2s;
        font-size: 14px;
        border-radius: 0;
        margin: 0;
      }

      .hack-nav-item:first-of-type {
        margin-top: 10px;
      }

      .hack-nav-item img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }

      .hack-nav-item i {
        margin-right: 10px;
        font-size: 18px;
        width: 20px;
        text-align: center;
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
      }

      #hack-content::-webkit-scrollbar {
        display: none;
      }

      #hack-content-scroll-area {
        flex: 1;
        overflow-y: auto;
        padding: 25px 20px 20px 20px;
        -ms-overflow-style: none;
        scrollbar-width: none;
      }

      #hack-content-scroll-area::-webkit-scrollbar {
        display: none;
      }

      .hack-fullscreen #hack-content-scroll-area {
        padding: 0 30px 30px 30px;
      }

      #hack-header-container {
        position: relative;
        z-index: 10;
        background-color: #121218;
        padding: 0;
        height: 52px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      #hack-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 5px;
        left: 20px;
        right: 20px;
        z-index: 10;
        background-color: transparent;
      }

      .hack-fullscreen #hack-header {
        left: 10px;
        right: 10px;
      }

      #hack-top-bar {
        height: 32px;
        position: relative;
        margin-bottom: 0px;
        cursor: move;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
      }

      #hack-window-controls {
        display: flex;
        align-items: center;
        gap: 8px;
        z-index: 100;
      }

      .hack-btn {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        cursor: pointer;
        transition: transform 0.2s, opacity 0.2s;
      }

      .hack-btn:hover {
        opacity: 0.8;
        transform: scale(1.1);
      }

      #hack-close-btn {
        background-color: #ff5f57;
      }

      #hack-minimize-btn {
        background-color: #ffbd2e;
      }

      #hack-fullscreen-btn {
        background-color: #28c940;
      }

      #hack-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        position: sticky;
        top: 0;
        z-index: 10;
        background-color: #121218;
        padding-top: 5px;
        padding-bottom: 10px;
      }

      .hack-module {
        display: flex;
        background-color: #1b1b24;
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 15px;
        cursor: pointer;
        align-items: center;
        transition: 0.2s;
      }

      .hack-module:hover {
        background-color: #252532;
      }

      .hack-module-toggle {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: #333;
        margin-right: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .hack-module-toggle.active {
        background-color: #1a66ff;
      }

      .hack-module-switch {
        display: none;
      }

      .hack-module-info {
        flex: 1;
      }

      .hack-module-name {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 5px;
      }

      .hack-module-category {
        font-size: 11px;
        opacity: 0.5;
        margin-left: 5px;
      }

      .hack-module-description {
        font-size: 13px;
        opacity: 0.7;
      }

      .hack-module-icon {
        width: 22px;
        height: 22px;
        border-radius: 6px;
        margin-right: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .hack-module-icon img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      #hack-user {
        margin-top: auto;
        display: flex;
        align-items: center;
        padding: 18px 20px;
        position: relative;
        border-top: 1px solid #2a2a36;
        transition: background-color 0.3s;
      }

      #hack-user:hover {
        background-color: rgba(255,255,255,0.05);
      }

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
        width: 45px;
        height: 45px;
        border-radius: 10px;
        background-color: #2a2a36;
        margin-right: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        color: #98ff98;
        transition: transform 0.3s ease;
      }

      #hack-user:hover #hack-avatar {
        transform: scale(1.05);
      }

      #hack-user-info {
        flex: 1;
      }

      #hack-username {
        font-size: 14px;
        font-weight: 500;
      }

      #hack-user-tag {
        font-size: 12px;
        opacity: 0.5;
      }

      .hack-minimized {
        width: 80px !important;
        height: 80px !important;
        border-radius: 40px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #121218;
        box-shadow: 0 0 20px rgba(0,0,0,0.5);
      }

      .hack-minimized #hack-sidebar,
      .hack-minimized #hack-content {
        display: none;
      }

      .hack-minimized:before {
        content: '';
        background-image: url('https://i.imgur.com/IbzozIK.png');
        background-size: 60px 60px;
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

      .hack-fullscreen #hack-search-global {
        width: 90%;
        min-width: 500px;
        max-width: 1200px;
        padding: 10px 15px 10px 45px;
        background-position: 15px center;
        background-size: 18px;
        font-size: 16px;
        height: 32px;
      }

      .hack-theme {
        display: flex;
        background-color: #1b1b24;
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 15px;
        cursor: pointer;
        align-items: center;
        transition: 0.2s;
      }

      .hack-theme:hover {
        background-color: #252532;
      }

      .hack-theme-color {
        width: 30px;
        height: 30px;
        border-radius: 6px;
        margin-right: 15px;
      }

      .hack-theme-info {
        flex: 1;
      }

      .hack-theme-name {
        font-size: 16px;
        font-weight: 500;
      }

      .hack-theme-description {
        font-size: 13px;
        opacity: 0.7;
      }

      .hack-section {
        display: none;
      }

      .hack-section.active {
        display: block;
      }

      .hack-dropdown {
        position: relative;
        background-color: #1b1b24;
        border-radius: 6px;
        border: 1px solid #2a2a36;
        z-index: 1000;
        min-width: 180px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        display: none;
        padding: 8px 0;
        margin-top: 15px;
        top: auto;
        right: auto;
      }

      .hack-dropdown-item {
        padding: 8px 15px;
        font-size: 14px;
        cursor: pointer;
        color: #ddd;
        transition: 0.2s;
      }

      .hack-dropdown-item:hover {
        background-color: #252532;
        color: white;
      }

      .hack-dropdown-separator {
        height: 1px;
        background-color: #2a2a36;
        margin: 5px 0;
      }

      .hack-dropdown-input {
        padding: 8px 15px;
      }

      .hack-dropdown-input input {
        width: 100%;
        padding: 5px 10px;
        background-color: #252532;
        border: 1px solid #333344;
        border-radius: 4px;
        color: white;
        font-size: 13px;
      }

      .hack-dropdown-input input:focus {
        outline: none;
        border-color: #1a66ff;
      }

      .hack-dropdown-submit {
        text-align: center;
        padding: 5px 0;
        color: #1a66ff;
        font-weight: 500;
        cursor: pointer;
      }

      .hack-category-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px 10px 0;
        margin-bottom: 10px;
      }

      .hack-category-header h2 {
        font-size: 18px;
        font-weight: 600;
        margin: 0;
      }

      .hack-category-buttons {
        display: flex;
        gap: 10px;
      }

      .hack-category-button {
        background-color: rgba(255,255,255,0.1);
        border: none;
        border-radius: 4px;
        color: white;
        padding: 5px 10px;
        font-size: 12px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
        transition: background-color 0.2s;
      }

      .hack-category-button:hover {
        background-color: rgba(255,255,255,0.2);
      }
    `;
    document.head.appendChild(style);

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
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAmBJREFUSInV1U2IllUUB/D/bRQ/sBzIjDQ/EIuCZkrJCVsIQWFlmxBmFRTSWCFkH0RBQkkEiS0Udyq0sgKtVR+atTBUxKBFbdwoGO5clJtW0q/FHOHt9XmHd4IWHbjc55z7P/9z77n3nCfpEByreSnmd2EG+fTLLQPwt9f8SpJHhgnQ4zNUgBvSagwteHc2AfqdJ2vchQMDYI/3KnNmEyDJwprnJVk0jMOsTvBv5P8f4B93gHVJNiRZ1mN+BquSHOkiwNNJ7u6zbU9ypbX2Tf8J1ibZmeT90j9Ncj3JGzNsckuSp3p8dpe+JelLUWvtaJLzSf4s06UkE0mea61dHxDgzUwX2eXSLyZZkuStTjQW4QyW4yNMle1FfIIXsBpnsR1rMYaTmFfzWBfxQozX93r8jM9LH8VveKeKbC624Qo2FmYHfsWOLvKGH3EI+8u2GaM9mMdwtEd/Fe/1cUzi5tZSOzxVu/t+QK6DD/EyHsB3GBmE7XKewjFMzICZgx9wHiuGJp+NYAUenWF9V6X72f8i+Ci+rdd0Opmhm2Jpks1JNiW5t8x/1RhJsiDJL0lOJTnRWrua5Fqma+jrGp3ED+Mz/I7XMIGPcRpPFualurP76tJP4gjW1/qtXcSLcRhf4CHsxW48geNYiQuFXYNzVRdzy/YgvqynvriffBw/YSvuwBLchn3YWUX0FV7v8Zlf689jBCvLvrWKdCxJWh3rYJKrSf5IsqpyeS3J8SSbWmvbBqTzziQfJBnP9L/7UBJJJjPdn6ZS+VtdlXj/jUqs/rIH93Re1s3BFuDtOvFocZ74G5ejK3rjwgaxAAAAAElFTkSuQmCC',
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
            label: 'Supported Websites',
            icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDYuNy4yIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjUgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTY0IDY0QzQ2LjMgNjQgMzIgNzguMyAzMiA5NmwwIDk2IDQ0OCAwIDAtOTZjMC0xNy43LTE0LjMtMzItMzItMzJMNjQgNjR6TTMyIDIyNGwwIDE5MmMwIDE3LjcgMTQuMyAzMiAzMiAzMmwzODQgMGMxNy43IDAgMzItMTQuMyAzMi0zMmwwLTE5MkwzMiAyMjR6TTAgOTZDMCA2MC43IDI4LjcgMzIgNjQgMzJsMzg0IDBjMzUuMyAwIDY0IDI4LjcgNjQgNjRsMCAzMjBjMCAzNS4zLTI4LjcgNjQtNjQgNjRMNjQgNDgwYy0zNS4zIDAtNjQtMjguNy02NC02NEwwIDk2eiIvPjxsaW5lIHgxPSI0OCIgeTE9IjEyOCIgeDI9IjQ2NCIgeTI9IjEyOCIgc3Ryb2tlPSIjY2NjY2NjIiBzdHJva2Utd2lkdGg9IjQ4Ii8+PC9zdmc+',
            active: false
        },
        {
            id: 'themes',
            label: 'Themes',
            icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjZTNlM2UzIj48cGF0aCBkPSJNNDgwLTgwcS04MyAwLTE1Ni0zMS41VDE5Ny0xOTdxLTU0LTU0LTg1LjUtMTI3VDgwLTQ4MHEwLTgzIDMxLjUtMTU2VDE5Ny03NjNxNTQtNTQgMTI3LTg1LjVUNDgwLTg4MHE4MyAwIDE1NiAzMS41VDc2My03NjNxNTQgNTQgODUuNSAxMjdUODgwLTQ4MHEwIDgzLTMxLjUgMTU2VDc2My0xOTdxLTU0IDU0LTEyNyA4NS41VDQ4MC04MFptNDAtODNxMTE5LTE1IDE5OS41LTEwNC41VDgwMC00ODBxMC0xMjMtODAuNS0yMTIuNVQ1MjAtNzk3djYzNFoiLz48L3N2Zz4=',
            active: false
        }
    ];

    function generateSidebarButtons(buttons) {
        return buttons.map(button => {
            const activeClass = button.active ? 'active' : '';
            return `
        <div class="hack-nav-item ${activeClass}" data-section="${button.id}">
          <img src="${button.icon}" alt="${button.label}"/> ${button.label}
        </div>
        `;
        }).join('');
    }

    const modulesBySection = {
        invincibility: [{
            name: 'Godmode',
            category: 'invincibility',
            description: 'Makes you invinsible',
            type: 'toggle',
            action: "Slope.hack.noDeath.enable()",
            actionOff: "Slope.hack.noDeath.disable()",
            iconUrl: null
        }],
        ballcontrol: [{
                name: 'Jump',
                category: 'ballcontrol',
                description: 'Perform a super jump',
                type: 'switch',
                action: 'Slope.hack.superJump.perform()',
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
                name: 'Set Ball Speed',
                category: 'ballcontrol',
                description: 'Control The Speed Of The Ball',
                type: 'switch',
                action: 'Slope.hack.ballSpeed.set()',
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
                iconUrl: null
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
                name: 'Teleport To Start',
                category: 'teleportation',
                description: 'Teleport to starting position',
                type: 'switch',
                action: 'Slope.hack.teleport.toStart()',
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
            },
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
            },
            {
                name: 'Get Position',
                category: 'utilities',
                description: 'Get Position Of Ball',
                type: 'switch',
                action: 'Slope.util.getPos()',
                iconUrl: null
            }
        ],
        supportedsites: [{
                name: 'https://slopecom.com',
                category: 'supportedsites',
                description: 'Wait For Game to fully load before running hacks.',
                type: 'switch',
                action: "window.open('https://slopecom.com', '_blank')",
                iconUrl: null
            },
            {
                name: 'https://slope4classroom.com',
                category: 'supportedsites',
                description: 'Wait For Game to fully load before running hacks.',
                type: 'switch',
                action: "window.open('https://slope4classroom.com', '_blank')",
                iconUrl: null
            },
            {
                name: 'https://slope.lol/games/slope/index.html',
                category: 'supportedsites',
                description: 'Press Play before running hacks.',
                type: 'switch',
                action: "window.open('https://slope.lol/games/slope/index.html', '_blank')",
                iconUrl: null
            },
            {
                name: 'https://slope.lol/games/slope/index.html',
                category: 'supportedsites',
                description: 'Wait for game to fully load before running the hacks.',
                type: 'switch',
                action: "window.open('https://slope.lol/games/slope/index.html', '_blank')",
                iconUrl: null
            }
        ],
        themes: []
    };

    function addModule(sectionId, module) {
        if (!modulesBySection[sectionId]) {
            modulesBySection[sectionId] = [];
        }

        modulesBySection[sectionId].push(module);

        const sectionElement = document.getElementById(`hack-${sectionId}`);
        if (sectionElement) {
            sectionElement.innerHTML = generateSectionModules(sectionId);

            initializeModuleEventListeners();
        }

        return module;
    }

    function addSidebarButton(button) {
        sidebarButtons.push(button);

        const sidebarElement = document.getElementById('hack-sidebar');
        if (sidebarElement) {
            const userDiv = document.getElementById('hack-user');

            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = generateSidebarButtons([button]);

            if (userDiv) {
                userDiv.parentNode.insertBefore(tempContainer.firstElementChild, userDiv);
            } else {
                sidebarElement.appendChild(tempContainer.firstElementChild);
            }

            const newButton = document.querySelector(`.hack-nav-item[data-section="${button.id}"]`);
            if (newButton) {
                newButton.addEventListener('click', () => {
                    const sectionId = newButton.getAttribute('data-section');

                    document.querySelectorAll('.hack-nav-item').forEach(i => i.classList.remove('active'));
                    newButton.classList.add('active');

                    document.querySelectorAll('.hack-section').forEach(section => {
                        section.classList.remove('active');
                    });

                    let section = document.getElementById(`hack-${sectionId}`);
                    if (!section) {
                        section = document.createElement('div');
                        section.id = `hack-${sectionId}`;
                        section.className = 'hack-section';
                        section.innerHTML = generateSectionModules(sectionId);
                        document.getElementById('hack-content-scroll-area').appendChild(section);
                    }

                    section.classList.add('active');
                });
            }
        }

        return button;
    }

    function initializeModuleEventListeners() {
        const moduleItems = document.querySelectorAll('.hack-module');
        moduleItems.forEach(module => {
            const buttonType = module.getAttribute('data-type');
            const actionCode = module.getAttribute('data-action');
            const actionOffCode = module.getAttribute('data-action-off');

            const moduleName = module.querySelector('.hack-module-name')?.textContent.trim().split(' ')[0] || '';

            const oldModule = module.cloneNode(true);
            module.parentNode.replaceChild(oldModule, module);

            if (buttonType === 'toggle') {
                const toggle = oldModule.querySelector('.hack-module-toggle');

                oldModule.addEventListener('click', () => {
                    toggle.classList.toggle('active');
                    const isActive = toggle.classList.contains('active');

                    if (moduleName) {
                        saveModuleState(moduleName, isActive);
                    }

                    const currentThemeName = localStorage.getItem('whispTheme') || 'Default Dark';
                    const currentTheme = themes[currentThemeName] || themes['Default Dark'];

                    if (isActive) {
                        toggle.style.backgroundColor = currentTheme.activeToggleColor;
                        if (actionCode) {
                            try {
                                eval(actionCode);
                            } catch (e) {
                                console.error(`Error executing action for ${moduleName}:`, e);
                            }
                        }
                    } else {
                        toggle.style.backgroundColor = '#333';
                        if (actionOffCode) {
                            try {
                                eval(actionOffCode);
                            } catch (e) {
                                console.error(`Error executing action-off for ${moduleName}:`, e);
                            }
                        }
                    }
                });
            } else if (buttonType === 'switch') {
                oldModule.addEventListener('click', () => {
                    if (actionCode) {
                        try {
                            eval(actionCode);
                        } catch (e) {
                            console.error(`Error executing switch action for ${moduleName}:`, e);
                        }
                    }
                });
            }
        });

        document.querySelectorAll('[data-dropdown="true"]').forEach(module => {
            module.addEventListener('contextmenu', function(e) {
                e.preventDefault();

                const dropdown = this.querySelector('.hack-dropdown');
                if (!dropdown) return;

                document.querySelectorAll('.hack-dropdown').forEach(d => {
                    if (d !== dropdown) d.style.display = 'none';
                });

                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

                dropdown.style.position = 'relative';
                dropdown.style.left = 'auto';
                dropdown.style.right = 'auto';
                dropdown.style.top = 'auto';
                dropdown.style.transform = 'none';
                dropdown.style.marginTop = '15px';

                const currentThemeName = localStorage.getItem('whispTheme') || 'Default Dark';
                const currentTheme = themes[currentThemeName] || themes['Default Dark'];

                dropdown.style.backgroundColor = currentTheme.moduleBackgroundColor;
                dropdown.style.borderColor = currentTheme.borderColor;

                dropdown.querySelectorAll('.hack-dropdown-item, .hack-dropdown-submit').forEach(item => {
                    item.style.color = currentTheme.textColor;
                });

                dropdown.querySelectorAll('.hack-dropdown-separator').forEach(sep => {
                    sep.style.backgroundColor = currentTheme.borderColor;
                });

                dropdown.querySelectorAll('input').forEach(input => {
                    input.style.backgroundColor = currentTheme.moduleHoverColor;
                    input.style.borderColor = currentTheme.borderColor;
                    input.style.color = currentTheme.textColor;
                });

                const rangeInput = dropdown.querySelector('input[type="range"]');
                const cpsValue = dropdown.querySelector('#cps-value');
                if (rangeInput && cpsValue) {
                    rangeInput.addEventListener('input', function() {
                        cpsValue.textContent = this.value;
                    });
                }
            });
        });

        document.querySelectorAll('.hack-dropdown-item, .hack-dropdown-submit').forEach(item => {
            item.addEventListener('click', function() {
                const actionCode = this.getAttribute('data-action');
                if (actionCode) {
                    if (this.classList.contains('hack-dropdown-submit')) {
                        const input = this.previousElementSibling.querySelector('input');
                        const value = input ? input.value : '';
                        const actionWithValue = actionCode.replace("this.previousElementSibling.querySelector('input').value", value);
                        eval(actionWithValue);
                    } else {
                        eval(actionCode);
                    }
                }

                const dropdown = this.closest('.hack-dropdown');
                if (dropdown) dropdown.style.display = 'none';
            });
        });
    }

    function generateModuleHTML(module) {
        let html = `<div class="hack-module" data-type="${module.type}"`;

        if (module.action) html += ` data-action="${module.action}"`;
        if (module.actionOff) html += ` data-action-off="${module.actionOff}"`;
        if (module.dropdown) html += ` data-dropdown="true"`;

        html += '>';

        if (module.type === 'toggle') {
            html += `<div class="hack-module-toggle"></div>`;
        } else if (module.type === 'switch') {
            html += `<div class="hack-module-switch"></div>`;
        }

        if (module.iconUrl) {
            html += `
          <div class="hack-module-icon">
            <img src="${module.iconUrl}" alt="${module.name} icon">
          </div>
        `;
        }

        html += `
        <div class="hack-module-info">
          <div class="hack-module-name">${module.name} <span class="hack-module-category">(${module.category})</span></div>
          <div class="hack-module-description">${module.description}</div>
        </div>
      `;

        if (module.dropdown && module.dropdownItems) {
            html += `<div class="hack-dropdown">`;

            module.dropdownItems.forEach(item => {
                if (item.separator) {
                    html += `<div class="hack-dropdown-separator"></div>`;
                } else if (item.inputType) {
                    html += `<div class="hack-dropdown-input">`;

                    if (item.inputType === 'range' && item.valueDisplay) {
                        html += `
                <input type="${item.inputType}" min="${item.min || '0'}" max="${item.max || '100'}"
                       value="${item.defaultValue || '0'}" step="${item.step || '1'}"
                       ${item.style ? `style="${item.style}"` : ''}>
                <div style="text-align: center; margin-top: 5px; font-size: 12px;">
                  ${item.valueDisplay.text}<span id="${item.valueDisplay.id}">${item.valueDisplay.defaultValue}</span>
                </div>
              `;
                    } else {
                        html += `
                <input type="${item.inputType}"
                       ${item.placeholder ? `placeholder="${item.placeholder}"` : ''}
                       ${item.min ? `min="${item.min}"` : ''}
                       ${item.max ? `max="${item.max}"` : ''}
                       ${item.step ? `step="${item.step}"` : ''}
                       ${item.defaultValue ? `value="${item.defaultValue}"` : ''}
                       ${item.style ? `style="${item.style}"` : ''}>
              `;
                    }

                    html += `</div>`;

                    if (item.submitLabel) {
                        html += `<div class="hack-dropdown-submit" data-action="${item.submitAction}">${item.submitLabel}</div>`;
                    }
                } else {
                    html += `<div class="hack-dropdown-item" data-action="${item.action}">${item.label}</div>`;
                }
            });

            html += `</div>`;
        }

        html += `</div>`;
        return html;
    }

    function generateSectionModules(sectionId) {
        const modules = modulesBySection[sectionId] || [];
        return modules.map(module => generateModuleHTML(module)).join('');
    }

    const themeItems = [{
            name: 'Default Dark',
            description: 'Default Whisp dark theme',
            gradient: 'linear-gradient(to bottom right, #121218, #1a1a24)'
        },
        {
            name: 'Whisp',
            description: 'Emerald green theme based on Whisp logo',
            gradient: 'linear-gradient(to bottom right, #4ecca3, #ffffff)'
        },
        {
            name: 'Mint Chocolate',
            description: 'Creamy mint chocolate blend',
            gradient: 'linear-gradient(to bottom right, #102815, #8cd2a7)'
        },
        {
            name: 'Matrix',
            description: 'Digital rain theme',
            gradient: 'linear-gradient(to bottom right, #000000, #00ff41)'
        },
        {
            name: 'Cyberpunk',
            description: 'Neon future theme',
            gradient: 'linear-gradient(to bottom right, #0b0f18, #00ffd5)'
        },
        {
            name: 'Synthwave',
            description: '80s retro futurism',
            gradient: 'linear-gradient(to bottom right, #190633, #ff00ff)'
        },
        {
            name: 'Blood Moon',
            description: 'Crimson eclipse theme',
            gradient: 'linear-gradient(to bottom right, #1a0000, #ff3333)'
        },
        {
            name: 'Blue Ocean',
            description: 'Vibrant blue theme',
            gradient: 'linear-gradient(to bottom right, #1a66ff, #0099ff)'
        },
        {
            name: 'Neon Pink',
            description: 'Flashy pink theme',
            gradient: 'linear-gradient(to bottom right, #ff0066, #ff6699)'
        },
        {
            name: 'Purple Haze',
            description: 'Rich purple theme',
            gradient: 'linear-gradient(to bottom right, #9900cc, #cc99ff)'
        },
        {
            name: 'Sunset Orange',
            description: 'Warm sunset theme',
            gradient: 'linear-gradient(to bottom right, #ff3300, #ff9966)'
        }
    ];

    function generateThemesHTML() {
        return themeItems.map(theme => `
        <div class="hack-theme" data-theme="${theme.name}">
          <div class="hack-theme-color" style="background: ${theme.gradient};"></div>
          <div class="hack-theme-info">
            <div class="hack-theme-name">${theme.name}</div>
            <div class="hack-theme-description">${theme.description}</div>
          </div>
        </div>
      `).join('');
    }

    const themes = {
        'Whisp': {
            backgroundColor: '#053d2a',
            contentBackgroundColor: '#053d2a',
            sidebarBackgroundColor: '#053d2a',
            moduleBackgroundColor: '#0e4e38',
            moduleHoverColor: '#166145',
            activeToggleColor: '#4ecca3',
            textColor: '#ffffff',
            borderColor: '#166145'
        },
        'Default Dark': {
            backgroundColor: '#121218',
            contentBackgroundColor: '#121218',
            sidebarBackgroundColor: '#121218',
            moduleBackgroundColor: '#1b1b24',
            moduleHoverColor: '#252532',
            activeToggleColor: '#1a66ff',
            textColor: '#ffffff',
            borderColor: '#2a2a36'
        },
        'Blue Ocean': {
            backgroundColor: '#0a2d4a',
            contentBackgroundColor: '#0a2d4a',
            sidebarBackgroundColor: '#0a2d4a',
            moduleBackgroundColor: '#104570',
            moduleHoverColor: '#1a66aa',
            activeToggleColor: '#00bbff',
            textColor: '#ffffff',
            borderColor: '#1a5c99'
        },
        'Neon Pink': {
            backgroundColor: '#2a0a29',
            contentBackgroundColor: '#2a0a29',
            sidebarBackgroundColor: '#2a0a29',
            moduleBackgroundColor: '#3d0d3c',
            moduleHoverColor: '#5c1459',
            activeToggleColor: '#ff0099',
            textColor: '#ffffff',
            borderColor: '#5c1459'
        },
        'Mint Chocolate': {
            backgroundColor: '#102815',
            contentBackgroundColor: '#102815',
            sidebarBackgroundColor: '#102815',
            moduleBackgroundColor: '#1b3c21',
            moduleHoverColor: '#264d2a',
            activeToggleColor: '#8cd2a7',
            textColor: '#e8d0b5',
            borderColor: '#3a5a41'
        },
        'Purple Haze': {
            backgroundColor: '#1a0a33',
            contentBackgroundColor: '#1a0a33',
            sidebarBackgroundColor: '#1a0a33',
            moduleBackgroundColor: '#2d1459',
            moduleHoverColor: '#3d1f70',
            activeToggleColor: '#9933ff',
            textColor: '#ffffff',
            borderColor: '#3d1f70'
        },
        'Sunset Orange': {
            backgroundColor: '#33150a',
            contentBackgroundColor: '#33150a',
            sidebarBackgroundColor: '#33150a',
            moduleBackgroundColor: '#59260d',
            moduleHoverColor: '#70361f',
            activeToggleColor: '#ff6600',
            textColor: '#ffffff',
            borderColor: '#70361f'
        },
        'Cyberpunk': {
            backgroundColor: '#0b0f18',
            contentBackgroundColor: '#0b0f18',
            sidebarBackgroundColor: '#0b0f18',
            moduleBackgroundColor: '#131a2a',
            moduleHoverColor: '#1c2540',
            activeToggleColor: '#00ffd5',
            textColor: '#fff200',
            borderColor: '#3a4871'
        },
        'Blood Moon': {
            backgroundColor: '#1a0000',
            contentBackgroundColor: '#1a0000',
            sidebarBackgroundColor: '#1a0000',
            moduleBackgroundColor: '#2e0303',
            moduleHoverColor: '#3e0909',
            activeToggleColor: '#ff3333',
            textColor: '#ffcccc',
            borderColor: '#4a0e0e'
        },
        'Synthwave': {
            backgroundColor: '#190633',
            contentBackgroundColor: '#190633',
            sidebarBackgroundColor: '#190633',
            moduleBackgroundColor: '#260941',
            moduleHoverColor: '#33115b',
            activeToggleColor: '#ff00ff',
            textColor: '#00ffff',
            borderColor: '#4d0099'
        },
        'Matrix': {
            backgroundColor: '#000000',
            contentBackgroundColor: '#000000',
            sidebarBackgroundColor: '#000000',
            moduleBackgroundColor: '#0c1f0c',
            moduleHoverColor: '#173317',
            activeToggleColor: '#00ff00',
            textColor: '#00ff41',
            borderColor: '#224422'
        }
    };

    const menu = document.createElement('div');
    menu.id = 'custom-hack-menu';

    menu.innerHTML = `
      <div id="hack-sidebar">
        <div id="hack-logo">
          <img src="https://i.ibb.co/5Wr0VS8J/image-removebg-preview.png" alt="Whisp Logo" />
          <span class="whisp-title">Whisp</span><span id="hack-version">b0.2</span>
        </div>
        <div id="hack-search-separator"></div>
        ${generateSidebarButtons(sidebarButtons)}
        <div id="hack-user">
          <div id="hack-avatar"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAGQCAMAAABBKENmAAAC+lBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUQAAdgAAwgAA3gAA4wAA6AAA7AAA0gAAswAAOAAAAQAAYgAAkAAA7wAA8wAA/gAA/QAA/wAA8wAAnAAAAAAA+AAA9gAAAAAA/AAA+gAA/AAA9wAA7wAA4wAA0wAAvwAAsAAAogAAmQAAjAAAgwAAeAAAcQAAawAAbgAAswAAxAAA8gAA4AAA0AAAhwAAUgAAMgAAJwAAGwAADwAAAgAAAAAABAAAGQAAOQAA8AAA5wAAzQAAqgAAewAAVQAAPQAAIQAAFAAACwAAEQAAJAAAWgAAfgAA5QAA8QAA1wAACAAALgAAVwAA1QAA7QAAAAAAdQAAQgAABgAAFgAAxwAA9AAA6wAAAQAAHgAA6QAA+gAANgAAKgAATQAAUAAA+QAA2QAAAAAAywAARQAAQAAAnwAAZAAAuwAA3QAApgAAuAAAnAAAXgAAjwAAkwAA2wAAtQAAyQAAgAAAvQAAaAAAlgAAYQAArQAAYAAAAAAASgAAwQAASAAAAAAAAAAAAAAAYQAAAAAAAAAAAQAAAAAAAAAAbwAAAAAAAAAAAAAAMwAAAAAAtAAAAAAAAAAAAAAAAAAAxAAAAAAAAAAAAAAAAAAAYQAAAAAAAAAA2AAAAAAASgAAMAAAAAAAzAAAnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArgAAAAAAAAAAAQAAAAAALgAAAAAAZAAAAAAAywAANwAAAAAAEQAAAAAAAAAA4wAAAAAAAAAAswAAFwAAAAAAAAAA2QAAUwAAAAAAAAAAAAAAAAAAAAAAAAAAawAAAQAAAAAAAQAAOwAAAQAAAAAAAAAAnwAAnAAAAQAAiQAAVQAAKgAAigAAIgAAvwAAHQAAZQAAAQAAfABEWEBoAAAA/nRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0fICEjJSc1R32cq7jDjmoxKT1R0ur////fXyb58Cr/8vz/////////////////////////////////////////////////////////////////////LP//////////////////////Lf//////////////////////////////MP///zg2MVEvPjozNGA3O0BWQ5tHQU1FrkpPU1GQVVrUV3xrXcSeX2VqYW1ncMp3cn9jjH2ugemjh5KLaO+Ukd2mnHXouqOgmI6EesKxq6fCt4l5xt+/0KquvJjjn9jKyvfB/v8AAHodSURBVHgB7NG1AcNAEACw5/1HThOmc2OWVlA6KgAAAAAAAID8XzoapboP9lr+2Mc08Wtkq8n8f61TlGeaN3v7/bVFvk9bXtev2o/WHvuoLneWt5P7OttvRux9+r1Z8pIu7NcFk6NQEATgc/d1d+KbkBdZzf//WcfMa2gyYbldImevy0Ol7KtuhmJb0hrXt1ne2fCRkSYzlYPxSlKAa23pStP3D4falLbKK0cO1TW4tAUtVT8gHwuDh7QmM5WBvEzjkF/hztBS9ZPP59ngCa1nmIuRg/GiU6xrcUmrsmT9gnzN5wtCa8tskFdlHHgLdIFLWrh6028+36eDXzPtnLNXRpWNMYiXKRzKC12Dm9ECNkX9oVmbjX+QagPaM1OZRWaPl2QceI0ucFHcnC1gveq6ZCPNpmQjizxLrTNnKityttahxyvXZXNhmwhBVmABuqXZttnSpOAqnTKjy0BGkY3xQokDL168trvURW/FNpX1qjtJdjV7+fif5CGw1RnKQKax7TGmOhBXzYPlNbrEpS1k1VUo95McPJDkEbQVWpmhTGSOtTW2NQ5wFXk5zVxm6gJXbYUWsinrYZIjzTHjf5BHOWlhpjKRvfFHGtupDsTVeaen2XRXq0tc2EJWWGF6UhKvDWllVmUi54uMrUaNA/FCeVFe6qK66+sel7aJLFxPz84volqSer3eaDSZRqNRrye/t9oXnbNTSIuzV9Yub20J8tqaFBnGtsaBuDovt9mWV5eZ3aUucJX2sttrR7U47js3GLgswyRuKoNRHNejaNy9ArJWGU2GMXosxDBGjQPx01LSXpaXujLMW1vA1U32c9xpR/XRtWi68sBc2W/iRtRLkKksRda1pnG+xmUtDpTVeDnNusxaXdllFvd2nNjeuaGrkqG7T8o8vhVlQZa11iJjq2EsNUaLA3HFdZ7lZXlFd011d0RXZ9kXt9dq3ksbXeXov6+b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" alt="Flappy Bird" style="width: 100%; height: 100%; object-fit: cover;"></div>
          <div id="hack-user-info">
            <div id="hack-username">Slope <span style="opacity:0.5;">Hacks</span></div>
            <div id="hack-user-tag">Hack type: Advanced</div>
          </div>
        </div>
      </div>
      <div id="hack-content">
        <div id="hack-top-bar">
        </div>
        <div id="hack-header-container">
          <div id="hack-header">
            <div class="sc-container">
              <input type="text" id="hack-search-global" class="smoothCaretInput" placeholder="Search..">
              <div class="caret" style="width: 2px; height: 40%; background-color: #FFFFFF;"></div>
            </div>
            <div id="hack-window-controls">
              <div id="hack-close-btn" class="hack-btn"></div>
              <div id="hack-minimize-btn" class="hack-btn"></div>
              <div id="hack-fullscreen-btn" class="hack-btn"></div>
            </div>
          </div>
          <div id="hack-search-global-separator"></div>
        </div>
        <div id="hack-content-scroll-area">
          <div id="hack-invincibility" class="hack-section active">
            ${generateSectionModules('invincibility')}
          </div>
          <div id="hack-ballcontrol" class="hack-section">
            ${generateSectionModules('ballcontrol')}
          </div>
          <div id="hack-flight" class="hack-section">
            ${generateSectionModules('flight')}
          </div>
           <div id="hack-gravity" class="hack-section">
            ${generateSectionModules('gravity')}
          </div>
          <div id="hack-score" class="hack-section">
            ${generateSectionModules('score')}
          </div>
          <div id="hack-utilities" class="hack-section">
            ${generateSectionModules('utilities')}
          </div>
          <div id="hack-supportedsites" class="hack-section">
            ${generateSectionModules('supportedsites')}
          </div>
          <div id="hack-teleportation" class="hack-section">
            ${generateSectionModules('teleportation')}
          </div>
          <div id="hack-themes" class="hack-section">
            ${generateThemesHTML()}
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(menu);

    const smoothCaretScript = `
      function css(a,b){return window.getComputedStyle(a,null).getPropertyValue(b)}
      function getTextWidth(b,c){
        let a=document.querySelector("#sc-canvas").getContext("2d");
        return a.font=c,a.measureText(b).width
      }

      const canvElem=document.createElement("canvas");
      const passwordChar=navigator.userAgent.match(/firefox|fxios/i)?"\\u25CF":"\\u2022";

      canvElem.id="sc-canvas";
      canvElem.style.display="none";
      document.body.appendChild(canvElem);

      let smoothCarets=[];
      let caretPosString;
      let typingTimer = null;
      const TYPING_TIMEOUT = 800;

      class SmoothCaret{
        constructor(b,a,c){
          this.font="\\u2022"!=passwordChar||"password"!=a.type||navigator.userAgent.match(/chrome|chromium|crios/i)?css(a,"font-size") + " " + css(a,"font-family"):(parseFloat(css(a,"font-size"))+6.25) + "px " + css(a,"font-family");
          this.maxMargin=parseInt(css(a.parentElement,"width"))-10;
          this.caretMargin=parseInt(css(a,"padding-left"))+2;
          this.caretWidth=parseInt(b.style.width);
          this.letterSpacing=parseInt(css(a,"letter-spacing"))?parseInt(css(a,"letter-spacing")):0;
          this.caretElem=b;
          this.inputElem=a;
          this.textWidth=void 0;
          this.index=c;
          this.isTyping = false;
        }

        init(){
          this.inputElem.dataset.sc=this.index;
          this.pw_ratio="password"==this.inputElem.type?getTextWidth(passwordChar+passwordChar,this.font)-getTextWidth(passwordChar,this.font):null;

          this.inputElem.addEventListener("input", a => {
            this.update("password"===a.target.type?Array(a.target.value.length+1).join(passwordChar):a.target.value);
            this.setTyping(true);
          });

          this.inputElem.addEventListener("blur",()=>{
            this.caretElem.style.opacity="0";
            this.caretElem.style.transform="";
            this.caretElem.classList.remove('blinking');
          });

          this.inputElem.addEventListener("focus", () => {
            this.caretElem.style.opacity = "1";
            this.setTyping(true);
          });
        }

        setTyping(isTyping) {
          this.isTyping = isTyping;

          if (isTyping) {
            this.caretElem.classList.remove('blinking');
            this.caretElem.style.opacity = "1";

            if (typingTimer) {
              clearTimeout(typingTimer);
            }

            typingTimer = setTimeout(() => {
              if (document.activeElement === this.inputElem) {
                this.isTyping = false;
                this.caretElem.classList.add('blinking');
              }
            }, TYPING_TIMEOUT);
          }
        }

        update(a){
          if (this.isTyping) {
            this.caretElem.classList.remove('blinking');
            this.caretElem.style.opacity = "1";
          }

          this.textWidth=this.pw_ratio?this.pw_ratio*a.length+this.caretMargin+this.letterSpacing*(a.length-1):getTextWidth(a,this.font)>0?getTextWidth(a,this.font)+this.caretMargin+this.letterSpacing*(a.length-1):this.caretMargin-this.caretWidth/2;

          if(this.textWidth<=this.maxMargin) {
            this.caretElem.style.transform="translateX(" + this.textWidth + "px)";
          }
        }
      }

      function initsmoothCarets(){
        document.querySelectorAll(".sc-container").forEach((a,b)=>{
          smoothCarets.push(new SmoothCaret(a.children[1],a.children[0],b));
          smoothCarets[b].init();
        });

        setInterval(()=>{
          if(document.activeElement.getAttribute("data-sc")) {
            caretPosString="password"===document.activeElement.type?
              Array(document.activeElement.value.length+1).join(passwordChar).slice(0,document.activeElement.selectionStart):
              document.activeElement.value.slice(0,document.activeElement.selectionStart);

            smoothCarets[parseInt(document.activeElement.dataset.sc)].update(caretPosString);
          }
        });
      }

      setTimeout(() => {
        initsmoothCarets();
      }, 100);
    `;

    const script = document.createElement('script');
    script.textContent = smoothCaretScript;
    document.head.appendChild(script);

    let isDragging = false;
    let offsetX, offsetY;

    const dragArea = document.getElementById('hack-top-bar');

    dragArea.addEventListener('mousedown', (e) => {
        if (e.target.closest('.hack-btn')) return;
        isDragging = true;
        offsetX = e.clientX - menu.getBoundingClientRect().left;
        offsetY = e.clientY - menu.getBoundingClientRect().top;
    });

    let startX = 0;
    let startY = 0;
    let wasDragged = false;

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        menu.style.left = (e.clientX - offsetX) + 'px';
        menu.style.top = (e.clientY - offsetY) + 'px';

        if (Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5) {
            wasDragged = true;
        }
    });

    document.addEventListener('mouseup', () => {
        if (isDragging && menu.classList.contains('hack-minimized') && !wasDragged) {
            menu.classList.remove('hack-minimized');
        }
        isDragging = false;
        wasDragged = false;
    });

    menu.addEventListener('mousedown', (e) => {
        if (menu.classList.contains('hack-minimized') && !e.target.closest('.hack-btn')) {
            isDragging = true;
            offsetX = e.clientX - menu.getBoundingClientRect().left;
            offsetY = e.clientY - menu.getBoundingClientRect().top;

            startX = e.clientX;
            startY = e.clientY;
            wasDragged = false;
        }
    });

    function applyTheme(themeName) {
        const theme = themes[themeName];
        if (!theme) return;

        menu.style.backgroundColor = theme.backgroundColor;

        const sidebar = document.getElementById('hack-sidebar');
        sidebar.style.backgroundColor = theme.sidebarBackgroundColor;
        sidebar.style.borderRightColor = theme.borderColor;

        const content = document.getElementById('hack-content');
        content.style.backgroundColor = theme.contentBackgroundColor;

        const header = document.getElementById('hack-header');
        header.style.backgroundColor = theme.backgroundColor;

        const headerContainer = document.getElementById('hack-header-container');
        if (headerContainer) {
            headerContainer.style.backgroundColor = theme.backgroundColor;
        }

        const separator = document.getElementById('hack-search-separator');
        if (separator) {
            separator.style.backgroundColor = theme.borderColor;
        }

        const globalSeparator = document.getElementById('hack-search-global-separator');
        if (globalSeparator) {
            globalSeparator.style.backgroundColor = theme.borderColor;
            globalSeparator.style.boxShadow = `0 4px 6px -6px rgba(0, 0, 0, 0.5)`;

            const separatorGradientStyle = document.createElement('style');
            separatorGradientStyle.id = 'separator-gradient-style';
            const existingStyle = document.getElementById('separator-gradient-style');
            if (existingStyle) {
                existingStyle.remove();
            }

            separatorGradientStyle.textContent = `
          #hack-search-global-separator::after {
            background: linear-gradient(to bottom, ${theme.borderColor}40, transparent);
          }
        `;
            document.head.appendChild(separatorGradientStyle);
        }

        const modules = document.querySelectorAll('.hack-module');
        modules.forEach(module => {
            module.style.backgroundColor = theme.moduleBackgroundColor;
            module.addEventListener('mouseenter', () => {
                module.style.backgroundColor = theme.moduleHoverColor;
            });
            module.addEventListener('mouseleave', () => {
                module.style.backgroundColor = theme.moduleBackgroundColor;
            });
        });

        const themeElements = document.querySelectorAll('.hack-theme');
        themeElements.forEach(themeEl => {
            themeEl.style.backgroundColor = theme.moduleBackgroundColor;
            themeEl.addEventListener('mouseenter', () => {
                themeEl.style.backgroundColor = theme.moduleHoverColor;
            });
            themeEl.addEventListener('mouseleave', () => {
                themeEl.style.backgroundColor = theme.moduleBackgroundColor;
            });
        });

        const activeToggles = document.querySelectorAll('.hack-module-toggle.active');
        activeToggles.forEach(toggle => {
            toggle.style.backgroundColor = theme.activeToggleColor;
        });

        const userSection = document.getElementById('hack-user');
        userSection.style.borderTopColor = theme.borderColor;

        menu.querySelectorAll('*').forEach(el => {
            if (el.classList && !el.classList.contains('hack-module-toggle') &&
                !el.classList.contains('hack-module-switch') &&
                !el.classList.contains('hack-btn') &&
                !el.classList.contains('hack-theme-color')) {
                el.style.color = theme.textColor;
            }
        });
    }

    const windowControls = document.getElementById('hack-window-controls');
    windowControls.style.zIndex = "100";

    document.getElementById('hack-close-btn').addEventListener('click', (e) => {
        e.stopPropagation();

        try {
            const toggles = document.querySelectorAll('.hack-module-toggle');
            toggles.forEach(toggle => {
                const moduleElement = toggle.closest('.hack-module');
                if (moduleElement) {
                    const moduleName = moduleElement.querySelector('.hack-module-name')?.textContent.trim().split(' ')[0] || '';
                    if (moduleName) {
                        const isActive = toggle.classList.contains('active');
                        saveModuleState(moduleName, isActive);
                    }
                }
            });
        } catch (e) {
            console.error('Error saving module states on close:', e);
        }

        menu.remove();
    });

    document.getElementById('hack-minimize-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('hack-minimized');
    });

    document.getElementById('hack-fullscreen-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('hack-fullscreen');

        const searchBar = document.getElementById('hack-search-global');
        if (menu.classList.contains('hack-fullscreen')) {
            setTimeout(() => {
                searchBar.focus();
                if (typeof smoothCarets !== 'undefined' && smoothCarets.length > 0 && searchBar.dataset.sc) {
                    const caretPos = searchBar.value.slice(0, searchBar.selectionStart);
                    smoothCarets[parseInt(searchBar.dataset.sc)].update(caretPos);
                }
            }, 300);
        }
    });

    function saveModuleState(moduleName, isActive) {
        try {
            const savedModules = JSON.parse(localStorage.getItem('whispActiveModules') || '{}');
            savedModules[moduleName] = isActive;
            localStorage.setItem('whispActiveModules', JSON.stringify(savedModules));
        } catch (e) {
            console.error('Error saving module state:', e);
        }
    }

    function loadModuleStates() {
        try {
            const savedModules = JSON.parse(localStorage.getItem('whispActiveModules') || '{}');
            return savedModules;
        } catch (e) {
            console.error('Error loading module states:', e);
            return {};
        }
    }

    initializeModuleEventListeners();

    const navItems = document.querySelectorAll('.hack-nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const sectionId = item.getAttribute('data-section');

            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            document.querySelectorAll('.hack-section').forEach(section => {
                section.classList.remove('active');
            });

            const section = document.getElementById('hack-' + sectionId);
            if (section) {
                section.classList.add('active');

                const globalSearch = document.getElementById('hack-search-global');
                if (globalSearch) {
                    globalSearch.value = '';
                    document.querySelectorAll('.hack-module').forEach(module => {
                        module.style.display = 'flex';
                    });
                }
            }
        });
    });

    const themeButtons = document.querySelectorAll('.hack-theme');
    themeButtons.forEach(themeButton => {
        themeButton.addEventListener('click', function() {
            const themeName = this.getAttribute('data-theme');
            localStorage.setItem('whispTheme', themeName);
            applyTheme(themeName);
        });
    });

    const savedTheme = localStorage.getItem('whispTheme') || 'Default Dark';
    applyTheme(savedTheme);

    const globalSearch = document.getElementById('hack-search-global');

    globalSearch.addEventListener('input', function() {
        const searchValue = this.value.toLowerCase();
        const activeSection = document.querySelector('.hack-section.active');
        if (activeSection) {
            const modules = activeSection.querySelectorAll('.hack-module');

            modules.forEach(module => {
                const moduleName = module.querySelector('.hack-module-name').textContent.toLowerCase();
                const moduleDescription = module.querySelector('.hack-module-description').textContent.toLowerCase();

                if (moduleName.includes(searchValue) || moduleDescription.includes(searchValue)) {
                    module.style.display = 'flex';
                } else {
                    module.style.display = 'none';
                }
            });
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.getElementById('custom-hack-menu')) {
            document.getElementById('custom-hack-menu').remove();
        }
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.hack-dropdown') && !e.target.closest('[data-dropdown="true"]')) {
            document.querySelectorAll('.hack-dropdown').forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        }
    });

    document.querySelectorAll('[data-dropdown="true"]').forEach(module => {
        module.addEventListener('contextmenu', function(e) {
            e.preventDefault();

            const dropdown = this.querySelector('.hack-dropdown');
            if (!dropdown) return;

            document.querySelectorAll('.hack-dropdown').forEach(d => {
                if (d !== dropdown) d.style.display = 'none';
            });

            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

            dropdown.style.position = 'relative';
            dropdown.style.left = 'auto';
            dropdown.style.right = 'auto';
            dropdown.style.top = 'auto';
            dropdown.style.transform = 'none';
            dropdown.style.marginTop = '15px';

            const currentThemeName = localStorage.getItem('whispTheme') || 'Default Dark';
            const currentTheme = themes[currentThemeName] || themes['Default Dark'];

            dropdown.style.backgroundColor = currentTheme.moduleBackgroundColor;
            dropdown.style.borderColor = currentTheme.borderColor;

            dropdown.querySelectorAll('.hack-dropdown-item, .hack-dropdown-submit').forEach(item => {
                item.style.color = currentTheme.textColor;
            });

            dropdown.querySelectorAll('.hack-dropdown-separator').forEach(sep => {
                sep.style.backgroundColor = currentTheme.borderColor;
            });

            dropdown.querySelectorAll('input').forEach(input => {
                input.style.backgroundColor = currentTheme.moduleHoverColor;
                input.style.borderColor = currentTheme.borderColor;
                input.style.color = currentTheme.textColor;
            });

            const rangeInput = dropdown.querySelector('input[type="range"]');
            const cpsValue = dropdown.querySelector('#cps-value');
            if (rangeInput && cpsValue) {
                rangeInput.addEventListener('input', function() {
                    cpsValue.textContent = this.value;
                });
            }
        });
    });

    document.querySelectorAll('.hack-dropdown-item, .hack-dropdown-submit').forEach(item => {
        item.addEventListener('click', function() {
            const actionCode = this.getAttribute('data-action');
            if (actionCode) {
                if (this.classList.contains('hack-dropdown-submit')) {
                    const input = this.previousElementSibling.querySelector('input');
                    const value = input ? input.value : '';
                    const actionWithValue = actionCode.replace("this.previousElementSibling.querySelector('input').value", value);
                    eval(actionWithValue);
                } else {
                    eval(actionCode);
                }
            }

            const dropdown = this.closest('.hack-dropdown');
            if (dropdown) dropdown.style.display = 'none';
        });
    });

    const moduleItems = document.querySelectorAll('.hack-module');
    const savedModuleStates = loadModuleStates();

    moduleItems.forEach(module => {
        const buttonType = module.getAttribute('data-type');
        const actionCode = module.getAttribute('data-action');
        const actionOffCode = module.getAttribute('data-action-off');

        const moduleName = module.querySelector('.hack-module-name')?.textContent.trim().split(' ')[0] || '';

        if (buttonType === 'toggle') {
            const toggle = module.querySelector('.hack-module-toggle');

            if (moduleName && savedModuleStates[moduleName] === true) {
                toggle.classList.add('active');

                const currentThemeName = localStorage.getItem('whispTheme') || 'Default Dark';
                const currentTheme = themes[currentThemeName] || themes['Default Dark'];
                toggle.style.backgroundColor = currentTheme.activeToggleColor;

                if (actionCode) {
                    try {
                        eval(actionCode);
                    } catch (e) {
                        console.error(`Error executing action for ${moduleName}:`, e);
                    }
                }
            }
        }
    });
})();
