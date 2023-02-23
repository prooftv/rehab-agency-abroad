import { PageContext } from "../../context/PageContext";
import cx from "classnames";
import NextScript from "next/script";
import React, { useContext } from "react";

export type ScriptType = {
  _key?: string;
  title?: string;
  code?: "string";
  html?: "string";
  src?: "string";
  onload?: "string";
  onready?: "string";
  onerror?: "string";
  attributes: { name?: string; value?: string }[];
};

export type ScriptsType = {
  title?: string;
  items?: ScriptType[];
};

export const Scripts = ({ items }: ScriptsType) => {
  const { isPreviewMode } = useContext(PageContext);

  if (!items?.filter(Boolean).length) return null;

  return (
    <React.Fragment>
      {items.filter(Boolean).map((script) => {
        const nextScriptProps = {
          ...script.attributes?.reduce((acc, { name, value }) => {
            if (name && value) {
              acc[name] = value;
            }
            return acc;
          }, {} as Record<string, string>),
          onReady: () => {
            try {
              new Function(script.onready || "")();
            } catch (error) {
              console.error(error);
            }
          },
          onLoad: () => {
            try {
              new Function(script.onload || "")();
            } catch (error) {
              console.error(error);
            }
          },
          onError: () => {
            try {
              new Function(script.onerror || "")();
            } catch (error) {
              console.error(error);
            }
          },
        };

        return (
          <div
            key={script._key}
            className={cx("script", {
              ["relative"]: isPreviewMode,
            })}
          >
            {isPreviewMode && (
              <span className="absolute right-0 top-0 text-[10px] p-1 bg-[#ddd]">
                {script.title} script
              </span>
            )}

            {script.html && (
              <div dangerouslySetInnerHTML={{ __html: script.html }} />
            )}

            {script.code && (
              <NextScript key={script.title} {...nextScriptProps}>
                {script.code}
              </NextScript>
            )}

            {script.src && (
              <NextScript
                src={script.src}
                key={script.src}
                {...nextScriptProps}
              />
            )}
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default React.memo(Scripts);