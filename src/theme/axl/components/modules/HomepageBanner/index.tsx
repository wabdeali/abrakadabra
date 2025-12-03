import styles from "./HomepageBanner.module.css";
import { Component as Button } from "../Button/index.tsx";

export const Component = ({ fieldValues }) => {
  const { heading, sub_heading, cta_group, bg_image } = fieldValues;
  return (
    <div className={styles.homepageBanner}>
      <div className={styles.homepageBanner__contentWrapper}>
        <div className={styles.homepageBanner__content}>
          <h1 className={styles.homepageBanner__title}>{heading}</h1>
          <p className={styles.homepageBanner__subtitle}>{sub_heading}</p>
          <div className={styles.homepageBanner__ctaGroup}>
            <Button
              fieldValues={{
                link: {
                  url: {
                    href: cta_group.cta_url.href,
                  },
                },
                button_text: cta_group.cta_name,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const fields = [
  {
    id: "6ef2bc16-3854-bda2-e80a-e9f9dda353dd",
    name: "heading",
    label: "Heading",
    required: false,
    locked: false,
    allow_new_line: false,
    type: "text",
    display_width: null,
    default: "Blending AI with Human Creativity",
  },
  {
    id: "03e1876b-8070-c8cf-f7e9-3d679565ab46",
    name: "sub_heading",
    label: "Sub Heading",
    required: false,
    locked: false,
    allow_new_line: false,
    type: "text",
    display_width: null,
    default:
      "We are a digital experience agency that creates extraordinary impact by blending Design, Engineering, Marketing, and AI to craft human-centered solutions that drive transformation.",
  },
  {
    id: "a26e474c-e276-495e-ce35-9501dcc91d1d",
    name: "cta_group",
    label: "CTA group",
    required: false,
    locked: false,
    children: [
      {
        id: "a2b7da34-0e42-b661-ee60-dd68f3a81845",
        name: "cta_name",
        label: "CTA name",
        required: false,
        locked: false,
        allow_new_line: false,
        type: "text",
        display_width: null,
        default: "Get in touch",
      },
      {
        id: "fb9b0266-4152-99f4-fe7e-406aaab20926",
        name: "cta_url",
        label: "CTA URL",
        required: false,
        locked: false,
        supported_types: [
          "EXTERNAL",
          "CONTENT",
          "FILE",
          "EMAIL_ADDRESS",
          "BLOG",
          "CALL_TO_ACTION",
          "PHONE_NUMBER",
          "WHATSAPP_NUMBER",
          "PAYMENT",
        ],
        type: "url",
        display_width: null,
        default: {
          content_id: null,
          href: "",
          type: "EXTERNAL",
        },
      },
    ],
    tab: "CONTENT",
    expanded: false,
    group_occurrence_meta: null,
    type: "group",
    display_width: null,
    default: {
      cta_url: {
        content_id: null,
        href: "",
        type: "EXTERNAL",
      },
    },
  },
];

export const meta = {
  global: false,
  content_types: ["LANDING_PAGE", "SITE_PAGE"],
  host_template_types: ["PAGE", "BLOG_LISTING", "BLOG_POST"],
  label: "Home Banner",
  is_available_for_new_content: true,
};
