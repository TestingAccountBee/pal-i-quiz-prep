import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // Usa a versão SWC que é mais rápida
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // A propriedade 'plugins' é onde adicionas as funcionalidades extra ao Vite.
  // O plugin 'react()' é essencial para projetos React.
  plugins: [react()],

  // A propriedade 'server' permite configurar o servidor de desenvolvimento.
  server: {
    port: 3000, // Podes definir a porta que queres usar para o desenvolvimento
    open: true,   // Abre o browser automaticamente quando inicias o servidor
  },

  // A propriedade 'resolve' ajuda o Vite a localizar os ficheiros.
  // 'alias' é muito útil para criar atalhos para os teus diretórios.
  resolve: {
    alias: {
      // Isto cria um atalho '@' que aponta diretamente para a tua pasta 'src'.
      // Assim, em vez de 'import Coisa from "../../components/Coisa"',
      // podes fazer 'import Coisa from "@/components/Coisa"'.
      '@': path.resolve(__dirname, './src'),
    },
  },
  
  // A propriedade 'build' permite configurar o processo de compilação final.
  build: {
    outDir: 'build', // Podes mudar o nome da pasta de output (por defeito é 'dist')
  },
});
