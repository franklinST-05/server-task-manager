interface RecoveryPasswordTemplateProps {
  token: string;
  username: string;
}

export default function recoveryPasswordTemplate({ token, username }: RecoveryPasswordTemplateProps) {
  const path = "/temporary/" + token;

  return /*html*/`
    <body style="margin: 0px; padding: 0px;box-sizing: border-box;">
      <style>
        * { margin: 0px; padding: 0px; box-sizing: border-box; transition: all 0.3s linear; }
        .auto-layer { display: flex; align-items: center;  }
        @media screen and (max-width: 600px) { .auto-layer { flex-direction: column; text-align: center; } }
      </style>
      <main style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; padding:20px;">
        <h1 style="font-size: 24px; display: block;">Hello, ${username}</h1>
        <p style="font-size: 14px; color: #57575c;">To change your password, just press the button below.</p>
        <div class="auto-layer" style="padding: 20px 0px; gap: 10px;">
          <a href="${path}" style="display: block; width: max-content; padding: 10px 12px; font-size: 14px; font-weight: 600; background-color: #f62141; color: #fff; cursor: pointer;">CHANGE PASSWORD</a>
          <div class="auto-layer" style="width: 100%; max-width: 300px; gap: 8px;">
            <svg style="min-width: max-content; fill: #f96;" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
              <g><path d="M256,512C114.63,512,0,397.4,0,256C0,114.63,114.63,0,256,0c141.4,0,256,114.63,256,256C512,397.4,397.4,512,256,512z    M256,460.8c113.13,0,204.8-91.67,204.8-204.8c0-113.1-91.67-204.8-204.8-204.8C142.9,51.2,51.2,142.9,51.2,256   C51.2,369.13,142.9,460.8,256,460.8z M256,128c14.15,0,25.6,11.48,25.6,25.6v128c0,14.15-11.45,25.6-25.6,25.6   c-14.13,0-25.6-11.45-25.6-25.6v-128C230.4,139.48,241.88,128,256,128z M256,384c-14.13,0-25.6-11.45-25.6-25.6   c0-14.13,11.48-25.6,25.6-25.6c14.15,0,25.6,11.48,25.6,25.6C281.6,372.55,270.15,384,256,384z"/></g>
            </svg>
            <p style="font-size: 12px; color: #57575c;">If you did not request the change, please ignore this email and do not share it.</p>
          </div>
        </div>
      </main>
    </body>
  `;
}