import closeDrawer from './_closeDrawer';
import openDrawer from './_openDrawer';
import removeItem from './_removeItem';

const animations = {
  closeDrawer: (params) => closeDrawer(params),
  openDrawer: (params) => openDrawer(params),
  removeItem: (params) => removeItem(params),
}

export default animations;
