import SectionConfigs from './sectionConfigs'
import MapboxConfigs from './mapboxConfigs'

const configs = {
  sections: () => Object.assign(SectionConfigs),
  mapbox: () => MapboxConfigs()
}

export default configs
