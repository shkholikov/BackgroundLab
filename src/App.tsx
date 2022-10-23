import React from "react";
import { Container } from "@mui/system";
import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Link, Toolbar, Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

// 👋🏻 Say Hi 🧑🏻‍💻 Shakhzod Kholikov
function App() {
	const arr = ["asdasd1", "asfafs2", "asdasd1", "asfafs2", "asdasd1", "asfafs2", "asdasd1", "asfafs2"];
	return (
		<>
			<AppBar position="static" color="transparent">
				<Container>
					<Toolbar>
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
						<Typography variant="h3" align="center">
							Welcome to the BackgroundLab📱
						</Typography>
						<Typography variant="h4" align="center">
							Do what makes you happy🎗
						</Typography>
					</Grid>
				</Grid>
				<Grid container justifyContent="center" alignItems="center" spacing={12}>
					{arr.map((item) => (
						<Grid item>
							<Card sx={{ maxWidth: 300 }}>
								<CardMedia
									component="img"
									alt="green iguana"
									height="300"
									src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peerspace.com%2Fresources%2Fphotography-awesome-hobby%2F&psig=AOvVaw3Swbb4GBKXpyF-gLA_fYjz&ust=1666628442376000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCLjz-_Pg9voCFQAAAAAdAAAAABAJ"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
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
		</>
	);
}

export default App;
