"use client";
import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import "react-phone-number-input/style.css";

interface CountryOption {
  value: string;
  label: string;
  divider?: boolean;
}

interface CountrySelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: CountryOption[];
  disabled?: boolean;
  readOnly?: boolean;
}

export default function CountrySelect({
  value,
  onChange,
  options,
  disabled,
  readOnly,
  ...rest
}: CountrySelectProps) {
  const onChange_ = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      if (event.target.value === "ZZ") {
        event.target.value = "";
      }
      onChange(event);
    },
    [onChange]
  );

  const selectedOption = useMemo(() => {
    return getSelectedOption(options, value);
  }, [options, value]);

  // "ZZ" means "International".
  // (HTML requires each `<option/>` have some string `value`).
  return (
    <select
      {...rest}
      disabled={disabled || readOnly}
      value={value || "ZZ"}
      onChange={onChange_}
    >
      {options.map(({ value, label, divider }) => (
        <option
          key={divider ? "|" : value || "ZZ"}
          value={divider ? "|" : value || "ZZ"}
          disabled={divider ? true : false}
          style={divider ? DIVIDER_STYLE : undefined}
        >
          {label}
        </option>
      ))}
    </select>
  );
}

CountrySelect.propTypes = {
  /**
   * A two-letter country code.
   * Example: "US", "RU", etc.
   */
  value: PropTypes.string,

  /**
   * A function of `value: string`.
   * Updates the `value` property.
   */
  onChange: PropTypes.func.isRequired,

  // `<select/>` options.
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      divider: PropTypes.bool,
    })
  ).isRequired,

  // `readonly` attribute doesn't work on a `<select/>`.
  // https://github.com/catamphetamine/react-phone-number-input/issues/419#issuecomment-1764384480
  // https://www.delftstack.com/howto/html/html-select-readonly/
  // To work around that, if `readOnly: true` property is passed
  // to this component, it behaves analogous to `disabled: true`.
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
};

const DIVIDER_STYLE = {
  fontSize: "1px",
  backgroundColor: "currentColor",
  color: "inherit",
} as const;

interface CountrySelectWithIconProps
  extends Omit<CountrySelectProps, "onChange"> {
  className?: string;
  iconComponent: React.ComponentType<{
    country: string;
    label: string;
    "aria-hidden": boolean;
    aspectRatio?: number;
  }>;
  getIconAspectRatio?: (country: string) => number;
  arrowComponent?: React.ComponentType;
  unicodeFlags?: boolean;
}

export function CountrySelectWithIcon({
  value,
  options,
  className,
  iconComponent: Icon,
  getIconAspectRatio,
  arrowComponent: Arrow = DefaultArrowComponent,
  unicodeFlags,
  ...rest
}: CountrySelectWithIconProps) {
  const selectedOption = useMemo(() => {
    return getSelectedOption(options, value);
  }, [options, value]);

  return (
    <div className={classNames("PhoneInputCountry", className)}>
      <CountrySelect
        {...rest}
        value={value}
        options={options}
        className={classNames("PhoneInputCountrySelect")}
        onChange={(value) => {}} // Provide empty function to satisfy required prop
      />

      {/* Either a Unicode flag icon or an SVG flag icon. */}
      {selectedOption &&
        (unicodeFlags && value ? (
          <div className="PhoneInputCountryIconUnicode">
            {getUnicodeFlagIcon(value)}
          </div>
        ) : (
          <Icon
            aria-hidden
            country={value || ""}
            label={selectedOption.label}
            aspectRatio={unicodeFlags ? 1 : undefined}
          />
        ))}

      <Arrow />
    </div>
  );
}

CountrySelectWithIcon.propTypes = {
  // Country flag component.
  iconComponent: PropTypes.elementType,

  // Select arrow component.
  arrowComponent: PropTypes.elementType,

  // Set to `true` to render Unicode flag icons instead of SVG images.
  unicodeFlags: PropTypes.bool,
};

function DefaultArrowComponent() {
  return <div className="PhoneInputCountrySelectArrow" />;
}

function getSelectedOption(
  options: CountryOption[],
  value?: string
): CountryOption | undefined {
  for (const option of options) {
    if (!option.divider) {
      if (isSameOptionValue(option.value, value)) {
        return option;
      }
    }
  }
  return undefined;
}

function isSameOptionValue(
  value1?: string | null,
  value2?: string | null
): boolean {
  if (value1 === undefined || value1 === null) {
    return value2 === undefined || value2 === null;
  }
  return value1 === value2;
}
