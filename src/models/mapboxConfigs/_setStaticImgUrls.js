export default function setStaticImgUrls(withClient, locations) {
  for (const location of locations) {
    __addKeyUrlPairsForLocation(withClient, location);
  };
};

function __addKeyUrlPairsForLocation(client, loc) {
  for (const style of Object.keys(client.styleKeys)) {
    __addKeyUrlPair(client, loc, style);
  };
};

function __addKeyUrlPair(client, location, style) {
  const { service, ownerId, styleKeys } = client;
  const { pos } = location;
  const urlKey = `${style}_url`;

  location[urlKey] = __getImgUrl(service, ownerId, styleKeys[style], pos);
};

function __getImgUrl(service, ownerId, styleId, pos) {
  const request = service.getStaticImage({
        ownerId: ownerId,
        styleId: styleId,
        width: Math.min(window.innerWidth, 1280),
        height: Math.min(window.innerHeight, 1280),
        position: {
          coordinates: [pos.long, pos.lat],
          zoom: pos.zoom,
          pitch: pos.pitch,
          bearing: pos.hdg },
        attribution: false,
        logo: false });
    return request.url();
};
