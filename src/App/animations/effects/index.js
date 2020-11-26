import ArrayFaderEffect from './_arrayFader';
import ArrayBobberEffect from './_arrayBobber';
import BounceScale from './_bounceScale';
import DefineCustomEases from './_carbonEases';
import IconFlipperEffect from './_iconFlipper';
import TextFlipEffect from './_textFlip';
import HideByHeightToZero from './_hideByHeightToZero';
import ElemBgColorChanger from './_elemBgColorChanger';
import SpinGraphicX from './_spinGraphicX';
import SpinGraphicY from './_spinGraphicX';
import SpinGraphicZ from './_spinGraphicZ';
import { HeaderTileEffects } from '../mainBodyAnimations/headerTileRow';

export default function RegisterEffects() {
    DefineCustomEases()
    ArrayFaderEffect()
    ArrayBobberEffect()
    BounceScale()
    IconFlipperEffect()
    TextFlipEffect()
    HideByHeightToZero()
    ElemBgColorChanger()
    SpinGraphicX()
    SpinGraphicY()
    SpinGraphicZ()
    HeaderTileEffects()
}
