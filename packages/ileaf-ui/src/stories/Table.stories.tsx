import React, { useState } from "react";
import DataTable from "../components/table/Table";
import { createColumnHelper } from "@tanstack/react-table";
import { BrowserRouter } from "react-router-dom";
import { StoryFn, Meta } from "@storybook/react";
import { DataTableProps } from "../types/table.interface";

type Person = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status: "active" | "inactive";
};

const sampleData: Person[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    status: "active",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    status: "active",
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob.johnson@example.com",
    status: "inactive",
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Williams",
    email: "alice.williams@example.com",
    status: "active",
  },
  {
    id: 5,
    firstName: "Charlie",
    lastName: "Brown",
    email: "charlie.brown@example.com",
    status: "inactive",
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("firstName", {
    header: "First Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("lastName", {
    header: "Last Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => (
      <span
        className={`px-2 py-1 rounded-full text-xs ${
          info.getValue() === "active"
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {info.getValue()}
      </span>
    ),
  }),
];

type TableStoryArgs = Omit<
  DataTableProps<Person>,
  "data" | "columns" | "metadata" | "onNext" | "onPrev"
>;
const Wrapper = (args: TableStoryArgs) => {
  const [page, setPage] = useState(1);

  const handleNext = (nextPage: number) => {
    setPage(nextPage);
  };

  const handlePrev = (prevPage: number) => {
    setPage(prevPage);
  };

  const metadata = {
    total: 100,
    page: page,
    size: 10,
  };

  return (
    <BrowserRouter>
      <div className="p-4 bg-gray-50 min-h-screen">
        <DataTable
          data={sampleData}
          columns={columns}
          metadata={metadata}
          onNext={handleNext}
          onPrev={handlePrev}
          {...args}
        />
      </div>
    </BrowserRouter>
  );
};

const meta: Meta<typeof DataTable> = {
  title: "Components/DataTable",
  component: DataTable,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A customizable data table component with pagination and selection capabilities.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "The title of the table",
    },
    showSelectCheckbox: {
      control: "boolean",
      description: "Whether to show selection checkboxes",
    },
    onCheckBoxSelection: {
      action: "selected",
      description: "Callback when checkboxes are selected",
    },
    isWrapperRequired: {
      control: "boolean",
      description: "Whether to wrap the table in a container",
      defaultValue: true,
    },
    headerClass: {
      control: "text",
      description: "Custom CSS class for the table header",
    },
    bodyClass: {
      control: "text",
      description: "Custom CSS class for the table body",
    },
    rowClass: {
      control: "text",
      description: "Custom CSS class for table rows",
    },
  },
};

export default meta;

// Template for creating stories
const Template: StoryFn<TableStoryArgs> = (args) => <Wrapper {...args} />;

export const Default = {
  render: (args: TableStoryArgs) => <Wrapper {...args} />,
  args: {
    title: "Users Table",
  },
  parameters: {
    docs: {
      description: {
        story: "Basic table with default styling and functionality.",
      },
    },
  },
};

// Table with custom header
export const WithCustomHeader = {
  render: (args: TableStoryArgs) => <Wrapper {...args} />,
  args: {
    title: "Users Table with Custom Header",
    showSelectCheckbox: true,
    topTitleRightSlot: (
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Add User
      </button>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Table with a custom header that includes an action button.",
      },
    },
  },
};

// Table with bottom slot
export const WithSlot = {
  render: (args: TableStoryArgs) => <Wrapper {...args} />,
  args: {
    title: "Users Table with Bottom Slot",
    showSelectCheckbox: true,
    titleBottomSlot: (
      <div className="flex w-full justify-between gap-2 mt-2">
        <input
          type="text"
          placeholder="Search users..."
          className="px-3 py-1 border rounded-md"
        />
        <select className="px-3 py-1 border rounded-md">
          <option value="">Filter by status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Table with additional filtering and search controls in the bottom slot.",
      },
    },
  },
};

// Table without wrapper
export const WithoutWrapper = {
  render: (args: TableStoryArgs) => <Wrapper {...args} />,
  args: {
    isWrapperRequired: false,
    title: "Table Without Wrapper",
  },
  parameters: {
    docs: {
      description: {
        story: "Table without the default wrapper, for custom integration.",
      },
    },
  },
};

// Table with custom styling
export const WithCustomStyling = {
  render: (args: TableStoryArgs) => <Wrapper {...args} />,
  args: {
    title: "Custom Styled Table",
    headerClass: "bg-blue-100 text-blue-800",
    bodyClass: "bg-white",
    rowClass: "hover:bg-gray-50",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Table with custom styling applied to the header, body, and rows.",
      },
    },
  },
};

// Table with selection
export const WithSelection = {
  render: (args: TableStoryArgs) => <Wrapper {...args} />,
  args: {
    title: "Selectable Users Table",
    showSelectCheckbox: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Table with row selection functionality enabled.",
      },
    },
  },
};
