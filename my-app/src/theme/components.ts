export const button = {
  MuiButton: {
    defaultProps: {
      variant: "contained",
      size: "large",
    },

    styleOverrides: {
      root: {
        padding: "10px 22px",
        boxShadow: "none !important",
      },
    },
  },
};

export const input = {
  MuiTextField: {
    defaultProps: {
      fullWidth: true,
    },
    styleOverrides: {
      root: {
        ".MuiOutlinedInput-notchedOutline": {
          borderColor: "#fff ",
        },
        ".MuiInputBase-input::placeholder": {
          fontSize: 14,
          color: "#EDEDED",
        },
        ".MuiInputBase-input": {
          height: "0.94em",
        },
        ".MuiInputBase-root:before": {
          content: "''",
          width: 8,
          display: "block",
          backgroundColor: "#4082FF",
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          borderRadius: "4px 0 0 4px",
          zIndex: 1,
        },
      },
    },
  },
};
export const select = {
  MuiFormLabel: {
    styleOverrides: {
      root: {
        fontSize: 16,
        color: "#EDEDED",
      },
    },
  },

  MuiSelect: {
    defaultProps: {
      fullWidth: true,
    },
    styleOverrides: {
      root: {
        ".MuiSelect-select": {
          lineHeight: "100%",
          minHeight: "0.94em !important",
          height: "0.94em !important",
        },
        ".MuiOutlinedInput-notchedOutline": {
          borderColor: "#fff ",
        },
        ".MuiSvgIcon-root": {
          color: "#fff",
        },
        "&:before": {
          content: "''",
          width: 8,
          display: "block",
          backgroundColor: "#4082FF",
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          borderRadius: "4px 0 0 4px",
          zIndex: 1,
        },
      },
    },
  },

  MuiMenu: {
    defaultProps: {
      fullWidth: true,
    },
    styleOverrides: {
      root: {
        ".MuiPaper-root": {
          backgroundColor: "#383F44 !important",
        },
      },
    },
  },
};
