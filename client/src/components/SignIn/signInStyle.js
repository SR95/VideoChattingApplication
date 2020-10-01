import { makeStyles } from "@material-ui/core/styles";

const signInStyle = makeStyles({
  containerStyle: {
    minWidth: "30vw",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    marginTop: "2rem",
    marginBottom: "4rem"
  },
  submitButton: {
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

export default signInStyle;
