export interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  KANBAN_KV: KVNamespace;
  APP_NAME: string;
  ENVIRONMENT?: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === 'GET' && url.pathname === '/api/health') {
      return new Response(
        JSON.stringify({ status: 'ok', service: 'clinebox-kanban', environment: env.ENVIRONMENT || 'production', timestamp: new Date().toISOString() }),
        { status: 200, headers: { 'Content-Type': 'application/json' } },
      );
    }

    try {
      const asset = await env.ASSETS.fetch(request);
      if (asset.status === 200) return asset;
    } catch {}

    return new Response('Not Found', { status: 404 });
  },
} satisfies ExportedHandler<Env>;
