import { Webview } from "bun-webview";
import { join } from "path";

const webview = new Webview();
webview.title = "nflare IDE";

// Configura la ventana para que se abra directamente en Pantalla Completa
webview.setFullscreen(true);

// Resolvemos la ruta apuntando estrictamente dentro de ide/static/nanofl
const indexPath = join(process.cwd(), "ide", "static", "nanofl", "index.html");

webview.navigate(`file://${indexPath}`);
webview.run();
