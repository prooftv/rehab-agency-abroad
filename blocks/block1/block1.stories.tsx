import { IconLoaderProps } from "../../components/images/IconLoader";
import {
  TextSizeType,
  TEXT_SIZE_OPTIONS,
} from "../../components/text/text.options";
import {
  TitleSizeType,
  TITLE_SIZE_OPTIONS,
} from "../../components/title/title.options";
import { demoImage, demoImage3 } from "../../stories/content";
import { COLORS } from "../../theme";
import {
  BORDER_RADIUS_OPTIONS,
  BorderRadiusType,
  ColorType,
  VERTICAL_ALIGN_OPTIONS,
  VerticalAlignType,
} from "../../types";
import { Block1 } from "./Block1";
import { Meta } from "@storybook/react";
import React, { ComponentType, lazy } from "react";

const IconLoader = lazy<ComponentType<IconLoaderProps>>(
  () =>
    import(
      /* webpackChunkName: "IconLoader" */ "../../components/images/IconLoader"
    ),
);

export default {
  component: Block1,
  title: "Blocks/Block1",
} as Meta;

const DEMO_CONTENT = {
  title: " Work with tools you already use",
  image: demoImage,
  intro: (
    <p>
      Deliver great service experiences fast - without the complexity of
      traditional ITSM solutions.Accelerate critical development work, eliminate
      toil, and deploy changes with ease.
    </p>
  ),
  body: (
    <>
      <ul className="list-none relative">
        {[
          "Continuous integration and deployment",
          "Development workflow",
          "Knowledge management",
        ].map((item, index) => (
          <li key={index} className="!pl-0 !relative">
            <IconLoader
              icon="check"
              className="absolute left-0 -translate-x-[calc(100%+.75em)] translate-y-1/3 w-[1em] h-[1em] text-current !mt-0"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p>
        Deliver great service experiences fast - without the complexity of
        traditional ITSM solutions.
      </p>
    </>
  ),
};

export const Default = () => <Block1 {...DEMO_CONTENT} />;

export const BlockBackgrounds = () => (
  <>
    {(Object.keys(COLORS) as ColorType[]).map((color) => (
      <div key={color}>
        <Block1
          {...DEMO_CONTENT}
          theme={{
            block: { background: color },
          }}
        />
      </div>
    ))}
  </>
);

export const TitleColors = () => (
  <>
    {(Object.keys(COLORS) as ColorType[]).map((color) => (
      <div key={color}>
        <Block1
          title={DEMO_CONTENT.title}
          theme={{
            title: { color },
          }}
        />
      </div>
    ))}
  </>
);

export const TitleSizes = () => (
  <>
    {(Object.keys(TITLE_SIZE_OPTIONS) as TitleSizeType[]).map((size) => (
      <div key={size}>
        <Block1
          title={DEMO_CONTENT.title}
          theme={{
            title: { size },
          }}
        />
      </div>
    ))}
  </>
);

export const IntroSizes = () => (
  <>
    {(Object.keys(TEXT_SIZE_OPTIONS) as TextSizeType[]).map((size) => (
      <div key={size}>
        <Block1
          intro={DEMO_CONTENT.intro}
          body={DEMO_CONTENT.body}
          theme={{
            intro: { size },
            body: { size },
          }}
        />
      </div>
    ))}
  </>
);

export const IntroColors = () => (
  <>
    {(Object.keys(COLORS) as ColorType[]).map((color) => (
      <div key={color}>
        <Block1
          intro={DEMO_CONTENT.intro}
          theme={{
            intro: { color },
          }}
        />
      </div>
    ))}
  </>
);

export const ImageRadius = () => (
  <>
    {(Object.keys(BORDER_RADIUS_OPTIONS) as BorderRadiusType[]).map(
      (rounded) => (
        <div key={rounded}>
          <Block1
            title={rounded}
            image={demoImage}
            theme={{
              image: { rounded },
            }}
          />
          <Block1
            title={rounded}
            image={demoImage}
            theme={{
              image: { rounded, fullHeight: true },
            }}
          />
        </div>
      ),
    )}
  </>
);

export const verticalAlignContent = () => (
  <>
    {(Object.keys(VERTICAL_ALIGN_OPTIONS) as VerticalAlignType[]).map(
      (verticalAlign) => (
        <div key={verticalAlign}>
          <Block1
            title={`verticalAlign: ${verticalAlign}`}
            image={demoImage}
            theme={{
              layout: { verticalAlign },
            }}
          />
        </div>
      ),
    )}
  </>
);
export const verticalAlignMedia = () => (
  <>
    {(Object.keys(VERTICAL_ALIGN_OPTIONS) as VerticalAlignType[]).map(
      (verticalAlign) => (
        <div key={verticalAlign}>
          <Block1
            {...DEMO_CONTENT}
            title={`verticalAlign: ${verticalAlign}`}
            theme={{
              layout: { verticalAlign },
            }}
          />
          <Block1
            {...DEMO_CONTENT}
            image={demoImage3}
            intro={<p style={{ height: 600 }}>…content…</p>}
            title={`verticalAlign: ${verticalAlign}`}
            theme={{
              layout: { verticalAlign },
            }}
          />
          <Block1
            {...DEMO_CONTENT}
            image={undefined}
            video={{
              provider: "youtube",
              videoId: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
            }}
            title={`verticalAlign: ${verticalAlign}`}
            theme={{
              layout: { verticalAlign },
            }}
          />
          <Block1
            {...DEMO_CONTENT}
            title={`verticalAlign: ${verticalAlign}`}
            image={undefined}
            video={undefined}
            theme={{
              layout: { verticalAlign },
            }}
            script={{
              title: "embed",
              items: [
                {
                  html: `<div class='w-full h-[200px] border border-[royalblue] p-10'>this is a script</div>`,
                },
              ],
            }}
          />
          <Block1
            {...DEMO_CONTENT}
            title={`verticalAlign: ${verticalAlign}`}
            image={undefined}
            video={undefined}
            theme={{
              layout: { verticalAlign },
            }}
            script={{
              title: "embed",
              items: [
                {
                  html: `<div class='w-full h-[600px] border border-[royalblue] p-10'>this is a script</div>`,
                },
              ],
            }}
          />
        </div>
      ),
    )}
  </>
);

export const mediaPosition = () => (
  <>
    <Block1 {...DEMO_CONTENT} title="default" />
    <Block1
      {...DEMO_CONTENT}
      theme={{
        layout: {
          mediaPosition: "left",
        },
      }}
      title="left"
    />
    <Block1
      {...DEMO_CONTENT}
      theme={{
        layout: {
          mediaPosition: "right",
        },
      }}
      title="right"
    />
  </>
);

export const Video = () => (
  <Block1
    {...DEMO_CONTENT}
    image={undefined}
    video={{
      provider: "youtube",
      videoId: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
    }}
  />
);

export const ImageHeight = () => (
  <>
    <Block1
      {...DEMO_CONTENT}
      intro={<p style={{ height: 600 }}>…</p>}
      title="fullHeight false"
      theme={{
        image: {
          fullHeight: false,
        },
      }}
    />
    <Block1
      title="full height false"
      image={demoImage3}
      theme={{
        image: {
          fullHeight: false,
        },
      }}
    />
    <Block1
      {...DEMO_CONTENT}
      title="full height true"
      theme={{
        image: {
          fullHeight: true,
        },
      }}
    />
    <Block1
      title="full height true"
      image={demoImage3}
      theme={{
        image: {
          fullHeight: true,
        },
      }}
    />
  </>
);

export const Decorations = () => (
  <>
    <Block1
      {...DEMO_CONTENT}
      intro={<p style={{ height: 600 }}>intro…</p>}
      theme={{
        image: { fullHeight: false },
      }}
      decorations={[
        {
          mobile: {
            background: "blue",
            opacity: 0.5,
            bottom: 0,
            right: 0,
            width: 50,
            height: 50,
            top: 20,
            left: 20,
          },
        },
        {
          location: "image",
          breakout: true,
          mobile: {
            background: "blue",
            opacity: 0.5,
            width: 50,
            height: 50,
            top: -20,
            left: -20,
          },
        },
        {
          location: "image",
          breakout: true,
          mobile: {
            background: "blue",
            opacity: 0.5,
            width: 50,
            height: 50,
            bottom: -20,
            right: -20,
          },
        },
      ]}
    />
    <Block1
      {...DEMO_CONTENT}
      theme={{
        image: { fullHeight: true },
      }}
      decorations={[
        {
          mobile: {
            background: "blue",
            opacity: 0.5,
            bottom: 0,
            right: 0,
            width: 50,
            height: 50,
            top: 20,
            left: 20,
          },
        },
        {
          location: "image",
          breakout: true,
          mobile: {
            background: "blue",
            opacity: 0.5,
            width: 50,
            height: 50,
            top: -20,
            left: -20,
          },
        },
        {
          location: "image",
          breakout: true,
          mobile: {
            background: "blue",
            opacity: 0.5,
            width: 50,
            height: 50,
            bottom: -20,
            right: -20,
          },
        },
      ]}
    />
    <Block1
      {...DEMO_CONTENT}
      image={undefined}
      video={{
        provider: "youtube",
        videoId: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
      }}
      decorations={[
        {
          mobile: {
            background: "blue",
            opacity: 0.5,
            bottom: 0,
            right: 0,
            width: 50,
            height: 50,
            top: 20,
            left: 20,
          },
        },
        {
          location: "image",
          breakout: true,
          mobile: {
            background: "blue",
            opacity: 0.5,
            width: 50,
            height: 50,
            top: -20,
            left: -20,
          },
        },
        {
          location: "image",
          breakout: true,
          mobile: {
            background: "blue",
            opacity: 0.5,
            width: 50,
            height: 50,
            bottom: -20,
            right: -20,
          },
        },
      ]}
    />
    <Block1
      {...DEMO_CONTENT}
      decorations={[
        {
          mobile: {
            background: "blue",
            opacity: 0.5,
            bottom: 0,
            right: 0,
            width: 50,
            height: 50,
            top: 20,
            left: 20,
          },
        },
        {
          location: "image",
          breakout: true,
          mobile: {
            background: "blue",
            opacity: 0.5,
            width: 50,
            height: 50,
            top: -20,
            left: -20,
          },
        },
        {
          location: "image",
          breakout: true,
          mobile: {
            background: "blue",
            opacity: 0.5,
            width: 50,
            height: 50,
            bottom: -20,
            right: -20,
          },
        },
      ]}
    />
    <Block1
      {...DEMO_CONTENT}
      image={undefined}
      video={undefined}
      script={{
        title: "youtube embed",
        items: [
          {
            src: `//js-eu1.hsforms.net/forms/v2.js`,
            onload: `
          hbspt.forms.create({
            region: "na1",
            portalId: "8176446",
            formId: "e1c83e9f-aaea-4c98-a17d-776b82668276",
            target: "#hubspot-form-id"
          });
          `,
            html: `<div id="hubspot-form-id">loading form</div>`,
          },
        ],
      }}
      decorations={[
        {
          mobile: {
            background: "blue",
            opacity: 0.5,
            bottom: 0,
            right: 0,
            width: 50,
            height: 50,
            top: 20,
            left: 20,
          },
        },
        {
          location: "image",
          breakout: true,
          mobile: {
            background: "blue",
            opacity: 0.5,
            width: 50,
            height: 50,
            top: -20,
            left: -20,
          },
        },
        {
          location: "image",
          breakout: true,
          mobile: {
            background: "blue",
            opacity: 0.5,
            width: 50,
            height: 50,
            bottom: -20,
            right: -20,
          },
        },
      ]}
    />
  </>
);
export const Scripts = () => (
  <>
    <Block1
      {...DEMO_CONTENT}
      image={undefined}
      video={undefined}
      script={{
        title: "embed",
        items: [
          {
            html: `<div class='w-full h-full border border-[royalblue] p-10'>this is a script</div>`,
          },
        ],
      }}
    />{" "}
    <Block1
      {...DEMO_CONTENT}
      image={undefined}
      video={undefined}
      theme={{
        layout: {
          mediaPosition: "left",
        },
      }}
      script={{
        title: "embed",
        items: [
          {
            src: `//js-eu1.hsforms.net/forms/v2.js`,
            onload: `
          hbspt.forms.create({
            region: "na1",
            portalId: "8176446",
            formId: "e1c83e9f-aaea-4c98-a17d-776b82668276",
            target: "#hubspot-form-id"
          });
          `,
            html: `<div id="hubspot-form-id">loading form</div>`,
          },
        ],
      }}
    />
    <Block1
      {...DEMO_CONTENT}
      image={undefined}
      video={undefined}
      theme={{
        layout: {
          mediaPosition: "right",
        },
      }}
      script={{
        title: "embed",
        items: [
          {
            html: `<div class='w-full h-full border border-[royalblue] p-10'>this is a script</div>`,
          },
        ],
      }}
    />
  </>
);
