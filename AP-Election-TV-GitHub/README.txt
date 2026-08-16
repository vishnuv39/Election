AP ELECTION TV - TWO DEVICE GITHUB PAGES SETUP

Files:
- control-room.html  -> open this on your phone
- tv.html             -> open this on the laptop/TV
- firebase-config.js  -> Firebase configuration for project elections-55916

GitHub Pages:
1. Create/open a GitHub repository.
2. Upload all four files to the repository root.
3. Enable GitHub Pages from Settings -> Pages -> Deploy from a branch -> main -> / (root).
4. Wait for deployment.
5. Open:
   https://YOUR-USERNAME.github.io/YOUR-REPO/control-room.html
   https://YOUR-USERNAME.github.io/YOUR-REPO/tv.html

Firebase:
- Realtime Database path used by both pages: ap-election-live
- Both pages use Firebase Realtime Database for real-time synchronization.
- Current database rules are public read/write for initial testing. Secure them before public/production use.

The TV page is read-only for broadcast display. The control room publishes the election state.
