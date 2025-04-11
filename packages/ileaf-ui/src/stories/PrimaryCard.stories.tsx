import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import PrimaryCard from "../components/cards/PrimaryCard";
import { PrimaryCardProps } from "../types/primary-card.interface";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const meta: Meta<typeof PrimaryCard> = {
  title: "Components/PrimaryCard",
  component: PrimaryCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile card component for displaying content with optional image and link.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "The title of the card",
    },
    description: {
      control: "text",
      description: "The description text of the card",
    },
    link: {
      control: "text",
      description: "Optional link for the card title",
    },
    onClick: {
      action: "clicked",
      description: "Click handler for the card",
    },
    image: {
      control: "text",
      description: "URL of the image to display in the card",
    },
    imageAlt: {
      control: "text",
      description: "Alt text for the image",
      defaultValue: "item",
    },
    imageStyles: {
      control: "text",
      description: "Custom CSS class for the image",
    },
    cardStyles: {
      control: "text",
      description: "Custom CSS class for the card container",
    },
    titleStyles: {
      control: "text",
      description: "Custom CSS class for the title",
    },
    descriptionStyles: {
      control: "text",
      description: "Custom CSS class for the description",
    },
    horizontal: {
      control: "boolean",
      description: "Whether the card layout is horizontal",
      defaultValue: false,
    },
    listItems: {
      control: "object",
      description: "An optional list of items to display in the card",
    },
  },
};

export default meta;

export const Default = {
  render: (args: PrimaryCardProps) => <PrimaryCard {...args} />,
  args: {
    title: "Sample Card",
    description: "This is a sample card description.",
    image: "https://placehold.co/400x200",
    link: "#",
  },
  parameters: {
    docs: {
      description: {
        story: "A basic card with a title, description, and image.",
      },
    },
  },
};

export const WithCustomStyles = {
  render: (args: PrimaryCardProps) => <PrimaryCard {...args} />,
  args: {
    title: "Styled Card",
    description: "This card has custom styles applied.",
    image: "https://placehold.co/400x200",
    cardStyles: "bg-blue-100",
    titleStyles: "text-blue-800",
    descriptionStyles: "text-blue-600",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A card with custom styles for the container, title, and description.",
      },
    },
  },
};

export const HorizontalLayout = {
  render: (args: PrimaryCardProps) => <PrimaryCard {...args} />,
  args: {
    title: "Horizontal Card",
    description: "This card is displayed in a horizontal layout.",
    image: "https://placehold.co/300x400",
    horizontal: true,
  },
  parameters: {
    docs: {
      description: {
        story: "A card displayed in a horizontal layout with an image.",
      },
    },
  },
};

export const ClickableCard = {
  render: (args: PrimaryCardProps) => <PrimaryCard {...args} />,
  args: {
    title: "Clickable Card",
    description: "This card can be clicked to trigger an action.",
    onClick: () => alert("Card clicked!"),
  },
  parameters: {
    docs: {
      description: {
        story: "A card that triggers an action when clicked.",
      },
    },
  },
};

export const WithListItems = {
  render: (args: PrimaryCardProps) => <PrimaryCard {...args} />,
  args: {
    title: "Card with List",
    description: "This card includes a list of items.",
    listItems: [
      { key: "label 1", value: "Item 1", icon: FaCheckCircle },
      { key: "label 2", value: "Item 2", icon: FaTimesCircle },
      { key: "label 3", value: "Item 3" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "A card that displays a list of items with optional icons.",
      },
    },
  },
};
