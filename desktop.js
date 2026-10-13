
import { Webview } from "@webviewjs/webview";
import { join } from "path";

const webview = new Webview();
webview.title = "nflare IDE";

// Configura pantalla completa automática
webview.setFullscreen(true);

// Ruta hacia tus archivos estáticos
const indexPath = join(process.cwd(), "ide", "static", "nanofl", "index.html");

webview.navigate(`file://${indexPath}`);
webview.run();
