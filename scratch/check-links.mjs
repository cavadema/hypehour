const urls = [
  "https://praktika.ai/pt-br/",
  "https://www.atlassian.com/software/rovo",
  "https://fromolive.com/",
  "https://www.gladly.ai/hp1/",
  "https://www.trydoco.com/",
  "https://www.getcoralai.com/",
  "https://www.atlassian.com/software/rovo/features",
  "https://www.actionstatelabs.com/",
  "https://www.letta.com/developer-platform",
  "https://hyperlink.nexa.ai/",
  "https://www.longshot.ai",
  "https://grafana.com/products/cloud/ai/",
  "https://play.ht/",
  "https://www.graphisoft.com/solutions/innovation/archicad-ai-visualizer",
  "https://landing-staging.tome.app/",
  "https://trugen.ai/home",
  "https://site.beam.game/",
  "https://llmstxtgenerator.cc/",
  "https://www.luppa.ai/",
  "https://library.fm/",
  "https://stableaudio.com/",
  "https://autonomyai.io/products/fei-studio/",
  "https://www.llama.com/"
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
