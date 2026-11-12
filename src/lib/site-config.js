// Read configuration on the server and pass only public contact details to clients.
// Legacy names keep existing deployments working during the migration.
export const links = {
  github: process.env.NEXT_PUBLIC_GITHUB_URL || process.env.VITE_GITHUB_URL || '',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || process.env.VITE_LINKEDIN_URL || '',
  email: process.env.NEXT_PUBLIC_EMAIL || process.env.VITE_EMAIL || 'syedshazaib628@gmail.com',
};
