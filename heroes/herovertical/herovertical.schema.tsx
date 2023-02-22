import { BACKGROUND_COLOR_OPTIONS } from "../../components/module/background.options";
import { EllipsisVerticalIcon } from "@sanity/icons";
import { ImageGallery } from "@vectopus/atlas-icons-react";
import React from "react";
import { defineField, defineType } from "sanity";

const schema = defineType({
  name: "hero.herovertical",
  title: "HeroVertical",
  type: "object",
  description:
    "Hero Vertical is a prominent section that typically appears at the top of a page or landing page.",
  icon: () => <ImageGallery weight="thin" />,
  preview: {
    select: {
      title: "title",
      eyebrow: "eyebrow",
      image: "image",
    },
    prepare({ title = "", eyebrow = "", image }: any) {
      return {
        title: `${title}`,
        subtitle: eyebrow,
        media: image || <ImageGallery weight="thin" />,
      };
    },
  },
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
    {
      name: "theme",
      title: "Theme",
    },
    {
      name: "tools",
      title: " ",
      icon: EllipsisVerticalIcon,
    },
  ],
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      group: "content",
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "text",
      rows: 2,
      group: "content",
    }),

    defineField({
      name: "text",
      title: "Text",
      type: "portabletext.simple",
      group: "content",
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      group: "content",
    }),
    defineField({
      name: "theme",
      title: "Theme",
      type: "object",
      group: "theme",
      fields: [
        defineField({
          name: "module",
          title: "Module",
          type: "styles",
          options: {
            fields: [
              {
                name: "background",
                type: "color",
                options: {
                  colors: BACKGROUND_COLOR_OPTIONS,
                },
              },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: "preset",
      title: "Preset",
      type: "preset",
      group: "tools",
      options: {
        updateField: "hero",
      },
    }),
    defineField({
      name: "copyPaste",
      title: "Copy Paste",
      type: "copyPaste",
      group: "tools",
      options: {
        updateField: "hero",
      },
    }),
  ],
});

export default schema;
