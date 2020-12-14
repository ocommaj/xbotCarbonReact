import Client from './_clientConfigs';
import staticLocations from './_locationConfigs';
import setStaticImgUrls from './_setStaticImgUrls';
import getRandom from './_getRandom';

export default function configMapbox() {
  const client = Client();
  const randomBG = getRandom(staticLocations);

  setStaticImgUrls(client, staticLocations);

  return { randomBG, staticMaps: staticLocations };
};
