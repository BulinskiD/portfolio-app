const colors = {
  white: "#fff",
  yellow: "#FFE700",
  black: "#000",
}

const breakpoints = {
  mobile: "640px",
  tablet: "1024px",
  desktop: "1280px",
}

const columns = {
  leftSide: "8%",
  content: "78%",
  rightSide: "14%",
}

const rows = {
  navbar: "120px",
  footer: "minmax(250px, 25%)",
}

export const theme = {
  colors,
  fonts: {
    primary: "Roboto, sans-serif",
    secondary: "Orbitron, sans-serif",
  },
  spacing: {
    pagePadding: "30px",
  },
  pageDimensions: {
    ...columns,
    ...rows,
  },
  breakpoints,
  zValues: {
    flat: 0,
    upperFloor: 100,
    menu: 1000,
    logo: 1500,
  },
  layout: {
    columns: `[left-side-start start] ${columns.leftSide} [left-side-end content-start] ${columns.content} [content-end right-side-start] ${columns.rightSide} [right-side-end end]`,
    rows: `[navbar-start start] ${rows.navbar} [navbar-end content-start] 1fr [content-end footer-start] ${rows.footer} [footer-end end];`,
  },
}
