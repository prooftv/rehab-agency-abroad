import { Link } from "../../components/buttons/Link";
import { IconLoader } from "../../components/images/IconLoader";
import { ResponsiveImageProps } from "../../components/images/ResponsiveImage";
import { ImageType } from "../../types";
import { LanguageSwitch } from "./LanguageSwitch";
import { NavigationProps } from "./Navigation";
import * as RadixDialog from "@radix-ui/react-dialog";
import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import cx from "classnames";
import React, { ComponentType, lazy } from "react";

const ResponsiveImage = lazy<ComponentType<ResponsiveImageProps>>(
  () =>
    import(
      /* webpackChunkName: "ResponsiveImage" */ "../../components/images/ResponsiveImage"
    ),
);

export type MobileNavProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  logo?: ImageType;
} & NavigationProps;

export const MobileNav = ({
  items,
  buttons,
  open,
  logo,
  onOpenChange,
}: MobileNavProps) => {
  return (
    <div className={cx("radix-dialog", { ["hidden"]: !open })}>
      <RadixDialog.Root onOpenChange={onOpenChange} open={open}>
        <RadixDialog.Overlay className="relative">
          <div className="fixed inset-0 bg-black/10 w-screen h-screen z-50" />
        </RadixDialog.Overlay>
        <RadixDialog.Content className="z-[60] fixed top-0 right-0 w-screen max-w-xs h-screen">
          <div className="h-full">
            <div className="h-full">
              <RadixDialog.Title className="sr-only">
                Navigation
              </RadixDialog.Title>
              <RadixDialog.Close className="z-[60] py-3 px-3 text-gray-500 hover:text-black bg-white hover:bg-gray-100 transition-colors absolute top-2 right-2">
                <IconLoader
                  icon="close"
                  className="text-current w-6 h-6 block"
                />
              </RadixDialog.Close>

              <Link
                href="/"
                className="inline-block absolute left-5 top-4 md:top-5 z-[60]"
              >
                {logo && <ResponsiveImage {...logo} />}
              </Link>

              <RadixNavigationMenu.Root className="h-full overflow-y-auto overflow-scrolling-touch bg-white select-none shadow-2xl text-xl">
                {Boolean(items?.length) && (
                  <RadixNavigationMenu.List className="pt-20 px-2">
                    {items?.map(
                      ({ label, href, children, current, language }) => (
                        <RadixNavigationMenu.Item key={label}>
                          <details
                            open={current}
                            className="mt-0.5 py-3 px-4 group rounded-lg open:bg-gray-100 bg-white transition-colors duration-75"
                          >
                            <summary className="list-none relative">
                              {href ? (
                                <Link
                                  href={href}
                                  locale={language}
                                  className="hover:underline text-xl font-bold text-gray-500"
                                >
                                  {label}
                                </Link>
                              ) : (
                                <span className="block font-bold text-gray-500">
                                  {label}
                                </span>
                              )}

                              {Boolean(children?.length) && (
                                <IconLoader
                                  icon="chevron"
                                  className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 text-action-500 transition-transform duration-75 group-open:rotate-180"
                                />
                              )}
                            </summary>

                            {Boolean(children?.length) && (
                              <ul className="flex flex-col gap-2 pt-6 pb-3">
                                {children?.map(
                                  ({ label, current, href, language }) => (
                                    <li key={label}>
                                      {href && (
                                        <Link
                                          href={href}
                                          locale={language}
                                          className={cx(
                                            "text-md text-gray-900 hover:underline relative",
                                            {
                                              ["text-action-500"]: current,
                                            },
                                          )}
                                        >
                                          {current && (
                                            <span className="bg-action-500 w-0.5 h-5 absolute -left-2 -top-0.5" />
                                          )}
                                          {label}
                                        </Link>
                                      )}
                                    </li>
                                  ),
                                )}
                              </ul>
                            )}
                          </details>
                        </RadixNavigationMenu.Item>
                      ),
                    )}
                  </RadixNavigationMenu.List>
                )}

                <RadixNavigationMenu.List className="mt-3 p-4 flex flex-row gap-3">
                  <LanguageSwitch align="left" position="above" />
                  {Boolean(buttons?.length) &&
                    buttons?.map((button) => (
                      <RadixNavigationMenu.Item key={button.label}>
                        {button.href && (
                          <Link
                            href={button.href}
                            locale={button.language}
                            className={cx(
                              "bg-action-500",
                              "hover:underline underline-offset-4",
                              "flex items-center gap-2",
                              "text-white rounded-full text-md font-bold",
                              "py-[10px] pl-4 pr-3",
                              "whitespace-nowrap",
                            )}
                          >
                            <span>{button.label}</span>
                            <IconLoader
                              icon={button.icon}
                              className="inline text-current transform -translate-y-px w-4 h-4"
                            />
                          </Link>
                        )}
                      </RadixNavigationMenu.Item>
                    ))}
                </RadixNavigationMenu.List>

                <div className="h-16 bg-white" />
              </RadixNavigationMenu.Root>
            </div>
          </div>
        </RadixDialog.Content>
      </RadixDialog.Root>
    </div>
  );
};
