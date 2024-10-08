export const palette = {
  primary: {
    main: "#2EAD9F",
    contrastText: "#fff",
    light: "#96D6CF",
  },
  secondary: {
    main: "#D94136",
  },
  text: {
    primary: "#222222",
  },
};

/** Font Sizes
  14 - subtitle2
  16 - body1
  18 - body2
  20 - h6
  22 - subTitle1
  24 - h5
**/

export const textVariants = {
  body1: {
    fontSize: "1rem",
    lineHeight: 1.5,
    letterSpacing: "normal",
  },
  body2: {
    fontSize: "1.125rem",
    lineHeight: 1.5,
    letterSpacing: "normal",
  },
  subtitle1: {
    fontSize: "1.375rem",
    lineHeight: 1.5,
    letterSpacing: "normal",
  },
  subtitle2: {
    lineHeight: 1.5,
    letterSpacing: "normal",
  },
  subHeader: {
    fontSize: "3.125rem",
    position: "relative",
    fontWeight: "bold",
    "&:after": {
      content: "' '",
      position: "absolute",
      bottom: "-0.375rem",
      left: "0.25rem",
      width: "30%",
      height: "0.25rem",
      backgroundColor: "#2EAD9F",
      borderRadius: "1rem",
    },
  },
};
