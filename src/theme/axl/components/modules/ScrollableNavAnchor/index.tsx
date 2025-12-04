import { ModuleFields, TextField } from "@hubspot/cms-components/fields";
import styles from "./ScrollableNavAnchor.module.css";

export function Component({ fieldValues }) {
  const { anchor_id } = fieldValues;

  if (!anchor_id) {
    return null;
  }

  return <div id={anchor_id} className={styles.scrollableNavAnchor} />;
}

export const fields = (
  <ModuleFields>
    <TextField
      name="anchor_id"
      label="Anchor ID"
      required={true}
      default="section-id"
      helpText="Enter a unique ID for this anchor point (without the # symbol). This should match the Anchor ID in your Scrollable Nav Link component."
    />
  </ModuleFields>
);

export const meta = {
  label: "Scrollable Nav Anchor",
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
