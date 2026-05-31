import { PACKAGES } from './src/lib/data';

PACKAGES.forEach(pkg => {
  console.log(`${pkg.id}: offer=${pkg.offer}, original=${pkg.original}`);
});
