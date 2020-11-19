import SectionConfigs from './sectionConfigs'
import MapboxConfigs from './mapboxConfigs'
import UserRecord from './_UserRecord'

export function sections() { return Object.assign(SectionConfigs) }
export function mapbox() { return MapboxConfigs() }
export function userRecord(input) { return new UserRecord(input) }
