import ArrayFaderEffect from './_arrayFader';
import ArrayBobberEffect from './_arrayBobber';
import BounceScale from './_bounceScale';
import DefineCustomEases from './_carbonEases';
import ElemBgColorChanger from './_elemBgColorChanger';
import FadeFlipEffect from './_fadeFlip';
import HideByHeightToZero from './_hideByHeightToZero';
import IconFlipperEffect from './_iconFlipper';
import SpinGraphicX from './_spinGraphicX';
import SpinGraphicY from './_spinGraphicX';
import SpinGraphicZ from './_spinGraphicZ';
import { HeaderTileEffects } from '../mainBodyAnimations/headerTileRow';

export default function RegisterEffects() {
    DefineCustomEases()
    ArrayFaderEffect()
    ArrayBobberEffect()
    BounceScale()
    ElemBgColorChanger()
    FadeFlipEffect()
    HideByHeightToZero()
    IconFlipperEffect()
    SpinGraphicX()
    SpinGraphicY()
    SpinGraphicZ()
    HeaderTileEffects()
}
