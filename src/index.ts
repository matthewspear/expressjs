import express, { Request, Response } from "express";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3000;

// Rota de teste
app.get("/", (req: Request, res: Response) => {
  res.json({ status: "ok" });
  return;
});

// Rota para baixar vídeo do Panda Video
app.get("/baixar-video/:videoId", async (req: Request, res: Response) => {
  const { videoId } = req.params;
  const pandaUrl = `https://download-us02.pandavideo.com:7443/videos/${videoId}/download`;

  console.log(`🔍 Baixando vídeo: ${videoId}`);
  console.log(`🌍 URL gerada: ${pandaUrl}`);

  try {
    const response = await axios.get(pandaUrl, {
      responseType: "stream",
      headers: {
        Authorization: "Bearer panda-ce3029fc97b55c352ada3911badfdf9b7d533d64e6c46d6cdfac5cbba369f137",
      },
    });

    console.log("✅ Resposta recebida do Panda Video");

    res.setHeader("Content-Disposition", `attachment; filename="${videoId}.mp4"`);
    res.setHeader("Content-Type", "video/mp4");

    response.data.pipe(res);
    return;
  } catch (error: any) {
    console.error("❌ Erro ao baixar o vídeo:", error.message);

    res.status(500).json({
      error: "Erro ao baixar o vídeo",
      details: error.message,
    });
    return;
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});


app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});

