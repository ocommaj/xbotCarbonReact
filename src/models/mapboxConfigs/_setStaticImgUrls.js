export default function setStaticImgUrls(withClient, forLocations) {
  forLocations.map(loc => _addKeyUrlPairsForLocation(withClient, loc))
}

function _addKeyUrlPairsForLocation(client, location) {
  const { styleKeys } = client
  Object.keys(styleKeys).map(style => _addKeyUrlPair(client, location, style) )
}

function _addKeyUrlPair(client, location, style) {
  const { service, ownerId, styleKeys } = client,
        { pos } = location,
        urlKey = `${style}_url`;

  location.[`${urlKey}`] = _getImgUrl(service, ownerId, styleKeys[style], pos)
}

function _getImgUrl(service, ownerId, styleId, pos) {
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
    return request.url()
}
