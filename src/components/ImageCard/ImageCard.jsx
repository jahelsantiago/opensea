import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { CardActionArea } from '@mui/material';
import useQuery from '../../services/useQuery';
import { StatsModal } from '../StatsModal';

export default function ImageCard({ address, id }) {

    const { data } = useQuery("https://api.opensea.io/api/v1/asset/" + address + "/" + id + "/");
    const [open, setOpen] = React.useState(false);

    if (!data) {
        return <Typography variant='h4' align='center' color="white">
            Please write an ID
        </Typography>
    }


    return (
        <>
        <StatsModal open={open} setOpen={setOpen} stats = {data.collection.stats}/>
        <Card sx={{ maxWidth: "410px", margin: "auto" }} onClick = {()=>setOpen(true)}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={data.image_url}
                    alt="green iguana"
                    sx={{
                        objectFit: "contain",
                        objectPosition: "center",
                        maxHeight: "410px",
                        maxWidth: "410px",
                    }}
                />
                <CardContent>
                    <Paper sx={{ padding: 1, marginY: 2 }}>
                        <Typography variant="h4" component="div" color={"seconday"} fontWeight="600">
                            #{data.id}
                        </Typography>
                        <Typography variant="h5" component="div" color={"primary"} fontWeight="600">
                            {data.name}
                        </Typography>
                    </Paper>
                    <Typography variant="body1" color="text.secondary" textAlign={"justify"}>
                        {data.asset_contract.description}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" textAlign={"left"} fontWeight="900">
                        Payment tokens:
                    </Typography>
                    <Typography variant="body1" color="text.secondary" textAlign={"left"}>
                        {data.collection.payment_tokens
                            .map(token => token.name)}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" textAlign={"right"}>
                        {new Date(data.asset_contract.created_date).toLocaleDateString()}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </>
    );
}
