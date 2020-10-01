import { makeStyles } from "@material-ui/core/styles";

const navbarStyle = makeStyles({
  navbarItems: {
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    fontSize: "1.2rem"
  },
  leftSideNavbar: {
    display: "flex"
  },
  navbarLogo: {
    fontFamily: "Piazzolla, serif",
    color: "#ff9900",
    justifySelf: "start",
    marginLeft: "2rem",
    marginTop: "2rem",
    fontSize: "5rem"
  },

  buttonBox: {
    marginTop: "2rem",
    marginLeft: "3rem",
    display: "flex",
    flexDirection: "row"
  },

  navbarButton: {
    width: "8rem",
    marginLeft: "1rem",
    fontSize: "1.1rem",
    color: "#6b6b6b",
    textTransform: "none",
    "&:hover": {
      color: "#a3a3a3"
    }
  },

  navbarChatroomSelection: {
    marginRight: "1rem",
    fontSize: "1.1rem",
    color: "#6b6b6b",
    textTransform: "none",
    "&:hover": {
      color: "#ff9900"
    }
  },

  navbarChatroomSelected: {
    marginRight: "1rem",
    fontSize: "1.2rem",
    color: "#ff9900",
    textTransform: "none"
  },

  navbarSignin: {
    height: "3rem",
    width: "10rem",
    marginRight: "2rem",
    marginLeft: "2rem",
    backgroundColor: "#ff9900",
    borderRadius: "500px",

    fontSize: "1.1rem",
    textTransform: "none",
    "&:hover": {
      color: "black",
      backgroundColor: "#a36200"
    }
  }
});

export default navbarStyle;
