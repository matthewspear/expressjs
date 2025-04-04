import express, { Request, Response } from 'express';
import axios from 'axios';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.send('🚀 API de download PandaVideo funcionando!');
});

app.post('/baixar-video', async (req: Request, res: Response) => {
  const { videoId, filename } = req.body;

  if (!videoId || !filename) {
    return res.status(400).json({ error: 'Parâmetros obrigatórios: videoId e filename' });
  }

  // Monta a URL de download
  const videoUrl = `https://download-us02.pandavideo.com:7443/videos/${videoId}/download`;

  const savePath = path.join(__dirname, '..', 'videos', filename);

  try {
    fs.mkdirSync(path.dirname(savePath), { recursive: true });

    const response = await axios({
      method: 'GET',
      url: videoUrl,
      responseType: 'stream',
      headers: {
        'x-api-key': 'panda-ce3029fc97b55c352ada3911badfdf9b7d533d64e6c46d6cdfac5cbba369f137'
      }
    });

    const writer = fs.createWriteStream(savePath);
    response.data.pipe(writer);

    writer.on('finish', () => {
      console.log('✅ Download finalizado:', savePath);
      return res.json({ message: 'Download finalizado com sucesso', file: filename });
    });

    writer.on('error', err => {
      console.error('❌ Erro ao salvar o vídeo:', err);
      return res.status(500).json({ error: 'Erro ao salvar o vídeo' });
    });

  } catch (err) {
    console.error('❌ Erro no download:', err);
    return res.status(500).json({ error: 'Erro ao baixar o vídeo da Panda Video' });
  }
});

const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

