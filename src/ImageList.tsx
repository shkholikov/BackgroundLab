import React, { useEffect, useState } from "react";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, LinearProgress, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DownloadIcon from "@mui/icons-material/Download";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "./firebaseStorage";

function ImageList() {
	const arr = ["asdasd1", "asfafs2", "asdasd1", "asfafs2", "asdasd1", "asfafs2", "asdasd1", "asfafs2"];
	const [state, setState] = useState<any>([]);
	// const [imageSources, setImageSources] = useState<any>([]);
	const [dataLoaded, setDataLoaded] = useState<boolean>(false);

	useEffect(() => {
		async function fetchAllImages(): Promise<any> {
			let promiseChain: any = [];
			const forestRef = ref(storage, "web-optimized/");
			await listAll(forestRef)
				.then((result: any) => {
					if (result) {
						result.items.forEach((element: any) => {
							promiseChain.push(getDownloadURL(element));
						});
					}
				})
				.catch((error: Error) => {
					console.error(" Uh-oh, an error occurred! " + error);
				});
			const imagesSource = await Promise.all(promiseChain);
			setState(imagesSource);
			setDataLoaded(true);
		}
		fetchAllImages();
	}, []);

	return (
		<>
			{dataLoaded === true ? (
				state.map((item: any, idx: string | number) => (
					<Grid item key={idx}>
						<Card sx={{ minWidth: 300 }}>
							<CardMedia component="img" alt={"BackgroundLab-"} height="300" image={item} />
							<CardContent>
								<Typography gutterBottom variant="h6" component="div">
									BackgroundLab-{idx}
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small" variant="outlined" endIcon={<ContentCopyIcon />}>
									Share
								</Button>
								<Button size="small" variant="contained" endIcon={<DownloadIcon />}>
									Download
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))
			) : (
				<Grid item sx={{ width: "100%" }}>
					<LinearProgress />
				</Grid>
			)}
		</>
	);
}

export default ImageList;
