// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: d3CzdkbVigKSoVX8yBjtix
// Component: 6tqiYh5rrzotWf
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: d3CzdkbVigKSoVX8yBjtix/projectcss
import * as sty from "./PlasmicDivider.module.css"; // plasmic-import: 6tqiYh5rrzotWf/css

export const PlasmicDivider__VariantProps = new Array();

export const PlasmicDivider__ArgProps = new Array();

function PlasmicDivider__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    />
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
      internalArgPropNames: PlasmicDivider__ArgProps,
      internalVariantPropNames: PlasmicDivider__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicDivider__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDivider";
  } else {
    func.displayName = `PlasmicDivider.${nodeName}`;
  }
  return func;
}

export const PlasmicDivider = Object.assign(
  // Top-level PlasmicDivider renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicDivider
    internalVariantProps: PlasmicDivider__VariantProps,
    internalArgProps: PlasmicDivider__ArgProps
  }
);

export default PlasmicDivider;
/* prettier-ignore-end */
