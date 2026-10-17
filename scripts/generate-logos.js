import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import PDFDocument from 'pdfkit';

const publicDir = path.resolve('public');

async function generateAll() {
  console.log('1. Rendering PNG & JPG images from updated SVGs...');

  // 1. Primary Horizontal Logo (Dark) -> PNG & JPG
  const logoSvg = fs.readFileSync(path.join(publicDir, 'logo.svg'));
  await sharp(logoSvg, { density: 300 })
    .resize(1680, 400, { fit: 'contain', background: '#0A0A0A' })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'logo.png'));

  await sharp(logoSvg, { density: 300 })
    .resize(1680, 400, { fit: 'contain', background: '#0A0A0A' })
    .jpeg({ quality: 98 })
    .toFile(path.join(publicDir, 'logo.jpg'));

  // 2. Transparent Horizontal Logo -> PNG
  const logoTransSvg = fs.readFileSync(path.join(publicDir, 'logo-transparent.svg'));
  await sharp(logoTransSvg, { density: 300 })
    .resize(1600, 320, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'logo-transparent.png'));

  // 3. App Icon / Square Emblem (1024x1024) -> PNG & JPG
  const iconSvg = fs.readFileSync(path.join(publicDir, 'logo-icon.svg'));
  await sharp(iconSvg, { density: 300 })
    .resize(1024, 1024, { fit: 'contain', background: '#0A0A0A' })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'logo-icon.png'));

  await sharp(iconSvg, { density: 300 })
    .resize(1024, 1024, { fit: 'contain', background: '#0A0A0A' })
    .jpeg({ quality: 98 })
    .toFile(path.join(publicDir, 'logo-icon.jpg'));

  // 4. LinkedIn Banner Standard (1584x396) -> High-Res PNG & JPG (Email only)
  const bannerSvg = fs.readFileSync(path.join(publicDir, 'linkedin-banner.svg'));
  await sharp(bannerSvg, { density: 300 })
    .resize(1584, 396, { fit: 'contain', background: '#0A0A0A' })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'linkedin-banner.png'));

  await sharp(bannerSvg, { density: 300 })
    .resize(1584, 396, { fit: 'contain', background: '#0A0A0A' })
    .jpeg({ quality: 98 })
    .toFile(path.join(publicDir, 'linkedin-banner.jpg'));

  // 5. LinkedIn Company Page Banner (1128x191) -> High-Res PNG & JPG
  const companyBannerSvg = fs.readFileSync(path.join(publicDir, 'linkedin-company-banner.svg'));
  await sharp(companyBannerSvg, { density: 300 })
    .resize(1128, 191, { fit: 'contain', background: '#0A0A0A' })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'linkedin-company-banner.png'));

  await sharp(companyBannerSvg, { density: 300 })
    .resize(1128, 191, { fit: 'contain', background: '#0A0A0A' })
    .jpeg({ quality: 98 })
    .toFile(path.join(publicDir, 'linkedin-company-banner.jpg'));

  console.log('✓ All PNG and JPG images successfully created.');

  console.log('2. Compiling KINETIX AI Brand Kit PDF...');

  const doc = new PDFDocument({
    size: 'A4',
    layout: 'portrait',
    margin: 40,
    info: {
      Title: 'KINETIX AI — Brand & Asset Kit',
      Author: 'KINETIX AI Studio',
      Subject: 'Official Brand Assets, Logos, and LinkedIn Banners',
    }
  });

  const pdfPath = path.join(publicDir, 'kinetix-ai-brand-kit.pdf');
  const writeStream = fs.createWriteStream(pdfPath);
  doc.pipe(writeStream);

  const pageWidth = 595.28;
  const pageHeight = 841.89;

  // --- PAGE 1: Brand Overview & Logos ---
  // Background
  doc.rect(0, 0, pageWidth, pageHeight).fill('#0A0A0A');
  
  // Top green stripe
  doc.rect(0, 0, pageWidth, 6).fill('#22C55E');

  // Header Title
  doc.font('Helvetica-Bold').fontSize(24).fillColor('#FFFFFF').text('KINETIX ', 40, 45, { continued: true });
  doc.fillColor('#22C55E').text('AI');
  doc.font('Helvetica').fontSize(11).fillColor('#888888').text('BRAND IDENTITY & ASSET COMPENDIUM', 40, 75);

  // Divider
  doc.rect(40, 95, pageWidth - 80, 1).fill('#1F1F1F');

  // Primary Tagline Box
  doc.roundedRect(40, 110, pageWidth - 80, 70, 6).fill('#111111').stroke('#1F1F1F');
  doc.font('Helvetica-Bold').fontSize(13).fillColor('#22C55E').text('VALUE PROPOSITION & MISSION', 56, 124);
  doc.font('Helvetica').fontSize(11).fillColor('#E5E5E5').text(
    '"We build AI systems for businesses that need results."',
    56, 144
  );
  doc.font('Helvetica').fontSize(9.5).fillColor('#888888').text(
    'Specializing in AI Workflow Automation, Autonomous Agents, Enterprise RAG, and AI SaaS Platforms.',
    56, 160
  );

  // Section: Primary Logos
  doc.font('Helvetica-Bold').fontSize(14).fillColor('#FFFFFF').text('1. Primary Horizontal Logo', 40, 200);
  doc.font('Helvetica').fontSize(9).fillColor('#737373').text('High-resolution dark presentation lockup (1680 × 400 px)', 40, 218);
  
  // Embed Logo Image
  doc.image(path.join(publicDir, 'logo.png'), 40, 235, { width: pageWidth - 80, height: 110 });

  // Section: Square Icon Emblem & Color Tokens
  doc.font('Helvetica-Bold').fontSize(14).fillColor('#FFFFFF').text('2. App Icon Emblem & Color Palette', 40, 365);
  
  // Left: Icon Embed
  doc.image(path.join(publicDir, 'logo-icon.png'), 40, 390, { width: 120, height: 120 });

  // Right: Color Swatches
  const colors = [
    { name: 'Obsidian Black', hex: '#0A0A0A', desc: 'Primary Background & Canvas' },
    { name: 'Emerald Green', hex: '#22C55E', desc: 'Active Brand Accent & Indicators' },
    { name: 'Surface Gray', hex: '#111111', desc: 'Card Elements & Elevated Surfaces' },
    { name: 'Pure White', hex: '#FFFFFF', desc: 'Primary Typography & Pillars' },
  ];

  let cy = 390;
  colors.forEach(c => {
    doc.rect(180, cy, 20, 20).fill(c.hex).stroke('#2A2A2A');
    doc.font('Helvetica-Bold').fontSize(10).fillColor('#FFFFFF').text(`${c.name} (${c.hex})`, 210, cy + 2);
    doc.font('Helvetica').fontSize(8.5).fillColor('#888888').text(c.desc, 210, cy + 13);
    cy += 30;
  });

  // Section: Direct Contact Specification
  doc.roundedRect(40, 530, pageWidth - 80, 80, 6).fill('#111111').stroke('#1F1F1F');
  doc.font('Helvetica-Bold').fontSize(11).fillColor('#22C55E').text('OFFICIAL CONTACT CHANNELS', 56, 545);
  doc.font('Helvetica').fontSize(10).fillColor('#FFFFFF').text('Direct Email:  ', 56, 565, { continued: true });
  doc.font('Helvetica-Bold').fillColor('#22C55E').text('info@kinetixai.cc');
  doc.font('Helvetica').fontSize(10).fillColor('#FFFFFF').text('WhatsApp Direct:  ', 56, 582, { continued: true });
  doc.font('Helvetica-Bold').fillColor('#22C55E').text('+92 307 5563077');

  // Footer note
  doc.font('Helvetica').fontSize(8).fillColor('#525252').text('Page 1 of 2 — KINETIX AI Brand Kit', 40, pageHeight - 35);

  // --- PAGE 2: LinkedIn Cover Banners ---
  doc.addPage();
  doc.rect(0, 0, pageWidth, pageHeight).fill('#0A0A0A');
  doc.rect(0, 0, pageWidth, 6).fill('#22C55E');

  doc.font('Helvetica-Bold').fontSize(20).fillColor('#FFFFFF').text('LinkedIn Banners & Social Covers', 40, 45);
  doc.font('Helvetica').fontSize(10).fillColor('#888888').text('Engineered for LinkedIn Company Pages & Founder Profiles with Avatar Safe Buffers', 40, 72);

  doc.rect(40, 90, pageWidth - 80, 1).fill('#1F1F1F');

  // Banner 1: High-Res 1584x396
  doc.font('Helvetica-Bold').fontSize(12).fillColor('#22C55E').text('1. Primary LinkedIn Cover Banner (1584 × 396 px)', 40, 105);
  doc.font('Helvetica').fontSize(9).fillColor('#737373').text('Optimized for Desktop & Mobile LinkedIn layouts with bottom-left avatar buffer.', 40, 122);
  doc.image(path.join(publicDir, 'linkedin-banner.png'), 40, 140, { width: pageWidth - 80, height: 125 });

  // Banner 2: Company Page Spec 1128x191
  doc.font('Helvetica-Bold').fontSize(12).fillColor('#22C55E').text('2. LinkedIn Company Page Header Banner (1128 × 191 px)', 40, 285);
  doc.font('Helvetica').fontSize(9).fillColor('#737373').text('Direct LinkedIn Company Page aspect ratio specification.', 40, 302);
  doc.image(path.join(publicDir, 'linkedin-company-banner.png'), 40, 320, { width: pageWidth - 80, height: 85 });

  // Checklist / Instructions Card
  doc.roundedRect(40, 430, pageWidth - 80, 160, 6).fill('#111111').stroke('#1F1F1F');
  doc.font('Helvetica-Bold').fontSize(11).fillColor('#FFFFFF').text('HOW TO APPLY ON LINKEDIN:', 56, 448);
  
  const steps = [
    '1. Company Profile Avatar: Upload "logo-icon.png" (1024x1024) as your profile picture.',
    '2. Company Header Banner: Upload "linkedin-banner.png" or "linkedin-company-banner.png".',
    '3. Company Display Name: Set to "KINETIX AI".',
    '4. Tagline: "We build AI systems for businesses that need results."',
    '5. Contact Email: Set public inquiry email to "info@kinetixai.cc".'
  ];

  let sy = 472;
  steps.forEach(step => {
    doc.font('Helvetica').fontSize(9.5).fillColor('#A3A3A3').text(step, 56, sy);
    sy += 20;
  });

  // Footer note
  doc.font('Helvetica').fontSize(8).fillColor('#525252').text('Page 2 of 2 — KINETIX AI Brand Kit (Generated for Production)', 40, pageHeight - 35);

  doc.end();

  await new Promise((resolve, reject) => {
    writeStream.on('finish', resolve);
    writeStream.on('error', reject);
  });

  console.log('✓ Successfully generated kinetix-ai-brand-kit.pdf in public/ directory!');
}

generateAll().catch(err => {
  console.error('Error generating assets & PDF:', err);
  process.exit(1);
});
