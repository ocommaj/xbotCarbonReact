import SectionConfigs from './sectionConfigs'
import MapboxConfigs from './mapboxConfigs'
import UserRecord from './UserRecord'

export function sections() { return Object.assign(SectionConfigs) }
export function mapbox() { return MapboxConfigs() }
export { UserRecord }
