import {
  ModuleFields,
  LinkField,
  TextField,
  FieldGroup,
  FontField,
  ColorField,
  BorderField,
  NumberField,
  SpacingField,
  AlignmentField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }) {
  const { link, button_text } = fieldValues;
  const rel = [];
  if (link.no_follow) {
    rel.push('nofollow');
  }
  if (link.open_in_new_tab) {
    rel.push('noopener');
  }
  return (
    <div className="button-wrapper">
      <a className="button" href={link.url.href} target={link.open_in_new_tab ? '_blank' : '_self'} rel={rel.join(' ')}>{button_text} React</a>
    </div>
  );
}

export const fields = (
  <ModuleFields>
    <LinkField
      name="link"
      label="Button link"
      supportedTypes={["EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS"]}
      default={{
        url: {
          href: "",
          type: "EXTERNAL",
          content_id: 0,
        },
        no_follow: false,
        open_in_new_tab: false
      }}
    />
    <TextField
      name="button_text"
      label="Button text"
      required={true}
      default="Add a button link here"
    />
    <FieldGroup
      name="styles"
      label="Styles"
      tab="STYLE"
    >
      <FieldGroup
        name="text"
        label="Text"
      >
        <FontField
          name="font"
          label="Font"
        />
      </FieldGroup>
      <FieldGroup
        name="background"
        label="Background"
      >
        <ColorField
          name="color"
          label="Color"
        />
      </FieldGroup>
      <FieldGroup
        name="border"
        label="Border"
      >
        <BorderField
          name="border"
          label="Border"
        />
      </FieldGroup>
      <FieldGroup
        name="corner"
        label="Corner"
      >
        <NumberField
          name="radius"
          label="Radius"
          max={100}
          step={1}
          suffix="px"
          display="text"
        />
      </FieldGroup>
      <FieldGroup
        name="spacing"
        label="Spacing"
      >
        <SpacingField
          name="spacing"
          label="Spacing"
        />
      </FieldGroup>
      <FieldGroup
        name="alignment"
        label="Alignment"
      >
        <AlignmentField
          name="alignment"
          label="Alignment"
          alignmentDirection="HORIZONTAL"
        />
      </FieldGroup>
    </FieldGroup>
  </ModuleFields>
);

export const meta = {
  "label": "Button",
  "css_assets": [],
  "external_js": [],
  "global": false,
  "host_template_types": ["PAGE"],
  "icon": "../../images/module-icons/cta.svg",
  "js_assets": [],
  "other_assets": [],
  "smart_type": "NOT_SMART",
  "tags": [],
  "is_available_for_new_content": true
}
