import React from "react";
import { Meta } from "@storybook/react";
import StatsCard from "../components/cards/StatsCard";
import { StatsCardProps } from "../types/stats-card.interface";
import { FaCalendar, FaInfoCircle, FaTractor, FaUsers } from "react-icons/fa";

const meta: Meta<typeof StatsCard> = {
  title: "Components/StatsCard",
  component: StatsCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A card component for displaying statistics with optional icon.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "The title of the stats card",
    },
    description: {
      control: "text",
      description: "The description text of the stats card",
    },
    onClick: {
      action: "clicked",
      description: "Click handler for the stats card",
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
    Icon: {
      control: "element",
      description: "Optional icon to display in the card",
    },
    iconSize: {
      control: "text",
      description: "Size of the icon",
      defaultValue: "18",
    },
  },
};

export default meta;

export const Default = {
  render: (args: StatsCardProps) => <StatsCard {...args} />,
  args: {
    title: "Sample Stats Card",
    description: "This is a sample stats card description.",
    Icon: () => <FaUsers size={"36"} />,
    onClick: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: "A basic stats card with a title and description.",
      },
    },
  },
};

export const WithIcon = {
  render: (args: StatsCardProps) => <StatsCard {...args} />,
  args: {
    title: "Stats Card with Icon",
    description: "This card includes an icon.",
    Icon: () => <FaInfoCircle size={"36"} />,
    onClick: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: "A stats card that displays an icon alongside the title.",
      },
    },
  },
};

export const ClickableStatsCard = {
  render: (args: StatsCardProps) => <StatsCard {...args} />,
  args: {
    title: "Clickable Stats Card",
    description: "This card can be clicked to trigger an action.",
    onClick: () => alert("Stats card clicked!"),
    Icon: () => <FaTractor size={"36"} />,
  },
  parameters: {
    docs: {
      description: {
        story: "A stats card that triggers an action when clicked.",
      },
    },
  },
};

export const HorizontalCard = {
  render: (args: StatsCardProps) => <StatsCard {...args} />,
  args: {
    title: "Horizontal Stats Card",
    description: "This card is horizontal.",
    Icon: () => <FaCalendar size={"36"} />,
    horizontal: true,
    onClick: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: "A stats card that triggers an action when clicked.",
      },
    },
  },
};
