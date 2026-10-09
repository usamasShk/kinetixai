import fs from 'fs';
import path from 'path';
import { execFile } from 'child_process';
import ffmpeg from '@ffmpeg-installer/ffmpeg';

const inputVideo = path.resolve('fff.mp4');
const outputDir = path.resolve('public/videos');
const outputVideo = path.join(outputDir, 'soccervision.mp4');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('FFmpeg binary path:', ffmpeg.path);
console.log('Optimizing and compressing fff.mp4 for web faststart streaming...');

// Video optimization parameters:
// -c:v libx264 (H.264 standard for 100% browser compatibility)
// -crf 24 (high quality, small footprint)
// -preset fast
// -movflags +faststart (instant playback on web)
// -an (or preserve audio -c:a aac)
const args = [
  '-i', inputVideo,
  '-c:v', 'libx264',
  '-crf', '24',
  '-preset', 'fast',
  '-movflags', '+faststart',
  '-c:a', 'aac',
  '-b:a', '128k',
  '-y',
  outputVideo
];

const child = execFile(ffmpeg.path, args, (error, stdout, stderr) => {
  if (error) {
    console.error('Compression error:', error);
    process.exit(1);
  }
  
  const stats = fs.statSync(outputVideo);
  console.log(`✓ Optimization complete!`);
  console.log(`Saved to: ${outputVideo}`);
  console.log(`New file size: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);
});

child.stderr.on('data', (data) => {
  // ffmpeg outputs progress to stderr
  const text = data.toString();
  if (text.includes('time=')) {
    const match = text.match(/time=(\d+:\d+:\d+\.\d+)/);
    if (match) {
      process.stdout.write(`\rProgress time: ${match[1]}`);
    }
  }
});
