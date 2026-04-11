const urls = [
  "https://launch.pingprompt.dev/",
  "https://learn.deeplearning.ai/courses/claude-code-a-highly-agentic-coding-assistant/lesson/66b35/introduction",
  "https://usenori.ai/",
  "https://www.figma.com/pt-br/comunidade/plugin/1486825259782611959/figroot-free-figma-to-code-react-tailwind-css-html-css-plugin",
  "https://scispace.com/biomedical",
  "https://www.eduaide.ai/",
  "https://riverside.com/"
];

async function checkUrl(url) {
  try {
    const res = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    if (res.ok) {
       console.log(`[OK] ${url} -> ${res.url}`);
    } else {
       // if HEAD fails, try GET
       const resGet = await fetch(url, { method: 'GET', redirect: 'follow' });
       if (resGet.ok) {
           console.log(`[OK-GET] ${url} -> ${resGet.url}`);
       } else {
           console.log(`[DEAD] ${url} -> Status: ${resGet.status}`);
       }
    }
  } catch (err) {
    console.log(`[ERROR] ${url} -> ${err.message}`);
  }
}

async function run() {
  const promises = urls.map(u => checkUrl(u));
  await Promise.all(promises);
}

run();
