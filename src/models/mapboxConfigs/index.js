import Client from './_clientConfigs'
import staticLocations from './_locationConfigs'
import setStaticImgUrls from './_setStaticImgUrls'
import getRandom from './_getRandom'

const mapboxConfigs = () => {
  const client = Client(),
        getRandomStaticMap = () => getRandom(staticLocations);

  setStaticImgUrls(client, staticLocations)

  return [staticLocations, getRandomStaticMap]
}

export default mapboxConfigs
