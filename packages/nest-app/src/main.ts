import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express/interfaces/nest-express-application.interface";
import { WsAdapter } from "@nestjs/platform-ws";

import { AppModule } from "./app.module";

declare const module;

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.useWebSocketAdapter(new WsAdapter(app));
    await app.listen(3001);

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}

bootstrap();
