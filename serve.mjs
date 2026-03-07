import { spawn } from 'child_process';

console.log('Starting Vite dev server at http://localhost:5173 ...');

const vite = spawn('npm', ['run', 'dev'], {
    stdio: 'inherit',
    shell: true,
});

vite.on('close', (code) => process.exit(code));
