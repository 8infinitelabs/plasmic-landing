// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: d3CzdkbVigKSoVX8yBjtix
// Component: buqh-jLEpUGOFi
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Navigation from "../../Navigation"; // plasmic-import: mvOFeaVZnsJKLT/component
import Button from "../../Button"; // plasmic-import: 0GJhn4Yg6J5JLp/component
import Divider from "../../Divider"; // plasmic-import: 6tqiYh5rrzotWf/component
import Textinput from "../../Textinput"; // plasmic-import: -a3JAk2g6Kx68P/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: hfmUcITyrXi2x7/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: d3CzdkbVigKSoVX8yBjtix/projectcss
import * as sty from "./PlasmicHeroSection2.module.css"; // plasmic-import: buqh-jLEpUGOFi/css
import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: huC5VsEaPbprtz/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: NdggmImZFPhK2V/icon
import image13HRbaaspr2ZnMkB from "./images/image13.svg"; // plasmic-import: hRBAASPR2ZnMkB/picture

export const PlasmicHeroSection2__VariantProps = new Array();

export const PlasmicHeroSection2__ArgProps = new Array(
  "foreground",
  "children"
);

function PlasmicHeroSection2__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <Navigation
              className={classNames("__wab_instance", sty.navigation___2Myg4)}
              hideCta={"hideCta"}
            >
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__zj4Ws)}
                role={"img"}
                src={image13HRbaaspr2ZnMkB}
              />
            </Navigation>
          ),

          value: args.children
        })}
      </div>

      <div
        data-plasmic-name={"hero3"}
        data-plasmic-override={overrides.hero3}
        className={classNames(defaultcss.all, sty.hero3)}
      >
        <img
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(defaultcss.img, sty.img)}
          role={"img"}
          src={
            "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80"
          }
        />

        <div
          data-plasmic-name={"background3"}
          data-plasmic-override={overrides.background3}
          className={classNames(defaultcss.all, sty.background3)}
        />

        <p.Stack
          as={"div"}
          data-plasmic-name={"foreground"}
          data-plasmic-override={overrides.foreground}
          hasGap={true}
          className={classNames(defaultcss.all, sty.foreground)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox___19UX)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.freeBox__jAjZ0)}
                  >
                    <div
                      className={classNames(defaultcss.all, sty.freeBox__nXs8X)}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.freeBox__dTgx8
                        )}
                      >
                        {"Updated!"}
                      </div>
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.freeBox__nwEsK
                      )}
                    >
                      <span>
                        <React.Fragment>{"Designs that "}</React.Fragment>
                        <span style={{ textDecoration: "underline" }}>
                          {"adapt"}
                        </span>
                      </span>
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.freeBox__iuAu6
                      )}
                    >
                      {
                        "Orci dui condimentum rutrum laoreet hac purus porta sem sem a vivamus a posuere vel molestie."
                      }
                    </div>
                  </p.Stack>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.freeBox__cFlIe)}
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button___4B47E
                      )}
                      darkGray={"darkGray"}
                      slot={
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.freeBox__cTsLw
                          )}
                        >
                          {"Start now ->"}
                        </div>
                      }
                    />

                    <Button
                      bgDifference={"bgDifference"}
                      className={classNames(
                        "__wab_instance",
                        sty.button__acAAj
                      )}
                      darkGray={"darkGray"}
                      slot={
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.freeBox__f7Mic
                          )}
                        >
                          {"Learn more…"}
                        </div>
                      }
                    />
                  </p.Stack>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__vBdtj)}
                >
                  <div
                    className={classNames(defaultcss.all, sty.freeBox__wofks)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(defaultcss.all, sty.freeBox__bXCp)}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.freeBox__yr3Om
                        )}
                      >
                        {"Sign up with"}
                      </div>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          defaultcss.all,
                          sty.freeBox__dfwKk
                        )}
                      >
                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button___8TZ4V
                          )}
                          ouline={"ouline"}
                          slot={"Apple"}
                          startIcon={"startIcon"}
                        />

                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button___5ZsKd
                          )}
                          ouline={"ouline"}
                          slot={"Google"}
                          startIcon={"startIcon"}
                        >
                          <Icon6Icon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__ycpn3
                            )}
                            role={"img"}
                          />
                        </Button>
                      </p.Stack>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          defaultcss.all,
                          sty.freeBox__pM4T
                        )}
                      >
                        <Divider
                          className={classNames(
                            "__wab_instance",
                            sty.divider__r1Tpf
                          )}
                        />

                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.freeBox__oIcSy
                          )}
                        >
                          {"Or"}
                        </div>

                        <Divider
                          className={classNames(
                            "__wab_instance",
                            sty.divider__eQJnF
                          )}
                        />
                      </p.Stack>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          defaultcss.all,
                          sty.freeBox__deAc0
                        )}
                      >
                        <Textinput
                          className={classNames(
                            "__wab_instance",
                            sty.textinput__hgn
                          )}
                        />

                        <Textinput
                          className={classNames(
                            "__wab_instance",
                            sty.textinput__qiUxU
                          )}
                        />

                        <Textinput
                          className={classNames(
                            "__wab_instance",
                            sty.textinput__sLgoe
                          )}
                        />
                      </p.Stack>

                      <Button
                        children2={
                          <Icon5Icon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__qVnpL
                            )}
                            role={"img"}
                          />
                        }
                        className={classNames(
                          "__wab_instance",
                          sty.button__b65Da
                        )}
                        colors={"indigo"}
                        slot={"Start your account"}
                      />
                    </p.Stack>

                    <Divider
                      className={classNames(
                        "__wab_instance",
                        sty.divider___4GV8
                      )}
                    />

                    <div
                      className={classNames(defaultcss.all, sty.freeBox__hsWla)}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.freeBox__dYux
                        )}
                      >
                        {
                          "A cras sagittis odio vestibulum pulvinar a eget hendrerit id vestibulum a leo sociosqu dictumst dictumst natoque magnis parturient."
                        }
                      </div>
                    </div>
                  </div>
                </p.Stack>
              </React.Fragment>
            ),

            value: args.foreground
          })}
        </p.Stack>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "hero3", "img", "background3", "foreground"],
  freeBox: ["freeBox"],
  hero3: ["hero3", "img", "background3", "foreground"],
  img: ["img"],
  background3: ["background3"],
  foreground: ["foreground"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeroSection2__ArgProps,
      internalVariantPropNames: PlasmicHeroSection2__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicHeroSection2__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeroSection2";
  } else {
    func.displayName = `PlasmicHeroSection2.${nodeName}`;
  }
  return func;
}

export const PlasmicHeroSection2 = Object.assign(
  // Top-level PlasmicHeroSection2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    hero3: makeNodeComponent("hero3"),
    img: makeNodeComponent("img"),
    background3: makeNodeComponent("background3"),
    foreground: makeNodeComponent("foreground"),
    // Metadata about props expected for PlasmicHeroSection2
    internalVariantProps: PlasmicHeroSection2__VariantProps,
    internalArgProps: PlasmicHeroSection2__ArgProps
  }
);

export default PlasmicHeroSection2;
/* prettier-ignore-end */
