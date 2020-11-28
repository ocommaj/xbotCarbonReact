import fleetLoading from './_fleetLoading';
import messageFlipper from './_messageFlipper';
import fleetToTiles from './_fleetToTiles';

const animations = {
  loading: (params) => fleetLoading(params),
  messageFlipper: (params) => messageFlipper(params),
  fleetToTiles: (params) => fleetToTiles(params)
};

export default animations;
