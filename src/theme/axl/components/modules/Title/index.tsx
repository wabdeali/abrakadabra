import {
  ModuleFields,
  TextField,
  RichTextField,
} from "@hubspot/cms-components/fields";
import styles from "./Title.module.css";

export function Component({ fieldValues }) {
  const { eyebrow, title, description } = fieldValues;

  return (
    <div className={styles.title}>
      {eyebrow && <p className={styles.title__eyebrow}>{eyebrow}</p>}
      {title && <h2 className={styles.title__heading}>{title}</h2>}
      {description && (
        <div
          className={styles.title__description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="eyebrow"
      label="Eyebrow"
      required={false}
      default="Eyebrow Text"
    />
    <TextField
      name="title"
      label="Title"
      required={true}
      default="Main Title"
    />
    <RichTextField
      name="description"
      label="Description"
      required={false}
      default="<p>Enter a description here. This field supports rich text formatting.</p>"
    />
  </ModuleFields>
);

export const meta = {
  label: "Title",
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
