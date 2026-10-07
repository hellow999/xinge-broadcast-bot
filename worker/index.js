import { Container } from '@cloudflare/containers';

const CONTAINER_NAME = 'xinge-broadcast-bot';

export class XingeContainer extends Container {
  defaultPort = 3510;
  sleepAfter = null;

  constructor(ctx, env) {
    super(ctx, env);
    this.envVars = {
      BOT_TOKEN: env.BOT_TOKEN,
      WEBHOOK_BASE_URL: env.WEBHOOK_BASE_URL,
      WEBHOOK_SECRET: env.WEBHOOK_SECRET || '',
      WEB_HOST: '0.0.0.0',
      WEB_PORT: '3510',
      DB_PATH: '/tmp/xinge/data/app.db',
      LOG_LEVEL: env.LOG_LEVEL || 'INFO',
      DEFAULT_TIMEZONE: env.DEFAULT_TIMEZONE || 'Asia/Shanghai',
      SEND_MIN_INTERVAL_SECONDS: env.SEND_MIN_INTERVAL_SECONDS || '3',
      TELEGRAM_API_ID: env.TELEGRAM_API_ID,
      TELEGRAM_API_HASH: env.TELEGRAM_API_HASH,
      SESSION_ENCRYPTION_KEY: env.SESSION_ENCRYPTION_KEY,
    };
  }
}

export default {
  async fetch(request, env) {
    const containerId = env.XINGE_CONTAINER.idFromName(CONTAINER_NAME);
    return env.XINGE_CONTAINER.get(containerId).fetch(request);
  },
};
