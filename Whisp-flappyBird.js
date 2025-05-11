javascript:(function(){
    // Check if our menu already exists
    if (document.getElementById('custom-hack-menu')) {
      document.getElementById('custom-hack-menu').remove();
      return;
    }

    fetch('https://raw.githubusercontent.com/dano36860/-s/refs/heads/main/Flappy-Bird-Hacks.js?token=GHSAT0AAAAAADDI63WMI6NT5HYPU6RHGGZW2AXMCIQ')
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
  
      /*
       * HEADER CONTAINER STYLES
       * The header height and the logo height should align the separators
       */
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
  
    const sidebarButtons = [
      {
        id: 'invincibility',
        label: 'Invincibility',
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjZTNlM2UzIj48cGF0aCBkPSJNNDgwLTgwcS0xMzktMzUtMjI5LjUtMTU5LjVUMTYwLTUxNnYtMjQ0bDMyMC0xMjAgMzIwIDEyMHYyNDRxMCAxNTItOTAuNSAyNzYuNVQ0ODAtODBabTAtODRxMTA0LTMzIDE3Mi0xMzJ0NjgtMjIwdi0xODlsLTI0MC05MC0yNDAgOTB2MTg5cTAgMTIxIDY4IDIyMHQxNzIgMTMyWm0wLTMxNloiLz48L3N2Zz4=',
        active: true
      },
      {
        id: 'birdcontrols',
        label: 'Bird Controls',
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjZTNlM2UzIj48cGF0aCBkPSJNNDgwLTEyMHEtMTE3IDAtMTk4LjUtODEuNVQyMDAtNDAwcTAtNzcgMjUuNS0xNTV0NjYtMTQxLjVRMzMyLTc2MCAzODItODAwdDk4LTQwcTQ5IDAgOTguNSA0MHQ5MCAxMDMuNVE3MDktNjMzIDczNC41LTU1NVQ3NjAtNDAwcTAgMTE3LTgxLjUgMTk4LjVUNDgwLTEyMFptMC04MHE4MyAwIDE0MS41LTU4LjVUNjgwLTQwMHEwLTU3LTE5LjUtMTIwdC00OS0xMTYuNVE1ODItNjkwIDU0Ny03MjV0LTY3LTM1cS0zMSAwLTY2LjUgMzV0LTY1IDg4LjVRMzE5LTU4MyAyOTkuNS01MjBUMjgwLTQwMHEwIDgzIDU4LjUgMTQxLjVUNDgwLTIwMFptNDAtNDBxMTcgMCAyOC41LTExLjVUNTYwLTI4MHEwLTE3LTExLjUtMjguNVQ1MjAtMzIwcS01MCAwLTg1LTM1dC0zNS04NXEwLTE3LTExLjUtMjguNVQzNjAtNDgwcS0xNyAwLTI4LjUgMTEuNVQzMjAtNDQwcTAgODMgNTguNSAxNDEuNVQ1MjAtMjQwWm0tNDAtMjQwWiIvPjwvc3ZnPg==',
        active: false
      },
      {
        id: 'gamespeed', 
        label: 'Game Speed',
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjZTNlM2UzIj48cGF0aCBkPSJtNDIyLTIzMiAyMDctMjQ4SDQ2OWwyOS0yMjctMTg1IDI2N2gxMzlsLTMwIDIwOFpNMzIwLTgwbDQwLTI4MEgxNjBsMzYwLTUyMGg4MGwtNDAgMzIwaDI0MEw0MDAtODBoLTgwWm0xNTEtMzkwWiIvPjwvc3ZnPg==',
        active: false
      },
      {
        id: 'score',
        label: 'Score',
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjZTNlM2UzIj48cGF0aCBkPSJNMTYwLTIwMGgxNjB2LTMyMEgxNjB2MzIwWm0yNDAgMGgxNjB2LTU2MEg0MDB2NTYwWm0yNDAgMGgxNjB2LTI0MEg2NDB2MjQwWk04MC0xMjB2LTQ4MGgyNDB2LTI0MGgzMjB2MzIwaDI0MHY0MDBIODBaIi8+PC9zdmc+',
        active: false
      },
      {
        id: 'visual',
        label: 'Visual',
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
        invincibility: [
        {
          name: 'Godmode',
          category: 'invincibility',
          description: 'Makes you invinsible',
          type: 'toggle',
          action: "FlappyHacks.GodMode()",
          actionOff: "FlappyHacks.GodModeOff()",
          iconUrl: null
        },
        {
          name: 'Ghost Mode',
          category: 'invincibility',
          description: 'Makes you a ghost',
          type: 'toggle',
          action: "FlappyHacks.GhostMode()",
          actionOff: "FlappyHacks.GhostModeOff()",
          iconUrl: null
        },
        {
          name: 'NoPipes',
          category: 'invincibility',
          description: 'Removes all pipes',
          type: 'toggle',
          action: "FlappyHacks.NoPipes()",
          actionOff: "FlappyHacks.NoPipesOff()",
          iconUrl: null
        }
       // Example of a drop down items
       //{
       //    name: 'Kill Aura',
      //    category: 'invincibility',
      //    description: 'Automatically attacks nearby players',
       //   type: 'toggle',
     //     action: "alert('Kill Aura activated!')",
      //    actionOff: "alert('Kill Aura disabled!')",
      //    dropdown: true,
      //    dropdownItems: [
      //      { label: 'Range: Minimum', action: "alert('Range set to minimum')" },
      //      { label: 'Range: Medium', action: "alert('Range set to medium')" },
      //      { label: 'Range: Maximum', action: "alert('Range set to maximum')" },
     //       { separator: true },
      //      {
      //        inputType: 'number',
      //        placeholder: 'Custom range',
      //        min: '1',
      //        max: '10',
      //        step: '0.5',
      //        defaultValue: '3',
      //        submitLabel: 'Apply',
      //        submitAction: "alert('Range set to ' + this.previousElementSibling.querySelector('input').value)"
     //       }
    //      ],
     //     iconUrl: null
    //    },
        
      ],
      birdcontrols: [
        {
          name: 'Zero Gravity',
          category: 'birdcontrols',
          description: 'Removes Gravity',
          type: 'toggle',
          action: "FlappyHacks.NoGravity()",
          actionOff: "FlappyHacks.NoGravityOff()",
          iconUrl: null
        },
        {
          name: 'Super Jump',
          category: 'birdcontrols',
          description: 'Control The Power Of Your Jumps',
          type: 'toggle',
          action: "FlappyHacks.SuperJump()",
          actionOff: "FlappyHacks.SuperJumpOff()",
          iconUrl: null
        },
        {
          name: 'Keyboard Control',
          category: 'birdcontrols',
          description: 'Control The Bird Using The Arrow Keys',
          type: 'toggle',
          action: "FlappyHacks.KeyboardControl()",
          actionOff: "FlappyHacks.KeyboardControlOff()",
          iconUrl: null
        }
      ],
      gamespeed: [
        {
          name: 'Bird Speed',
          category: 'gamespeed',
          description: 'Control The Speed Of The Bird',
          type: 'toggle',
          action: "FlappyHacks.SlowMotion()",
          actionOff: "FlappyHacks.SlowMotionOff()",
          iconUrl: null
        },
        {
          name: 'Scroll Speed',
          category: 'gamespeed',
          description: 'Set The Auto Scroll Speed',
          type: 'toggle',
          action: "FlappyHacks.SetScrollSpeed()",
          actionOff: "FlappyHacks.ResetScrollSpeed()",
          iconUrl: null
        }
      ],
      score: [
        {
          name: 'Set Score',
          category: 'score',
          description: 'Set Your Score',
          type: 'switch',
          action: "FlappyHacks.SetScore()",
          iconUrl: null
        },
        {
          name: 'Set High Score',
          category: 'score',
          description: 'Set Your High Score',
          type: 'switch',
          action: "FlappyHacks.SetBestScore()",
          iconUrl: null
        }
      ],
      visual: [
        {
          name: 'Set Bird Size',
          category: 'visual',
          description: 'Control The Size Of The Bird',
          type: 'toggle',
          action: "FlappyHacks.SetBirdSize()",
          actionOff: "FlappyHacks.ResetBirdSize()",
          iconUrl: null
        },
        {
            name: 'Bird Pulse',
            category: 'visual',
            description: 'Control The Blinking Of The Bird',
            type: 'switch',
            action: "FlappyHacks.PulseBirdSize()",
            iconUrl: null
          },
          {
            name: 'Grow-Shrink-Bird-Size',
            category: 'visual',
            description: 'Control The Speed It Grows And Shrinks',
            type: 'switch',
            action: "FlappyHacks.GrowShrinkBirdSize()",
            iconUrl: null
          },
          {
            name: 'Stop Bird Animations',
            category: 'visual',
            description: 'Control The Birds Animations',
            type: 'switch',
            action: "FlappyHacks.StopBirdSizeAnimations()",
            iconUrl: null
          }
      ],
      teleportation: [
        {
          name: 'Teleport Bird',
          category: 'teleportation',
          description: 'Control where the bird teleports',
          type: 'switch',
          action: "FlappyHacks.TeleportBird()",
          iconUrl: null
        },
        {
          name: 'Circle Teleportation',
          category: 'teleportation',
          description: "Make The Bird Teleport In Circles",
          type: 'toggle',
          action: "FlappyHacks.CircleTeleport()",
          actionOff: "FlappyHacks.StopTeleport()",
          iconUrl: null
        },
        {
          name: 'Zig Zag Teleport',
          category: 'teleportation',
          description: "Make The Bird Teleport In Zigzags",
          type: 'toggle',
          action: "FlappyHacks.ZigzagTeleport()",
          actionOff: "FlappyHacks.StopTeleport()",
          iconUrl: null
        },
        {
          name: 'Random Teleportation',
          category: 'teleportation',
          description: "Make The Bird Teleport Randomly",
          type: 'toggle',
          action: "FlappyHacks.RandomTeleport()",
          actionOff: "FlappyHacks.StopTeleport()",
          iconUrl: null
        },
        {
          name: 'Reset Position',
          category: 'teleportation',
          description: "Make The Bird Teleport To Last Position",
          type: 'switch',
          action: "FlappyHacks.ResetBirdPosition()",
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
  
    const themeItems = [
      { name: 'Default Dark', description: 'Default Whisp dark theme', gradient: 'linear-gradient(to bottom right, #121218, #1a1a24)' },
      { name: 'Whisp', description: 'Emerald green theme based on Whisp logo', gradient: 'linear-gradient(to bottom right, #4ecca3, #ffffff)' },
      { name: 'Mint Chocolate', description: 'Creamy mint chocolate blend', gradient: 'linear-gradient(to bottom right, #102815, #8cd2a7)' },
      { name: 'Matrix', description: 'Digital rain theme', gradient: 'linear-gradient(to bottom right, #000000, #00ff41)' },
      { name: 'Cyberpunk', description: 'Neon future theme', gradient: 'linear-gradient(to bottom right, #0b0f18, #00ffd5)' },
      { name: 'Synthwave', description: '80s retro futurism', gradient: 'linear-gradient(to bottom right, #190633, #ff00ff)' },
      { name: 'Blood Moon', description: 'Crimson eclipse theme', gradient: 'linear-gradient(to bottom right, #1a0000, #ff3333)' },
      { name: 'Blue Ocean', description: 'Vibrant blue theme', gradient: 'linear-gradient(to bottom right, #1a66ff, #0099ff)' },
      { name: 'Neon Pink', description: 'Flashy pink theme', gradient: 'linear-gradient(to bottom right, #ff0066, #ff6699)' },
      { name: 'Purple Haze', description: 'Rich purple theme', gradient: 'linear-gradient(to bottom right, #9900cc, #cc99ff)' },
      { name: 'Sunset Orange', description: 'Warm sunset theme', gradient: 'linear-gradient(to bottom right, #ff3300, #ff9966)' }
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
          <div id="hack-avatar"><img src="https://i.imgur.com/keR4MfK.png" alt="Flappy Bird" style="width: 100%; height: 100%; object-fit: cover;"></div>
          <div id="hack-user-info">
            <div id="hack-username">Flappy Bird <span style="opacity:0.5;">Hacks</span></div>
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
          <div id="hack-birdcontrols" class="hack-section">
            ${generateSectionModules('birdcontrols')}
          </div>
          <div id="hack-gamespeed" class="hack-section">
            ${generateSectionModules('gamespeed')}
          </div>
          <div id="hack-score" class="hack-section">
            ${generateSectionModules('score')}
          </div>
          <div id="hack-visual" class="hack-section">
            ${generateSectionModules('visual')}
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
  