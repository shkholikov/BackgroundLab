import React from "react";
import { Container } from "@mui/system";
import {
	AppBar,
	BottomNavigation,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	createTheme,
	Grid,
	Link,
	responsiveFontSizes,
	ThemeProvider,
	Toolbar,
	Typography
} from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
	const arr = ["asdasd1", "asfafs2", "asdasd1", "asfafs2", "asdasd1", "asfafs2", "asdasd1", "asfafs2"];

	return (
		<>
			<AppBar position="sticky" color="default">
				<Container>
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
				</Container>
			</AppBar>
			<Container>
				<Grid container justifyContent="center" alignItems="center">
					<Grid item my={"3%"}>
						<ThemeProvider theme={theme}>
							<Typography variant="h4" align="center" sx={{ fontWeight: "600" }}>
								Welcome to the BackgroundLab📱
							</Typography>
							<Typography variant="h5" align="center">
								Do what makes you happy🎗
							</Typography>
							<Typography variant="body1" align="center">
								BackgroundLab📱 is the place where I can share all my photos. Feel free to visit and download/share/like🖤
							</Typography>
						</ThemeProvider>
					</Grid>
				</Grid>
				<Grid container justifyContent="center" alignItems="center" spacing={12} mb={"5%"}>
					{arr.map((item) => (
						<Grid item>
							<Card sx={{ minWidth: 300 }}>
								<CardMedia
									component="img"
									alt="green iguana"
									height="300"
									src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peerspace.com%2Fresources%2Fphotography-awesome-hobby%2F&psig=AOvVaw3Swbb4GBKXpyF-gLA_fYjz&ust=1666628442376000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCLjz-_Pg9voCFQAAAAAdAAAAABAJ"
								/>
								<CardContent>
									<Typography gutterBottom variant="h6" component="div">
										BackgroundLab-{item}
									</Typography>
								</CardContent>
								<CardActions>
									<Button size="small">Share</Button>
									<Button size="small">Download</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
			<BottomNavigation
				showLabels
				sx={{
					backgroundColor: "#f5f5f5",
					color: "rgba(0, 0, 0, 0.87)",
					boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);"
				}}
			>
				<BottomNavigationAction sx={{ fontWeight: "500" }} label="🔗Join my Telegram Channel" value="recents" />
			</BottomNavigation>
		</>
	);
}

export default App;
