import {
  ModuleFields,
  TextField,
  RepeatedFieldGroup,
  RichTextField,
} from "@hubspot/cms-components/fields";
import { Island } from "@hubspot/cms-components";
// @ts-ignore - Island imports use ?island query parameter
import AccordionIsland from "./AccordionIsland.tsx?island";

export function Component({ fieldValues }) {
  const { accordion_items } = fieldValues;

  return <Island module={AccordionIsland} accordion_items={accordion_items} />;
}

export const fields = (
  <ModuleFields>
    <RepeatedFieldGroup
      name="accordion_items"
      label="Accordion Items"
      occurrence={{
        min: 1,
        max: 500,
        default: 3,
      }}
      default={[
        {
          title: "What is this service?",
          content:
            "<p>This service provides comprehensive solutions to help your business grow and succeed. We offer a wide range of features designed to meet your specific needs.</p>",
        },
        {
          title: "How do I get started?",
          content:
            "<p>Getting started is easy! Simply sign up for an account and follow our step-by-step onboarding process. Our team is here to help you every step of the way.</p>",
        },
        {
          title: "What are the pricing options?",
          content:
            "<p>We offer flexible pricing plans to suit businesses of all sizes. Contact our sales team to discuss which plan works best for your needs.</p>",
        },
      ]}
    >
      <TextField
        name="title"
        label="Title"
        required={true}
        default="Accordion Item Title"
      />
      <RichTextField
        name="content"
        label="Content (HTML)"
        required={true}
        default="<p>Enter your accordion content here. You can use HTML tags like <strong>bold</strong>, <em>italic</em>, lists, and more.</p>"
      />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: "Accordion",
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
