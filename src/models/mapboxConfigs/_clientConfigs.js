const apiClientConfigs = () => {
  const self = {
    ownerId: process.env.REACT_APP_MB_OWNER,
    staticService: () => _initMapboxStaticService(),
    styleKeys: {
      satView: 'ckd2et7zg2pup1hqxu2ky6fux',
      mapView: 'ckd2et7zg2pup1hqxu2ky6fux'
    }
  }

  self.service = self.staticService()

  return Object.assign(self)
}

const _initMapboxStaticService = () => {
  const tkn = process.env.REACT_APP_MB_TOKEN,
        mbxClient = require('@mapbox/mapbox-sdk'),
        mbxStatic = require('@mapbox/mapbox-sdk/services/static'),
        baseClient = mbxClient({ accessToken: tkn }),
        staticService = mbxStatic(baseClient);
  return staticService
}

export default apiClientConfigs
