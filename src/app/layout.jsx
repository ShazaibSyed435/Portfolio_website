import './globals.css';
import AnimatedBackground from '../components/AnimatedBackground';

export const metadata = {
  title: 'Syed Shazaib Zaheer - Full Stack Developer & AI Systems Builder',
  description: 'Full Stack Developer with 1+ year of experience building production-grade MERN and Python applications. Specializing in scalable SaaS platforms, AI-powered systems, and real-time communication architectures.',
  openGraph: {
    title: 'Syed Shazaib Zaheer - Full Stack Developer',
    description: 'Building scalable systems and AI-integrated solutions',
    images: ['https://bolt.new/static/og_default.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syed Shazaib Zaheer - Full Stack Developer',
    description: 'Building scalable systems and AI-integrated solutions',
    images: ['https://bolt.new/static/og_default.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="relative isolate min-h-screen">
          <AnimatedBackground />
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
