import React from "react";
import { Container } from "@mui/system";
import { AppBar, BottomNavigation, createTheme, Grid, Link, responsiveFontSizes, ThemeProvider, Toolbar, Typography } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ImageList from "./ImageList";
import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
	return (
		<>
			<Container sx={{ position: "sticky", top: 10, bottom: 10, zIndex: "9999" }}>
				<AppBar position="sticky" sx={{ borderRadius: "50px", backgroundColor: "#f5f5f5", background: "linear-gradient(to left, #bdc3c7, #2c3e50)" }}>
					<Toolbar sx={{ flexDirection: { xs: "column", md: "row" } }}>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							BackgroundLab📱
						</Typography>
						<Typography variant="overline">
							👋🏻 Say Hi 🧑🏻‍💻{" "}
							<Link href="https://t.me/backgroundlab">
								<b>Shakhzod Kholikov</b>
							</Link>
						</Typography>
					</Toolbar>
				</AppBar>
			</Container>
			<Container>
				<Grid container justifyContent="center" alignItems="center">
					<Grid item my={"3%"}>
						<ThemeProvider theme={theme}>
							<Typography variant="h4" align="center" sx={{ fontWeight: "600", color: "#2c3e50" }}>
								Welcome to the BackgroundLab📱
							</Typography>
							<Typography variant="h5" align="center" sx={{ fontWeight: "600", color: "#2c3e50" }}>
								Do what makes you happy🎗
							</Typography>
							<Typography variant="body1" align="center" sx={{ fontWeight: "600", color: "#2c3e50" }}>
								BackgroundLab📱 is the place where I can share all my photos. Feel free to visit and download/share/like🖤
							</Typography>
						</ThemeProvider>
					</Grid>
				</Grid>
				<Grid container justifyContent="center" alignItems="center" spacing={12} mb={"5%"}>
					<ImageList />
				</Grid>
			</Container>
			<BottomNavigation
				showLabels
				sx={{
					background: "linear-gradient(to left, #bdc3c7, #2c3e50)",
					color: "rgba(0, 0, 0, 0.87)",
					boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);"
				}}
			>
				<BottomNavigationAction
					sx={{ fontWeight: "600", color: "#ffffff" }}
					label="🔗 Join my Telegram Channel"
					value="recents"
					onClick={() => {
						window.location.href = "https://t.me/backgroundlab";
					}}
				/>
			</BottomNavigation>
			<IconButton
				aria-label="fingerprint"
				color="success"
				size="large"
				sx={{ position: "fixed", bottom: "3%", right: "3%", color: "#2c3e50", zIndex: 99 }}
				onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
			>
				<ArrowUpwardIcon fontSize="inherit" />
			</IconButton>
		</>
	);
}

export default App;
