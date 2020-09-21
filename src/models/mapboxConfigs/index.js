import Client from './_clientConfigs'
import staticLocationConfigs from './_locationConfigs'
import setStaticImgUrls from './_setStaticImgUrls'
import getRandom from './_getRandom'

const mapboxConfigs = () => {
  const self = {
        staticLocations: staticLocationConfigs,
        getRandom: () => getRandom(self.staticLocations)
      }

  const client = Client()

  setStaticImgUrls(client, self.staticLocations)

  return Object.assign(self)
}

export default mapboxConfigs
