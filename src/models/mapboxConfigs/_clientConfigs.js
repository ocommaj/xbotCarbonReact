export default function configClient() {
  return {
    ownerId: process.env.REACT_APP_MB_OWNER,
    service: __initMapboxStaticService(),
    styleKeys: {
      satView: 'ckd2et7zg2pup1hqxu2ky6fux',
      mapView: 'ckd2et7zg2pup1hqxu2ky6fux',
    }
  };
};

function __initMapboxStaticService() {
  const tkn = process.env.REACT_APP_MB_TOKEN;
  const mbxClient = require('@mapbox/mapbox-sdk');
  const mbxStatic = require('@mapbox/mapbox-sdk/services/static');
  const baseClient = mbxClient({ accessToken: tkn });
  const staticService = mbxStatic(baseClient);
  return staticService;
};
