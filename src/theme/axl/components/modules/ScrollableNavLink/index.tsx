import { ModuleFields, TextField } from "@hubspot/cms-components/fields";
import styles from "./ScrollableNavLink.module.css";

export function Component({ fieldValues }) {
  const { link_text, anchor_id } = fieldValues;

  if (!link_text || !anchor_id) {
    return null;
  }

  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById(anchor_id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <a
      href={`#${anchor_id}`}
      className={styles.scrollableNavLink}
      onClick={handleClick}
    >
      {link_text}
    </a>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="link_text"
      label="Link Text"
      required={true}
      default="Scroll to Section"
    />
    <TextField
      name="anchor_id"
      label="Anchor ID"
      required={true}
      default="section-id"
      helpText="Enter the ID of the element to scroll to (without the # symbol)"
    />
  </ModuleFields>
);

export const meta = {
  label: "Scrollable Nav Link",
  css_assets: [],
  external_js: [],
  global: false,
  host_template_types: ["PAGE", "BLOG_POST"],
  icon: "../../images/module-icons/info-circle-solid.svg",
  js_assets: [],
  other_assets: [],
  smart_type: "NOT_SMART",
  tags: [],
  is_available_for_new_content: true,
};
