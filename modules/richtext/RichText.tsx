import { TextProps } from "../../components/module/Text";
import { TitleProps } from "../../components/module/Title";
import { WrapperProps } from "../../components/module/Wrapper";
import { ModuleRadiusType } from "../../components/module/background.options";
import { SpaceType } from "../../components/module/spacing.options";
import { WidthType } from "../../components/module/width.options";
import { PortableTextProps } from "../../components/portabletext/PortableText";
import { ColorType, HeadingLevelType } from "../../types";
import {
  BackgroundColorType,
  TextAlignType,
  TitleSizeType,
} from "./richtext.options";
import cx from "classnames";
import React, { ComponentType, lazy } from "react";

const Title = lazy<ComponentType<TitleProps>>(
  () => import(/* webpackChunkName: "Title" */ "../../components/module/Title"),
);

const Text = lazy<ComponentType<TextProps>>(
  () => import(/* webpackChunkName: "Text" */ "../../components/module/Text"),
);

const Wrapper = lazy<ComponentType<WrapperProps>>(
  () =>
    import(/* webpackChunkName: "Wrapper" */ "../../components/module/Wrapper"),
);

const PortableText = lazy<ComponentType<PortableTextProps>>(
  () =>
    import(
      /* webpackChunkName: "PortableText" */ "../../components/portabletext/PortableText"
    ),
);

export type RichTextProps = {
  eyebrow?: string;
  title?: string;
  content?: React.ReactElement;
  theme?: {
    module?: {
      space?: SpaceType;
      background?: BackgroundColorType;
      align?: TextAlignType;
      width?: WidthType;
      pullUp?: boolean;
    };
    title?: {
      size?: TitleSizeType;
      level?: HeadingLevelType;
    };
    decorations?: {
      roundedTop?: ModuleRadiusType;
      roundedBottom?: ModuleRadiusType;
    };
  };
};

export const RichText = ({ eyebrow, title, content, theme }: RichTextProps) => {
  // dark background scenario: change overal colouring
  let titleColor: ColorType = "neutral-500";
  let textColor: ColorType = "neutral-400";
  let eyebrowColor: ColorType = "brand-500";
  let isDarkBackground = false;
  if (theme?.module?.background === "neutral-900") {
    isDarkBackground = true;
    titleColor = "white";
    textColor = "white";
    eyebrowColor = "white";
  }

  return (
    <Wrapper
      theme={{
        width: theme?.module?.width,
        background: theme?.module?.background,
        space: theme?.module?.space,
        pullUp: theme?.module?.pullUp,
        rounded: {
          top: theme?.decorations?.roundedTop,
          bottom: theme?.decorations?.roundedBottom,
        },
      }}
    >
      <div
        className={cx("z-20 relative", {
          ["py-8 sm:py-10 lg:py-16 xl:py-30"]: theme?.module?.background,
        })}
      >
        <div
          className={cx("max-w-title flex flex-col gap-8", {
            ["md:text-left"]: theme?.module?.align === "left",
            ["md:text-center md:mx-auto"]: theme?.module?.align === "center",
          })}
        >
          {(Boolean(title?.trim().length) ||
            Boolean(eyebrow?.trim().length)) && (
            <Title
              size={theme?.title?.size || "3xl"}
              eyebrow={eyebrow}
              color={titleColor}
              eyebrowColor={eyebrowColor}
              as={theme?.title?.level}
            >
              {title}
            </Title>
          )}
          <Text
            align={null}
            background={theme?.module?.background || "white"}
            className={cx({
              ["md:mx-auto"]: theme?.module?.align === "center",
            })}
          >
            <PortableText content={content as any} />
          </Text>
        </div>
      </div>
    </Wrapper>
  );
};

export default React.memo(RichText);