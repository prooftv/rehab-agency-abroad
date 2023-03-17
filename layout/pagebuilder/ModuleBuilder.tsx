import { BreadcrumbProps } from "../../modules/breadcrumb/Breadcrumb";
import { TextImageProps } from "../../modules/textimage/TextImage";
import { VideoProps } from "../../modules/video/Video";
import { GenericModuleProps } from "../../types";
import { ModuleSchemaName } from "../../types.sanity";
import { LazyLoadInView } from "./LazyLoadInView";
import ModuleErrorBoundary from "./ModuleErrorBoundary";
import React, { ComponentType } from "react";
import { Suspense, lazy } from "react";

const Video = lazy<ComponentType<VideoProps>>(
  () => import(/* webpackChunkName: "Video" */ "../../modules/video/Video")
);

const TextImage = lazy<ComponentType<TextImageProps>>(
  () =>
    import(
      /* webpackChunkName: "TextImage" */ "../../modules/textimage/TextImage"
    )
);

const Breadcrumb = lazy<ComponentType<BreadcrumbProps>>(
  () =>
    import(
      /* webpackChunkName: "Breadcrumb" */ "../../modules/breadcrumb/Breadcrumb"
    )
);

export type ModuleBuilderProps = {
  items: GenericModuleProps[];
};

// Sections that need to be loaded before network idle or inview
// It won't load if you don't add it here when for instance a module is position: fixed.
const NON_LAZY_LOAD_SECTIONS: ModuleSchemaName[] = [];
const INITIAL_SECTIONS_TO_LOAD: number = 2;
const INVIEW_LOAD_ONLY_SECTIONS: ModuleSchemaName[] = [];

export const ModuleBuilder = ({ items }: ModuleBuilderProps) => {
  return (
    <main>
      {items?.map((item, i) => (
        <Suspense fallback={``} key={item._key}>
          <ModuleErrorBoundary>
            <LazyLoadInView
              // show essential sections immediately
              enabled={
                i > INITIAL_SECTIONS_TO_LOAD &&
                NON_LAZY_LOAD_SECTIONS.indexOf(item._type) === -1
              }
              // load non essential sections after network idle
              // and heavy non essential sections only when in view
              networkIdle={INVIEW_LOAD_ONLY_SECTIONS.indexOf(item._type) === -1}
              background={item.theme?.background}
              module={item._type}
              id={item._key}
            >
              {item._type === "module.breadcrumb" && (
                <Breadcrumb {...(item as BreadcrumbProps)} />
              )}
              {item._type === "module.textimage" && (
                <TextImage {...(item as TextImageProps)} />
              )}
              {item._type === "module.video" && (
                <Video {...(item as VideoProps)} />
              )}
            </LazyLoadInView>
          </ModuleErrorBoundary>
        </Suspense>
      ))}
    </main>
  );
};

export const ModuleBuilderMemo = React.memo(ModuleBuilder);
