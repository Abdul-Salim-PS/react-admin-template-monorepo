# ileaf-ui Documentation

## Overview

**ileaf-ui** is an internal UI library designed for building admin dashboards. It provides a set of reusable components that help streamline the development process and maintain consistency across applications.

## Components

### 1. **Button**

A customizable button component for user interactions.

#### Props:

- **children**: `React.ReactNode` - The content to be displayed inside the button.
- **onClick**: `() => void` - Optional click handler for the button.
- **variant**: `"primary" | "secondary" | "danger" | "transparent" | "success"` - The visual style of the button.
- **disabled**: `boolean` - If true, the button will be disabled.
- **loading**: `boolean` - If true, a loading spinner will be displayed.
- **extraClasses**: `string` - Additional CSS classes for custom styling.
- **size**: `"sm" | "md" | "lg"` - The size of the button.
- **loaderColor**: `string` - The color of the loading spinner.

### 2. **Spinner**

A simple loading spinner component.

#### Props:

- **size**: `number` - The size of the spinner (default is 24).
- **color**: `string` - The color of the spinner (default is black).
- **className**: `string` - Additional CSS classes for custom styling.

### 3. **TextInput**

A versatile text input component that supports various styles and features.

#### Props:

- **label**: `string` - Optional label for the input.
- **variant**: `"default" | "outlined" | "filled"` - Different styles for the input.
- **inputSize**: `"sm" | "md" | "lg"` - Size of the input.
- **extraClasses**: `string` - Additional CSS classes for custom styling.
- **loading**: `boolean` - Optional loading state.
- **error**: `string` - Optional error message.
- **icon**: `React.ReactNode` - Accepts React icons or SVGs.
- **iconPosition**: `"left" | "right"` - Position of the icon.
- **iconContainerClasses**: `string` - Custom classes for the icon container.
- **isPassword**: `boolean` - Indicates if the input is a password.
- **eyeIcon**: `React.ReactNode` - Icon for showing password.
- **eyeClosedIcon**: `React.ReactNode` - Icon for hiding password.

### 4. **Profile**

A profile component that displays user information and links.

#### Props:

- **profileImg**: `string` - Profile image URL.
- **className**: `string` - Additional classes for custom styling.
- **userName**: `string` - The name of the user.
- **profileLinks**: `ProfileLink[]` - An array of links associated with the profile.

### 5. **Sidebar**

A sidebar component for navigation.

#### Props:

- **logo**: `string` - Logo URL.
- **className**: `string` - Additional classes for custom styling.
- **primaryHeader**: `string` - Optional primary header for the sidebar.
- **secondaryHeader**: `string` - Optional secondary header for the sidebar.

### 6. **Header**

A header component that includes navigation and user profile.

#### Props:

- **logo**: `string` - Logo URL.
- **className**: `string` - Additional classes for custom styling.
- **headerClass**: `string` - Classes for the header text.
- **children**: `ReactNode` - Additional content to be displayed in the header.
- **profileLinks**: `ProfileLink[]` - Links to be displayed in the profile dropdown.

### 7. **AuthLayout**

A layout component for authentication pages.

#### Props:

- **title**: `string` - The title displayed in the layout.
- **logoSrc**: `string` - The source URL for the logo image.
- **backgroundImage**: `string` - The source URL for the background image on the left.
- **backgroundColor**: `string` - The background color of the left layout.
- **children**: `React.ReactNode` - The content to be displayed in the right section.
- **headerColor**: `string` - The color of the header text.
- **leftContainerClasses**: `string` - Additional CSS classes for the left container.
- **rightContainerClasses**: `string` - Additional CSS classes for the right container.

### 8. **ConfirmModal**

A modal component for confirmation prompts.

#### Props:

- **title**: `string` - The title of the modal.
- **description**: `string` - The description of the action being confirmed.
- **children**: `React.ReactNode` - Additional content to be displayed in the modal.
- **onConfirm**: `() => void` - Function to call when the confirm button is clicked.
- **onCancel**: `() => void` - Function to call when the cancel button is clicked.
- **hideModal**: `() => void` - Function to hide the modal.
- **loading**: `boolean` - If true, indicates a loading state.

### 9. **PrimaryCard**

A card component that displays a title, description, and optional image.

#### Props:

- **title**: `string` - The title of the card.
- **description**: `string` - The description of the card.
- **link**: `string` - Optional link for the card.
- **onClick**: `() => void` - Optional click handler for the card.
- **image**: `string` - Optional image URL.
- **imageAlt**: `string` - Alt text for the image.
- **imageStyles**: `string` - Additional styles for the image.
- **cardStyles**: `string` - Additional styles for the card.
- **titleStyles**: `string` - Additional styles for the title.
- **descriptionStyles**: `string` - Additional styles for the description.
- **listItems**: `{ key: string; value: string; icon?: React.ElementType }[]` - Optional list of items to display in the card.
- **horizontal**: `boolean` - If true, displays the card in a horizontal layout.

### 10. **StatsCard**

A card component that displays statistics with an optional icon.

#### Props:

- **title**: `string` - The title of the card.
- **description**: `string` - The description of the card.
- **onClick**: `() => void` - Optional click handler for the card.
- **cardStyles**: `string` - Additional styles for the card.
- **titleStyles**: `string` - Additional styles for the title.
- **descriptionStyles**: `string` - Additional styles for the description.
- **horizontal**: `boolean` - If true, displays the card in a horizontal layout.
- **Icon**: `React.ElementType` - Optional icon to display in the card.
- **iconContainerClass**: `string` - Additional classes for the icon container.

### 11. **DataTable**

A table component that displays data in a structured format with pagination.

#### Props:

- **data**: `TData[]` - The data to be displayed in the table.
- **columns**: `ColumnDef<TData>[]` - The columns configuration for the table.
- **headerClass**: `string` - Additional classes for the header.
- **bodyClass**: `string` - Additional classes for the body.
- **rowClass**: `string` - Additional classes for each row.
- **showSelectCheckbox**: `boolean` - If true, shows a checkbox for row selection.
- **onCheckBoxSelection**: `(selectedRows: TData[]) => void` - Callback for checkbox selection.
- **metadata**: `Metadata` - Metadata for pagination.
- **onNext**: `(page: number) => void` - Callback for next page.
- **onPrev**: `(page: number) => void` - Callback for previous page.

### 12. **Pagination**

A component for navigating through pages of data.

#### Props:

- **metadata**: `Metadata` - Metadata containing total pages and current page.
- **onNext**: `(page: number) => void` - Callback for next page.
- **onPrev**: `(page: number) => void` - Callback for previous page.

## Conclusion

The **ileaf-ui** library provides a comprehensive set of components that can be used to build efficient and visually appealing admin dashboards. Each component is designed with flexibility and reusability in mind, making it easier for developers to create consistent user interfaces.
