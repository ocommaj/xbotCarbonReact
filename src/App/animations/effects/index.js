import ArrayFaderEffect from './_arrayFader'
import ArrayBobberEffect from './_arrayBobber'
import IconFlipperEffect from './_iconFlipper'
import TextFlipEffect from './_textFlip'
import HideByHeightToZero from './_hideByHeightToZero'
import ElemBgColorChanger from './_elemBgColorChanger'
import { HeaderTileEffects } from '../mainBodyAnimations/headerTileRow'

export default function RegisterEffects() {
    ArrayFaderEffect()
    ArrayBobberEffect()
    IconFlipperEffect()
    TextFlipEffect()
    HideByHeightToZero()
    ElemBgColorChanger()
    HeaderTileEffects()
}
