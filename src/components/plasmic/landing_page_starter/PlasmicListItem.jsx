// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: d3CzdkbVigKSoVX8yBjtix
// Component: p8HkMmpuANlwiZ
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: d3CzdkbVigKSoVX8yBjtix/projectcss
import * as sty from "./PlasmicListItem.module.css"; // plasmic-import: p8HkMmpuANlwiZ/css
import Icon16Icon from "./icons/PlasmicIcon__Icon16"; // plasmic-import: _kj1T7tllM6D_9/icon

export const PlasmicListItem__VariantProps = new Array(
  "bottomBorder",
  "leftCheck"
);

export const PlasmicListItem__ArgProps = new Array("children", "slot");

function PlasmicListItem__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__bottomBorder_dark]: hasVariant(
          variants,
          "bottomBorder",
          "dark"
        ),

        [sty.root__bottomBorder_light]: hasVariant(
          variants,
          "bottomBorder",
          "light"
        ),

        [sty.root__leftCheck]: hasVariant(variants, "leftCheck", "leftCheck")
      })}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Something amazing",
        value: args.children,
        className: classNames(sty.slotChildren)
      })}

      {p.renderPlasmicSlot({
        defaultContents: (
          <Icon16Icon
            className={classNames(defaultcss.all, sty.svg__mRlCa)}
            role={"img"}
          />
        ),

        value: args.slot
      })}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicListItem__ArgProps,
      internalVariantPropNames: PlasmicListItem__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicListItem__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicListItem";
  } else {
    func.displayName = `PlasmicListItem.${nodeName}`;
  }
  return func;
}

export const PlasmicListItem = Object.assign(
  // Top-level PlasmicListItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicListItem
    internalVariantProps: PlasmicListItem__VariantProps,
    internalArgProps: PlasmicListItem__ArgProps
  }
);

export default PlasmicListItem;
/* prettier-ignore-end */
