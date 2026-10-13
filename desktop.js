import { Application } from "@webviewjs/webview";
import { join } from "path";

async function main() {
  const app = new Application();
  
  // Crea la ventana del navegador pasando el título directamente
  const window = app.createBrowserWindow({ 
    title: "nflare IDE" 
  });

  // Nota: Las configuraciones de pantalla completa varían según el OS. 
  // Si utilizas WebviewJS, puedes aplicar maximizado o tamaño por defecto.
  
  // Ruta hacia tus archivos estáticos
  const indexPath = join(process.cwd(), "ide", "static", "nanofl", "index.html");

  // Obtener la instancia del webview desde la ventana creada para navegar
  const webview = window.createWebview({
    url: `file://${indexPath}`
  });

  // Escuchar el cierre ordenado de la aplicación
  process.on('SIGINT', () => { 
    app.exit(); 
  });
}

main();
