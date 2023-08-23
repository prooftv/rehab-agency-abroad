import { widthClasses } from "../../components/block/width.options";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { isLanguage } from "../../languages";
import { backgroundClasses, borderClasses, textClasses } from "../../theme";
import { ColorType } from "../../types";
import cx from "classnames";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { Suspense } from "react";

export type NavigationBreadcrumbProps = {
  theme?: {
    hidden?: boolean;
    background?: ColorType;
    text?: ColorType;
    border?: ColorType;
  };
};

export const NavigationBreadcrumb = ({ theme }: NavigationBreadcrumbProps) => {
  const { isPreview } = useRouter();
  const pathname = usePathname() || "";
  const isHomepage = pathname === "/" || isLanguage(pathname?.replace("/", ""));
  if (isHomepage && !isPreview) return null;

  return (
    <div
      className={cx(
        theme?.background && backgroundClasses[theme.background],
        theme?.text && textClasses[theme.text],
        theme?.border && borderClasses[theme?.border],
        theme?.border && "border-b",
      )}
    >
      <div
        className={cx(
          "py-2 md:py-3 lg:py-5",
          "mx-auto",
          "px-5 sm:px-8 lg:px-8 xl:px-8",
          widthClasses.outer,
        )}
      >
        <Suspense>
          <Breadcrumb />
        </Suspense>
      </div>
    </div>
  );
};
