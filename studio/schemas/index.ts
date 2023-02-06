import button from "../../components/buttons/button.schema";
import buttongroup from "../../components/buttons/buttonGroup.schema";
import link from "../../components/buttons/link.schema";
import imageSimple from "../../components/images/image.schema";
import portableTextBasic from "../../components/portabletext/portabletextbasic.schema";
import portableTextFull from "../../components/portabletext/portabletextfull.schema";
import portableTextSimple from "../../components/portabletext/portabletextsimple.schema";
import video from "../../components/video/video.schema";
import heroBasic from "../../heroes/HeroBasic/herobasic.schema";
import footer from "../../layout/footer/footer.schema";
import navigation from "../../layout/navigation/navigation.schema";
import moduleBillboard from "../../modules/billboard/billboard.schema";
import moduleBreadcrumb from "../../modules/breadcrumb/breadcrumb.schema";
import moduleCardGrid from "../../modules/cardgrid/cardgrid.schema";
import cardComposable from "../../modules/cardgrid/composablecard.schema";
import cardImage from "../../modules/cardgrid/imagecard.schema";
import moduleGallery from "../../modules/gallery/gallery.schema";
import moduleRichText from "../../modules/richtext/richtext.schema";
import moduleSlides from "../../modules/slides/slides.schema";
import moduleStory from "../../modules/story/story.schema";
import moduleTextImage from "../../modules/textimage/textimage.schema";
import { translateFields } from "../utils/language/field-translation";
import configGeneral from "./documents/config.general";
import configIntegrations from "./documents/config.integrations";
import configSeo from "./documents/config.seo";
import configSocial from "./documents/config.social";
import configTranslations from "./documents/config.translations";
import dialogForm from "./documents/dialog.form";
import dialogRichText from "./documents/dialog.richtext";
import dialogVideo from "./documents/dialog.video";
import formStatic from "./documents/form.static";
import pageContent from "./documents/page.content";
import pageHome from "./documents/page.home";
import pageNotFound from "./documents/page.notfound";
import modulePreset from "./documents/page.preset";
import pageSitemap from "./documents/page.sitemap";
import password from "./documents/password";
import person from "./documents/person";
import redirect from "./documents/redirect";
import studioDivider from "./documents/studio.divider";
import copypaste from "./objects/copypaste";
import language from "./objects/language";
import preset from "./objects/preset";
import styles from "./objects/styles";

export const schemaTypes = [
  ...[
    button,
    buttongroup,
    cardComposable,
    cardImage,
    configIntegrations,
    configSocial,
    copypaste,
    dialogForm,
    dialogRichText,
    dialogVideo,
    formStatic,
    heroBasic,
    imageSimple,
    language,
    link,
    moduleBillboard,
    moduleBreadcrumb,
    moduleCardGrid,
    moduleGallery,
    modulePreset,
    moduleRichText,
    moduleSlides,
    moduleStory,
    moduleTextImage,
    password,
    preset,
    redirect,
    portableTextBasic,
    portableTextFull,
    portableTextSimple,
    studioDivider,
    styles,
    video,
  ],

  ...translateFields([
    configGeneral,
    configSeo,
    configTranslations,
    footer,
    navigation,
    pageContent,
    pageHome,
    pageNotFound,
    pageSitemap,
    person,
  ]),
];
