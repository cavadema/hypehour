import fs from 'fs';
import path from 'path';
import https from 'https';

// --- Configurações IndexNow ---
const HOST = 'www.hypehour.com.br';
const API_KEY = 'bfe2b6a86b4b44f3ae1469b4ac4c4dbf';
// ------------------------------

const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;
const SITEMAP_PATH = path.join(process.cwd(), 'public', 'sitemap.xml');

async function submitToIndexNow() {
    console.log('🔄 Iniciando submissão para o IndexNow...');

    try {
        // 1. Ler o sitemap.xml
        if (!fs.existsSync(SITEMAP_PATH)) {
            console.warn('⚠️ Sitemap não encontrado em "public/sitemap.xml". Pulando envio.');
            return;
        }

        const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');

        // 2. Extrair URLs usando Regex
        const urlMatches = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)];
        const urlList = urlMatches.map(match => match[1].trim());

        if (urlList.length === 0) {
            console.warn('⚠️ Nenhuma URL encontrada no sitemap. Pulando envio.');
            return;
        }

        console.log(`📡 Enviando ${urlList.length} URLs para o IndexNow...`);

        // 3. Montar Payload
        const payload = JSON.stringify({
            host: HOST,
            key: API_KEY,
            keyLocation: KEY_LOCATION,
            urlList: urlList,
        });

        // 4. Enviar a requisição POST nativamente para n depender de libs externas
        const options = {
            hostname: 'api.indexnow.org',
            port: 443,
            path: '/indexnow',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Content-Length': Buffer.byteLength(payload)
            }
        };

        const req = https.request(options, (res) => {
            if (res.statusCode >= 200 && res.statusCode < 300) {
                console.log('✅ Sucesso! URLs submetidas ao IndexNow (Bing/Yandex). Status:', res.statusCode);
            } else {
                console.error('❌ Falha na submissão. Status Code:', res.statusCode);
            }
        });

        req.on('error', (error) => {
            console.error('❌ Erro na requisição IndexNow:', error);
        });

        // Write data to request body
        req.write(payload);
        req.end();

    } catch (error) {
        console.error('❌ Erro inesperado ao processar IndexNow:', error);
    }
}

submitToIndexNow();
