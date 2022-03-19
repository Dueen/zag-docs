import { Accordion } from "./machines/accordion"
import { Dialog } from "./machines/dialog"
import { Editable } from "./machines/editable"
import { NumberInput } from "./machines/number-input"
import { PinInput } from "./machines/pin-input"
import { Popover } from "./machines/popover"
import { RangeSlider } from "./machines/range-slider"
import { Slider } from "./machines/slider"
import { Tabs } from "./machines/tabs"
import { Playground } from "./playground"

const components = {
  Dialog: () => (
    <Playground
      component={Dialog}
      defaultProps={{
        preventScroll: true,
        closeOnOutsideClick: true,
        closeOnEsc: true,
        role: { options: ["dialog", "alertdialog"], default: "dialog" },
      }}
    />
  ),
  Accordion: () => (
    <Playground
      component={Accordion}
      defaultProps={{
        collapsible: true,
        multiple: false,
        value: {
          default: "Aircrafts",
          options: ["Aircrafts", "Automobiles", "Watercraft"],
        },
      }}
    />
  ),
  Editable: () => (
    <Playground
      component={Editable}
      defaultProps={{
        selectOnFocus: true,
        placeholder: "Enter text...",
        activationMode: {
          options: ["focus", "dblclick", "none"],
          default: "focus",
        },
        submitMode: {
          options: ["enter", "blur", "none", "both"],
          default: "enter",
        },
      }}
    />
  ),
  PinInput: () => (
    <Playground
      component={PinInput}
      defaultProps={{
        disabled: false,
        otp: false,
        type: {
          options: ["alphanumeric", "numeric", "alphabetic"],
          default: "alphanumeric",
        },
        mask: false,
      }}
    />
  ),
  NumberInput: () => (
    <Playground
      component={NumberInput}
      defaultProps={{
        disabled: false,
        precision: 0,
        min: -10,
        max: 20,
        step: 1,
        allowMouseWheel: false,
        clampValueOnBlur: true,
      }}
    />
  ),
  Popover: () => (
    <Playground
      component={Popover}
      defaultProps={{
        modal: false,
        portalled: false,
        autoFocus: true,
        closeOnBlur: true,
        closeOnEsc: true,
      }}
    />
  ),
  Tabs: () => (
    <Playground
      component={Tabs}
      defaultProps={{
        loop: false,
        activationMode: {
          default: "automatic",
          options: ["manual", "automatic"],
        },
      }}
    />
  ),
  Slider: () => (
    <Playground
      component={Slider}
      defaultProps={{
        disabled: false,
        origin: {
          default: "start",
          options: ["start", "center"],
        },
      }}
    />
  ),
  RangeSlider: () => (
    <Playground
      component={RangeSlider}
      defaultProps={{
        disabled: false,
        step: 1,
      }}
    />
  ),
}

export function Showcase(props: { id: keyof typeof components }) {
  const Component = components[props.id]
  return <Component />
}